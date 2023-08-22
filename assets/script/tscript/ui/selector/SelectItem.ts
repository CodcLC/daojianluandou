import GameScene from "../../gamescene/GameScene";

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
export default class SelectItem extends cc.Component {

    //@property(cc.Label)
    //titleTxt: cc.Label = null;

    //@property(cc.String)
    //public levelMax:number = 0;

    //@property(cc.String)
    //public levelMix:number = 0;

    start () {

        /*this.titleTxt.string = this.levelMax + "-" + this.levelMix;

        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            GameScene.levelMax = this.levelMax;
            GameScene.levelMin = this.levelMix;
            cc.director.loadScene("level" + this.levelMax + "-" + this.levelMix);
        });*/

    }

    // update (dt) {}
}
