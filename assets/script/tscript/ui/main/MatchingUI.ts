import BaseUI from "../base/BaseUI";
import Random from "../../util/Random";
import GameManager from "../../core/GameManager";
import GameScene from "../../gamescene/GameScene";
import ResourcesManager from "../../core/ResourcesManager";
import DataManager from "../../core/DataManager";
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
export default class MatchingUI extends BaseUI {

    @property(cc.Node)
    otherUsers: cc.Node[] = [];

    @property(cc.Node)
    dotArr: cc.Node[] = [];

    @property
    public radius:number = 220;

    
    private gameSceme:GameScene = null;

    // LIFE-CYCLE CALLBACKS:
    

    // onLoad () {}

    start () {

        this.gameSceme = GameManager.instance.gameScene.getComponent(GameScene);

        var angle:number = 2 * Math.PI / this.otherUsers.length;

        var idArr = [];

        for(var i = 1 ; i < this.otherUsers.length ; i++)
        {
            let node:cc.Node = this.otherUsers[i];
            node.active = false;
        }

        for(var i = 1 ; i <= 50 ; i++)
        {
            idArr.push(i);
        }


        this.scheduleOnce(()=>
        {

            if(WXSdk.instance.isWXPlatform())
            {

                if(WXSdk.instance.isLogin)
                {
                    this.onWxLogin();
                }else
                {
                    cc.systemEvent.on("wxLogin",this.onWxLogin,this);
                }
            }

            for(var i = 1 ; i < this.otherUsers.length ; i++)
            {
                let node:cc.Node = this.otherUsers[i];
                node.active = false;

                let id:number = this.gameSceme.aiNameIndexArr[i - 1];


                ResourcesManager.instance.load(`headIcon/${id}`,(spriteFrame:cc.SpriteFrame)=>{

                    if(spriteFrame)
                    {
                        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }

                    node.getChildByName("NameTxt").getComponent(cc.Label).string = DataManager.instance.nameConfigDatas[id].name;
                    
                },cc.SpriteFrame,false,false);

            }

        },0.1);

    }


    public open()
    {
        super.open();

        var t:number = Random.Range(2.5,4.8);

        this.scheduleOnce(()=>{

            GameManager.instance.gameScene.getComponent(GameScene).startGame();
            this.close();

        },t + 1.5);


        var n = this.otherUsers.length + Random.RangeInteger(2,8);

        var idArr:number[] = [];
        for(var i = 0 ; i < n ; i++)
        {
            idArr.push(i);
        }


        this.schedule(()=>{
            
            var index = Random.RangeInteger(0,idArr.length);
            var id:number = idArr[index];

            if(this.otherUsers[id])
            {
                this.otherUsers[id].active = true;
            }

            idArr.splice(index,1);


        },t/n,n - 1);

        for(var j = 0 ; j < this.dotArr.length; j++)
        {
            this.dotArr[j].active = false;
        }


        var i:number = 0;
        this.schedule(()=>{
  
            for(var j = 0 ; j < this.dotArr.length; j++)
            {
                this.dotArr[j].active = (j < i);
            }

            i++;
            i %= this.dotArr.length + 1;

        },0.25,20);
    }

    private onWxLogin()
    {
        this.otherUsers[0].active = false;
        
        WXSdk.instance.getUserIcon((texture:cc.Texture2D)=>{
            this.otherUsers[0].active = true;
            var headIcon:cc.Sprite = this.otherUsers[0].getChildByName("Mask").getChildByName("HeadIcon").getComponent(cc.Sprite);
            headIcon.spriteFrame = new cc.SpriteFrame(texture);
            this.otherUsers[0].getChildByName("NameTxt").getComponent(cc.Label).string = WXSdk.instance.nickname;

        },64);
    }

    onDestroy()
    { 
        cc.systemEvent.off("wxLogin",this.onWxLogin,this);   
    }

    // update (dt) {}
}
