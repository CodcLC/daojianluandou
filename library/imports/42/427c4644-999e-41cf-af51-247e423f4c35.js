"use strict";
cc._RF.push(module, '427c4ZEmZ5Bz69RJH5CP0w1', 'SelectView');
// script/tscript/ui/base/SelectView.ts

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
var SelectView = /** @class */ (function (_super) {
    __extends(SelectView, _super);
    function SelectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectView.prototype.awake = function () {
        this.node.active = true;
    };
    SelectView.prototype.sleep = function () {
        this.node.active = false;
        this.node.parent = null;
    };
    SelectView.prototype.reset = function () {
    };
    SelectView = __decorate([
        ccclass
    ], SelectView);
    return SelectView;
}(cc.Component));
exports.default = SelectView;

cc._RF.pop();