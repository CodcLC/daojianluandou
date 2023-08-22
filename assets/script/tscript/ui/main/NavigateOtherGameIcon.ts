import WXSdk from "../../wx/WXSdk";

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
export default class NavigateOtherGameIcon extends cc.Component {

    @property(cc.Sprite)
    gameIcon: cc.Sprite = null;

    @property(cc.SpriteFrame)
    gameIconImgArr: cc.SpriteFrame[] = [];

    public iconIndex:number = 0;

    public appIdArr:string[] = ["wx1b0de075c16e0e29"];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //"navigateToMiniProgramAppIdList": ["wx1b0de075c16e0e29"]

        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>
        {
            if(!WXSdk.instance.isWXPlatform())
                return;

            WXSdk.instance.wx.navigateToMiniProgram({
                appId: this.appIdArr[this.iconIndex],
                //path: 'page/index/index?from=xqfd',
                extraData: {
                    from: 'xqfd_dzz'
                },
                //envVersion: 'release',//release develop trial
                success(res) {
                    // 打开成功
                }
            });

        },this);


        this.schedule(()=>{

            this.iconIndex ++;
            this.iconIndex %= this.gameIconImgArr.length;

            this.gameIcon.spriteFrame = this.gameIconImgArr[this.iconIndex];
           
            //this.addknifeBtn.node.position = cc.v2(-200,0);
            //this.addknifeBtn.node.runAction(cc.moveTo(0.25,0,0));
        },3.2);

    }

    // update (dt) {}
}
