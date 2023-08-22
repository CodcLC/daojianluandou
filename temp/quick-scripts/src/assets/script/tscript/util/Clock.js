"use strict";
cc._RF.push(module, '83782/Oy9lC2ZGy9VcARPZY', 'Clock');
// script/tscript/util/Clock.ts

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
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /// <summary>
        /// 1只显示秒，2只显示分秒，3只显示时分秒
        /// </summary>
        _this.hms = 3;
        _this.timeText = null;
        /// <summary>
        /// 0是倒计时，1是顺计时
        /// </summary>
        _this.increse = 0;
        /// <summary>
        /// 时长
        /// </summary>
        _this.timeLength = 0;
        /// <summary>
        /// 每个时间步的间隔，单位为秒
        /// </summary>
        _this.timeStep = 1.0;
        _this._stime = 0;
        _this._etime = 0;
        _this._currentCount = 0;
        _this._hour = 0; //时
        _this._minute = 0; //分
        _this._second = 0; //秒
        _this._isStop = true;
        /// <summary>
        /// 没一个时间步执行的会掉
        /// </summary>
        _this._callback = null;
        /// <summary>
        /// 时间结束时执行的回调
        /// </summary>
        _this._completeCallback = null;
        return _this;
        // update (dt) {}
    }
    /// <summary>
    /// 开始计时
    /// </summary>
    /// <param name="callback">计时执行的回调</param>
    Clock.prototype.Play = function (callback, completeCallback) {
        if (callback === void 0) { callback = null; }
        if (completeCallback === void 0) { completeCallback = null; }
        if (!this.timeText) {
            this.timeText = this.getComponent(cc.Label);
        }
        this._callback = callback;
        this._completeCallback = completeCallback;
        this._isStop = false;
        this.unschedule(this.ClockTime);
        this.ClockTime(this.timeStep);
        this.schedule(this.ClockTime, this.timeStep);
    };
    /// <summary>
    /// 停止计时
    /// </summary>
    Clock.prototype.Stop = function () {
        this.unschedule(this.ClockTime);
        this._isStop = true;
    };
    /// <summary>
    /// 计时重置
    /// </summary>
    Clock.prototype.Reset = function () {
        this._currentCount = 0;
        this._isStop = true;
    };
    /// <summary>
    /// 时钟计时
    /// </summary>
    /// <returns></returns>
    Clock.prototype.ClockTime = function (dt) {
        if (this._isStop) {
            this.unschedule(this.ClockTime);
            return;
        }
        if (this._currentCount < this.timeLength) {
            this._currentCount++;
            var num = 0;
            if (this.increse == 1) {
                num = this._stime + this._currentCount;
            }
            else if (this.increse == 0) {
                num = this.timeLength - this._currentCount + this._stime;
            }
            else {
                this.unschedule(this.ClockTime);
                return;
            }
            //this._hour = Math.floor(num / 3600) % 24;//转换小时 24小时制
            this._hour = Math.floor(num / 3600); //转换小时 
            this._minute = Math.floor((num - this.hour * 3600) / 60); //转换分钟
            this._second = num - (this.hour * 3600 + this.minute * 60); //转换秒数
            var str = "";
            if (this.hms == 1) {
                str = this.second >= 10 ? "" + this.second : "0" + this.second;
            }
            else if (this.hms == 2) {
                str = this.minute + ":" + (this.second >= 10 ? "" + this.second : "0" + this.second);
            }
            else if (this.hms == 3) {
                str = (this.hour >= 10 ? this.hour + ":" : "0" + this.hour + ":") +
                    (this.minute >= 10 ? this.minute + ":" : "0" + this.minute + ":") + (this.second >= 10 ? "" + this.second : "0" + this.second);
            }
            if (this._callback != null) {
                this._callback(this.second, this.minute, this.hour, str, num);
            }
            if (this.timeText != null) {
                this.timeText.string = str;
            }
        }
        else {
            this._isStop = true;
            if (this._completeCallback != null) {
                this._completeCallback();
            }
            this.unschedule(this.ClockTime);
            return;
        }
    };
    Object.defineProperty(Clock.prototype, "currentCount", {
        /// <summary>
        /// 当前计时了多少步
        /// </summary>
        get: function () {
            return this._currentCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "hour", {
        /// <summary>
        /// 小时
        /// </summary>
        get: function () {
            return this._hour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "minute", {
        /// <summary>
        /// 分钟
        /// </summary>
        get: function () {
            return this._minute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "second", {
        /// <summary>
        /// 秒钟
        /// </summary>
        get: function () {
            return this._second;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clock.prototype, "running", {
        get: function () {
            return !this._isStop;
        },
        enumerable: true,
        configurable: true
    });
    Clock.prototype.onLoad = function () {
        if (!this.timeText) {
            this.timeText = this.getComponent(cc.Label);
        }
    };
    Clock.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.Integer, tooltip: "1只显示秒，2只显示分秒，3只显示时分秒" })
    ], Clock.prototype, "hms", void 0);
    __decorate([
        property({ type: cc.Label, tooltip: "显示倒计时的文本" })
    ], Clock.prototype, "timeText", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "0是倒计时，1是顺计时" })
    ], Clock.prototype, "increse", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "时长" })
    ], Clock.prototype, "timeLength", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "每个时间步的间隔，单位为秒" })
    ], Clock.prototype, "timeStep", void 0);
    Clock = __decorate([
        ccclass
    ], Clock);
    return Clock;
}(cc.Component));
exports.default = Clock;

cc._RF.pop();