"use strict";
cc._RF.push(module, '2e6fcfe6F9CqaGVaos3yc6A', 'PopupText');
// script/tscript/ui/common/PopupText.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesPool_1 = require("../../core/ResourcesPool");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupText = /** @class */ (function (_super) {
    __extends(PopupText, _super);
    function PopupText() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.label = null;
        return _this;
    }
    PopupText.prototype.start = function () {
    };
    PopupText.prototype.showText = function (msg, size, color) {
        var _this = this;
        this.label.string = msg;
        this.label.fontSize = size;
        this.label.node.color = color;
        var compCallback = cc.callFunc(function () {
            _this.destroySelf();
        }, this);
        var seq = cc.sequence(cc.spawn(cc.moveBy(1.0, 0, 150), cc.fadeTo(1.0, 25)), compCallback);
        this.node.runAction(seq);
    };
    // update (dt) {}
    PopupText.prototype.getKey = function () {
        //return PopupText.name;
        return "PopupText";
    };
    PopupText.prototype.awake = function () {
        this.node.position = cc.Vec2.ZERO;
        this.node.active = true;
        this.node.color = cc.Color.WHITE;
        this.node.opacity = 255;
    };
    PopupText.prototype.sleep = function () {
        this.node.stopAllActions();
        this.node.parent = null;
        this.node.active = false;
    };
    PopupText.prototype.destroySelf = function () {
        ResourcesPool_1.default.instance.put(this, 45);
    };
    __decorate([
        property(cc.Label)
    ], PopupText.prototype, "label", void 0);
    PopupText = __decorate([
        ccclass
    ], PopupText);
    return PopupText;
}(cc.Component));
exports.default = PopupText;

cc._RF.pop();