"use strict";
cc._RF.push(module, 'fe7b4FtJWRPL4N7yBtkCip/', 'SoundClip');
// script/tscript/audio/SoundClip.ts

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
var SoundClipType;
(function (SoundClipType) {
    SoundClipType[SoundClipType["none"] = 0] = "none";
    SoundClipType[SoundClipType["kill1"] = 1] = "kill1";
    SoundClipType[SoundClipType["kill2"] = 2] = "kill2";
    SoundClipType[SoundClipType["kill3"] = 3] = "kill3";
    SoundClipType[SoundClipType["kill4"] = 4] = "kill4";
    SoundClipType[SoundClipType["kill5"] = 5] = "kill5";
    SoundClipType[SoundClipType["kill6"] = 6] = "kill6";
    SoundClipType[SoundClipType["kill7"] = 7] = "kill7";
    SoundClipType[SoundClipType["killMam"] = 8] = "killMam";
    SoundClipType[SoundClipType["pick"] = 9] = "pick";
    SoundClipType[SoundClipType["kfhit"] = 10] = "kfhit";
    SoundClipType[SoundClipType["dida"] = 11] = "dida";
    SoundClipType[SoundClipType["blackhole"] = 12] = "blackhole";
    SoundClipType[SoundClipType["victory"] = 13] = "victory";
    SoundClipType[SoundClipType["fail"] = 14] = "fail";
})(SoundClipType = exports.SoundClipType || (exports.SoundClipType = {}));
var SoundClip = /** @class */ (function (_super) {
    __extends(SoundClip, _super);
    function SoundClip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clipName = "";
        _this.type = SoundClipType.none;
        _this.clip = null;
        return _this;
    }
    __decorate([
        property(cc.String)
    ], SoundClip.prototype, "clipName", void 0);
    __decorate([
        property({ type: cc.Enum(SoundClipType) })
    ], SoundClip.prototype, "type", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundClip.prototype, "clip", void 0);
    SoundClip = __decorate([
        ccclass
    ], SoundClip);
    return SoundClip;
}(cc.Component));
exports.default = SoundClip;

cc._RF.pop();