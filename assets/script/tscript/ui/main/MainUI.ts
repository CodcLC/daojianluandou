import DuanWei from "./DuanWei";
import GameScene from "../../gamescene/GameScene";
import Player from "../../gamescene/Player";
import BaseUI from "../base/BaseUI";
import GameManager from "../../core/GameManager";
import KnifeConfigData from "../../configdata/KnifeConfigData";
import DataManager from "../../core/DataManager";
import PlayerData from "../../data/PlayerData";
import UIManager from "../UIManager";
import WXSdk from "../../wx/WXSdk";
import Random from "../../util/Random";
import PlayerController from "../../gamescene/PlayerController";
import LevelIcon from "./LevelIcon";
import { RewardType } from "./TryOutUI";

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
export default class MainUI extends BaseUI {


    public static startRightAway:boolean = false;

    @property(cc.Button)
    leftBtn: cc.Button = null;

    @property(cc.Button)
    rightBtn: cc.Button = null;

    @property(cc.Button)
    startBtn: cc.Button = null;

    @property(cc.Button)
    tryOutBtn: cc.Button = null;

    @property(cc.Button)
    addknifeBtn: cc.Button = null;

    @property(cc.SpriteFrame)
    butSkins: cc.SpriteFrame[] = [];

    @property(cc.Button)
    lookBtn: cc.Button = null;

    @property(cc.Button)
    planetSkinBtn: cc.Button = null;

    @property(LevelIcon)
    levelIcon: LevelIcon = null;

    @property(cc.Label)
    starValueTxt: cc.Label = null;

    @property(cc.Label)
    conditionTxt: cc.Label = null;

    @property(cc.Label)
    progressTxt: cc.Label = null;

    @property(cc.Node)
    playerMsg: cc.Node = null;

    //@property(GameScene)
    gameScene: GameScene = null;
    

    private btnIndex:number = 0;

    private btnNames:string[] = ["开局6把刀","开局加速","免费表情","","","",""];


    private lookVidioKfIdDic:{[key:number]:boolean} = {};


    //@property(Player)
    //player: Player = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.basePos = cc.v2(-2500,0);
    }

    start () {

        this.node.position = cc.Vec2.ZERO;

        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        //var bgImgs:cc.SpriteFrame[] = GameManager.instance.bgImgs;
        //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];


        this.gameScene.player.node.parent = this.node;

        this.updateKnifeMsg();


        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            if(this.gameScene.player.knifeId > 1)
            {
                this.gameScene.player.knifeId -= 1;
                this.gameScene.player.getComponent(PlayerController).zoomRatio = 2;
                this.gameScene.player.updateKnifesSkin();
                this.gameScene.player.changeAttackState();
                
                //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];
                this.updateKnifeMsg();
            }
            
        },this);

        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            if(this.gameScene.player.knifeId < DataManager.instance.knifeConfigDatas.length)
            {
                this.gameScene.player.knifeId += 1;
                this.gameScene.player.getComponent(PlayerController).zoomRatio = 2;
                this.gameScene.player.updateKnifesSkin();
                this.gameScene.player.changeAttackState();

                //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];

                this.updateKnifeMsg();
            }
        },this);


        this.leftBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            this.gameScene.player.changeDefenceState();
            this.gameScene.player.getComponent(PlayerController).zoomRatio = 1;
        },this);

        this.rightBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            this.gameScene.player.changeDefenceState();
            this.gameScene.player.getComponent(PlayerController).zoomRatio = 1;
        },this);

        this.leftBtn.node.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>
        {
            this.gameScene.player.changeDefenceState();
            this.gameScene.player.getComponent(PlayerController).zoomRatio = 1;
        },this);

        this.rightBtn.node.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>
        {
            this.gameScene.player.changeDefenceState();
            this.gameScene.player.getComponent(PlayerController).zoomRatio = 1;
        },this);


        this.startBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            //this.gameScene.startGame();
            this.gameScene.player.node.parent = this.gameScene.node;;
            UIManager.instance.matchingUI.open();
            this.close();
            WXSdk.instance.removeBanner();
            cc.log("open matchingui");
            //WXSdk.instance.showBanner("adunit-d39672ca59cf15a2",{left:0,top:500,width:720});

        },this);

        this.tryOutBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            let kfId:number = this.gameScene.player.knifeId;

            WXSdk.instance.showVideo("adunit-82c0e31583967848",(closeState:number)=>{

                if(closeState == 0)
                {
                    return;
                }

                //console.log("成功关闭视频 closeState ",closeState);
                this.lookVidioKfIdDic[kfId] = true;
                this.updateKnifeMsg();

            });
            

        },this);

        this.addknifeBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            //UIManager.instance.wxOpenDataUI.openFriendRankUI();

            let index:number = this.btnIndex;


            /*WXSdk.instance.showVideo("adunit-82c0e31583967848",(closeState:number)=>{

                console.log("成功关闭视频 closeState ",closeState);

            })*/

            WXSdk.instance.shareToAnyOne(()=>{

                switch(index)
                {
                    case 0:
                        this.gameScene.player.initKnife(6);
                    break;

                    case 1:
                        this.gameScene.player.rocketItemEffect();
                    break;

                    case 2:
                        this.gameScene.player.showface = true;
                    break;
                }

            },()=>{});

        },this);

        this.lookBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            UIManager.instance.wxOpenDataUI.openRankUI();
            
        },this);

        if(!WXSdk.instance.isWXPlatform())
        {
            this.lookBtn.node.active = false;
        }

        this.planetSkinBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            //UIManager.instance.wxOpenDataUI.openFriendRankUI();
            
        },this);

        this.playerMsg.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            UIManager.instance.levelMessageUI.open();
            
        },this);

        this.levelIcon.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            UIManager.instance.levelMessageUI.open();
            
        },this);


        if(WXSdk.instance.isWXPlatform())
        {
            if(WXSdk.instance.isLogin)
            {
            this.onWxLogin();
            }else
            {
                this.playerMsg.getChildByName("NameTxt").getComponent(cc.Label).string = "";
                cc.systemEvent.on("wxLogin",this.onWxLogin,this);
            }
        }
        

        var levelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
        var leveCnfdatas = DataManager.instance.levelConfigDatas;

        if(levelId == leveCnfdatas.length)
        {
            this.starValueTxt.string =  "" + DataManager.instance.getPlayerData().star;
        }else
        {
            this.starValueTxt.string =  DataManager.instance.getPlayerData().star + "/" + leveCnfdatas[levelId].stars;
        }

        this.levelIcon.updatePlayerSkin();

        this.bntFlip();

        if(MainUI.startRightAway)
        {
           // this.startBtn.node.emit(cc.Node.EventType.TOUCH_START);


           if(UIManager.instance.tryOutUI.rewardType == RewardType.none)
           {
                this.gameScene.player.node.parent = this.gameScene.node;;
                UIManager.instance.matchingUI.open();
                this.close();
           }else
           {
                UIManager.instance.tryOutUI.closeCallback = ()=>
                {
                    this.gameScene.player.node.parent = this.gameScene.node;;
                    UIManager.instance.matchingUI.open();
                    this.close();
                }
           }

           MainUI.startRightAway = false;
        }

    }

    private onWxLogin()
    {
        this.playerMsg.getChildByName("NameTxt").getComponent(cc.Label).string = WXSdk.instance.nickname;
        WXSdk.instance.getUserIcon((texture:cc.Texture2D)=>{

            var headIcon:cc.Sprite = this.playerMsg.getChildByName("Mask").getChildByName("HeadIcon").getComponent(cc.Sprite);
            headIcon.spriteFrame = new cc.SpriteFrame(texture);

        },64);

    }

    onDestroy()
    { 
        cc.systemEvent.off("wxLogin",this.onWxLogin,this);   
    }

    public bntFlip()
    {

        this.schedule(()=>{

            this.btnIndex ++;
            this.btnIndex %= 3;

            this.addknifeBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.butSkins[this.btnIndex];
            this.addknifeBtn.node.getChildByName("TitleTxt").getComponent(cc.Label).string = this.btnNames[this.btnIndex];


            this.addknifeBtn.node.position = cc.v2(-200,0);
            this.addknifeBtn.node.runAction(cc.moveTo(0.25,0,0));
        },3.6)
    }

    public selectKnife(knifeId:number)
    {
        this.gameScene.player.knifeId = knifeId;
        this.gameScene.player.updateKnifesSkin();
        this.gameScene.player.changeAttackState();
        
        this.updateKnifeMsg();
    }

    public updateKnifeMsg()
    {
        var knifeCnfData:KnifeConfigData = DataManager.instance.getKnifeConfigData(this.gameScene.player.knifeId);

        var conditionData:ConditionData = this.getConditonData(knifeCnfData);

        var playerData:PlayerData = DataManager.instance.getPlayerData();

        this.conditionTxt.string = knifeCnfData.explain;
        this.progressTxt.node.color = this.gameScene.player.body.node.color;
        this.progressTxt.string = playerData[conditionData.key] + "/" + conditionData.value;
        //this.unlockStarTxt.string = playerData.star + "/" + conditionData.stars;

        if(conditionData.key == "")
        {
            this.conditionTxt.node.active = false;
            this.progressTxt.node.active = false;

            this.startBtn.node.active = true;
            this.tryOutBtn.node.active = false;

        }else
        {
            this.conditionTxt.node.active = true;
            this.progressTxt.node.active = true;

            if(playerData[conditionData.key] >= conditionData.value)
            {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }else
            {
                this.startBtn.node.active = false;
                this.tryOutBtn.node.active = true;
            }

            /*if(playerData.star >= conditionData.stars)
            {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }else
            {
                if(playerData[conditionData.key] >= conditionData.value)
                {
                    this.startBtn.node.active = true;
                    this.tryOutBtn.node.active = false;
                }else
                {
                    this.startBtn.node.active = false;
                    this.tryOutBtn.node.active = true;
                }
            }*/
        }

        if(this.lookVidioKfIdDic[this.gameScene.player.knifeId]) //该把飞刀是看过视频的，可以激活
        {
            this.startBtn.node.active = true;
            this.tryOutBtn.node.active = false;
        }


        if(UIManager.instance.tryOutUI.rewardType == RewardType.kfskin)
        {
            if(this.gameScene.player.knifeId == UIManager.instance.tryOutUI.kfId)
            {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }
        }


    }


    private getConditonData(knifeCnfData:KnifeConfigData):ConditionData
    {

        var data:ConditionData = new ConditionData();
        data.id = knifeCnfData.id;
        data.explain = knifeCnfData.explain;
        data.stars = knifeCnfData.stars;

        for(var key in knifeCnfData)
        {
            if(key == "id" || key == "explain" || key == "stars")
            {
                continue;
            }

            if(knifeCnfData[key] != 0)
            {
                data.key = key;
                data.value = knifeCnfData[key];
                break;
            }
        }

        return data;

    }

    // update (dt) {}
}

class ConditionData
{
    public id:number = 0;
    public explain:string = "";
    public stars:number = 0;
    public key:string = "";
    public value:number = 0;

}
