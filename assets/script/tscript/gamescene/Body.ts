import Player, { PlayerStatus } from "./Player";
import Knife, { KnifeStatus } from "./Knife";
import Item, { ItemType } from "../item/Item";
import Random from "../util/Random";

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
export default class Body extends cc.Component {

    
    @property(cc.Sprite)
    public skin:cc.Sprite  = null;

    @property(cc.Sprite)
    public face:cc.Sprite  = null;

    @property(Player)
    public player:Player = null;

    @property(cc.SpriteFrame)
    public faceSFArr:cc.SpriteFrame[] = [];

    private timer:number = 0;

    // onLoad () {}

    start () {
        this.player = this.node.parent.getComponent(Player);
        //this.face.node.active = false;
        //this.face.node.active = this.player.showface;
    }

    update (dt) 
    {
        if(this.player.showface)
        {
            if(this.timer > 0)
            {
                this.timer -= dt;

                if(this.timer <= 0)
                {
                    //this.face.spriteFrame = this.faceSFArr[Random.RangeInteger(0,this.faceSFArr.length)];
                    //this.timer = Random.Range(1.5,2.5);
                    this.face.spriteFrame = this.faceSFArr[1];
                }
            }
        }
    }

    public onCollisionEnter(other:cc.Collider,self:cc.Collider)
    {
        if(this.player.status == PlayerStatus.die)
        {
            return;
        }
        
        if(other.tag == 0)
        {
        }else if(other.tag == 1)
        {
            var knife:Knife = other.getComponent(Knife);

            if(knife && knife.status == KnifeStatus.capture && knife.player && knife.player != this.player)
            {
                this.player.setDamage(knife.damage,knife.player);

                /*var pos1 = knife.node.parent.convertToWorldSpaceAR(knife.node.position);
                var pos2 = this.node.parent.convertToWorldSpaceAR(this.node.position);

                var dir:cc.Vec2 = pos1.sub(pos2).normalize();
                knife.fly(dir);*/
            }
            
        }else if(other.tag == 8)
        {
            /*var item:Item = other.getComponent(Item);
            switch(item.type)
            {
                case ItemType.fhl:
                this.player.fhlItemEffect();
                break;
                case ItemType.rocket:

                this.player.rocketItemEffect();
                
                break;
                case ItemType.magnet:

                this.player.magnetItemEffect();
                
                break;
            }

            item.destroySelf();*/

        }else
        {

        }

    }

    public updateState()
    {
        if(!this.player)
        {
            this.player = this.node.parent.getComponent(Player);
        }

        this.face.node.active = this.player.showface;
    }

    public changeFace(index:number,timer:number = 0)
    {
        this.timer = timer;
        this.face.spriteFrame = this.faceSFArr[index];
    }

}
