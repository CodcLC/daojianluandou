import Player, { PlayerStatus } from "./Player";
import GameManager from "../core/GameManager";
import GameScene from "./GameScene";
import Vector2 from "../util/Vector2";
import Quake from "../util/Quake";

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
export default class CameraFollow extends cc.Component {


    @property(cc.Camera)
    public camera:cc.Camera = null;

    public static instance:CameraFollow = null;

    public player:Player = null;


    @property(Quake)
    private quake:Quake = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        CameraFollow.instance = this;
        //this.quake = this.camera.getComponent(Quake);
    }

    start () {
        this.player = GameManager.instance.gameScene.getComponent(GameScene).player;
    }

     update (dt) 
     {
         /**********摄像机平滑跟随 */


        if(this.player && this.player.status != PlayerStatus.die)
        {
            var pos:cc.Vec2 =  Vector2.lerp(this.camera.node.position,this.player.node.position,dt * 25.0);

            //pos = this.player.node.position;

            /*if(pos.x < -this.halfSize.width)
            {
                pos.x = -this.halfSize.width;
            }else if(pos.x > this.halfSize.width)
            {
                pos.x = this.halfSize.width;
            }

            if(pos.y < -this.halfSize.height)
            {
                pos.y = -this.halfSize.height;
            }else if(pos.y > this.halfSize.height)
            {
                pos.y = this.halfSize.height;
            }*/

            this.camera.node.position = pos;

            //cc.Camera.main.node.position = this.player.node.position;
        }
     }


     public shake(time:number = 0)
     {
         this.quake.shake(time);
     }
}
