import UIManager from "../UIManager";
import { SoundClipType } from "../../audio/SoundClip";
import SoundManager from "../../core/SoundManager";

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

@ccclass

export default class View extends cc.Component {


     onLoad () {

        var closeBtn = this.node.getChildByName("Win").getChildByName("CloseBtn");
    
        if(closeBtn)
        {
            closeBtn.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{
                //SoundManager.instance.playAudioClip(SoundClipType.click);
                UIManager.instance.closeView(this.node.name,false);
            },this);
        }


        //var obj{hh:"dd",fg:5645}

     }

    /*start () {

    }*/

    // update (dt) {}

    public open()
    {
        this.node.active = true;
    }

    public close()
    {
        this.node.x = 2500;
        this.node.active = false;
    }

    public destroySelf()
    {
        this.node.destroy();
    }

}
