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
export default class WXRank extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

   



        private shareTime:number = 0;

        private shareCnt:number = 0;

        onBtnShareTest(){
            let date = new Date();
            this.shareTime = Date.now()/1000
            let _this = this;
            let callfunc = function(){
                let curTime = Date.now()/1000;
                if(curTime - _this.shareTime <= 3){
                    if(_this.shareCnt >= 1)
                        _this.onShowTip("短时间内,不要分享同一个群");
                    else
                        _this.onShowTip("请换个群试试哦~~");
                    
                    _this.shareCnt++;
                }else{
                    _this.onShowTip("恭喜,获得xxx奖励");
                    _this.shareCnt = 0;
                }
            }
            window["wx"].shareAppMessage({title:"世界唯一被猪统治的岛，被遗忘却幸福",imageUrl:"https://pigwander-1258819150.file.myqcloud.com/share/share_2.png",query:""})
            this.scheduleOnce(callfunc,0.1);
        }
        //系统提示
        onShowTip(msg){
            /*this.sysMessage.active = true;
            this.sysMessage.width = String(msg).length * 40
            let labMsg = this.sysMessage.getChildByName("lab_msg")
            labMsg.getComponent(cc.Label).string = msg
            let _this = this;
            let callfunc = function(){
    
                _this.sysMessage.active = false;
            }
            this.scheduleOnce(callfunc,1);*/
        }

}
