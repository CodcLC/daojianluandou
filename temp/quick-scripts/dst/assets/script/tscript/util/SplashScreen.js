
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/SplashScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '638f9JPW4JF/KhrDz/2HdK5', 'SplashScreen');
// script/tscript/util/SplashScreen.ts

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
/// <summary>
/// 渐入渐出的状态
/// </summary>
var FadeStatus;
(function (FadeStatus) {
    FadeStatus[FadeStatus["None"] = 0] = "None";
    FadeStatus[FadeStatus["FadeIn"] = 1] = "FadeIn";
    FadeStatus[FadeStatus["FadeWait"] = 2] = "FadeWait";
    FadeStatus[FadeStatus["FadeOut"] = 3] = "FadeOut";
    FadeStatus[FadeStatus["FadeFinish"] = 4] = "FadeFinish";
})(FadeStatus = exports.FadeStatus || (exports.FadeStatus = {}));
/// <summary>
/// 渐入渐出的类型  
/// </summary>
var SplashType;
(function (SplashType) {
    SplashType[SplashType["None"] = 0] = "None";
    /// <summary>
    /// 只执行淡入或者淡出中的一种
    /// </summary>
    SplashType[SplashType["SingleOnly"] = 1] = "SingleOnly";
    /// <summary>
    /// 加载完场景才淡出
    /// </summary>
    SplashType[SplashType["LoadSceneThenFadeOut"] = 2] = "LoadSceneThenFadeOut";
})(SplashType = exports.SplashType || (exports.SplashType = {}));
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //渐入渐出速度
        _this.fadeSpeed = 0.5;
        //等待时间
        _this.waitDuration = 0.84;
        /// <summary>
        /// 渐入渐出类型
        /// </summary>
        _this.splashType = SplashType.None;
        /// <summary>
        /// 渐入渐出的状态
        /// </summary>
        _this.mStatus = FadeStatus.None;
        //当前透明度
        _this.mAlpha = 0.0;
        return _this;
        /*void OnLevelWasLoaded(int index)
        {
            if(splashType == SplashType.LoadSceneThenFadeOut)
            {
                mStatus = FadeStatus.FadeOut;
            }
    
            //PlaySplashFadeOut(0.5f,0.25f);
    
            OnFadeInFinish = null;
            OnFadeOutFinish = null;
        }*/
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    SplashScreen.prototype.onLoad = function () {
    };
    SplashScreen.prototype.start = function () {
        //计算Logo绘制的位置
        //this.mSplashLogoPos.x = (cc.winSize.width * 0.5 - 1920 * 0.5);
        //this.mSplashLogoPos.y = (cc.winSize.height * 0.5 - 1080 * 0.5);
        this.mSplashLogoPos.x = 0;
        this.mSplashLogoPos.y = 0;
        this.mSplashLogoPos.width = cc.winSize.width;
        this.mSplashLogoPos.height = cc.winSize.height;
    };
    /// <summary>
    /// 播发特效
    /// </summary>
    /// <param name="sceneLoadedFadeOut">是否是加载完场景后才淡出</param>
    SplashScreen.prototype.PlaySplash = function (fadeSpeed, waitDuration, delay) {
        if (fadeSpeed === void 0) { fadeSpeed = 1.0; }
        if (waitDuration === void 0) { waitDuration = 0.85; }
        if (delay === void 0) { delay = 0; }
        this.fadeSpeed = fadeSpeed;
        this.waitDuration = waitDuration;
        this.delay = delay;
        this.splashType = SplashType.None;
        this.mStatus = FadeStatus.FadeIn;
    };
    /// <summary>
    /// 播放淡入特效
    /// </summary>
    SplashScreen.prototype.PlaySplashFadeIn = function (fadeSpeed, delay) {
        if (fadeSpeed === void 0) { fadeSpeed = 1.0; }
        if (delay === void 0) { delay = 0; }
        this.fadeSpeed = fadeSpeed;
        this.delay = delay;
        this.splashType = SplashType.SingleOnly;
        this.mStatus = FadeStatus.FadeIn;
        this.mAlpha = 0.0;
    };
    /// <summary>
    /// 播放淡出特效
    /// </summary>
    SplashScreen.prototype.PlaySplashFadeOut = function (fadeSpeed, delay) {
        if (fadeSpeed === void 0) { fadeSpeed = 1.0; }
        if (delay === void 0) { delay = 0; }
        this.fadeSpeed = fadeSpeed;
        this.delay = delay;
        this.splashType = SplashType.SingleOnly;
        this.mStatus = FadeStatus.FadeOut;
        this.mAlpha = 1.0;
    };
    SplashScreen.prototype.update = function (dt) {
        if (this.delay > 0) {
            this.delay -= dt;
            return;
        }
        switch (this.mStatus) {
            case FadeStatus.FadeIn:
                this.mAlpha += this.fadeSpeed * dt;
                if (this.mAlpha >= 1.0) {
                    if (this.splashType != SplashType.SingleOnly) {
                        this.mStatus = FadeStatus.FadeWait;
                        this.waitTime = this.waitDuration;
                    }
                    this.mAlpha = 1.0;
                    if (this.OnFadeInFinish != null)
                        this.OnFadeInFinish();
                }
                break;
            case FadeStatus.FadeOut:
                this.mAlpha -= this.fadeSpeed * dt;
                if (this.mAlpha <= 0.0) {
                    this.mStatus = FadeStatus.FadeFinish;
                    this.mAlpha = 0.0;
                    if (this.OnFadeOutFinish != null)
                        this.OnFadeOutFinish();
                }
                break;
            case FadeStatus.FadeWait:
                if (this.splashType != SplashType.SingleOnly) {
                    this.waitTime -= dt;
                    if (this.waitTime <= 0) {
                        this.mStatus = FadeStatus.FadeOut;
                        this.waitTime = 0;
                    }
                }
                break;
        }
    };
    SplashScreen.prototype.lateUpdate = function () {
        if (this.splashLogo != null) {
            //绘制Logo
            //GUI.color = new Color(GUI.color.r, GUI.color.g, GUI.color.b, Mathf.Clamp(mAlpha, 0, 1));
            //GUI.DrawTexture(mSplashLogoPos, splashLogo);
        }
    };
    __decorate([
        property({ type: cc.Enum(SplashType) })
    ], SplashScreen.prototype, "splashType", void 0);
    __decorate([
        property({ type: cc.Enum(FadeStatus) })
    ], SplashScreen.prototype, "mStatus", void 0);
    SplashScreen = __decorate([
        ccclass
    ], SplashScreen);
    return SplashScreen;
}(cc.Component));
exports.default = SplashScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxTcGxhc2hTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUMsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2QsSUFBWSxVQU9YO0FBUEQsV0FBWSxVQUFVO0lBRWxCLDJDQUFJLENBQUE7SUFDSiwrQ0FBTSxDQUFBO0lBQ04sbURBQVEsQ0FBQTtJQUNSLGlEQUFPLENBQUE7SUFDUCx1REFBVSxDQUFBO0FBQ2QsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBRUQsYUFBYTtBQUNiLGFBQWE7QUFDYixjQUFjO0FBQ2QsSUFBWSxVQWNYO0FBZEQsV0FBWSxVQUFVO0lBRWxCLDJDQUFJLENBQUE7SUFFSixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1REFBVSxDQUFBO0lBRVYsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsMkVBQW9CLENBQUE7QUFFeEIsQ0FBQyxFQWRXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBY3JCO0FBR0Q7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUEwTEM7UUFoTEcsUUFBUTtRQUNELGVBQVMsR0FBVSxHQUFHLENBQUM7UUFFOUIsTUFBTTtRQUNDLGtCQUFZLEdBQVUsSUFBSSxDQUFDO1FBRWxDLGFBQWE7UUFDYixVQUFVO1FBQ1YsY0FBYztRQUVOLGdCQUFVLEdBQWMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUVoRCxhQUFhO1FBQ2IsV0FBVztRQUNYLGNBQWM7UUFFTixh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Q0FBQztJQWxKRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUM7b0RBQ1c7SUFNaEQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDO2lEQUNRO0lBekI1QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBeUxoQztJQUFELG1CQUFDO0NBekxELEFBeUxDLENBekx5QyxFQUFFLENBQUMsU0FBUyxHQXlMckQ7a0JBekxvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDmuJDlhaXmuJDlh7rnmoTnirbmgIFcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGVudW0gRmFkZVN0YXR1c1xyXG57XHJcbiAgICBOb25lLFxyXG4gICAgRmFkZUluLFxyXG4gICAgRmFkZVdhaXQsXHJcbiAgICBGYWRlT3V0LFxyXG4gICAgRmFkZUZpbmlzaFxyXG59XHJcblxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDmuJDlhaXmuJDlh7rnmoTnsbvlnosgIFxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgZW51bSBTcGxhc2hUeXBlXHJcbntcclxuICAgIE5vbmUsXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWPquaJp+ihjOa3oeWFpeaIluiAhea3oeWHuuS4reeahOS4gOenjVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFNpbmdsZU9ubHksXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWKoOi9veWujOWcuuaZr+aJjea3oeWHulxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIExvYWRTY2VuZVRoZW5GYWRlT3V0LFxyXG5cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgT25GYWRlSW5GaW5pc2g6RnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIE9uRmFkZU91dEZpbmlzaDpGdW5jdGlvbjtcclxuXHJcbiAgICAvL0xvZ2/otLTlm75cclxuICAgIHB1YmxpYyBzcGxhc2hMb2dvOmNjLlNwcml0ZTtcclxuXHJcbiAgICAvL+a4kOWFpea4kOWHuumAn+W6plxyXG4gICAgcHVibGljIGZhZGVTcGVlZDpudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgLy/nrYnlvoXml7bpl7RcclxuICAgIHB1YmxpYyB3YWl0RHVyYXRpb246bnVtYmVyID0gMC44NDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5riQ5YWl5riQ5Ye657G75Z6LXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkVudW0oU3BsYXNoVHlwZSl9KVxyXG4gICAgcHJpdmF0ZSBzcGxhc2hUeXBlOlNwbGFzaFR5cGUgPSBTcGxhc2hUeXBlLk5vbmU7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOa4kOWFpea4kOWHuueahOeKtuaAgVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5FbnVtKEZhZGVTdGF0dXMpfSlcclxuICAgIHByaXZhdGUgbVN0YXR1czpGYWRlU3RhdHVzID0gRmFkZVN0YXR1cy5Ob25lO1xyXG5cclxuXHJcbiAgICAvL0xvZ2/otLTlm77kvY3nva5cclxuICAgIHByaXZhdGUgbVNwbGFzaExvZ29Qb3M6Y2MuUmVjdDtcclxuXHJcbiAgICAvL+W9k+WJjemAj+aYjuW6plxyXG4gICAgcHJpdmF0ZSBtQWxwaGE6bnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8v5riQ5YWl57uT5p2f5Yiw5riQ5Ye655qE5pe26Ze0XHJcbiAgICBwcml2YXRlIHdhaXRUaW1lOm51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5bu26L+f5pe26Ze0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJpdmF0ZSBkZWxheTpudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIC8v6K6h566XTG9nb+e7mOWItueahOS9jee9rlxyXG4gICAgICAgIC8vdGhpcy5tU3BsYXNoTG9nb1Bvcy54ID0gKGNjLndpblNpemUud2lkdGggKiAwLjUgLSAxOTIwICogMC41KTtcclxuICAgICAgICAvL3RoaXMubVNwbGFzaExvZ29Qb3MueSA9IChjYy53aW5TaXplLmhlaWdodCAqIDAuNSAtIDEwODAgKiAwLjUpO1xyXG4gICAgICAgIHRoaXMubVNwbGFzaExvZ29Qb3MueCA9IDA7XHJcbiAgICAgICAgdGhpcy5tU3BsYXNoTG9nb1Bvcy55ID0gMDtcclxuICAgICAgICB0aGlzLm1TcGxhc2hMb2dvUG9zLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLm1TcGxhc2hMb2dvUG9zLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5pKt5Y+R54m55pWIXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy8vIDxwYXJhbSBuYW1lPVwic2NlbmVMb2FkZWRGYWRlT3V0XCI+5piv5ZCm5piv5Yqg6L295a6M5Zy65pmv5ZCO5omN5reh5Ye6PC9wYXJhbT5cclxuICAgIHB1YmxpYyBQbGF5U3BsYXNoKGZhZGVTcGVlZDpudW1iZXIgPSAxLjAsd2FpdER1cmF0aW9uOm51bWJlciA9IDAuODUsZGVsYXk6bnVtYmVyID0gMCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmFkZVNwZWVkID0gZmFkZVNwZWVkO1xyXG4gICAgICAgIHRoaXMud2FpdER1cmF0aW9uID0gd2FpdER1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcclxuICAgICAgICB0aGlzLnNwbGFzaFR5cGUgPSBTcGxhc2hUeXBlLk5vbmU7XHJcbiAgICAgICAgdGhpcy5tU3RhdHVzID0gRmFkZVN0YXR1cy5GYWRlSW47XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvua3oeWFpeeJueaViFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBQbGF5U3BsYXNoRmFkZUluKGZhZGVTcGVlZDpudW1iZXIgPSAxLjAsIGRlbGF5Om51bWJlciA9IDApOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZhZGVTcGVlZCA9IGZhZGVTcGVlZDtcclxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgdGhpcy5zcGxhc2hUeXBlID0gU3BsYXNoVHlwZS5TaW5nbGVPbmx5O1xyXG4gICAgICAgIHRoaXMubVN0YXR1cyA9IEZhZGVTdGF0dXMuRmFkZUluO1xyXG4gICAgICAgIHRoaXMubUFscGhhID0gMC4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmkq3mlL7mt6Hlh7rnibnmlYhcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgUGxheVNwbGFzaEZhZGVPdXQoZmFkZVNwZWVkOm51bWJlciA9IDEuMCxkZWxheTpudW1iZXIgPSAwKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mYWRlU3BlZWQgPSBmYWRlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xyXG4gICAgICAgIHRoaXMuc3BsYXNoVHlwZSA9IFNwbGFzaFR5cGUuU2luZ2xlT25seTtcclxuICAgICAgICB0aGlzLm1TdGF0dXMgPSBGYWRlU3RhdHVzLkZhZGVPdXQ7XHJcbiAgICAgICAgdGhpcy5tQWxwaGEgPSAxLjA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWxheSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5IC09IGR0O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMubVN0YXR1cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRmFkZVN0YXR1cy5GYWRlSW46XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tQWxwaGEgKz0gdGhpcy5mYWRlU3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tQWxwaGEgPj0gMS4wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3BsYXNoVHlwZSAhPSBTcGxhc2hUeXBlLlNpbmdsZU9ubHkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1TdGF0dXMgPSBGYWRlU3RhdHVzLkZhZGVXYWl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXRUaW1lID0gdGhpcy53YWl0RHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubUFscGhhID0gMS4wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5PbkZhZGVJbkZpbmlzaCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25GYWRlSW5GaW5pc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGYWRlU3RhdHVzLkZhZGVPdXQ6XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1BbHBoYSAtPSB0aGlzLmZhZGVTcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1BbHBoYSA8PSAwLjApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tU3RhdHVzID0gRmFkZVN0YXR1cy5GYWRlRmluaXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubUFscGhhID0gMC4wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5PbkZhZGVPdXRGaW5pc2ggIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk9uRmFkZU91dEZpbmlzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGYWRlU3RhdHVzLkZhZGVXYWl0OlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwbGFzaFR5cGUgIT0gU3BsYXNoVHlwZS5TaW5nbGVPbmx5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdFRpbWUgLT0gZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMud2FpdFRpbWUgPD0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVN0YXR1cyA9IEZhZGVTdGF0dXMuRmFkZU91dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXRlVXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zcGxhc2hMb2dvICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+e7mOWItkxvZ29cclxuICAgICAgICAgICAgLy9HVUkuY29sb3IgPSBuZXcgQ29sb3IoR1VJLmNvbG9yLnIsIEdVSS5jb2xvci5nLCBHVUkuY29sb3IuYiwgTWF0aGYuQ2xhbXAobUFscGhhLCAwLCAxKSk7XHJcbiAgICAgICAgICAgIC8vR1VJLkRyYXdUZXh0dXJlKG1TcGxhc2hMb2dvUG9zLCBzcGxhc2hMb2dvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKnZvaWQgT25MZXZlbFdhc0xvYWRlZChpbnQgaW5kZXgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoc3BsYXNoVHlwZSA9PSBTcGxhc2hUeXBlLkxvYWRTY2VuZVRoZW5GYWRlT3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbVN0YXR1cyA9IEZhZGVTdGF0dXMuRmFkZU91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vUGxheVNwbGFzaEZhZGVPdXQoMC41ZiwwLjI1Zik7XHJcblxyXG4gICAgICAgIE9uRmFkZUluRmluaXNoID0gbnVsbDtcclxuICAgICAgICBPbkZhZGVPdXRGaW5pc2ggPSBudWxsO1xyXG4gICAgfSovXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=