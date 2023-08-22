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
export default class PopupMsg extends cc.Component {

    @property(cc.Label)
    private label:cc.Label = null;

    start () {

        var compCallback = cc.callFunc(()=>{
            this.destroySelf();
        },this)


    
        var seq = cc.sequence(cc.spawn(cc.moveBy(1.0,0,150),cc.fadeTo(1.0,25)),compCallback);
        this.node.runAction(seq);
    }


    public showText(msg:string,size:number,color:cc.Color)
    {
        this.label.string = msg;
        this.label.fontSize = size;
        this.label.node.color = color;
    }

    public destroySelf()
    {
        this.node.destroy();
    }
}
