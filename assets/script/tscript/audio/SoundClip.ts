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


export enum SoundClipType
{
    none = 0,
    kill1,
    kill2,
    kill3,
    kill4,
    kill5,
    kill6,
    kill7,
    killMam,
    pick,
    kfhit,
    dida,
    blackhole,
    victory,
    fail,

}

@ccclass
export default class SoundClip extends cc.Component {

    @property(cc.String)
    public clipName:string = "";

    @property({type:cc.Enum(SoundClipType)})
    public type:SoundClipType = SoundClipType.none;

    @property({type:cc.AudioClip})
    public clip:cc.AudioClip = null;
     
}