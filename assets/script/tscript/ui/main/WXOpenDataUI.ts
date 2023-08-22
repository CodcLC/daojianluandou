import WXSdk from "../../wx/WXSdk";

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
export default class WXOpenDataUI extends cc.Component {

    @property(cc.Button)
    public turnbackBtn:cc.Button = null;

    @property(cc.Button)
    public shareBtn:cc.Button = null;

    @property(cc.Sprite)
    public openDataCanvasDisPlay:cc.Sprite = null;

    @property(cc.SpriteFrame)
    public shareBtnSkinArr:cc.SpriteFrame[] = []


    private shareIndex:number = 1;

    private showOpenData:boolean = false;

    private tex:cc.Texture2D = new cc.Texture2D();

    private wxSubContext:cc.WXSubContextView = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        if(!WXSdk.instance.isWXPlatform())
        {
            this.node.active = false;
            return;
        }

        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>
        {
            this.closeOpenDataField();
        },this);

        this.shareBtn.node.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>
        {
            WXSdk.instance.shareToAnyOne(()=>{},()=>{});
        },this);

        this.wxSubContext = this.getComponent(cc.WXSubContextView);

        this.openDataCanvasDisPlay = this.getComponent(cc.Sprite);
        

        //this.wxSubContext.enabled = false;
        //this.wxSubContext.updateSubContextViewport();
        this.updateOpenDataCanvas();

        if(!this.showOpenData)
        {
            this.node.active = false;
        }

        cc.systemEvent.on("shareTicketUpdate",this.onShareTicketUpdate,this);
    }

    private onShareTicketUpdate()
    {
        if(!this.showOpenData)
            return;

        if(WXSdk.instance.shareTicket != "")
        {
            this.openGroupRankUI();
        }
    }

    onDestroy()
    { 
        cc.systemEvent.off("shareTicketUpdate",this.onShareTicketUpdate,this);   
    }

    // update (dt) {}

    update(dt)
    {
        if(this.showOpenData)
        {
            this.updateOpenDataCanvas();
        }
    }

    updateOpenDataCanvas()
    {
        this.tex.initWithElement(WXSdk.instance.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.openDataCanvasDisPlay.spriteFrame.setTexture(this.tex);
        //this.openDataCanvasDisPlay.spriteFrame = new cc.SpriteFrame(this.tex);
    }

    /**
     * 显示开发数据域
     */
    public showOpenDataField()
    {
        if(!WXSdk.instance.isWXPlatform())
        {
            return;
        }

        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        this.showOpenData = true;
        this.node.active = true

        //this.wxSubContext.enabled = true;
        //(this.wxSubContext["update"] as Function)();
    }


    public openRankUI()
    {
        if(WXSdk.instance.shareTicket != "")
        {
            this.openGroupRankUI();
        }else
        {

            WXSdk.instance.getUserScoreWorldRank((data)=>{
                this.openWorldRankUI(data);
            },()=>{});

            //this.openFriendRankUI();
        }

    }

    /**
     * 打开好友排行榜
     */
    public openFriendRankUI()
    {
        if(!WXSdk.instance.isWXPlatform())
        {
            return;
        }

        this.shareIndex = 1;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];

        this.showOpenDataField();
        WXSdk.instance.wx.postMessage({name:"friend"});
    }

    /**
     * 打开群排行榜
     */
    public openGroupRankUI()
    {
        if(!WXSdk.instance.isWXPlatform())
        {
            return;
        }

        this.shareIndex = 2;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];


        this.showOpenDataField();
        WXSdk.instance.wx.postMessage({name:"group",shareTicket:WXSdk.instance.shareTicket});
    }

    /**
     * 打开世界排行榜
     */
    public openWorldRankUI(rankData:any)
    {
        if(!WXSdk.instance.isWXPlatform())
        {
            return;
        }

        this.shareIndex = 3;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];

        this.showOpenDataField();
        WXSdk.instance.wx.postMessage({name:"world",rankData:rankData});
    }

    /**
     * 关闭开放数据域
     */
    public closeOpenDataField()
    {
        if(!WXSdk.instance.isWXPlatform())
        {
            return;
        }
        this.showOpenData = false;
        this.node.active = false;

        WXSdk.instance.wx.postMessage({name:"close"});
        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        //this.wxSubContext.enabled = false;
        //(this.wxSubContext["update"] as Function)();
    }

}
