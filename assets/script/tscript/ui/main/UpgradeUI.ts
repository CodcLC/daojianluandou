import BaseUI from "../base/BaseUI";
import WXSdk from "../../wx/WXSdk";
import LevelIcon from "./LevelIcon";

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
export default class UpgradeUI extends BaseUI {


    @property(cc.Button)
    public turnbackBtn:cc.Button = null;

    @property(cc.Button)
    public showBtn:cc.Button = null;

    @property(cc.Button)
    public recoverBtn:cc.Button = null;
    
    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    titleSkins: cc.SpriteFrame[] = [];

    @property(LevelIcon)
    levelIcon: LevelIcon = null;

    @property(cc.SpriteFrame)
    iconSkins: cc.SpriteFrame[] = [];


    public onExit:Function = null;

    public onRecover:Function = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>
        {
            this.close();
            this.onExit && this.onExit();
        },this);

        this.showBtn.node.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>
        {
            WXSdk.instance.shareToAnyOne(()=>{

                this.close();
                this.onExit && this.onExit();

            },()=>{});

            
        },this);

        this.recoverBtn.node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>
        {

            WXSdk.instance.shareToAnyOne(()=>{

                this.close();
                this.onRecover && this.onRecover();

            },()=>{});

            
        },this);
    }

    // update (dt) {}

    public open()
    {
        super.open();
        WXSdk.instance.showBottomBanner("adunit-d39672ca59cf15a2");
    }

    public close()
    {
        super.close();
        WXSdk.instance.removeBanner();
    }

    public showUpgrade(levelId:number,up:boolean)
    {
        this.levelIcon.updateSkin(levelId);

        if(up)
        {
            this.showBtn.node.active = true;
            this.recoverBtn.node.active = false;
            this.title.spriteFrame = this.titleSkins[0];
        }else
        {
            this.showBtn.node.active = false;
            this.recoverBtn.node.active = true;
            this.title.spriteFrame = this.titleSkins[1];
        }

    }
}
