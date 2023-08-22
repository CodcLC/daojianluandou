import BaseUI from "../base/BaseUI";
import WXSdk from "../../wx/WXSdk";
import Clock from "../../util/Clock";
import GameManager from "../../core/GameManager";
import DataManager from "../../core/DataManager";
import Random from "../../util/Random";
import UIManager from "../UIManager";
import GameScene from "../../gamescene/GameScene";
import MainUI from "./MainUI";
import Mathf from "../../util/Mathf";

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


export enum RewardType
{
    none = 0,
    face = 1,
    kf6 = 2,
    kfskin = 3,
    rocket = 4,

}

@ccclass
export default class TryOutUI extends BaseUI {


    @property({type:cc.Enum(RewardType)})
    public rewardType:RewardType = RewardType.none;

    @property({type:cc.Enum(RewardType)})
    public otherRewardType:RewardType = RewardType.none;

    @property(cc.Button)
    turnbackBtn: cc.Button = null;

    @property(cc.Button)
    useBtn: cc.Button = null;

    @property(cc.Label)
    rewardTxt1: cc.Label = null;

    @property(cc.Label)
    rewardTxt2: cc.Label = null;

    @property(cc.Label)
    useTxt: cc.Label = null;

    @property(cc.Sprite)
    levelImg: cc.Sprite = null;

    @property(cc.Sprite)
    rewardIcon: cc.Sprite = null;

    @property(cc.Sprite)
    lightImg: cc.Sprite = null;

    @property(cc.Sprite)
    cdImg: cc.Sprite = null;

    @property(cc.SpriteFrame)
    public cdImgArr:cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    public faceSF:cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    public kf6SF:cc.SpriteFrame = null;

    public kfId:number = 0;

    private gameScene:GameScene = null;

    public closeCallback:Function = null;

    private lookingVidio:boolean = false;

    // LIFE-CYCLE CALLBACKS:

     public onLoad () 
     {
        this.basePos = this.node.position;

        this.checkReward();
     }

    start () {
        
        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        this.lightImg.node.runAction(cc.rotateBy(3.6,360).repeatForever());

        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            this.close();

        },this);

        this.useBtn.node.on(cc.Node.EventType.TOUCH_END,(event)=>
        {
            //WXSdk.instance.shareToAnyOne(()=>{},()=>{});

            this.lookingVidio = true;

            WXSdk.instance.showVideo(MainUI.startRightAway ? "adunit-82c0e31583967848" : "adunit-4fce270de78f93a0",
            (closeState:number)=>{

                this.lookingVidio = false;

                if(closeState == 0)
                {
                    return;
                }

                switch(this.rewardType)
                {
                    case RewardType.face:
                        DataManager.instance.getPlayerData().todayUseFace = true;
                        DataManager.instance.saveLevelData();
                        this.gameScene.player.showface = true;
                    break;

                    case RewardType.kf6:
                        this.gameScene.player.initKnife(6);
                    break;

                    case RewardType.kfskin:

                        UIManager.instance.mainUI.selectKnife(this.kfId);

                    break;

                }

                switch(this.otherRewardType)
                {

                    case RewardType.kf6:
                        this.gameScene.player.initKnife(6);
                    break;

                    case RewardType.rocket:

                        this.gameScene.player.rocketItemEffect();

                    break;

                }

                this.close();

            });


            
            
        },this);

    }

     private checkReward()
     {
        this.rewardType = RewardType.none;

        var gameTimes:number = GameManager.gameTimes;

        if(gameTimes == 1)
        {
            if(!DataManager.instance.getPlayerData().todayUseFace)
            {
                this.rewardType = RewardType.face;
            }else
            {
                this.rewardType = RewardType.kf6;
            }
        }else if(gameTimes > 1)
        {
            if(gameTimes % 2 == 1)
            {
                if(gameTimes % 4 == 3)
                {
                    //奇
                    if(!DataManager.instance.getPlayerData().todayUseFace)
                    {
                        this.rewardType = RewardType.face;
                    }else
                    {
                        this.rewardType = RewardType.kf6;
                    }
                }else
                {
                    //偶
                    this.rewardType = RewardType.kfskin;
                }
            }
        }

        //this.rewardType = RewardType.face;

        if(this.rewardType == RewardType.none)
        {
            this.close();
        }else
        {
            switch(this.rewardType)
            {
                case RewardType.face:
                    this.rewardIcon.spriteFrame = this.faceSF;
                    this.rewardTxt1.string = "免费今日表情";
                    this.otherRewardType = RewardType.kf6;
                break;

                case RewardType.kf6:
                    this.rewardIcon.spriteFrame = this.kf6SF;
                    this.rewardTxt1.string = "开局6把刀";
                    this.otherRewardType = RewardType.rocket;
                break;

                case RewardType.kfskin:
                    //this.rewardIcon.spriteFrame = this;

                    this.kfId = Random.RangeInteger(11,26);
                    this.rewardIcon.spriteFrame = GameManager.instance.daoImgs[this.kfId - 1];

                    this.rewardTxt1.string = "免费试用飞刀皮肤";
                    this.otherRewardType = Mathf.probability(0.5) ? RewardType.kf6 : RewardType.rocket;
                    
                break;

            }

            switch(this.otherRewardType)
            {

                case RewardType.kf6:
                    this.rewardTxt2.string = "附赠：开局6把刀";
                break;

                case RewardType.rocket:
                    this.rewardTxt2.string = "附赠：开局加速";
                break;
            }

            this.rewardIcon.node.width = this.rewardIcon.spriteFrame.getRect().width;
            this.rewardIcon.node.height = this.rewardIcon.spriteFrame.getRect().height;


            this.scheduleOnce(()=>{
                this.open();
            },0.05)
            
        }


     }

    public close()
    {
        super.close();
        this.cdImg.getComponent(Clock).Stop();

        if(!this.lookingVidio)
        {
            this.closeCallback && this.closeCallback();
        }
        
        WXSdk.instance.removeBanner();
    }


    public open()
    {
        super.open();

        WXSdk.instance.showBottomBanner("adunit-d39672ca59cf15a2");

        var clock:Clock = this.cdImg.getComponent(Clock);
        clock.Reset();
        clock.timeLength = 6;
        clock.Play((s,m,h,str,t)=>{

            if(t <= 5)
            {
                this.cdImg.spriteFrame = this.cdImgArr[t - 1];
            }

        },()=>{

            this.close();
            
        })
    }

}
