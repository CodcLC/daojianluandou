
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/audio/SoundClip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxhdWRpb1xcU291bmRDbGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDLElBQVksYUFrQlg7QUFsQkQsV0FBWSxhQUFhO0lBRXJCLGlEQUFRLENBQUE7SUFDUixtREFBSyxDQUFBO0lBQ0wsbURBQUssQ0FBQTtJQUNMLG1EQUFLLENBQUE7SUFDTCxtREFBSyxDQUFBO0lBQ0wsbURBQUssQ0FBQTtJQUNMLG1EQUFLLENBQUE7SUFDTCxtREFBSyxDQUFBO0lBQ0wsdURBQU8sQ0FBQTtJQUNQLGlEQUFJLENBQUE7SUFDSixvREFBSyxDQUFBO0lBQ0wsa0RBQUksQ0FBQTtJQUNKLDREQUFTLENBQUE7SUFDVCx3REFBTyxDQUFBO0lBQ1Asa0RBQUksQ0FBQTtBQUVSLENBQUMsRUFsQlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFrQnhCO0FBR0Q7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFZQztRQVJVLGNBQVEsR0FBVSxFQUFFLENBQUM7UUFHckIsVUFBSSxHQUFpQixhQUFhLENBQUMsSUFBSSxDQUFDO1FBR3hDLFVBQUksR0FBZ0IsSUFBSSxDQUFDOztJQUVwQyxDQUFDO0lBUkc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUM7MkNBQ087SUFHL0M7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzJDQUNFO0lBVGYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVc3QjtJQUFELGdCQUFDO0NBWEQsQUFXQyxDQVhzQyxFQUFFLENBQUMsU0FBUyxHQVdsRDtrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU291bmRDbGlwVHlwZVxyXG57XHJcbiAgICBub25lID0gMCxcclxuICAgIGtpbGwxLFxyXG4gICAga2lsbDIsXHJcbiAgICBraWxsMyxcclxuICAgIGtpbGw0LFxyXG4gICAga2lsbDUsXHJcbiAgICBraWxsNixcclxuICAgIGtpbGw3LFxyXG4gICAga2lsbE1hbSxcclxuICAgIHBpY2ssXHJcbiAgICBrZmhpdCxcclxuICAgIGRpZGEsXHJcbiAgICBibGFja2hvbGUsXHJcbiAgICB2aWN0b3J5LFxyXG4gICAgZmFpbCxcclxuXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kQ2xpcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHB1YmxpYyBjbGlwTmFtZTpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5FbnVtKFNvdW5kQ2xpcFR5cGUpfSlcclxuICAgIHB1YmxpYyB0eXBlOlNvdW5kQ2xpcFR5cGUgPSBTb3VuZENsaXBUeXBlLm5vbmU7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBwdWJsaWMgY2xpcDpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgIFxyXG59Il19