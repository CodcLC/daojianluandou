"use strict";
cc._RF.push(module, 'c5bf9IbcQJHtLeLpeQbul8E', 'SuccessPanel');
// script/tscript/ui/result/SuccessPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameScene_1 = require("../../gamescene/GameScene");
var BaseUI_1 = require("../base/BaseUI");
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
var SuccessPanel = /** @class */ (function (_super) {
    __extends(SuccessPanel, _super);
    function SuccessPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextLevelBtn = null;
        _this.exitBtn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    SuccessPanel.prototype.onLoad = function () { };
    SuccessPanel.prototype.start = function () {
        this.nextLevelBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            GameScene_1.default.levelMin++;
            if (GameScene_1.default.levelMin > 5) {
                GameScene_1.default.levelMin = 1;
            }
            window.main.randombg();
            //cc.director.loadScene("level" + GameScene.levelMax + "-" + GameScene.levelMin);
            cc.director.loadScene(cc.director.getScene().name);
        });
        /*this.exitBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

            cc.director.loadScene("selector");

        });*/
    };
    __decorate([
        property(cc.Button)
    ], SuccessPanel.prototype, "nextLevelBtn", void 0);
    __decorate([
        property(cc.Button)
    ], SuccessPanel.prototype, "exitBtn", void 0);
    SuccessPanel = __decorate([
        ccclass
    ], SuccessPanel);
    return SuccessPanel;
}(BaseUI_1.default));
exports.default = SuccessPanel;

cc._RF.pop();