"use strict";
cc._RF.push(module, '8a090NbeXdJc6B23POj/ba4', 'Joystick');
// script/tscript/gamescene/Joystick.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameScene_1 = require("./GameScene");
var GameManager_1 = require("../core/GameManager");
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
var Joystick = /** @class */ (function (_super) {
    __extends(Joystick, _super);
    function Joystick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cursor = null;
        _this.gameScene = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Joystick.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.node.scale = 2.5;
    };
    Joystick.prototype.cursorTo = function (dir) {
        /*var angle:number = Math.atan2(dir.y,dir.x);
        this.cursor.x = 20 * Math.cos(angle);
        this.cursor.y = 20 * Math.sin(angle);*/
        this.cursor.position = dir.mul(20);
    };
    Joystick.prototype.show = function () {
        this.node.active = true;
    };
    Joystick.prototype.hidden = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Joystick.prototype, "cursor", void 0);
    Joystick = __decorate([
        ccclass
    ], Joystick);
    return Joystick;
}(cc.Component));
exports.default = Joystick;

cc._RF.pop();