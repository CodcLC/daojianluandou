import LevelIcon from "./LevelIcon";
import BaseUI from "../base/BaseUI";
import DataManager from "../../core/DataManager";
import Mathf from "../../util/Mathf";
import LevelConfigData from "../../configdata/LevelConfigData";

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


export enum ContentType
{
    none = 0,
    fhl = 1,
    rocket = 2,
    magnet = 3,
    blackHole = 10,
    staticMeteor = 11,
    moveMeteor = 12,
    
    other = 100,
}

@ccclass
export default class LevelMessageUI extends BaseUI {

    @property(cc.Node)
    panel: cc.Node = null;

    @property(cc.Node)
    touchPlane: cc.Node = null;

    @property(cc.Node)
    title: cc.Node = null;

    @property(LevelIcon)
    levelIcon: LevelIcon = null;

    @property(cc.Sprite)
    contentIcon: cc.Sprite = null;

    @property(cc.Button)
    leftBtn: cc.Button = null;

    @property(cc.Button)
    rightBtn: cc.Button = null;

    @property(cc.Label)
    unlockTxt: cc.Label = null;

    @property(cc.Label)
    detailTxt: cc.Label = null;

    @property(cc.SpriteFrame)
    contentImgArr: cc.SpriteFrame[] = [];



    private contentIndex:number = 0;


    // LIFE-CYCLE CALLBACKS:

    
    onLoad () {
        this.basePos = this.node.position;

        this.scheduleOnce(()=>{
           this.close();
        },0.01)
    }

    start () {

        var contentLen = DataManager.instance.ctlevelConfigDatas.length;

        this.touchPlane.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            this.close();
        },this);

        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            this.contentIndex = Mathf.clamp(this.contentIndex - 1,0,contentLen - 1);

            this.showMsg();

        },this);

        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            this.contentIndex = Mathf.clamp(this.contentIndex + 1,0,contentLen - 1);
            this.showMsg();

        },this);

        var level = DataManager.instance.getLevel(DataManager.instance.getPlayerData().star);
        this.contentIndex = level - 1;

    }


    public showMsg()
    {
        var levelcnfdata:LevelConfigData = DataManager.instance.ctlevelConfigDatas[this.contentIndex];

        this.levelIcon.updateSkin(levelcnfdata.id,false);
        this.unlockTxt.string = `获得${levelcnfdata.stars}星解锁`;
        this.detailTxt.string = levelcnfdata.newContent;

        if(levelcnfdata.contentType == 100)
        {
            this.title.active = false;
            this.detailTxt.node.x = 110;
            this.detailTxt.node.y = -18;
        }else
        {
            this.title.active = true;
            this.detailTxt.node.x = 158;
            this.detailTxt.node.y = -43;
        }

        this.contentIcon.spriteFrame = this.contentImgArr[levelcnfdata.contentType]

    }

    // update (dt) {}

    public open()
    {
        super.open();

        this.touchPlane.active = true;

        this.panel.stopAllActions();
        this.panel.y = -250;
        this.panel.runAction(cc.moveTo(0.65,0,0).easing(cc.easeCubicActionOut()));



        this.showMsg();
    }

    public close()
    {

        this.panel.stopAllActions();

        this.touchPlane.active = false;

        //super.close();

        var seq = cc.sequence(cc.moveTo(0.65,0,-250).easing(cc.easeCubicActionOut()),cc.callFunc(()=>{
            super.close();

        },this))

        this.panel.runAction(seq)

    }
}
