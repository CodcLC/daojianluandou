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
export default class RankItem extends cc.Component {

    @property(cc.Sprite)
    public mark: cc.Sprite = null;

    @property(cc.Label)
    public nameTxt: cc.Label = null;

    @property(cc.Label)
    public rankTxt: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

    }

    // update (dt) {}
}
