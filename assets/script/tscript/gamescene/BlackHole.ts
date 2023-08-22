import Barrier from "./Barrier";
import Random from "../util/Random";
import GameManager, { GameStatus } from "../core/GameManager";
import GameScene from "./GameScene";
import Player, { PlayerStatus } from "./Player";
import UIManager, { LayerType } from "../ui/UIManager";
import Knife, { KnifeStatus } from "./Knife";
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

@ccclass
export default class BlackHole extends Barrier {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property(cc.Sprite)
    public skin:cc.Sprite = null;

    @property(cc.Node)
    public body:cc.Node = null;

    private cdTimer:number = 0;

    private liveTimer:number = 5;

    public appear:boolean = true;

    public moveSpeed:number = 300;

    public moveDir:cc.Vec2 = cc.Vec2.ZERO;

    public endPos:cc.Vec2 = cc.Vec2.ZERO;

    public eatCount:number = 0;

    public knifecount:number = 0;

    private circleCollider:cc.CircleCollider = null;

    private physicsCircleCollider:cc.CircleCollider = null;

    private _size: number = 1;

    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
        this.skin.node.scale = this._size;

        if(!this.circleCollider)
        {
            this.circleCollider = this.body.getComponent(cc.CircleCollider);
        } 

        this.circleCollider.radius = 100 * this._size;


        if(!this.physicsCircleCollider)
        {
            this.physicsCircleCollider = this.getComponent(cc.PhysicsCircleCollider);
        } 

        this.physicsCircleCollider.radius = 100 * this._size;
        

        //this.physicsCircleCollider.radius = 350;
        //cc.log("this.physicsCircleCollider.radius ",this.physicsCircleCollider.radius);

    }


    public start () {

        var roAction = cc.rotateBy(1,360);
        this.skin.node.runAction(roAction.repeatForever());
        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        var sceneSize:cc.Node = this.gameScene.sceneSize;
        this.endPos = cc.v2(Random.Range(-sceneSize.width/2,sceneSize.width/2),Random.Range(-sceneSize.height/2,sceneSize.height/2));
        this.moveDir = this.endPos.sub(this.node.position).normalize();

        var mark = GameManager.instance.getMark();
        mark.node.parent = UIManager.instance.getLayer(LayerType.back);
        mark.player = this.gameScene.player;
        mark.isPlayer = false;
        mark.blackHole = this;

        this.gameScene.blackHole = this;

    }

    update (dt) 
    {
    

        if(GameManager.instance.gameStatus != GameStatus.start)
            return;
        /*this.cdTimer -= dt;

        if(this.cdTimer <= 0)
        {
            this.cdTimer = Random.Range(3.5,7);

            this.endPos = this.getRandomPlayer().node.position;
            this.moveDir = this.endPos.sub(this.node.position).normalize();
        }*/
        


        var speed = this.moveSpeed * dt;

        var pos = this.node.position.add(this.moveDir.mul(speed));
        this.node.position = pos;

        if(this.endPos.sub(this.node.position).mag() < speed)
        {
            this.endPos = this.getRandomPlayer().node.position;
            this.moveDir = this.endPos.sub(this.node.position).normalize();
        }

    }


    public getRandomPlayer()
    {
        var playerArr:Array<Player> = this.gameScene.playerArr;

        var arr:Array<Player> = [];

        for(var i = 0 ; i < playerArr.length ; i++)
        {
            if(playerArr[i].status != PlayerStatus.die)
            {
                arr.push(playerArr[i]);
            }
        }

        if(arr.length == 0)
        {
            return this.gameScene.player;
        }


        return arr[Random.RangeInteger(0,arr.length)];

    }

    public eat(knife:Knife)
    {
        this.eatCount ++;
        this.size = 1 + Math.floor(this.eatCount / 6) * 0.25;
        this.knifecount ++;
        SoundManager.instance.playAudioClip(SoundClipType.blackhole);
    }

     /*update (dt) 
     {

        if(this.cdTimer > 0)
        {
            this.cdTimer -= dt;

            if(this.cdTimer <= 0)
            {
                this.liveTimer = Random.Range(3.5,10);

                var sceneSize:cc.Node = this.gameScene.sceneSize;
                this.node.position = cc.v2(Random.Range(-(sceneSize.width - 300)/2,(sceneSize.width - 300)/2),Random.Range(-(sceneSize.height - 300)/2,(sceneSize.height - 300)/2));

                var seq = cc.sequence(cc.fadeIn(2),cc.callFunc(()=>{
                    this.appear = true;
                },this));

                this.node.runAction(seq);

            }
        }


        if(this.liveTimer > 0)
        {
            this.liveTimer -= dt;

            if(this.liveTimer <= 0)
            {
                
                this.appear = false;
                var seq = cc.sequence(cc.fadeOut(2),cc.callFunc(()=>{
                    //this.appear = false;
                },this));

                this.node.runAction(seq);
                this.cdTimer = Random.Range(13,20);

            }
        }

     }*/
}
