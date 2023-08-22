"use strict";
cc._RF.push(module, '55b43/MlypGNavaonI/Czvm', 'BgSoundClip');
// script/tscript/audio/BgSoundClip.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BgSoundClipType;
(function (BgSoundClipType) {
    BgSoundClipType[BgSoundClipType["none"] = 0] = "none";
    BgSoundClipType[BgSoundClipType["main"] = 1] = "main";
    BgSoundClipType[BgSoundClipType["level1"] = 2] = "level1";
    BgSoundClipType[BgSoundClipType["level2"] = 3] = "level2";
    BgSoundClipType[BgSoundClipType["level3"] = 4] = "level3";
    BgSoundClipType[BgSoundClipType["level4"] = 5] = "level4";
    BgSoundClipType[BgSoundClipType["level5"] = 6] = "level5";
})(BgSoundClipType = exports.BgSoundClipType || (exports.BgSoundClipType = {}));
var BgSoundClip = /** @class */ (function (_super) {
    __extends(BgSoundClip, _super);
    function BgSoundClip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clipName = "";
        _this.type = BgSoundClipType.none;
        _this.clip = null;
        return _this;
    }
    __decorate([
        property(cc.String)
    ], BgSoundClip.prototype, "clipName", void 0);
    __decorate([
        property({ type: cc.Enum(BgSoundClipType) })
    ], BgSoundClip.prototype, "type", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], BgSoundClip.prototype, "clip", void 0);
    BgSoundClip = __decorate([
        ccclass
    ], BgSoundClip);
    return BgSoundClip;
}(cc.Component));
exports.default = BgSoundClip;

cc._RF.pop();