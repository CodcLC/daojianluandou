// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import CustomEventType from "../event/CustomEventType";
import Item, { ItemType } from "../item/Item";
import GameManager, { GameStatus } from "../core/GameManager";
import CommonUils from "../util/CommonUils";
import GameScene from "./GameScene";
import KnifePool from "./KnifePool";
import Knife, { KnifeType, KnifeStatus } from "./Knife";
import Body from "./Body";
import Random from "../util/Random";
import UIManager from "../ui/UIManager";
import DataManager from "../core/DataManager";
import Mathf from "../util/Mathf";
import SoundManager from "../core/SoundManager";
import { SoundClipType } from "../audio/SoundClip";

const {ccclass, property} = cc._decorator;


export enum PlayerStatus
{
    none = 0,
    defence = 1,
    attack = 2,
    die = 3,
}

@ccclass
export default class Player extends cc.Component {

    public static colorArr:Array<cc.Color> = [
        new cc.Color(255,152,96),//橙
        new cc.Color(45,185,251),//蓝
        new cc.Color(123,87,240),//紫
        new cc.Color(61,230,146),//绿
        new cc.Color(245,135,189),//粉
        new cc.Color(253,253,122)//黄
    ];

    @property(KnifePool)
    public knifePool:KnifePool = null;

    @property(cc.Label)
    public nameTxt:cc.Label = null;
	
	 @property(cc.EditBox )
    public nameexitTxt:cc.EditBox  = null;
	

    @property()
    public isAI:boolean = false;

    @property(Body)
    public body:Body = null;

    @property(cc.Node)
    public circle:cc.Node = null;

    @property(cc.Node)
    public tail:cc.Node = null;

    @property(cc.SpriteFrame)
    public skins:cc.SpriteFrame[] = [];

    public radius:number = 0;

    public gameScene:GameScene = null;
    

    public moveDir:cc.Vec2 = cc.Vec2.ZERO;

    public moveSpeed:number = 550;

    private halfSize:cc.Size = cc.Size.ZERO;

    public hp:number = 10;

    public status:PlayerStatus  = PlayerStatus.defence;

    public knifeId:number = 1;

    public killCount:number = 0;

    public showface:boolean = false;


    private circleCollider:cc.CircleCollider = null;

    private physicsCircleCollider:cc.CircleCollider = null;


    private speedBufTime = 0;

    private fhlBufTime = 0;

    private magnetBufTime = 0;

    public moveSpeedUp = 1;

    public rotaSpeedUp = 1;

    public circleRange = 1;


    /**
     * 仇家
     */
    public killer:Player = null;

    public rank:number = 1;

    private baseScale:number = 1;

    private _size: number = 1;
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
        this.body.node.scale = this.baseScale * this._size;

        /*if(!this.circleCollider)
        {
            this.circleCollider = this.getComponent(cc.CircleCollider);
        } 

        this.circleCollider.radius = 200 * this._size * this.circleRange;*/


        if(!this.physicsCircleCollider)
        {
            this.physicsCircleCollider = this.getComponent(cc.PhysicsCircleCollider);
        } 

        this.physicsCircleCollider.radius = 75 * this._size;

    }

    private _pickRadius: number;
    public get pickRadius(): number {
        return this._pickRadius;
    }
    public set pickRadius(value: number) {
        this._pickRadius = value;

        if(!this.circleCollider)
        {
            this.circleCollider = this.getComponent(cc.CircleCollider);
        } 

        this.circleCollider.radius = this._pickRadius * this.circleRange;

    }

    private _skin: number = 1;
    public get skin(): number {
        return this._skin;
    }
    public set skin(value: number) {

        this._skin = Mathf.clamp(value,1,8);
        this.body.skin.spriteFrame = this.skins[this._skin - 1];
    }

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

       this.gameScene = this.node.parent.getComponent(GameScene);
       this.baseScale = this.body.node.scale;
       this.radius = this.body.getComponent(cc.CircleCollider).radius;
       //this.body = this.getComponentInChildren(Body);
       //this.body.node.color = new cc.Color(Random.Range(0,255),Random.Range(0,255),Random.Range(0,255));

       //var index:number = Random.RangeInteger(0,Player.colorArr.length);
       //this.colorId = index + 1;

       //this.body.node.color = Player.colorArr[index];
		
		
		//
		
    }

    start () {

        //var nameArr = ["龙隼","飞哥","efsl","拉啊啦","何欢","项少龙","说书","we11","小胖子"];
        //var nameArr = DataManager.instance.nameConfigDatas;

        //this.nameTxt.string = nameArr[Random.RangeInteger(0,nameArr.length)].name;
        if(!this.isAI)
        {
            //this.circle.active = true;
        }

		
		var nn =  cc.sys.localStorage.getItem("playname");
			
			if( nn== "" || nn==null || nn== undefined  )
			{
				nn = "小李飞刀";
				cc.sys.localStorage.setItem("playname",nn);
			}
			if(this.nameexitTxt )
			{
				this.nameexitTxt.string = nn;
			}
		
		
    }
	
	
	namechange()
	{
		if(this.nameexitTxt )
			{
		
			var nn = this.nameexitTxt.string;
			
			if( nn!= ""  )
			{
					
				cc.sys.localStorage.setItem("playname",nn);
			}
			this.setName(nn);
		}
		
	}

    public onGameStart()
    {
        if(!this.isAI)
        {
            this.circle.active = true;
        }

        if(this.speedBufTime > 0)
        {
            this.tail.active = true;
        }

        this.body.updateState();
		
		
		if(this.nameexitTxt )
		{
			this.nameTxt.node.active = true;
			this.nameexitTxt.node.active = false;
		}
			
    }


    public getName():string
    {
        return this.nameTxt.string;
    }

    public onCollisionEnter(other:cc.Collider,self:cc.Collider)
    {
        
        if(this.status == PlayerStatus.die)
        {
            return;
        }
        
        if(other.tag == 0)
        {
        }else if(other.tag == 1)
        {
            var knife:Knife = other.getComponent(Knife);

            //cc.log("碰撞到了 other ",other,knife);

            if(knife && knife.status == KnifeStatus.normal)
            {
                this.captureKnife(knife);
            }
            
        }else if(other.tag == 8)
        {
            var item:Item = other.getComponent(Item);
            switch(item.type)
            {
                case ItemType.fhl:
                this.fhlItemEffect();
                break;
                case ItemType.rocket:

                this.rocketItemEffect();
                
                break;
                case ItemType.magnet:

                this.magnetItemEffect();
                
                break;
            }

            item.destroySelf();

        }else
        {

        }

    }

    /**
     * 类似unity 的OnCollisionEnter OnTriggerEnter的结合
     * @param concact 
     * @param selfCollider 
     * @param otherColliser 
     */
    public onBeginContact(concact:cc.PhysicsContact,selfCollider:cc.Collider,otherColliser:cc.Collider)
    {
        //cc.log("刚体发生碰撞了",selfCollider.name);

        var knife:Knife = otherColliser.getComponent(Knife);

        if(knife && knife.status == KnifeStatus.normal)
        {
            this.captureKnife(knife);
        }
    }

     update (dt) {

        if(GameManager.instance.gameStatus == GameStatus.none)
        {
            return;
        }
        
        if(this.speedBufTime > 0)
        {
            this.speedBufTime -= dt;
            if(this.speedBufTime <= 0)
            {
                this.speedBufTime = 0;
                this.moveSpeedUp = 1;
                this.tail.active = false;
            }
        }

        if(this.fhlBufTime > 0)
        {
            this.fhlBufTime -= dt;
            if(this.fhlBufTime <= 0)
            {
                this.fhlBufTime = 0;
                this.rotaSpeedUp = 1;
            }
        }

        if(this.magnetBufTime > 0)
        {
            this.magnetBufTime -= dt;
            if(this.magnetBufTime <= 0)
            {
                this.magnetBufTime = 0;
                this.circleRange = 1;
                this.size = this.size;
            }
        }


        this.halfSize.width = (this.gameScene.sceneSize.width - 2 * this.radius * this.size) / 2 ;
        this.halfSize.height = (this.gameScene.sceneSize.height - 2 * this.radius * this.size) / 2 ;

        var pos:cc.Vec2 = this.node.position.add(this.moveDir.mul(this.getMoveSpeed() * dt));

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

     public getMoveSpeed():number
     {
         return this.moveSpeed * this.moveSpeedUp;
     }

     public moveToTarget(targetPos:cc.Vec2)
     {
         this.moveDir = targetPos.sub(this.node.position).normalize();
     }

     public stopMove()
     {
         this.moveDir = cc.Vec2.ZERO;
     }

     public captureKnife(knife:Knife)
     {
         if(!this.isAI)
         {
            SoundManager.instance.playAudioClip(SoundClipType.pick);
         }

         this.knifePool.addKnife(knife);
         this.gameScene.removeKnife(knife);
     }

     public changeDefenceState()
     {
         if(this.status != PlayerStatus.defence)
         {
            this.status = PlayerStatus.defence;
            this.knifePool.changeDefenceState();
            this.changeFace(0);
         }
     }

     public changeAttackState()
     {

        if(this.status != PlayerStatus.attack)
        {
            this.status = PlayerStatus.attack;
            this.knifePool.changeAttackState();
            this.changeFace(1);
        }
        
     }
     
     public initKnife(count:number)
     {
         this.knifePool.initKnife(count);
     }

     public randomKnifeSkin()
     {
        this.knifeId = Random.RangeInteger(1,DataManager.instance.knifeConfigDatas.length + 1);
        //this.colorId = Random.RangeInteger(1,7);
        this.updateKnifesSkin();
     }

     public setColor(color:cc.Color)
     {
        this.body.node.color = color;
        this.circle.color = color;
     }

     public setName(name:string)
     {
        this.nameTxt.string = name;

     }

     public fhlItemEffect()
     {
         this.fhlBufTime = 10;
         this.rotaSpeedUp = 2;
     }

     public rocketItemEffect()
     {
         this.speedBufTime = 10;
         this.moveSpeedUp = 1.5;

         if(GameManager.instance.gameStatus == GameStatus.start)
         {
            this.tail.active = true;
         }

     }

     public magnetItemEffect()
     {
         this.magnetBufTime = 5;
         this.circleRange = 1.5;
         this.size = this.size;
     }

     public updateKnifesSkin()
     {
         this.knifePool.updateKnifesSkin(this.knifeId);
     }


     public setDamage(value:number,otherPlayer:Player)
     {
         if(this.status == PlayerStatus.die)
         {
             return;
         }

         this.hp -= value;

         if(this.hp <= 0)
         {
             this.hp = 0;
             this.status = PlayerStatus.die;
             this.knifePool.disposeAllKnifes();

             //this.node.destroy();

             this.killer = otherPlayer;

             this.node.active = false;

             this.gameScene.playerKilled(otherPlayer,this);
         }


     }

    public changeFace(index:number,timer:number = 0)
    {

        if(!this.showface)
            return;

        this.body.changeFace(index,timer);
    }


}
