import SelectView from "./SelectView";
import TabButton from "./TabButton";
import View from "./View";
import UIManager from "../UIManager";
import SoundManager from "../../core/SoundManager";
import { SoundClipType } from "../../audio/SoundClip";

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
export default class TabSelectView extends View {

    @property(TabButton)
    private tabBtns:Array<TabButton> = [];

    @property(SelectView)
    private selevtViews:Array<SelectView> = [];

    @property(cc.Node)
    private showView:cc.Node = null;
    
    private currentView:SelectView;

    onLoad () {

        super.onLoad();

        for(var i = 0 ; i < this.tabBtns.length; i++)
        {
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{
                //SoundManager.instance.playAudioClip(SoundClipType.click);
            },this);
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_END,this.onTouchUp,this);
        }

        this.selectTab(0);
    }


    public open()
    {
        super.open();
        if(this.currentView)
        {
            this.currentView.awake();
        }
    }

    public close()
    {
        super.close();
        if(this.currentView)
        {
            this.currentView.sleep();
        }
    }

    public selectTab(index:number = -1)
    {
        for(var i = 0 ; i < this.tabBtns.length; i++)
        {

            if(i != index )
            {
                if(this.tabBtns[i].selected)
                {
                    this.tabBtns[i].selected = false;
                }
                
            }else
            {
                if(!this.tabBtns[i].selected)
                {
                    this.tabBtns[i].selected = true;

                    if(this.currentView)
                    {
                        this.currentView.sleep();
                    }
    
                    this.currentView = this.selevtViews[i];
                    this.currentView.node.setParent(this.showView);
                    this.currentView.node.position = cc.Vec2.ZERO;
                    this.currentView.awake();
                }
                
            }
        }
    }

    private onTouchUp(event:cc.Event.EventTouch)
    {
        var btnNode:cc.Node = event.currentTarget as cc.Node;
        
        var index:number = this.tabBtns.indexOf(btnNode.getComponent(TabButton));

        this.selectTab(index);
    }
    
    // update (dt) {}
}


