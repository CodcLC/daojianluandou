import PopupText from "../ui/common/PopupText";
import ResourcesPool from "./ResourcesPool";
import ResourcesManager from "./ResourcesManager";
import Knife, { KnifeType } from "../gamescene/Knife";
import GameScene from "../gamescene/GameScene";
import Mark from "../gamescene/Mark";
import Player from "../gamescene/Player";
import DataManager from "./DataManager";
import Joystick from "../gamescene/Joystick";
import Guide from "../gamescene/Guide";
import MovieClip from "../util/MovieClip";
import Barrier from "../gamescene/Barrier";
import Random from "../util/Random";
import BlackHole from "../gamescene/BlackHole";
import Item, { ItemType } from "../item/Item";


// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export enum GameStatus
{
    none = 0,
    start = 1,
    over = 2,
}

@ccclass
export default class GameManager extends cc.Component {

    private static _instance: GameManager;
    public static get instance(): GameManager {
        /*if(this._instance == null)
        {
            this._instance = new GameManager();
            this._instance.init();
        }*/
        return GameManager._instance;
    }


    @property(cc.Node)
    public canvas:cc.Node = null;

    @property(cc.Node)
    public gameScene:cc.Node = null;

    @property(cc.Node)
    public touchPlane:cc.Node = null;

    @property(cc.Prefab)
    public playerPrefab:cc.Prefab = null;


    @property(cc.Prefab)
    public knifePrefab:cc.Prefab = null;

    @property(cc.Prefab)
    public markPrefab:cc.Prefab = null;

    @property(cc.Prefab)
    public killEffectPrefab:cc.Prefab = null;

    @property(cc.Prefab)
    public blackHolePrefab:cc.Prefab = null;

    @property(Joystick)
    public joystick:Joystick = null; 

    @property(Guide)
    public guide:Guide = null; 

    @property(cc.SpriteFrame)
    public bgImgs:cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    public daoImgs:cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    public levelImgs:cc.SpriteFrame[] = [];

    @property(cc.Prefab)
    public barrierPrefabArr:cc.Prefab[] = []; 

    @property(cc.Prefab)
    public itemPrefabArr:cc.Prefab[] = []; 
    

    public gameStatus:GameStatus = GameStatus.none;


    /**
     * 玩家打开游戏后，玩了多少次游戏
     */
    public static gameTimes:number = 0;//

    /*@property(Product)
    private productList:Product[] = [];
    private productDic:{[key:number]:Product} = {};*/

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        GameManager._instance = this;
        //GameManager._instance.init();
    }

    public init()
    {
        //this.canvas = cc.find("Canvas");
        
    }

    public showPopupText(position:cc.Vec2,msg:string,size:number = 32,color:cc.Color = cc.Color.YELLOW)
    {
        var popupText:PopupText = ResourcesPool.instance.get<PopupText>(PopupText);
        
        if(popupText)
        {
            popupText.node.setParent(this.canvas);
            popupText.node.position = position;
            popupText.showText(msg,size,color);
        }else
        {
            ResourcesManager.instance.load("PopupText",(node:cc.Node)=>{
                popupText = node.getComponent(PopupText);
                popupText.node.setParent(this.canvas);
                popupText.node.position = position;
                popupText.showText(msg,size,color);
            });
        }
    }

    public showPopupMsg(position:cc.Vec2,msg:string,size:number = 32,color:cc.Color = cc.Color.YELLOW)
    {
        
    }

    /**
     * 获得玩家
     */
    public getPlayer():Player
    {
        var node:cc.Node = cc.instantiate(this.playerPrefab);
        var player = node.getComponent(Player);
        player.node.position = cc.Vec2.ZERO;
        player.node.active = true;
        return player;
    }

    /**
     * 获得飞刀
     */
    public getKnife(type:KnifeType):Knife
    {
        var knife:Knife = ResourcesPool.instance.get<Knife>(Knife);

        if(knife)
        {
            return knife;
        }

        var node:cc.Node = cc.instantiate(this.knifePrefab);
        knife = node.getComponent(Knife);
        knife.node.position = cc.Vec2.ZERO;
        knife.type = type;
        knife.node.active = true;

        return knife;
    }

    /**
     * 获得飞刀
     */
    public getMark():Mark
    {
        var node:cc.Node = cc.instantiate(this.markPrefab);
        var mark = node.getComponent(Mark);
        mark.node.position = cc.Vec2.ZERO;
        mark.node.active = true;
        return mark;
    }

    /**
     * 获得飞刀
     */
    public getKillEffect():MovieClip
    {
        var node:cc.Node = cc.instantiate(this.killEffectPrefab);
        var mc = node.getComponent(MovieClip);
        mc.node.position = cc.Vec2.ZERO;
        mc.node.active = true;
        return mc;
    }

    public getRandomBarrier(type:number):cc.Node
    {
        var node:cc.Node = null;

        if(type == 0)
        {
            node = cc.instantiate(this.barrierPrefabArr[Random.RangeInteger(0,4)]);
        }else
        {
            node = cc.instantiate(this.barrierPrefabArr[Random.RangeInteger(4,this.barrierPrefabArr.length)]);
        }

        node.position = cc.Vec2.ZERO;
        node.rotation = Random.RangeInteger(0,360);
        node.active = true;
        return node;
    }

    public getBlackHole():BlackHole
    {
        var node:cc.Node = cc.instantiate(this.blackHolePrefab);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(BlackHole);
    }


    /**
     * 获得飞刀
     */
    public getItemByType(type:ItemType):Item
    {
        var node:cc.Node = cc.instantiate(this.itemPrefabArr[type - 1]);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(Item);
    }

    /*start () {

    }*/

    // update (dt) {}
}
