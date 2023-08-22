
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/audio/BgSoundClip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxhdWRpb1xcQmdTb3VuZENsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFFMUMsSUFBWSxlQVNYO0FBVEQsV0FBWSxlQUFlO0lBRXZCLHFEQUFRLENBQUE7SUFDUixxREFBUSxDQUFBO0lBQ1IseURBQVUsQ0FBQTtJQUNWLHlEQUFVLENBQUE7SUFDVix5REFBVSxDQUFBO0lBQ1YseURBQVUsQ0FBQTtJQUNWLHlEQUFVLENBQUE7QUFDZCxDQUFDLEVBVFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFTMUI7QUFHRDtJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQVVDO1FBUFUsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUdyQixVQUFJLEdBQW1CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFHNUMsVUFBSSxHQUFnQixJQUFJLENBQUM7O0lBQ3BDLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQzs2Q0FDUztJQUduRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NkNBQ0U7SUFSZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBUy9CO0lBQUQsa0JBQUM7Q0FURCxBQVNDLENBVHdDLEVBQUUsQ0FBQyxTQUFTLEdBU3BEO2tCQVRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBCZ1NvdW5kQ2xpcFR5cGVcclxue1xyXG4gICAgbm9uZSA9IDAsXHJcbiAgICBtYWluID0gMSxcclxuICAgIGxldmVsMSA9IDIsXHJcbiAgICBsZXZlbDIgPSAzLFxyXG4gICAgbGV2ZWwzID0gNCxcclxuICAgIGxldmVsNCA9IDUsXHJcbiAgICBsZXZlbDUgPSA2LFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ1NvdW5kQ2xpcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgcHVibGljIGNsaXBOYW1lOnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkVudW0oQmdTb3VuZENsaXBUeXBlKX0pXHJcbiAgICBwdWJsaWMgdHlwZTpCZ1NvdW5kQ2xpcFR5cGUgPSBCZ1NvdW5kQ2xpcFR5cGUubm9uZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIHB1YmxpYyBjbGlwOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbn1cclxuIl19