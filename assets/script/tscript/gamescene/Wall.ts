import GameManager, { GameStatus } from "../core/GameManager";
import GameScene from "./GameScene";
import Vector2 from "../util/Vector2";
import DataManager from "../core/DataManager";

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
export default class Wall extends cc.Component {

    @property(cc.Node)
    left: cc.Node = null;

    @property(cc.Node)
    right: cc.Node = null;

    @property(cc.Node)
    top: cc.Node = null;

    @property(cc.Node)
    down: cc.Node = null;

    @property(cc.Animation)
    promptMsgTxt:cc.Animation = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private dis:number = 1000;

    private speed:number = 30;

    public shrinkTime:number = 0;

    private isShrink:boolean = false;


    private gameScene:GameScene;

    start () {

        //this.left.runAction(cc.moveTo(1.2,-800,0));
        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);
        this.promptMsgTxt.node.active = false;
    }


    private zoom:cc.Vec2 = cc.v2(0.5,0);
    
     update (dt) 
     {
        //return;
        if(this.shrinkTime > 0)
        {
            this.shrinkTime -= dt;

            this.isShrink = true;

            if(this.left.x < -(this.dis + this.left.width / 2))
            {
                this.left.x += this.speed * dt;
                this.gameScene.sceneSize.width -= 2 * this.speed * dt;
            }

            if(this.right.x > (this.dis + this.right.width / 2))
            {
                this.right.x -= this.speed * dt;
            }

            if(this.top.y > (this.dis + this.top.height / 2))
            {
                this.top.y -= this.speed * dt;
                this.gameScene.sceneSize.height -= 2 * this.speed * dt;
            }

            if(this.down.y < -(this.dis + this.down.height / 2))
            {
                this.down.y += this.speed * dt;
            }

            
            

        }else
        {
            if(this.isShrink)
            {
                this.isShrink = false;

                this.left.getComponent(cc.Animation).stop("splash");
                this.right.getComponent(cc.Animation).stop("splash");
                this.top.getComponent(cc.Animation).stop("splash");
                this.down.getComponent(cc.Animation).stop("splash");
                this.left.getComponent(cc.Animation).setCurrentTime(0,"splash");
                this.right.getComponent(cc.Animation).setCurrentTime(0,"splash");
                this.top.getComponent(cc.Animation).setCurrentTime(0,"splash");
                this.down.getComponent(cc.Animation).setCurrentTime(0,"splash");

            }
        }
     }

     public shrink()
     {
        this.node.stopAllActions();

        this.promptMsgTxt.node.active = true;
        this.promptMsgTxt.play();


        this.scheduleOnce(()=>{

            this.shrinkTime = 15;

            this.left.getComponent(cc.Animation).play("splash");
            this.right.getComponent(cc.Animation).play("splash");
            this.top.getComponent(cc.Animation).play("splash");
            this.down.getComponent(cc.Animation).play("splash");

        },10);

     }

}
