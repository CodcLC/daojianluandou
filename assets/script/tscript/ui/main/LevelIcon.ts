import DataManager from "../../core/DataManager";
import GameManager from "../../core/GameManager";
import LevelConfigData from "../../configdata/LevelConfigData";

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
export default class LevelIcon extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Node)
    uplevel: cc.Node = null;

    @property(cc.Node)
    upelementArr: cc.Node[] = [];


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    public updatePlayerSkin()
    {
        var levelId = DataManager.instance.getLevelId(DataManager.instance.getPlayerData().star);
        this.updateSkin(levelId);
    }

    public updateSkin(levelId:number,showup:boolean = true)
    {

        var leveCnfdatas:LevelConfigData = DataManager.instance.levelConfigDatas[levelId - 1];

        var spriteFrame = GameManager.instance.levelImgs[leveCnfdatas.level - 1];
        this.icon.spriteFrame = spriteFrame;
        this.icon.node.width = spriteFrame.getRect().width;
        this.icon.node.height = spriteFrame.getRect().height;

        if(!showup)
        {
            this.uplevel.active = false;
            return;
        }

        if(leveCnfdatas.uplevel == 0)
        {
            this.uplevel.active = false;
        }else
        {
            this.uplevel.active = true;

            for(var i = 0 ; i < this.upelementArr.length; i++)
            {
                if(i < leveCnfdatas.uplevel)
                {
                    this.upelementArr[i].getChildByName("upstate").active = true;
                }else
                {
                    this.upelementArr[i].getChildByName("upstate").active = false;
                }
            }

        }

    }

    // update (dt) {}
}
