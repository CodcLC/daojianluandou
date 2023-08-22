import Player, { PlayerStatus } from "./Player";
import GameManager, { GameStatus } from "../core/GameManager";
import Vector2 from "../util/Vector2";
import Mathf from "../util/Mathf";
import Joystick from "./Joystick";
import CommonUils from "../util/CommonUils";

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
export default class PlayerController extends cc.Component {

    
    public player:Player = null;

    private touchPos:cc.Vec2 = cc.Vec2.ZERO;


    private baseZoom:number = 1;
    
    private targetZoom:number = 1;

    public zoomRatio:number = 1;

    private joyStick:Joystick = null;
    

    //private currentZoomVec:cc.Vec2 = cc.Vec2.ZERO;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //this.currentZoomVec.x = cc.Camera.main.zoomRatio;
        this.baseZoom = cc.Camera.main.zoomRatio;
        this.targetZoom = cc.Camera.main.zoomRatio;

        this.player = this.getComponent(Player);

        this.joyStick = GameManager.instance.joystick;

        //cc.log("lerp",Mathf.lerp(0.5,1,0.5));

        if(this.player.isAI)
        {
            return;
        }


        var touchPlane:cc.Node = GameManager.instance.touchPlane;

        touchPlane.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>
        {

            if(!this.player || this.player.status == PlayerStatus.die)
            {
                return;
            }
            this.touchPos = event.getLocation();
            this.player.changeAttackState();

            if(GameManager.instance.gameStatus == GameStatus.start)
            {
                this.zoomRatio = 0.75;

                this.joyStick.node.position = cc.v2(event.getLocation().x - cc.winSize.width * 0.5,event.getLocation().y - cc.winSize.height * 0.5);
                this.joyStick.show();
            }

            this.player.circle.active = false;
            
        });

        touchPlane.on(cc.Node.EventType.TOUCH_MOVE,(event:cc.Event.EventTouch)=>
        {
            
            if(GameManager.instance.gameStatus != GameStatus.start)
            {
                this.player.moveDir = cc.Vec2.ZERO;
                return;
            }

            if(!this.player || this.player.status == PlayerStatus.die)
            {
                return;
            }

            var currentPos = event.getLocation();
            this.player.moveDir = currentPos.sub(this.touchPos).normalize();
            this.joyStick.cursorTo(this.player.moveDir);
            //this.player.moveDir = event.getDelta().normalize();
        });

        touchPlane.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>
        {
            if(!this.player || this.player.status == PlayerStatus.die)
            {
                return;
            }

            this.player.moveDir = cc.Vec2.ZERO;
            this.player.changeDefenceState();
            this.zoomRatio = 1;

            if(GameManager.instance.gameStatus == GameStatus.start)
            {
                this.player.circle.active = true;
            }

            this.joyStick.hidden();

        });

        touchPlane.on(cc.Node.EventType.TOUCH_CANCEL,(event:cc.Event.EventTouch)=>
        {
            if(!this.player || this.player.status == PlayerStatus.die)
            {
                return;
            }

            this.player.moveDir = cc.Vec2.ZERO;
            this.player.changeDefenceState();
            this.zoomRatio = 1;
            if(GameManager.instance.gameStatus == GameStatus.start)
            {
                this.player.circle.active = true;
            }

            this.joyStick.hidden();

        });


    }

    update (dt) 
    {
        //cc.Camera.main.zoomRatio = Mathf.lerp(cc.Camera.main.zoomRatio,this.targetZoom,dt);
        //var vec2:cc.Vec2 = Vector2.lerp(this.currentZoomVec,this.targetZoomVec,dt * 5);
        //cc.Camera.main.zoomRatio = vec2.x;

        if(this.player.isAI)
        {
           return;   
        }

        this.targetZoom = (this.baseZoom / this.player.size) * this.zoomRatio;
        cc.Camera.main.zoomRatio = Mathf.lerp(cc.Camera.main.zoomRatio,this.targetZoom,dt * 5);

    }
}
