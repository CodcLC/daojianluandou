import Player, { PlayerStatus } from "./Player";
import Knife, { KnifeType, KnifeStatus } from "./Knife";
import Random from "../util/Random";
import GameManager from "../core/GameManager";
import CommonUils from "../util/CommonUils";
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
export default class KnifePool extends cc.Component {

    
    @property(Player)
    public player:Player = null;

    public radius:number = 125;

    public rotaSpeed = 180;

    private rotaAngle:number = 0;

    public knifes:Array<Knife> = []; 


    private limitNum:number = 25;
    private baseNum:number = 100;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.knifes = this.getComponentsInChildren(Knife);

        //this.initKnife(this.initCount);

        
        this.changeDefenceState();

        /*cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{

            switch(event.keyCode)
            {
                case cc.macro.KEY.a:

                this.refresh();

                break;

                case cc.macro.KEY.s:

                this.refresh2();

                break;

                case cc.macro.KEY.d:


                cc.log("场景飞刀数",this.player.gameScene.knifeArr.length);

                
                break;
            }
        })*/


    }

     update (dt) 
     {
        this.rotaAngle -= dt * this.rotaSpeed * this.player.rotaSpeedUp;
        this.rotaAngle %= 360;
        this.node.angle = this.rotaAngle;
     }

     public initKnife(count:number)
     {

        var tempKnife:Array<Knife> = this.knifes.slice();

        for(var i = 0 ; i < tempKnife.length ; i++)
        {
            this.removeKnife(tempKnife[i]);
            tempKnife[i].destroySelf();
        }

        for(var i = 0 ; i < count ; i++)
        {
            var knife:Knife = GameManager.instance.getKnife(KnifeType.normal);
            this.addKnife(knife);
        }
     }

     public addKnife(knife:Knife)
     {
         if(this.knifes.indexOf(knife) != -1)
         {
             return;
         }


        if(knife.node.parent != null)
        {
            var worldPos:cc.Vec2 = knife.node.parent.convertToWorldSpaceAR(knife.node.position);
            var relaPos:cc.Vec2 = this.node.convertToNodeSpaceAR(worldPos);
            knife.node.position = relaPos;
        }

        knife.node.parent = this.node;
        knife.player = this.player;
        knife.status = KnifeStatus.capture;
        knife.setSkin(this.player.knifeId);
        this.knifes.push(knife);

        if(!this.player.isAI)
        {
            if(this.knifes.length > DataManager.instance.getPlayerData().knives)
            {
                DataManager.instance.getPlayerData().knives = this.knifes.length;
                DataManager.instance.saveLevelData();
            }
        }


        if(this.player.status == PlayerStatus.defence)
        {
            this.changeDefenceState();
        }
        else if(this.player.status == PlayerStatus.attack)
        {
            this.changeAttackState();
        }

     }

     public updateKnifesSkin(knifeId:number)
     {
         var len:number = this.knifes.length;
         for(var i = 0 ; i < len ; i++)
         {
             this.knifes[i].setSkin(knifeId);
         }
     }

     public removeKnife(knife:Knife)
     {
        var index:number = this.knifes.indexOf(knife);

        if(index != -1)
        {
            this.knifes.splice(index,1);
            
            if(this.player.status == PlayerStatus.defence)
            {
                this.changeDefenceState();
            }
            else if(this.player.status == PlayerStatus.attack)
            {
                this.changeAttackState();
            }

        }
     }

     public disposeAllKnifes()
     {
         var arr:Array<Knife> = this.knifes.slice();
         for(var i = 0 ; i < arr.length ; i++)
         {

            var dir:cc.Vec2 = cc.v2(Random.Range(-1,1),Random.Range(-1,1)).normalize();
             arr[i].fly(dir);
         }
     }

     /**
      * 切换防御状态
      */
     public changeDefenceState()
     {
        var len:number = this.knifes.length;

        var angle:number = 2 * Math.PI / len;
        var eulerAngle = 360 / len;


        //var t = 1 / len;

        /*if(t > 0.1)
        {
            t > 0.1
        }

        if(t <= 0.001)
        {
            t = 0.001;
        }

        this.schedule(()=>{

            var knife:Knife = this.knifes[i];
            if(!knife)
                return;

            knife.node.stopAllActions();

            var pos:cc.Vec2 = cc.v2(this.radius * Math.cos(i * angle),this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(90 - i * eulerAngle);
            //knife.setScale(Random.Range(1,4));

            i++;
        },t,len - 1)*/

        //this.radius = 160 + Math.floor(len/10) * 30;

        var rd:number = len < 10 ? 10 : len;

        var radiusScale = len / this.baseNum + (1 - this.limitNum /this.baseNum);

        this.radius = (133.9308 * radiusScale + rd * 5.3564);
        this.rotaSpeed = 144;
        this.player.size = (115 + len * 1.94) / 115;
        this.player.pickRadius = this.radius;

        for(var i = 0 ; i < len ; i++)
        {
            var knife:Knife = this.knifes[i];

            knife.node.stopAllActions();

            if(len >= this.limitNum)
            {
                knife.node.scale = ((i % 5 + 1) / 5 * 0.6 + 0.75);  
            }else
            {
                //knife.node.scale = 1;
                knife.node.scale = radiusScale;
            }

            var pos:cc.Vec2 = cc.v2(this.radius * Math.cos(i * angle),this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(90 - i * eulerAngle);
            //knife.setScale(Random.Range(1,4));

        }
     }

     /**
      * 切换进攻状态
      */
     public changeAttackState()
     {
        var len:number = this.knifes.length;

        var angle:number = 2 * Math.PI / len;
        var eulerAngle = 360 / len;

        //this.radius = 160 + Math.floor(len/10) * 30;

        var rd:number = len < 10 ? 10 : len;

        var radiusScale = len / this.baseNum + (1 - this.limitNum /this.baseNum);

        this.radius = 133.9308 * radiusScale + rd * 5.3564 + 90  * radiusScale;
        this.rotaSpeed = 160;
        this.player.size = (115 + len * 1.94) / 115;
        this.player.pickRadius = this.radius;

        for(var i = 0 ; i < len ; i++)
        {
            var knife:Knife = this.knifes[i];

            knife.node.stopAllActions();

            if(len >= this.limitNum)
            {
                knife.node.scale = ((i % 5 + 1) / 5 * 0.6 + 0.75);
            }else
            {
                //knife.node.scale = 1;
                knife.node.scale = radiusScale;
            }

            var pos:cc.Vec2 = cc.v2(this.radius * Math.cos(i * angle),this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(180  - i * eulerAngle);

        }
     }
}
