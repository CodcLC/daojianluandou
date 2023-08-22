"use strict";
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