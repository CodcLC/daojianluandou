"use strict";
cc._RF.push(module, '390c1a5gv9Mqa5w+RUhJNNc', 'Quake');
// script/tscript/util/Quake.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("./Random");
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
var Quake = /** @class */ (function (_super) {
    __extends(Quake, _super);
    function Quake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 震动幅度
        _this.shakeLevel = 3;
        // 震动时间
        _this.setShakeTime = 0.2;
        // 震动的FPS
        _this.shakeFps = 45;
        _this.shakeTime = 0.0;
        _this.frameTime = 0.0;
        _this.shakeDelta = 0.005;
        _this.isShake = false;
        return _this;
    }
    Quake.prototype.onLoad = function () {
        this.basePos = this.node.position;
        //this.shakeLevel = 5;
        //changeRect = new Rect(0.0f, 0.0f, 1.0f, 1.0f);
    };
    // Use this for initialization
    Quake.prototype.start = function () {
        this.shakeTime = this.setShakeTime;
        this.fps = this.shakeFps;
        this.frameTime = 0.03;
        this.shakeDelta = 0.005;
    };
    // Update is called once per frame
    Quake.prototype.update = function (dt) {
        if (this.isShake) {
            if (this.shakeTime > 0) {
                this.shakeTime -= dt;
                if (this.shakeTime <= 0) {
                    //changeRect.xMin = 0.0f;
                    //changeRect.yMin = 0.0f;
                    //selfCamera.rect = changeRect;
                    this.node.position = this.basePos;
                    this.isShake = false;
                    this.shakeTime = this.setShakeTime;
                    this.fps = this.shakeFps;
                    this.frameTime = 0.03;
                    this.shakeDelta = 0.005;
                }
                else {
                    this.frameTime += dt;
                    if (this.frameTime > 1.0 / this.fps) {
                        this.frameTime = 0;
                        //changeRect.xMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //changeRect.yMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //selfCamera.rect = changeRect;
                        this.node.position = this.basePos.add(cc.v2(Random_1.default.Range(-this.shakeLevel, this.shakeLevel), Random_1.default.Range(-this.shakeLevel, this.shakeLevel)));
                    }
                }
            }
        }
    };
    Quake.prototype.shake = function (time) {
        if (time === void 0) { time = 0; }
        this.isShake = true;
        if (time != 0) {
            this.shakeTime = time;
        }
        else {
            this.shakeTime = this.setShakeTime;
        }
    };
    __decorate([
        property
    ], Quake.prototype, "shakeLevel", void 0);
    __decorate([
        property
    ], Quake.prototype, "setShakeTime", void 0);
    __decorate([
        property
    ], Quake.prototype, "shakeFps", void 0);
    Quake = __decorate([
        ccclass
    ], Quake);
    return Quake;
}(cc.Component));
exports.default = Quake;

cc._RF.pop();