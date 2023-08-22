import View from "../base/View";

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
export default class FailPanel extends View {

    @property(cc.Button)
    replayBtn: cc.Button = null;

    @property(cc.Button)
    exitBtn: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

        this.replayBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
			 window.main.randombg();
            cc.director.loadScene(cc.director.getScene().name);

        });

        this.exitBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

            cc.director.loadScene("selector");

        });

    }

    // update (dt) {}
}
