"use strict";
cc._RF.push(module, '7504bk1adBA66vY+CrfbIPm', 'FailPanel');
// script/tscript/ui/result/FailPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../base/View");
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
var FailPanel = /** @class */ (function (_super) {
    __extends(FailPanel, _super);
    function FailPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replayBtn = null;
        _this.exitBtn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    FailPanel.prototype.onLoad = function () { };
    FailPanel.prototype.start = function () {
        this.replayBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            window.main.randombg();
            cc.director.loadScene(cc.director.getScene().name);
        });
        this.exitBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("selector");
        });
    };
    __decorate([
        property(cc.Button)
    ], FailPanel.prototype, "replayBtn", void 0);
    __decorate([
        property(cc.Button)
    ], FailPanel.prototype, "exitBtn", void 0);
    FailPanel = __decorate([
        ccclass
    ], FailPanel);
    return FailPanel;
}(View_1.default));
exports.default = FailPanel;

cc._RF.pop();