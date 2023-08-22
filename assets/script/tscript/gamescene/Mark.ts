import Player, { PlayerStatus } from "./Player";
import BlackHole from "./BlackHole";

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
export default class Mark extends cc.Component {

    public player:Player = null;

    public targetPlayer:Player = null;

    public blackHole:BlackHole = null;

    public isPlayer:boolean = true;

    private halfSize:cc.Size = cc.Size.ZERO;


    /**
     * 视野范围
     */
    private viewSize:cc.Size = cc.Size.ZERO;


    private winRadius:number;

    private targetNode:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        if(this.isPlayer)
        {
            this.getComponent(cc.Sprite).spriteFrame = this.targetPlayer.body.skin.spriteFrame;
            this.targetNode = this.targetPlayer.node;
        }else
        {
            this.getComponent(cc.Sprite).spriteFrame = this.blackHole.skin.spriteFrame;
            this.targetNode = this.blackHole.node;
        }
        
        this.halfSize.width = (cc.winSize.width - this.node.width) / 2;
        this.halfSize.height = (cc.winSize.height - this.node.height) / 2;

        this.winRadius = cc.v2(this.halfSize.width,this.halfSize.height).mag();

    }

     update (dt) 
     {

        if(this.isPlayer)
        {
            if(!this.targetPlayer || !this.targetPlayer.isValid || this.targetPlayer.status == PlayerStatus.die)
            {
                this.node.destroy();
                return;
            }
            
        }else
        {
           //--------------------------------------------- 
        }
        

        if(!this.player || !this.player.isValid)
        {
            return;
        }

        var ratio = 1 / cc.Camera.main.zoomRatio;

        this.viewSize.width = (cc.winSize.width + 160) * ratio / 2 ;
        this.viewSize.height = (cc.winSize.height + 160) * ratio / 2;

         var dir = this.targetNode.position.sub(this.player.node.position);

         if((dir.x > -this.viewSize.width && dir.x < this.viewSize.width) && (dir.y > -this.viewSize.height && dir.y < this.viewSize.height))
         {
             //对手在视野范围内，隐藏标志
             this.node.opacity = 0;
             return;
         }

         this.node.opacity = 255;


         var angle:number = Math.atan2(dir.y,dir.x);

         var pos = cc.v2(this.winRadius * Math.cos(angle),this.winRadius * Math.sin(angle));

         //var pos = dir;

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
