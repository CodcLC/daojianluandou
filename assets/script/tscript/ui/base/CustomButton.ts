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

export enum CBState
{
    normal = 0,
    pressed,
    hover,
    disabled,
}

@ccclass
export default class CustomButton extends cc.Component {

    /**
     * 点击时的播放声音
     */
    @property({type:cc.Enum(SoundClipType)})
    public clickSound:SoundClipType = SoundClipType.none;

    /**
     * 正常状态
     */
    @property(cc.SpriteFrame)
    public normal:cc.SpriteFrame = null;

    /**
     *  按下状态
     */
    @property(cc.SpriteFrame)
    public pressed:cc.SpriteFrame = null;

    /**
     * 划过状态
     */
    @property(cc.SpriteFrame)
    public hover:cc.SpriteFrame = null;

    /**
     * 无效状态
     */
    @property(cc.SpriteFrame)
    public disabled:cc.SpriteFrame = null;

  
    private _sprite: cc.Sprite;
    public get sprite(): cc.Sprite {

        if(!this._sprite)
        {
            this._sprite = this.getComponent(cc.Sprite);
        }

        return this._sprite;
    }

    private _state: CBState = CBState.normal;
    public get state(): CBState {
        return this._state;
    }
    public set state(value: CBState) {

        if(this.sprite && this[CBState[value]])
        {
            this.sprite.spriteFrame = this[CBState[value]];
        }

        this._state = value;
    }

    onLoad () 
    {
        this.init();
    }

    /*start () {

    }*/

    private init()
    {
        this.state = CBState.normal;

        this.node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;
            SoundManager.instance.playAudioClip(this.clickSound);
            this.state = CBState.pressed;
        },this);

        this.node.on(cc.Node.EventType.TOUCH_END,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;

            this.state = CBState.normal;
        },this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;

            this.state = CBState.normal;
        },this);

        
        this.node.on(cc.Node.EventType.MOUSE_ENTER,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;

            this.state = CBState.hover;
        },this);

        this.node.on(cc.Node.EventType.MOUSE_UP,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;

            this.state = CBState.hover;
        },this);

        this.node.on(cc.Node.EventType.MOUSE_LEAVE,(event:cc.Event.EventTouch)=>{
            if(this.state == CBState.disabled)
                return;

            this.state = CBState.normal;
        },this);

    }

    // update (dt) {}
}
