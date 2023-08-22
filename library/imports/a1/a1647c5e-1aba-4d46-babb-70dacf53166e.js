"use strict";
cc._RF.push(module, 'a1647xeGrpNRrq7cNrPUxZu', 'PopupMsg');
// script/tscript/ui/common/PopupMsg.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupMsg = /** @class */ (function (_super) {
    __extends(PopupMsg, _super);
    function PopupMsg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    PopupMsg.prototype.start = function () {
        var _this = this;
        var compCallback = cc.callFunc(function () {
            _this.destroySelf();
        }, this);
        var seq = cc.sequence(cc.spawn(cc.moveBy(1.0, 0, 150), cc.fadeTo(1.0, 25)), compCallback);
        this.node.runAction(seq);
    };
    PopupMsg.prototype.showText = function (msg, size, color) {
        this.label.string = msg;
        this.label.fontSize = size;
        this.label.node.color = color;
    };
    PopupMsg.prototype.destroySelf = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], PopupMsg.prototype, "label", void 0);
    PopupMsg = __decorate([
        ccclass
    ], PopupMsg);
    return PopupMsg;
}(cc.Component));
exports.default = PopupMsg;

cc._RF.pop();