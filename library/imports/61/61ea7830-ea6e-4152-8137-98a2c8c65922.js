"use strict";
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