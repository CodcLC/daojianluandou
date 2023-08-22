import DataManager from "../../core/DataManager";

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
export default class DuanWei extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    nameTxt: cc.Label = null;

    @property(cc.Label)
    valueTxt: cc.Label = null;

    @property(cc.SpriteFrame)
    skins:cc.SpriteFrame[] = []

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.showDuanWei();
    }

    public showDuanWei()
    {
        var star:number = DataManager.instance.getPlayerData().star;

        var leveCnfdatas = DataManager.instance.levelConfigDatas;

        var index:number = 0;

        if(star >= leveCnfdatas[leveCnfdatas.length - 1].stars)
        {
            index = leveCnfdatas.length - 1; 
        }else
        {
            for(var i = 0 ; i < leveCnfdatas.length - 1; i++)
            {
                if(star >= leveCnfdatas[i].stars && star < leveCnfdatas[i + 1].stars)
                {
                    index = i;
                    break;
                }
                
            }
        }

        if(index == leveCnfdatas.length - 1)
        {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string =  "" + DataManager.instance.getPlayerData().star;
            var spriteFrame = this.skins[this.skins.length - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;

        }else
        {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string =  DataManager.instance.getPlayerData().star + "/" + leveCnfdatas[index + 1].stars;
            var spriteFrame = this.skins[leveCnfdatas[index].id - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;
        }

    }

    // update (dt) {}
}
