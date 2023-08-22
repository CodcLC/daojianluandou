import Random from "../util/Random";
import GameScene from "./GameScene";
import GameManager from "../core/GameManager";

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

export enum BarrierType
{
    static,
    dynamic,
    blackhole,
}

@ccclass
export default class Barrier extends cc.Component {

    @property({type:cc.Enum(BarrierType)})
    public type:BarrierType = BarrierType.static;

    // LIFE-CYCLE CALLBACKS:

    protected gameScene:GameScene = null;

    // onLoad () {}

    public start () {

        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

        this.node.scale = 0.7;

        if(this.type == BarrierType.dynamic)
        {
            //return;
            var sceneSize:cc.Node = this.gameScene.sceneSize;

            var starPos = cc.v2(Random.Range(-sceneSize.width/2,sceneSize.width/2),Random.Range(-sceneSize.height/2,sceneSize.height/2));
            var endPos = cc.v2(Random.Range(-sceneSize.width/2,sceneSize.width/2),Random.Range(-sceneSize.height/2,sceneSize.height/2));

            var dis = endPos.sub(starPos).mag();
            var baseSpeed = Random.Range(0.5,2.5) * 60;
            var baseTimer = dis / baseSpeed;


            this.node.position = starPos;
            //baseTimer = 2.5;

            var seq = cc.sequence(cc.moveTo(baseTimer,endPos).easing(cc.easeCubicActionInOut()),cc.moveTo(baseTimer,starPos).easing(cc.easeCubicActionInOut()));
            this.node.runAction(seq.repeatForever());
        }

    }

    // update (dt) {}
}
