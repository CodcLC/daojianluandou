import View from "../base/View";
import GameScene from "../../gamescene/GameScene";
import BaseUI from "../base/BaseUI";

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
export default class SuccessPanel extends BaseUI {

    @property(cc.Button)
    nextLevelBtn: cc.Button = null;

    @property(cc.Button)
    exitBtn: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

        this.nextLevelBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

		
            GameScene.levelMin ++;
            if(GameScene.levelMin > 5)
            {
                GameScene.levelMin = 1;
            }
			 window.main.randombg();
            //cc.director.loadScene("level" + GameScene.levelMax + "-" + GameScene.levelMin);
            cc.director.loadScene(cc.director.getScene().name);

        });

        /*this.exitBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

            cc.director.loadScene("selector");

        });*/
    }

    // update (dt) {}
}
