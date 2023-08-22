"use strict";
cc._RF.push(module, 'a2ba48HWfxEZ4M3U/wR+iUC', 'Launch');
// script/tscript/Launch.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Launch = /** @class */ (function (_super) {
    __extends(Launch, _super);
    function Launch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Launch.prototype.start = function () {
        cc.director.loadScene("main");
    };
    Launch = __decorate([
        ccclass
    ], Launch);
    return Launch;
}(cc.Component));
exports.default = Launch;

cc._RF.pop();