
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61ea7gw6m5BUoE3mKLIxlki', 'SoundManager');
// script/tscript/core/SoundManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SoundClip_1 = require("../audio/SoundClip");
var BgSoundClip_1 = require("../audio/BgSoundClip");
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
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgAS = null;
        /// <summary>
        /// 背景声音
        /// </summary>
        //@property(BgSoundClip)
        //public bgSoundClips:BgSoundClip[] = [];
        _this.bgSoundSrc = null;
        _this.bgSoundDic = {};
        _this.soundSrc = null;
        _this.soundDic = {};
        _this.lastBgSound = BgSoundClip_1.BgSoundClipType.none;
        _this.mute = false;
        return _this;
        // update (dt) {}
    }
    SoundManager_1 = SoundManager;
    Object.defineProperty(SoundManager, "instance", {
        get: function () {
            if (this._instance == null) {
                /*cc.loader.loadRes("prefab/SoundManager",cc.Prefab,(err,prefab)=>{
                    var node:cc.Node = cc.instantiate(prefab);
                    this._instance = node.getComponent(SoundManager);
                });*/
                //this._instance = new SoundManager();
                //this._instance.init();
            }
            return SoundManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.prototype.onLoad = function () {
        if (!SoundManager_1._instance) {
            SoundManager_1._instance = this;
            cc.game.addPersistRootNode(this.node);
            this.init();
        }
        else {
            this.node.destroy();
        }
    };
    SoundManager.prototype.init = function () {
        var children = this.bgSoundSrc.children;
        for (var i = 0; i < children.length; i++) {
            var bgSoundClip = children[i].getComponent(BgSoundClip_1.default);
            this.bgSoundDic[bgSoundClip.type] = bgSoundClip;
        }
        children = this.soundSrc.children;
        for (var i = 0; i < children.length; i++) {
            var soundClip = children[i].getComponent(SoundClip_1.default);
            this.soundDic[soundClip.type] = soundClip;
        }
    };
    SoundManager.prototype.pause = function () {
        this.mute = true;
        cc.audioEngine.pauseAll();
        this.bgAS.pause();
    };
    SoundManager.prototype.resume = function () {
        this.mute = false;
        cc.audioEngine.resumeAll();
        this.bgAS.resume();
    };
    SoundManager.prototype.PlayBGSound = function (type, loop) {
        if (loop === void 0) { loop = true; }
        if (this.lastBgSound == BgSoundClip_1.BgSoundClipType.none)
            this.lastBgSound = type;
        this.bgAS.stop();
        this.bgAS.loop = loop;
        this.bgAS.clip = this.getBGSoundClip(type);
        if (!this.mute) {
            this.bgAS.play();
        }
    };
    SoundManager.prototype.getBGSoundClip = function (type) {
        if (this.bgSoundDic[type]) {
            return this.bgSoundDic[type].clip;
        }
        else {
            cc.log("不存在背景声音源 ", BgSoundClip_1.BgSoundClipType[type]);
            return null;
        }
    };
    SoundManager.prototype.playAudioClip = function (type) {
        if (this.mute) {
            return;
        }
        var name = SoundClip_1.SoundClipType[type];
        var clip = this.getSoundClip(type);
        if (clip != null) {
            cc.audioEngine.play(clip, false, 1);
        }
        else {
            cc.log("找不到资源id为 ", type, " PlayOtherSound声音配置");
        }
        //
    };
    SoundManager.prototype.getSoundClip = function (type) {
        if (this.soundDic[type]) {
            return this.soundDic[type].clip;
        }
        else {
            cc.log("不存在该种声音源 " + SoundClip_1.SoundClipType[type]);
            return null;
        }
    };
    var SoundManager_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "bgAS", void 0);
    __decorate([
        property(cc.Node)
    ], SoundManager.prototype, "bgSoundSrc", void 0);
    __decorate([
        property(cc.Node)
    ], SoundManager.prototype, "soundSrc", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxTb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4RDtBQUM5RCxvREFBb0U7QUFHcEUsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQW9KQztRQWxJVyxVQUFJLEdBQWtCLElBQUksQ0FBQztRQUluQyxhQUFhO1FBQ2IsUUFBUTtRQUNSLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIseUNBQXlDO1FBRWpDLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQThCLEVBQUUsQ0FBQztRQUczQyxjQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGNBQVEsR0FBNEIsRUFBRSxDQUFDO1FBRXZDLGlCQUFXLEdBQW1CLDZCQUFlLENBQUMsSUFBSSxDQUFDO1FBRW5ELFVBQUksR0FBVyxLQUFLLENBQUM7O1FBOEc3QixpQkFBaUI7SUFDckIsQ0FBQztxQkFuSm9CLFlBQVk7SUFHN0Isc0JBQWtCLHdCQUFRO2FBQTFCO1lBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDekI7Z0JBQ0k7OztxQkFHSztnQkFDTCxzQ0FBc0M7Z0JBQ3RDLHdCQUF3QjthQUMzQjtZQUNELE9BQU8sY0FBWSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQXdCRCw2QkFBTSxHQUFOO1FBRUksSUFBRyxDQUFDLGNBQVksQ0FBQyxTQUFTLEVBQzFCO1lBQ0ksY0FBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDOUIsRUFBRSxDQUFDLElB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QUFDLENBQUM7UUFFaEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUNoQjtZQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFFRDtZQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFHLElBQUksRUFBRyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsRUFBRTtJQUNOLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixJQUFrQjtRQUVsQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3ZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNuQzthQUVEO1lBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOztJQWhJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNVO0lBVW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2dCO0lBSWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUEvQmYsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1KaEM7SUFBRCxtQkFBQztDQW5KRCxBQW1KQyxDQW5KeUMsRUFBRSxDQUFDLFNBQVMsR0FtSnJEO2tCQW5Kb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3VuZENsaXAsIHsgU291bmRDbGlwVHlwZSB9IGZyb20gXCIuLi9hdWRpby9Tb3VuZENsaXBcIjtcclxuaW1wb3J0IEJnU291bmRDbGlwLCB7IEJnU291bmRDbGlwVHlwZSB9IGZyb20gXCIuLi9hdWRpby9CZ1NvdW5kQ2xpcFwiO1xyXG5cclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU291bmRNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU291bmRNYW5hZ2VyIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypjYy5sb2FkZXIubG9hZFJlcyhcInByZWZhYi9Tb3VuZE1hbmFnZXJcIixjYy5QcmVmYWIsKGVycixwcmVmYWIpPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbm9kZS5nZXRDb21wb25lbnQoU291bmRNYW5hZ2VyKTtcclxuICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgLy90aGlzLl9pbnN0YW5jZSA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcclxuICAgICAgICAgICAgLy90aGlzLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTb3VuZE1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBwcml2YXRlIGJnQVM6Y2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYXVkaW9EaWM6e1trZXk6bnVtYmVyXTpjYy5BdWRpb0NsaXB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOiDjOaZr+WjsOmfs1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIC8vQHByb3BlcnR5KEJnU291bmRDbGlwKVxyXG4gICAgLy9wdWJsaWMgYmdTb3VuZENsaXBzOkJnU291bmRDbGlwW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBiZ1NvdW5kU3JjOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZ1NvdW5kRGljOntba2V5Om51bWJlcl06QmdTb3VuZENsaXB9ID0ge307XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNvdW5kU3JjOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzb3VuZERpYzp7W2tleTpudW1iZXJdOlNvdW5kQ2xpcH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIGxhc3RCZ1NvdW5kOkJnU291bmRDbGlwVHlwZSA9IEJnU291bmRDbGlwVHlwZS5ub25lO1xyXG5cclxuICAgIHByaXZhdGUgbXV0ZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkICgpIFxyXG4gICAge1xyXG4gICAgICAgIGlmKCFTb3VuZE1hbmFnZXIuX2luc3RhbmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjaGlsZHJlbjpjYy5Ob2RlW10gPSB0aGlzLmJnU291bmRTcmMuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBiZ1NvdW5kQ2xpcDpCZ1NvdW5kQ2xpcCA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChCZ1NvdW5kQ2xpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmdTb3VuZERpY1tiZ1NvdW5kQ2xpcC50eXBlXSA9IGJnU291bmRDbGlwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnNvdW5kU3JjLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc291bmRDbGlwOlNvdW5kQ2xpcCA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChTb3VuZENsaXApO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kRGljW3NvdW5kQ2xpcC50eXBlXSA9IHNvdW5kQ2xpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm11dGUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5iZ0FTLnBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgdGhpcy5iZ0FTLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIFBsYXlCR1NvdW5kKHR5cGU6QmdTb3VuZENsaXBUeXBlLCBsb29wOmJvb2xlYW4gPSB0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RCZ1NvdW5kID09IEJnU291bmRDbGlwVHlwZS5ub25lKVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RCZ1NvdW5kID0gdHlwZTtcclxuICAgICAgICB0aGlzLmJnQVMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYmdBUy5sb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmJnQVMuY2xpcCA9IHRoaXMuZ2V0QkdTb3VuZENsaXAodHlwZSk7XHJcbiAgICAgICAgaWYoIXRoaXMubXV0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdBUy5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0QkdTb3VuZENsaXAodHlwZTpCZ1NvdW5kQ2xpcFR5cGUpOmNjLkF1ZGlvQ2xpcFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmJnU291bmREaWNbdHlwZV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZ1NvdW5kRGljW3R5cGVdLmNsaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuS4jeWtmOWcqOiDjOaZr+WjsOmfs+a6kCBcIiwgQmdTb3VuZENsaXBUeXBlW3R5cGVdKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5QXVkaW9DbGlwKHR5cGU6U291bmRDbGlwVHlwZSlcclxuICAgIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tdXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gU291bmRDbGlwVHlwZVt0eXBlXTtcclxuXHJcbiAgICAgICAgdmFyIGNsaXA6Y2MuQXVkaW9DbGlwID0gdGhpcy5nZXRTb3VuZENsaXAodHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChjbGlwICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsZmFsc2UsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaJvuS4jeWIsOi1hOa6kGlk5Li6IFwiICwgdHlwZSAsIFwiIFBsYXlPdGhlclNvdW5k5aOw6Z+z6YWN572uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTb3VuZENsaXAodHlwZTpTb3VuZENsaXBUeXBlKTpjYy5BdWRpb0NsaXBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZERpY1t0eXBlXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdW5kRGljW3R5cGVdLmNsaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuS4jeWtmOWcqOivpeenjeWjsOmfs+a6kCBcIiArIFNvdW5kQ2xpcFR5cGVbdHlwZV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==