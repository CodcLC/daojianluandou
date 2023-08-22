import Player, { PlayerStatus } from "./Player";
import Vector2 from "../util/Vector2";
import UIManager, { ViewName, LayerType } from "../ui/UIManager";
import CustomEventType from "../event/CustomEventType";
import ResourcesManager from "../core/ResourcesManager";;
import GameManager, { GameStatus } from "../core/GameManager";
import Knife, { KnifeType } from "./Knife";
import Random from "../util/Random";
import Clock from "../util/Clock";
import DataManager from "../core/DataManager";
import WXSdk from "../wx/WXSdk";
import Wall from "./Wall";
import MovieClip from "../util/MovieClip";
import BlackHole from "./BlackHole";
import Item, { ItemType } from "../item/Item";
import LevelConfigData from "../configdata/LevelConfigData";
import PlayerAI, { PlayerAILevel } from "./PlayerAI";
import CameraFollow from "./CameraFollow";
import SoundManager from "../core/SoundManager";
import { SoundClipType } from "../audio/SoundClip";
import { BgSoundClipType } from "../audio/BgSoundClip";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    public static levelMax:number = 1;

    public static levelMin:number = 1;

    @property(cc.Node)
    public sceneSize: cc.Node = null;

    @property(Player)
    public player:Player = null;

    @property(Clock)
    public clock:Clock = null;

    @property(cc.Label)
    public cdTxt:cc.Label = null;

    @property(Wall)
    public wall:Wall = null;

    @property(cc.Sprite)
    public bg:cc.Sprite = null;

    private halfSize:cc.Size = cc.Size.ZERO;

    private knifeNum:number = 25;

    public knifeArr:Array<Knife> = [];

    public playerArr:Array<Player> = [];

    private rank:number = 8;

    private skinIndexArr:number[] = [];

    private nameIndexArr:number[] = [];

    private aiPlayerCount:number = 7;

    public aiNameIndexArr:number[] = [];


    private levelConfigData:LevelConfigData = null;

    public blackHole:BlackHole = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {


        cc.director.getCollisionManager().enabled = true;

        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.Vec2.ZERO;

        //this.node
        //this.player = this.getComponentInChildren(Player);
        //this.player.gameScene = this;

        this.halfSize.width = (this.sceneSize.width - cc.winSize.width) / 2 ;
        this.halfSize.height = (this.sceneSize.height - cc.winSize.height) / 2 ;

        this.player.initKnife(3); //初始化3把刀
        this.player.showface = DataManager.instance.getPlayerData().todayUseFace;

    }

    start () {

        SoundManager.instance.PlayBGSound(BgSoundClipType.main);

        this.clock.node.active = false;
        this.cdTxt.node.active = false;
        
        this.playerArr.push(this.player);

        this.player.skin = 1;
        

        if(WXSdk.instance.isWXPlatform())
        {
            if(WXSdk.instance.isLogin)
            {
               this.onWxLogin();
            }else
            {
                this.player.setName("");
                cc.systemEvent.on("wxLogin",this.onWxLogin,this);
            }
            

        }else
        {
			
			var nn =  cc.sys.localStorage.getItem("playname");
			
			if( nn== "" || nn==null || nn== undefined  )
			{
				nn = "小李飞刀";
				cc.sys.localStorage.setItem("playname",nn);
			}
			
            this.player.setName(nn);
        }


        for(var i = 0; i < this.aiPlayerCount ; i++)
        {
            this.aiNameIndexArr.push(this.getRandomNameIndex());
        }


    }

    private onWxLogin()
    {
        this.player.setName(WXSdk.instance.nickname);
    }

    public startGame()
    {
        GameManager.instance.gameStatus = GameStatus.start;
        GameManager.gameTimes ++;

        DataManager.instance.getPlayerData().games++;
        DataManager.instance.savePlayerData();
        

        var star:number = DataManager.instance.getPlayerData().star;

        var levelId = DataManager.instance.getLevelId(star);

        this.levelConfigData = DataManager.instance.levelConfigDatas[levelId - 1];

        //cc.log("levelConfigData",this.levelConfigData);

        var leveCnfdatas = DataManager.instance.levelConfigDatas;

        if(levelId <= 5)
        {
            //当玩家还处于第一阶段时 显示导航
            GameManager.instance.guide.node.active = true;
        }else
        {
            GameManager.instance.guide.node.active = false;
        }


        this.initBarriers();
        this.initAIPlayer(this.aiPlayerCount);
        this.initKnifes(this.knifeNum);
        this.initMark();

        this.player.onGameStart();

        //var cdTxt:cc.Label = this.clock.getComponent(cc.Label);

        this.clock.node.active = true;
        this.clock.hms = 2;
        this.clock.timeLength = 2 * 60 + 31;

        var timeTxt = this.clock.getComponentInChildren(cc.Label);
        timeTxt.string = "" + this.clock.timeLength;

        this.clock.Play((s,m,h,str,t)=>
        {
            if(t == 100 || t == 70 || t == 40)
            {
                this.wall.shrink();
            }

            if(this.clock.currentCount % 25 == 0)
            {

                var otherKfCount = 0;

                if(this.blackHole)
                {
                    otherKfCount = Math.ceil(this.blackHole.knifecount / 2);
                    this.blackHole.knifecount = 0;
                }

                this.initKnifes(5 + otherKfCount);
            }

            if(this.levelConfigData.hotWheels != "")
            {
                var arr = this.levelConfigData.hotWheels.split("-");

                if(t % Number(arr[0]) == 0)
                {
                    this.initItem(Number(arr[1]),ItemType.fhl)
                }
            }

            if(this.levelConfigData.speedUp != "")
            {
                var arr = this.levelConfigData.speedUp.split("-");

                if(t % Number(arr[0]) == 0)
                {
                    this.initItem(Number(arr[1]),ItemType.rocket)
                }
            }

            if(this.levelConfigData.magnet != "")
            {
                var arr = this.levelConfigData.magnet.split("-");

                if(t % Number(arr[0]) == 0)
                {
                    this.initItem(Number(arr[1]),ItemType.magnet)
                }
            }

            if(t == 120)
            {

                if(this.levelConfigData.blackHole != 0)
                {
                    var rangeWidth = this.sceneSize.width/2 - 350;
                    var rangeHeight = this.sceneSize.height/2 - 350;

                    this.blackHole = GameManager.instance.getBlackHole();
                    this.blackHole.node.parent = this.node;
                    this.blackHole.node.position = cc.v2(Random.Range(-rangeWidth,rangeWidth),Random.Range(-rangeHeight,rangeHeight));
                }
                
            }

            timeTxt.string = `${t}`;

            if(t <= 5)
            {
                this.cdTxt.node.active = true;
                this.cdTxt.string = "" + t;
                SoundManager.instance.playAudioClip(SoundClipType.dida);
            }

            if(t == 0)
            {
                this.cdTxt.node.active = false;
            }


        },
        ()=>{
            
            this.clock.Stop();

            var arr:Array<Player> = [];

            for(var i = 0 ; i < this.playerArr.length ; i++)
            {
                if(this.playerArr[i].status != PlayerStatus.die && this.playerArr[i].rank == 1)
                {
                    arr.push(this.playerArr[i]);
                }
            }

            arr.sort((player1:Player,player2:Player):number=>
            {

                if(player1.killCount > player2.killCount)
                {
                    return -1;
                }else if(player1.killCount < player2.killCount)
                {
                    return 1;
                }else
                {
                    var len1:number = player1.knifePool.knifes.length;
                    var len2:number = player2.knifePool.knifes.length;

                    if(len1 > len2)
                    {
                        return -1;
                    }
                    
                    if(len1 < len2)
                    {
                        return 1;
                    }
                }

                return  0;
            });

            for(var i = 0 ; i < arr.length ; i++)
            {
                arr[i].rank = i + 1;
            }

            this.gameOver()
        });

        UIManager.instance.rankUI.node.active = true;
    }

    public gameOver()
    {
        GameManager.instance.gameStatus = GameStatus.over;
		console.log("game over");
        this.scheduleOnce(()=>{

            //GameManager.instance.gameStatus = GameStatus.over;

            UIManager.instance.rankUI.node.active = false;
            UIManager.instance.accountUI.open();
        },1.8);
    }

    public initBarriers()
    {

        var rangeWidth = this.sceneSize.width/2 - 350;
        var rangeHeight = this.sceneSize.height/2 - 350;

        if(this.levelConfigData.meteor != "")
        {
            var arr = this.levelConfigData.meteor.split("-");
            var count:number = Random.RangeInteger(Number(arr[0]),Number(arr[0]));

            for(var i = 0 ; i < count ; i++)
            {
                var barrier:cc.Node = GameManager.instance.getRandomBarrier(0);
                barrier.parent = this.node;
                barrier.position = cc.v2(Random.Range(-rangeWidth,rangeWidth),Random.Range(-rangeHeight,rangeHeight));
            }
        }

        if(this.levelConfigData.movMeteor != "")
        {
            var arr = this.levelConfigData.movMeteor.split("-");
            var count:number = Random.RangeInteger(Number(arr[0]),Number(arr[0]));

            for(var i = 0 ; i < count ; i++)
            {
                var barrier:cc.Node = GameManager.instance.getRandomBarrier(1);
                barrier.parent = this.node;
                barrier.position = cc.v2(Random.Range(-rangeWidth,rangeWidth),Random.Range(-rangeHeight,rangeHeight));
            }
        }
        
    }

    public initItem(count:number,itemType:ItemType = ItemType.none)
    {
        var width:number = this.sceneSize.width / 2 - 150;
        var height:number = this.sceneSize.height / 2 - 150;

        for(var i = 0; i < count ; i++)
        {
            var item:Item = null;
            
            if(itemType == ItemType.none)
            {
                item = GameManager.instance.getItemByType(Random.RangeInteger(1,4))
            }else
            {
                item = GameManager.instance.getItemByType(itemType)
            }
            
            item.node.parent = this.node;
            item.node.position = cc.v2(Random.Range(-width,width),Random.Range(-height,height));
        }
    }

    /**
     * 
     * @param count 初始化AI玩家
     */
    public initAIPlayer(count:number)
    {

        var aiLvArr:PlayerAILevel[] = [];

        for(var i = 1 ; i <= 4 ; i++)
        {
            for(var j = 0 ; j < this.levelConfigData[`ailv${i}`]; j++)
            {
                aiLvArr.push(i);
            }
        }

        for(var i = 0; i < count ; i++)
        {
            var player = GameManager.instance.getPlayer();
            player.node.parent = this.node;
            player.isAI = true;
            player.showface = Random.Range(0,10) < 3 ? true : false;
            player.getComponent(PlayerAI).aiLevel = !aiLvArr[i] ? PlayerAILevel.level1 : aiLvArr[i];
            player.onGameStart();
            player.randomKnifeSkin();
            player.getComponent(PlayerAI).onGameStart();

            var index = Random.RangeInteger(0,this.getSkinIndexArr().length);
            var skinIndex = this.getSkinIndexArr()[index];
            this.getSkinIndexArr().splice(index,1);
            
            player.skin = skinIndex;
            player.setName(DataManager.instance.nameConfigDatas[this.aiNameIndexArr[i]].name);

            this.playerArr.push(player);

            var width:number = this.sceneSize.width / 2 - 150;
            var height:number = this.sceneSize.height / 2 - 150;
            player.node.position = cc.v2(Random.Range(-width,width),Random.Range(-height,height));

        }
    }

    private getSkinIndexArr()
    {
        if(this.skinIndexArr.length == 0)
        {
            for(var i = 1 ; i <= 8; i++)
            {
                this.skinIndexArr.push(i)
            }

            var index:number = this.skinIndexArr.indexOf(this.player.skin);
            if(index != -1)
            {
                this.skinIndexArr.splice(index,1);
            }
        }

        return this.skinIndexArr;
    }

    public getRandomNameIndex():number
    {
        var index:number = Random.RangeInteger(0,this.getNameIndexArr().length);
        var nameIndex:number = this.getNameIndexArr()[index];
        this.getNameIndexArr().splice(index,1);
        //return DataManager.instance.nameConfigDatas[nameIndex].name;
        return nameIndex;
    }

    public getNameIndexArr()
    {
        if(this.nameIndexArr.length == 0)
        {
            var nameArr = DataManager.instance.nameConfigDatas;
            var len:number = 50;

            for(var i = 0 ; i < len; i++)
            {
                this.nameIndexArr.push(i)
            }
        }

        return this.nameIndexArr;
    }


    /**
     * 有玩家被击杀时
     * @param killer 击杀人
     * @param dieMan 被击杀对象
     */
    public playerKilled(killer:Player,dieMan:Player)
    {

        //cc.log(killer.getName(),"击杀了",dieMan.getName());

        killer.killCount ++;

        dieMan.rank = this.rank;
        this.rank--;

        var killEffect:MovieClip = GameManager.instance.getKillEffect();
        killEffect.node.color = dieMan.body.node.color;
        killEffect.node.parent = this.node;
        killEffect.node.position = dieMan.node.position;

        killer.changeFace(2,1.5);

        if(killer == this.player)
        {
            DataManager.instance.getPlayerData().kills ++;
            
            if(this.player.killCount == 4)
            {
                DataManager.instance.getPlayerData().kills4 ++;
            }else if(this.player.killCount == 5)
            {
                DataManager.instance.getPlayerData().kills5 ++;
            }else if(this.player.killCount == 6)
            {
                DataManager.instance.getPlayerData().kills6 ++;
            }

            DataManager.instance.savePlayerData();

        }

        //if(!killer.isAI)
        //{
            UIManager.instance.messageUI.showMessage(killer,dieMan);
        //}
        

        if(!dieMan.isAI)
        {

            WXSdk.instance.vibrateLong();//玩家自己死亡，长震动
            CameraFollow.instance.shake(1);

            this.clock.Stop();
            
            this.gameOver()
        }else
        {

            if(!killer.isAI)
            {
                WXSdk.instance.vibrateShort();//别的玩家自己死亡
                CameraFollow.instance.shake(1);
                SoundManager.instance.playAudioClip(SoundClipType.killMam);
            }
            

            var playerArr:Player[] = this.getComponentsInChildren(Player);

            var isEnd = true;

            for(var i = 0 ; i < playerArr.length ; i++)
            {

                if(!playerArr[i].node.active)
                {
                    continue;
                }

                if(playerArr[i].isAI && playerArr[i].status != PlayerStatus.die)
                {
                    isEnd = false;
                    break;
                }
            }

            if(isEnd)
            {
                this.clock.Stop();
                this.gameOver()
            }
        }

    }


    public initKnifes(count:number)
    {

        for(var i = 0 ; i < count ; i++)
        {

            var knife:Knife = GameManager.instance.getKnife(KnifeType.normal);

            var width:number = this.sceneSize.width / 2 - 150;
            var height:number = this.sceneSize.height / 2 - 150;
            knife.node.rotation = Random.Range(0,360);
            knife.node.position = cc.v2(Random.Range(-width,width),Random.Range(-height,height));

            this.addKnife(knife);
        }

    }

    public initMark()
    {

        var playerArr:Array<Player> = this.getComponentsInChildren(Player);

        for(var i = 0 ; i < playerArr.length ; i++)
        {
            var player:Player = playerArr[i];
            if(player.isAI && player.node.active)
            {
                var mark = GameManager.instance.getMark();
                //mark.node.parent = cc.Camera.main.node;
                mark.node.parent = UIManager.instance.getLayer(LayerType.back);
                mark.player = this.player;
                mark.targetPlayer = player;
            }
        }

    }


    public addKnife(knife:Knife)
    {
        if(knife.node.parent)
        {
            knife.node.parent.removeChild(knife.node);
        }
        
        this.node.addChild(knife.node,0);
        if(this.knifeArr.indexOf(knife) == -1)
        {
            this.knifeArr.push(knife);
        }

        this.node.emit("knifesChange",{});
    }

    public removeKnife(knife:Knife)
    {
        var index:number = this.knifeArr.indexOf(knife);

        if(index != -1)
        {
            this.knifeArr.splice(index,1);
        }

        this.node.emit("knifesChange",{});

    }


    /*update (dt) 
    {
        
    }*/

    onDestroy()
    { 
        cc.systemEvent.off("wxLogin",this.onWxLogin,this);   
    }
}
