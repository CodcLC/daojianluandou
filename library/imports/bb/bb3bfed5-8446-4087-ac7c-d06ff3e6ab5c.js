"use strict";
cc._RF.push(module, 'bb3bf7VhEZAh6x80G/z5qtc', 'Wall');
// script/tscript/gamescene/Wall.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
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
var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.left = null;
        _this.right = null;
        _this.top = null;
        _this.down = null;
        _this.promptMsgTxt = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.dis = 1000;
        _this.speed = 30;
        _this.shrinkTime = 0;
        _this.isShrink = false;
        _this.zoom = cc.v2(0.5, 0);
        return _this;
    }
    Wall.prototype.start = function () {
        //this.left.runAction(cc.moveTo(1.2,-800,0));
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.promptMsgTxt.node.active = false;
    };
    Wall.prototype.update = function (dt) {
        //return;
        if (this.shrinkTime > 0) {
            this.shrinkTime -= dt;
            this.isShrink = true;
            if (this.left.x < -(this.dis + this.left.width / 2)) {
                this.left.x += this.speed * dt;
                this.gameScene.sceneSize.width -= 2 * this.speed * dt;
            }
            if (this.right.x > (this.dis + this.right.width / 2)) {
                this.right.x -= this.speed * dt;
            }
            if (this.top.y > (this.dis + this.top.height / 2)) {
                this.top.y -= this.speed * dt;
                this.gameScene.sceneSize.height -= 2 * this.speed * dt;
            }
            if (this.down.y < -(this.dis + this.down.height / 2)) {
                this.down.y += this.speed * dt;
            }
        }
        else {
            if (this.isShrink) {
                this.isShrink = false;
                this.left.getComponent(cc.Animation).stop("splash");
                this.right.getComponent(cc.Animation).stop("splash");
                this.top.getComponent(cc.Animation).stop("splash");
                this.down.getComponent(cc.Animation).stop("splash");
                this.left.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.right.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.top.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.down.getComponent(cc.Animation).setCurrentTime(0, "splash");
            }
        }
    };
    Wall.prototype.shrink = function () {
        var _this = this;
        this.node.stopAllActions();
        this.promptMsgTxt.node.active = true;
        this.promptMsgTxt.play();
        this.scheduleOnce(function () {
            _this.shrinkTime = 15;
            _this.left.getComponent(cc.Animation).play("splash");
            _this.right.getComponent(cc.Animation).play("splash");
            _this.top.getComponent(cc.Animation).play("splash");
            _this.down.getComponent(cc.Animation).play("splash");
        }, 10);
    };
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "left", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "top", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "down", void 0);
    __decorate([
        property(cc.Animation)
    ], Wall.prototype, "promptMsgTxt", void 0);
    Wall = __decorate([
        ccclass
    ], Wall);
    return Wall;
}(cc.Component));
exports.default = Wall;

cc._RF.pop();