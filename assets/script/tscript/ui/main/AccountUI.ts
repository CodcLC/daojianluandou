import DuanWei from "./DuanWei";
import BaseUI from "../base/BaseUI";
import GameScene from "../../gamescene/GameScene";
import GameManager from "../../core/GameManager";
import Player, { PlayerStatus } from "../../gamescene/Player";
import DataManager from "../../core/DataManager";
import WXSdk from "../../wx/WXSdk";
import UIManager from "../UIManager";
import AccountRankData from "../../configdata/AccountRankData";
import LevelIcon from "./LevelIcon";
import MainUI from "./MainUI";
import Mathf from "../../util/Mathf";
import SoundManager from "../../core/SoundManager";
import { SoundClipType } from "../../audio/SoundClip";

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
export default class AccountUI extends BaseUI {

    @property(LevelIcon)
    levelIcon: LevelIcon = null;

    @property(cc.ProgressBar)
    levelProgress: cc.ProgressBar = null;

    @property(cc.Label)
    levelvalueTxt: cc.Label = null;

    @property(cc.Label)
    rankValueTxt: cc.Label = null;

    @property(cc.Label)
    killValueTxt: cc.Label = null;

    @property(cc.Label)
    totalValueTxt: cc.Label = null;

    @property(cc.Label)
    winStarTxt1: cc.Label = null;

    @property(cc.Label)
    killTxt: cc.Label = null;

    @property(cc.Label)
    winStarTxt2: cc.Label = null;

    @property(cc.Button)
    turnBack: cc.Button = null;

    @property(cc.Button)
    lookRankBtn: cc.Button = null;

    @property(cc.Button)
    huoquBtn1: cc.Button = null;

    @property(cc.Button)
    huoquBtn2: cc.Button = null;

    @property(cc.Button)
    recoverBtn: cc.Button = null;

    @property(cc.Button)
    replayBtn: cc.Button = null;

    @property(cc.Sprite)
    rankImg: cc.Sprite = null;

    @property(cc.SpriteFrame)
    numArr: cc.SpriteFrame[] = [];


    private gameScene:GameScene = null;

    private star:number = 0;

    // LIFE-CYCLE CALLBACKS:

    /*public onLoad () {
        //this.basePos = this.node.position;
    }*/

    private isInit:boolean;
    

    start () {

        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);
        

        this.turnBack.node.on(cc.Node.EventType.TOUCH_END,(event)=>{

            var lastStar = DataManager.instance.getPlayerData().star;
            var lastLevelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);

            DataManager.instance.getPlayerData().addStar(this.star);
            DataManager.instance.savePlayerData();

            WXSdk.instance.setUserRankStorage("star",DataManager.instance.getPlayerData().star);

            var levelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);

            if(levelId > lastLevelId)
            {
                this.close();
                UIManager.instance.upgradeUI.open();
                UIManager.instance.upgradeUI.showUpgrade(levelId,true);
                UIManager.instance.upgradeUI.onExit = ()=>{
                    cc.director.loadScene(cc.director.getScene().name);
                };
            }else if(levelId < lastLevelId)
            {
                this.close();
                UIManager.instance.upgradeUI.open();
                UIManager.instance.upgradeUI.showUpgrade(levelId,false);
                UIManager.instance.upgradeUI.onExit = ()=>{
                    cc.director.loadScene(cc.director.getScene().name);
                };

                UIManager.instance.upgradeUI.onRecover = ()=>{

                    DataManager.instance.getPlayerData().star = lastStar;
                    DataManager.instance.savePlayerData();
                    cc.director.loadScene(cc.director.getScene().name);
                };
            }else
            {
                cc.director.loadScene(cc.director.getScene().name);
            }
            
        });

        this.huoquBtn2.node.on(cc.Node.EventType.TOUCH_END,(event)=>{


            WXSdk.instance.showVideo("adunit-82c0e31583967848",(closeState:number)=>{

                if(closeState == 0)
                {
                    return;
                }

                var lastStar = DataManager.instance.getPlayerData().star;
                var lastLevelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
    
                DataManager.instance.getPlayerData().addStar(this.star * 3);;
                DataManager.instance.savePlayerData();
    
                WXSdk.instance.setUserRankStorage("star",DataManager.instance.getPlayerData().star);
    
                var levelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
    
    
                if(levelId > lastLevelId)
                {
                    this.close();
                    UIManager.instance.upgradeUI.open();
                    UIManager.instance.upgradeUI.showUpgrade(levelId,true);
                    UIManager.instance.upgradeUI.onExit = ()=>{
                        cc.director.loadScene(cc.director.getScene().name);
                    };
                }else if(levelId < lastLevelId)
                {
                    this.close();
                    UIManager.instance.upgradeUI.open();
                    UIManager.instance.upgradeUI.showUpgrade(levelId,false);
                    UIManager.instance.upgradeUI.onExit = ()=>{
                        cc.director.loadScene(cc.director.getScene().name);
                    };
    
                    UIManager.instance.upgradeUI.onRecover = ()=>{
    
                        DataManager.instance.getPlayerData().star = lastStar;
                        DataManager.instance.savePlayerData();
                        cc.director.loadScene(cc.director.getScene().name);
                    };
    
                }else
                {
                    cc.director.loadScene(cc.director.getScene().name);
                }

            });

        });

        this.recoverBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>{

            WXSdk.instance.showVideo("adunit-58c67892748cf639",(closeState:number)=>{

                if(closeState == 0)
                {
                    return;
                }

                cc.director.loadScene(cc.director.getScene().name);

            });

        });

        this.lookRankBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            UIManager.instance.wxOpenDataUI.openRankUI();
            
        },this);

        this.replayBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>{

            DataManager.instance.getPlayerData().addStar(this.star);
            DataManager.instance.savePlayerData();

            WXSdk.instance.setUserRankStorage("star",DataManager.instance.getPlayerData().star);

            MainUI.startRightAway = true;
            cc.director.loadScene(cc.director.getScene().name);
        });


    }

    public init()
    {
        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        if(this.gameScene.player.status == PlayerStatus.die)
        {
            DataManager.instance.getPlayerData().continueStraking = 0;

        }else
        {

            if(this.gameScene.player.rank == 1)
            {
                DataManager.instance.getPlayerData().num1 +=1;

                //cc.log("用时",this.gameScene.clock.currentCount - 1);

                if(this.gameScene.clock.currentCount - 1 > DataManager.instance.getPlayerData().timelimitnum1)
                {
                    DataManager.instance.getPlayerData().timelimitnum1 = this.gameScene.clock.currentCount - 1;
                }

            }

            DataManager.instance.getPlayerData().continueStraking ++;

            if(DataManager.instance.getPlayerData().continueStraking > DataManager.instance.getPlayerData().straking)
            {
                DataManager.instance.getPlayerData().straking = DataManager.instance.getPlayerData().continueStraking;
            }
        }

        
        this.star = 0;

        var rank:number = Mathf.clamp(this.gameScene.player.rank,1,8);


        //this.rankTxt.string = `第${rank}名`;
        this.rankImg.spriteFrame = this.numArr[rank - 1];
        this.rankImg.node.width = this.numArr[rank - 1].getRect().width;
        this.rankImg.node.height = this.numArr[rank - 1].getRect().height;

        var levelId:number = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
        var rankData:AccountRankData = DataManager.instance.accountRankCnfDatasDic[levelId][rank - 1];

        var rw:number = rankData.reward;

        this.star += rw;

        this.rankValueTxt.string = rw >= 0 ? `+${rw}` : `${rw}`;
        if(rw < 0)
        {
            this.rankValueTxt.node.color = cc.Color.RED;
        }

        var killCount:number = this.gameScene.player.killCount;

        var kr:number = 0;

        if(killCount < 2)
        {
            //------
        }else
        {
            kr = killCount - 1;
        }

        this.killTxt.string = `${killCount}`
        this.killValueTxt.string = `+${kr}`;

        this.star += kr;

        this.totalValueTxt.string = this.star >= 0 ? `+${this.star}` : `${this.star}`;


        //this.winStarTxt1.string = `+${this.star}`;
        //this.winStarTxt2.string = `+${this.star * 3}`;

        
        if(this.star < 0)
        {
            this.totalValueTxt.node.color = cc.Color.RED;

            this.recoverBtn.node.active = true;
            this.huoquBtn2.node.active = false;

            SoundManager.instance.playAudioClip(SoundClipType.fail);

        }else
        {
            this.recoverBtn.node.active = false;
            this.huoquBtn2.node.active = true;

            SoundManager.instance.playAudioClip(SoundClipType.victory);
        }

        DataManager.instance.savePlayerData();

        var levelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
        var leveCnfdatas = DataManager.instance.levelConfigDatas;

        if(levelId == leveCnfdatas.length)
        {
            this.levelvalueTxt.string =  "" + DataManager.instance.getPlayerData().star;
            this.levelProgress.progress = 1;

        }else
        {
            this.levelvalueTxt.string =  DataManager.instance.getPlayerData().star + "/" + leveCnfdatas[levelId].stars;
            this.levelProgress.progress = DataManager.instance.getPlayerData().star / leveCnfdatas[levelId].stars;
        }

        this.levelIcon.updatePlayerSkin();
        

    }

    public open()
    {
        super.open();
        this.init();

        WXSdk.instance.showBottomBanner("adunit-d39672ca59cf15a2");

        //cc.log("account open",this.node.position.toString());
    }

    public close()
    {
        super.close();
        WXSdk.instance.removeBanner();
    }


     /*update (dt) {

       
     
     }*/
}
