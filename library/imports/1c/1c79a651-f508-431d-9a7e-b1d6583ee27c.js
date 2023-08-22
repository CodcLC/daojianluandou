"use strict";
cc._RF.push(module, '1c79aZR9QhDHZp+sdZYPuJ8', 'BaseUI');
// script/tscript/ui/base/BaseUI.ts

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
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.basePos = cc.Vec2.ZERO;
        return _this;
    }
    BaseUI.prototype.onLoad = function () {
        this.basePos = this.node.position;
        /*this.scheduleOnce(()=>{
           this.close();
        },0.01)*/
        this.close();
    };
    BaseUI.prototype.open = function () {
        var _this = this;
        this.node.active = true;
        this.scheduleOnce(function () {
            _this.node.position = cc.Vec2.ZERO;
        }, 0.01);
    };
    BaseUI.prototype.close = function () {
        this.node.active = false;
        this.node.position = this.basePos;
    };
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(cc.Component));
exports.default = BaseUI;

cc._RF.pop();