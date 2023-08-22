
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/Clock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxDbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRzs7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQTJOQztRQXhORyxhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLGNBQWM7UUFFUCxTQUFHLEdBQVUsQ0FBQyxDQUFDO1FBR2YsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVoQyxhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFFUCxhQUFPLEdBQVUsQ0FBQyxDQUFDO1FBRTFCLGFBQWE7UUFDYixNQUFNO1FBQ04sY0FBYztRQUVQLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRTdCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUVQLGNBQVEsR0FBVSxHQUFHLENBQUM7UUFFckIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQVUsQ0FBQyxDQUFDO1FBRWxCLG1CQUFhLEdBQVUsQ0FBQyxDQUFDO1FBRXpCLFdBQUssR0FBVSxDQUFDLENBQUMsQ0FBQSxHQUFHO1FBQ3BCLGFBQU8sR0FBVSxDQUFDLENBQUMsQ0FBQSxHQUFHO1FBQ3RCLGFBQU8sR0FBVSxDQUFDLENBQUMsQ0FBQSxHQUFHO1FBRXRCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFFL0IsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ0wsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVuQyxhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDTix1QkFBaUIsR0FBWSxJQUFJLENBQUM7O1FBeUsxQyxpQkFB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LEVBQ2pCO2dCQUNJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xFO2lCQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3RCO2dCQUNJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4RjtpQkFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUN0QjtnQkFDSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztvQkFDN0QsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RJO1lBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEU7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUN6QjtnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7YUFDOUI7U0FDSjthQUNEO1lBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxFQUNsQztnQkFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM1QjtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU87U0FDVjtJQUVMLENBQUM7SUFLRCxzQkFBVywrQkFBWTtRQUh2QixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7YUFDZDtZQUVJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHVCQUFJO1FBSGYsYUFBYTtRQUNiLE1BQU07UUFDTixjQUFjO2FBQ2Q7WUFHSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyx5QkFBTTtRQUhqQixhQUFhO1FBQ2IsTUFBTTtRQUNOLGNBQWM7YUFDZDtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHlCQUFNO1FBSGpCLGFBQWE7UUFDYixNQUFNO1FBQ04sY0FBYzthQUNkO1lBR0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQU87YUFBbEI7WUFFSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFNLEdBQU47UUFFSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDakI7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFHQSxDQUFDO0lBak5EO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLENBQUM7c0NBQ3JDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxDQUFDOzJDQUNiO0lBTWhDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxDQUFDOzBDQUN4QjtJQU0xQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQzs2Q0FDWjtJQU03QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsQ0FBQzsyQ0FDdkI7SUEzQlosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBOekI7SUFBRCxZQUFDO0NBMU5ELEFBME5DLENBMU5rQyxFQUFFLENBQUMsU0FBUyxHQTBOOUM7a0JBMU5vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gMeWPquaYvuekuuenku+8jDLlj6rmmL7npLrliIbnp5LvvIwz5Y+q5pi+56S65pe25YiG56eSXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkludGVnZXIsdG9vbHRpcDpcIjHlj6rmmL7npLrnp5LvvIwy5Y+q5pi+56S65YiG56eS77yMM+WPquaYvuekuuaXtuWIhuenklwifSlcclxuICAgIHB1YmxpYyBobXM6bnVtYmVyID0gMztcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTGFiZWwsdG9vbHRpcDpcIuaYvuekuuWAkuiuoeaXtueahOaWh+acrFwifSlcclxuICAgIHB1YmxpYyB0aW1lVGV4dDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIDDmmK/lgJLorqHml7bvvIwx5piv6aG66K6h5pe2XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkludGVnZXIsdG9vbHRpcDpcIjDmmK/lgJLorqHml7bvvIwx5piv6aG66K6h5pe2XCJ9KVxyXG4gICAgcHVibGljIGluY3Jlc2U6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5pe26ZW/XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkludGVnZXIsdG9vbHRpcDpcIuaXtumVv1wifSlcclxuICAgIHB1YmxpYyB0aW1lTGVuZ3RoOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOavj+S4quaXtumXtOatpeeahOmXtOmalO+8jOWNleS9jeS4uuenklxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5JbnRlZ2VyLHRvb2x0aXA6XCLmr4/kuKrml7bpl7TmraXnmoTpl7TpmpTvvIzljZXkvY3kuLrnp5JcIn0pXHJcbiAgICBwdWJsaWMgdGltZVN0ZXA6bnVtYmVyID0gMS4wO1xyXG5cclxuICAgIHByaXZhdGUgX3N0aW1lOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9ldGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2hvdXI6bnVtYmVyID0gMDsvL+aXtlxyXG4gICAgcHJpdmF0ZSBfbWludXRlOm51bWJlciA9IDA7Ly/liIZcclxuICAgIHByaXZhdGUgX3NlY29uZDpudW1iZXIgPSAwOy8v56eSXHJcblxyXG4gICAgcHJpdmF0ZSBfaXNTdG9wOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmsqHkuIDkuKrml7bpl7TmraXmiafooYznmoTkvJrmjolcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcml2YXRlICBfY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDml7bpl7Tnu5PmnZ/ml7bmiafooYznmoTlm57osINcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcml2YXRlIF9jb21wbGV0ZUNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5byA5aeL6K6h5pe2XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FsbGJhY2tcIj7orqHml7bmiafooYznmoTlm57osIM8L3BhcmFtPlxyXG4gICAgcHVibGljIFBsYXkoY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsLCBjb21wbGV0ZUNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy50aW1lVGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVRleHQgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2lzU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkNsb2NrVGltZSk7XHJcbiAgICAgICAgdGhpcy5DbG9ja1RpbWUodGhpcy50aW1lU3RlcCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkNsb2NrVGltZSx0aGlzLnRpbWVTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5YGc5q2i6K6h5pe2XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIFN0b3AoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkNsb2NrVGltZSk7XHJcbiAgICAgICAgdGhpcy5faXNTdG9wID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6K6h5pe26YeN572uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIFJlc2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2lzU3RvcCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDml7bpkp/orqHml7ZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgcHJpdmF0ZSBDbG9ja1RpbWUoZHQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1N0b3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5DbG9ja1RpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9jdXJyZW50Q291bnQgPCB0aGlzLnRpbWVMZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q291bnQrKztcclxuXHJcbiAgICAgICAgICAgIHZhciBudW06bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluY3Jlc2UgPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbnVtID0gdGhpcy5fc3RpbWUgKyB0aGlzLl9jdXJyZW50Q291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pbmNyZXNlID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG51bSA9IHRoaXMudGltZUxlbmd0aCAtIHRoaXMuX2N1cnJlbnRDb3VudCArIHRoaXMuX3N0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuQ2xvY2tUaW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy90aGlzLl9ob3VyID0gTWF0aC5mbG9vcihudW0gLyAzNjAwKSAlIDI0Oy8v6L2s5o2i5bCP5pe2IDI05bCP5pe25Yi2XHJcbiAgICAgICAgICAgIHRoaXMuX2hvdXIgPSBNYXRoLmZsb29yKG51bSAvIDM2MDApOy8v6L2s5o2i5bCP5pe2IFxyXG4gICAgICAgICAgICB0aGlzLl9taW51dGUgPSBNYXRoLmZsb29yKChudW0gLSB0aGlzLmhvdXIgKiAzNjAwKSAvIDYwKTsvL+i9rOaNouWIhumSn1xyXG4gICAgICAgICAgICB0aGlzLl9zZWNvbmQgPSBudW0gLSAodGhpcy5ob3VyICogMzYwMCArIHRoaXMubWludXRlICogNjApOy8v6L2s5o2i56eS5pWwXHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyOnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhtcyA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSB0aGlzLnNlY29uZCA+PSAxMCA/IFwiXCIgKyB0aGlzLnNlY29uZCA6IFwiMFwiICsgdGhpcy5zZWNvbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5obXMgPT0gMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyID0gdGhpcy5taW51dGUgKyBcIjpcIiArICh0aGlzLnNlY29uZCA+PSAxMCA/IFwiXCIgKyB0aGlzLnNlY29uZCA6IFwiMFwiICsgdGhpcy5zZWNvbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaG1zID09IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9ICh0aGlzLmhvdXIgPj0gMTAgPyB0aGlzLmhvdXIgKyBcIjpcIiA6IFwiMFwiICsgdGhpcy5ob3VyICsgXCI6XCIpICtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5taW51dGUgPj0gMTAgPyB0aGlzLm1pbnV0ZSArIFwiOlwiIDogXCIwXCIgKyB0aGlzLm1pbnV0ZSArIFwiOlwiKSArICh0aGlzLnNlY29uZCA+PSAxMCA/IFwiXCIgKyB0aGlzLnNlY29uZCA6IFwiMFwiICsgdGhpcy5zZWNvbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcy5zZWNvbmQsIHRoaXMubWludXRlLCB0aGlzLmhvdXIsIHN0cixudW0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lVGV4dCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVUZXh0LnN0cmluZyA9IHN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1N0b3AgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuQ2xvY2tUaW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW9k+WJjeiuoeaXtuS6huWkmuWwkeatpVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudENvdW50KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlsI/ml7ZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ2V0IGhvdXIoKTpudW1iZXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvdXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDliIbpkp9cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ2V0IG1pbnV0ZSgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW51dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOenkumSn1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBnZXQgc2Vjb25kKCk6bnVtYmVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBydW5uaW5nKCk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5faXNTdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMudGltZVRleHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUZXh0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19