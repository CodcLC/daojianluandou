import PlayerData from "./data/PlayerData";
import DataManager from "./core/DataManager";
import GameScene from "./gamescene/GameScene";
import GameManager from "./core/GameManager";
import WXSdk from "./wx/WXSdk";

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
export default class Main extends cc.Component {

    @property(cc.Node)
    public canvas:cc.Node = null;

	 @property(cc.Sprite)
    public bgcion:cc.Sprite = null;
	
	 @property(cc.SpriteFrame)
    public bg1:cc.SpriteFrame = null;
	
	 @property(cc.SpriteFrame)
    public bg2:cc.SpriteFrame = null;
	
    private gameMagr:GameManager;
    // LIFE-CYCLE CALLBACKS:

     onLoad () 
     {
		window.main = this;
       cc.game.setFrameRate(60);
       this.gameMagr = this.canvas.getComponent<GameManager>(GameManager);
       this.canvas.active = false;

       DataManager.instance.loadConfigDatas(this.onloadConfigDatas);

	   this.randombg();
	   
	  
       
    }
    
    private onloadConfigDatas = function()
    {
        this.gameMagr.init();
        this.canvas.active = true;
        //SoundManager.instance.PlayBGSound(BgSoundClipType.main);
        this.loginWx();
    }.bind(this);


    private loginWx()
    {
        WXSdk.instance.login(
            "ss",
            "ss",
         ()=>{

             if(WXSdk.instance.isWXPlatform())
             {
                cc.log("微信登录成功");
                console.log("发送微信事件");
                var baseData = 
                {
                    name:"init",
                    levelConfigDatas:DataManager.instance.levelConfigDatas
                }

                WXSdk.instance.wx.postMessage(baseData); //向开发数据域发送初始数据

                cc.systemEvent.emit("wxLogin");
                WXSdk.instance.wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000
                })

             }
             
         },()=>{

            if(WXSdk.instance.isWXPlatform())
            {
                cc.log("微信登录失败");
                this.showModal();
            }
         });
    }

    private showModal()
    {
        WXSdk.instance.wx.showModal({
            title: '异常',
            showCancel:false,
            confirmText:"重试",
            content: '游戏登录失败，请重试',
            success:(res)=>
            {
                 if (res.confirm)
                {
                    this.loginWx();
                }else
                {
                    this.loginWx();
                }
            }
        });
    }

    start () {

    }

	
	randombg()
	{
		 if( Math.random()>0.5 )
	   {
		    this.bgcion.spriteFrame = this.bg2;
	   }else
	   {
		    this.bgcion.spriteFrame = this.bg1;
	   }
	}

    // update (dt) {}

    
}
