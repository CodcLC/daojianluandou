"use strict";
cc._RF.push(module, '08f3f9Pjx5N+bZJdn6QAZZv', 'Test');
// script/tscript/Test.ts

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
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tex = null;
        _this.tail = null;
        return _this;
    }
    Test.prototype.start = function () {
    };
    Test.prototype.update = function (dt) {
        this.tail.x += 100 * dt;
    };
    __decorate([
        property({ type: cc.Texture2D })
    ], Test.prototype, "tex", void 0);
    __decorate([
        property(cc.Node)
    ], Test.prototype, "tail", void 0);
    Test = __decorate([
        ccclass
    ], Test);
    return Test;
}(cc.Component));
exports.default = Test;

cc._RF.pop();