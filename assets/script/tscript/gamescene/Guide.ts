import MovieClip from "../util/MovieClip";

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
export default class Guide extends cc.Component {

    @property(cc.Label)
    msgTxt: cc.Label = null;

    @property(MovieClip)
    guideMovieClip: MovieClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.node.position = cc.Vec2.ZERO;

        this.guideMovieClip.node.active = false;

        var self = this;

        this.scheduleOnce(function(){

            self.guideMovieClip.node.active = true;

            self.scheduleOnce(function(){
                self.guideMovieClip.node.destroy();
            },5)
        },1.0);


        this.msgTxt.string = "";
        var i = 0; 
        var msgsArr:string[] = ["松开手指龟缩防御","按住屏幕移动捡刀","攻击敌人圆心"];

        this.schedule(function(){

            if(i < msgsArr.length)
            {
                self.msgTxt.string = msgsArr[i];
            }else
            {
                self.node.destroy();
            }

            i++;
        },4,3)

    }


    update (dt) 
    {

    }
}
