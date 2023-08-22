import Mathf from "../util/Mathf";
import ResourcesPool, { Recycle } from "../core/ResourcesPool";
import Player, { PlayerStatus } from "./Player";
import Random from "../util/Random";
import KnifePool from "./KnifePool";
import GameManager, { GameStatus } from "../core/GameManager";
import GameScene from "./GameScene";
import ResourcesManager from "../core/ResourcesManager";
import WXSdk from "../wx/WXSdk";
import BlackHole from "./BlackHole";
import CameraFollow from "./CameraFollow";
import SoundManager from "../core/SoundManager";
import { SoundClipType } from "../audio/SoundClip";

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

export enum KnifeType
{
    normal = 0,
    red = 1,
    green = 2,
}

export enum KnifeStatus
{
    normal = 0,
    capture = 1,
    fly = 2,
    absorb = 3,
}

@ccclass
export default class Knife extends cc.Component implements Recycle {

    @property({type:cc.Enum(KnifeType)})
    type:KnifeType = KnifeType.normal;

    @property(cc.Sprite)
    skin:cc.Sprite = null;

    public status:KnifeStatus = KnifeStatus.normal;

    public player:Player = null; 

    public damage:number = 30;

    private baseScale:number;

    private rotaSpeed = 90;
    private rotaAngle:number = 0;

    private targetAngle:number = 0;

    private targetPos:cc.Vec2 = cc.Vec2.ZERO;

    private halfSize:cc.Size = cc.Size.ZERO;

    private gameScene:GameScene;

    // LIFE-CYCLE CALLBACKS:

     onLoad () 
     {
        this.baseScale = this.node.scale;
        //this.setSkin(2,5);
     }

    start () {

        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        this.skin.node.width = this.skin.spriteFrame.getRect().width;
        this.skin.node.height = this.skin.spriteFrame.getRect().height;

        /*this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
this.schedule(()=>{
    
    this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
},2.5);*/
    }

    public setSkin(id:number)
    {
        /*ResourcesManager.instance.load(`knife/dao_${id - 1}`,(spriteFrame:cc.SpriteFrame)=>{

            if(spriteFrame)
            {
                this.skin.spriteFrame = spriteFrame;
                
                this.skin.node.width = spriteFrame.getRect().width;
                this.skin.node.height = spriteFrame.getRect().height;
                //this.skin.node.width = 500

            }

        },cc.SpriteFrame,true,false)*/

        var spriteFrame:cc.SpriteFrame = GameManager.instance.daoImgs[id-1];

        this.skin.spriteFrame = spriteFrame;
                
        this.skin.node.width = spriteFrame.getRect().width;
        this.skin.node.height = spriteFrame.getRect().height;

    }

    update (dt) 
    {
        /*var speed = dt * this.rotaSpeed;

        var dir = this.targetAngle - this.node.rotation;

        if(speed > Math.abs(dir))
        {
            this.node.rotation = this.targetAngle;
            //cc.log("dddd");
        }else
        {
            if(dir > 0)
            {
                this.node.rotation += speed;
            }else
            {
                this.node.rotation -= speed;
            }
            
        }*/

        if(this.node.parent == GameManager.instance.gameScene)
        {

            this.halfSize.width = (this.gameScene.sceneSize.width - this.node.width) / 2 ;
            this.halfSize.height = (this.gameScene.sceneSize.height - this.node.height) / 2 ;

            var pos:cc.Vec2 = this.node.position;

            if(pos.x < -this.halfSize.width)
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
            }

            this.node.position = pos;
        }
    }

    public onCollisionEnter(other:cc.Collider,self:cc.Collider)
    {

        if(other.tag == 0)
        {
        }else if(other.tag == 1)
        {
            if(this.status == KnifeStatus.capture)
            {
                var knife:Knife = other.getComponent(Knife);
            
                //cc.log("碰撞到了 other ",knife,this,knife.status,knife.status == KnifeStatus.capture,KnifeStatus.fly);

                if(knife && knife.status == KnifeStatus.capture && knife.player && knife.player != this.player)
                {

                    if(!this.player.isAI || !knife.player.isAI)
                    {
                        WXSdk.instance.vibrateShort();
                        CameraFollow.instance.shake();
                        SoundManager.instance.playAudioClip(SoundClipType.kfhit);
                    }

                    //cc.log("hit other ",knife,knife.status);
                    var dir:cc.Vec2 = this.node.position.sub(knife.node.position).normalize();

                    if(knife.player.status == PlayerStatus.attack)
                    {
                        knife.fly(dir.mul(-1));
                    }

                    if(this.player.status == PlayerStatus.attack)
                    {
                        this.fly(dir);
                    }
                    
                }
            }

        }else if(other.tag == 2)//碰到了障碍物
        {
            if(this.status == KnifeStatus.capture || this.status == KnifeStatus.fly)
            {

                if(this.player && !this.player.isAI)
                {
                    WXSdk.instance.vibrateShort();
                    CameraFollow.instance.shake();
                    SoundManager.instance.playAudioClip(SoundClipType.kfhit);
                }

                var dir:cc.Vec2 = this.node.position.sub(other.node.position).normalize();
                this.fly(dir);

            }
            
        }else if(other.tag == 5) //碰撞刀了黑洞
        {
            this.absorbed(other.node.parent.getComponent(BlackHole));
        }
        
    }

    public fly(dir:cc.Vec2 = cc.Vec2.ONE)
    {
        if(this.status == KnifeStatus.capture)
        {
            this.status = KnifeStatus.fly;
            var pool:KnifePool = this.node.parent.getComponent(KnifePool);

            if(pool)
            {
                pool.removeKnife(this);
            }
        }

        
        if(this.node.parent != GameManager.instance.gameScene)
        {
            var worldPos:cc.Vec2 = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos:cc.Vec2 = GameManager.instance.gameScene.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }

        this.node.parent = GameManager.instance.gameScene;
        this.player = null;

        this.node.stopAllActions();

        this.node.scale = 1;

        var t = Random.Range(0.65,1.0)
        var spawn = cc.spawn(cc.moveBy(t,dir.mul(Random.Range(360,540))).easing(cc.easeCubicActionOut()),cc.rotateBy(t,1080).easing(cc.easeCubicActionOut()));
        var seq = cc.sequence(spawn,cc.callFunc(()=>{

            this.status = KnifeStatus.normal;
            GameManager.instance.gameScene.getComponent(GameScene).addKnife(this);

        },this));

        this.node.runAction(seq);

    }


    public absorbed(blackhole:BlackHole)
    {
        if(!blackhole.appear)
            return;

        if(this.status == KnifeStatus.absorb)
            return;

        if(this.status == KnifeStatus.capture)
        {
            var pool:KnifePool = this.node.parent.getComponent(KnifePool);
            if(pool)
            {
                pool.removeKnife(this);
            }
        }

        this.status = KnifeStatus.absorb;

        if(this.node.parent != blackhole.node)
        {
            var worldPos:cc.Vec2 = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos:cc.Vec2 = blackhole.node.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }


        this.node.parent = blackhole.node;
        this.player = null;

        this.node.stopAllActions();

        this.node.scale = 1;

        //var dir:cc.Vec2 = cc.Vec2.ZERO.sub(cc.v2(1,0)).normalize();
        var dir:cc.Vec2 = cc.Vec2.ZERO.sub(this.node.position).normalize();

        var eulerAngle:number = 90 - Math.atan2(dir.y,dir.x) * 180/Math.PI ;

        this.node.runAction(cc.rotateTo(0.15,eulerAngle));
        //this.node.rotation = eulerAngle;

        var t = Random.Range(0.65,1.0)
        
        var spawnAction = cc.spawn(cc.moveTo(0.45,cc.Vec2.ZERO),cc.fadeTo(0.45,25),cc.scaleTo(0.45,0.25));

        var seq = cc.sequence(spawnAction,cc.callFunc(()=>{

            blackhole.eat(this);
            this.status = KnifeStatus.normal;
            GameManager.instance.gameScene.getComponent(GameScene).removeKnife(this);
            this.destroySelf();

        },this));

        this.node.runAction(seq);

        

    }


    public setRota(eulerAngle:number)
    {
        //this.targetAngle = eulerAngle;

        //this.node.stopAllActions();

        if(GameManager.instance.gameStatus == GameStatus.start)
        {
            this.node.runAction(cc.rotateTo(0.1,eulerAngle));
        }else
        {
            //this.node.rotation = eulerAngle;
            //this.node.runAction(cc.rotateTo(0.05,eulerAngle));
            this.node.runAction(cc.rotateTo(0.1,eulerAngle));
        }

        
        //this.node.rotation = eulerAngle;

    }

    public setPos(pos:cc.Vec2)
    {
        //this.targetPos = pos;

        var t =  this.node.position.sub(pos).mag() / 1000;

        //t = 0.3;
        this.node.runAction(cc.moveTo(t,pos));
        //this.node.position = pos;
    }

    public rotateTowards()
    {

    }

    public setScale(size:number)
    {

        //this.node.scale = size;
        this.node.scale = this.baseScale * size;

    }


    public getKey():string
    {
        
        //return PopupText.name;
        return "Knife";
    }

    public awake()
    {
        this.node.position = cc.Vec2.ZERO;
        this.node.active = true;
        this.node.color = cc.Color.WHITE;
        this.node.opacity = 255;
        this.node.scale = 1;
        this.status = KnifeStatus.normal;
        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);
    }
    public sleep()
    {
        this.node.stopAllActions();
        this.node.parent = null;
        this.node.active = false;
        this.status = KnifeStatus.normal;
    }

    public destroySelf()
    {
        ResourcesPool.instance.put(this,50);
    }

}
