"use strict";
cc._RF.push(module, 'bd208TAM6hOe5rynE0i/9TS', 'AnimationController');
// script/tscript/util/AnimationController.ts

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
var AnimationController = /** @class */ (function (_super) {
    __extends(AnimationController, _super);
    function AnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = [];
        _this.frameTime = 0.1;
        /// <summary>
        /// 播放次数
        /// </summary>
        _this.playTimes = 0;
        /// <summary>
        /// 播放完自动销毁
        /// </summary>
        _this.autoDestroy = false;
        _this.frameNum = 0;
        _this.frameIndex = 0;
        _this.running = true;
        _this.time = 0;
        _this.currentTimes = 0;
        return _this;
    }
    AnimationController.prototype.onLoad = function () {
        this.m_render = this.getComponent(cc.Sprite);
    };
    // Use this for initialization
    AnimationController.prototype.start = function () {
        if (this.images.length != 0) {
            this.frameNum = this.images.length;
        }
        this.time = this.frameTime;
    };
    // Update is called once per frame
    AnimationController.prototype.update = function (dt) {
        if (!this.running)
            return;
        if (this.images.length == 0)
            return;
        this.time -= dt;
        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
            return;
        if (this.time <= 0) {
            this.time = this.frameTime;
            this.frameIndex = this.frameIndex % this.frameNum;
            this.m_render.spriteFrame = this.images[this.frameIndex];
            if (this.frameCallback != null) {
                this.frameCallback(this.frameIndex);
            }
            if (this.frameIndex == this.frameNum - 1) {
                this.currentTimes++;
                if (this.completeCallback != null) {
                    this.completeCallback();
                }
                if (this.autoDestroy) {
                    this.node.destroy();
                }
            }
            this.frameIndex++;
        }
    };
    /// <summary>
    /// 播放
    /// </summary>
    AnimationController.prototype.play = function (completeCallback, frameCallback) {
        if (completeCallback === void 0) { completeCallback = null; }
        if (frameCallback === void 0) { frameCallback = null; }
        this.completeCallback = completeCallback;
        this.frameCallback = frameCallback;
        this.running = true;
        this.frameIndex = 0;
        this.currentTimes = 0;
        this.time = this.frameTime;
        if (this.images.length != 0) {
            this.frameNum = this.images.length;
        }
        if (this.m_render)
            this.m_render.spriteFrame = this.images[0];
    };
    AnimationController.prototype.gotoAndPlay = function (frameIndex) {
    };
    /// <summary>
    /// 停止
    /// </summary>
    AnimationController.prototype.stop = function () {
        this.running = false;
    };
    AnimationController.prototype.gotoAndStop = function (frameIndex) {
        if (this.frameIndex < 0)
            this.frameIndex = 0;
        if (this.frameIndex > this.images.length - 1)
            this.frameIndex = this.images.length - 1;
        this.m_render.spriteFrame = this.images[this.frameIndex];
        this.running = false;
    };
    AnimationController.prototype.isPlayEnd = function () {
        return this.frameIndex == this.frameNum;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], AnimationController.prototype, "images", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "frameTime", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "playTimes", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "autoDestroy", void 0);
    AnimationController = __decorate([
        ccclass
    ], AnimationController);
    return AnimationController;
}(cc.Component));
exports.default = AnimationController;

cc._RF.pop();