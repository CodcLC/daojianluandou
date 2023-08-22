import BaseUI from "../base/BaseUI";
import Player from "../../gamescene/Player";
import { SoundClipType } from "../../audio/SoundClip";
import SoundManager from "../../core/SoundManager";

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
export default class MessageUI extends BaseUI {

    @property(cc.Label)
    killerNameTxt: cc.Label = null;

    @property(cc.Label)
    dieManTxt: cc.Label = null;

    @property(cc.Sprite)
    jisha: cc.Sprite = null;

    @property(cc.SpriteFrame)
    jishaArr: cc.SpriteFrame[] = [];
    

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Node)
    killAcount: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    //private killMsgArr:string[] = ["","双杀","三杀","四杀","五杀","六杀","七杀","八杀","九杀","十杀"];
    private soundClipTypes:SoundClipType[] = [
        SoundClipType.kill1,
        SoundClipType.kill1,
        SoundClipType.kill1,
        SoundClipType.kill1,
        SoundClipType.kill5,
        SoundClipType.kill6,
        SoundClipType.kill7
    ]

    //onLoad () {}

    start () {
        //var renderTexture = new cc.RenderTexture()
    }

    // update (dt) {}

    public showMessage(killer:Player,dieMan:Player)
    {
        if(killer.isAI)
        return;
        this.unscheduleAllCallbacks();

        this.killerNameTxt.string = killer.getName();
        this.dieManTxt.string = dieMan.getName();

        this.bg.node.color = killer.body.node.color;

        if(!killer.isAI)
        {
            this.killAcount.active = true;

            this.jisha.spriteFrame = this.jishaArr[killer.killCount - 1];

            SoundManager.instance.playAudioClip(this.soundClipTypes[killer.killCount - 1]);
        }else
        {
            this.killAcount.active = false;
        }

        this.open();
        this.scheduleOnce(()=>
        {
            this.close();
        },1);
    }

}
