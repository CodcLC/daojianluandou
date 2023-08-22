"use strict";
cc._RF.push(module, '38be4b5v19JL5N+84whw5uc', 'SelectItem');
// script/tscript/ui/selector/SelectItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SelectItem = /** @class */ (function (_super) {
    __extends(SelectItem, _super);
    function SelectItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //@property(cc.Label)
    //titleTxt: cc.Label = null;
    //@property(cc.String)
    //public levelMax:number = 0;
    //@property(cc.String)
    //public levelMix:number = 0;
    SelectItem.prototype.start = function () {
        /*this.titleTxt.string = this.levelMax + "-" + this.levelMix;

        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            GameScene.levelMax = this.levelMax;
            GameScene.levelMin = this.levelMix;
            cc.director.loadScene("level" + this.levelMax + "-" + this.levelMix);
        });*/
    };
    SelectItem = __decorate([
        ccclass
    ], SelectItem);
    return SelectItem;
}(cc.Component));
exports.default = SelectItem;

cc._RF.pop();