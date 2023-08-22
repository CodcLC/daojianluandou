
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/message/MessageUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6990fZxq6hHgIdL4yLKxT0s', 'MessageUI');
// script/tscript/ui/message/MessageUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var SoundClip_1 = require("../../audio/SoundClip");
var SoundManager_1 = require("../../core/SoundManager");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessageUI = /** @class */ (function (_super) {
    __extends(MessageUI, _super);
    function MessageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.killerNameTxt = null;
        _this.dieManTxt = null;
        _this.jisha = null;
        _this.jishaArr = [];
        _this.bg = null;
        _this.killAcount = null;
        // LIFE-CYCLE CALLBACKS:
        //private killMsgArr:string[] = ["","双杀","三杀","四杀","五杀","六杀","七杀","八杀","九杀","十杀"];
        _this.soundClipTypes = [
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill5,
            SoundClip_1.SoundClipType.kill6,
            SoundClip_1.SoundClipType.kill7
        ];
        return _this;
    }
    //onLoad () {}
    MessageUI.prototype.start = function () {
        //var renderTexture = new cc.RenderTexture()
    };
    // update (dt) {}
    MessageUI.prototype.showMessage = function (killer, dieMan) {
        var _this = this;
        if (killer.isAI)
            return;
        this.unscheduleAllCallbacks();
        this.killerNameTxt.string = killer.getName();
        this.dieManTxt.string = dieMan.getName();
        this.bg.node.color = killer.body.node.color;
        if (!killer.isAI) {
            this.killAcount.active = true;
            this.jisha.spriteFrame = this.jishaArr[killer.killCount - 1];
            SoundManager_1.default.instance.playAudioClip(this.soundClipTypes[killer.killCount - 1]);
        }
        else {
            this.killAcount.active = false;
        }
        this.open();
        this.scheduleOnce(function () {
            _this.close();
        }, 1);
    };
    __decorate([
        property(cc.Label)
    ], MessageUI.prototype, "killerNameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], MessageUI.prototype, "dieManTxt", void 0);
    __decorate([
        property(cc.Sprite)
    ], MessageUI.prototype, "jisha", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MessageUI.prototype, "jishaArr", void 0);
    __decorate([
        property(cc.Sprite)
    ], MessageUI.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], MessageUI.prototype, "killAcount", void 0);
    MessageUI = __decorate([
        ccclass
    ], MessageUI);
    return MessageUI;
}(BaseUI_1.default));
exports.default = MessageUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWVzc2FnZVxcTWVzc2FnZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFcEMsbURBQXNEO0FBQ3RELHdEQUFtRDtBQUVuRCxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBRDdDO1FBQUEscUVBeUVDO1FBckVHLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUloQyxRQUFFLEdBQWMsSUFBSSxDQUFDO1FBR3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHdCQUF3QjtRQUV4QixrRkFBa0Y7UUFDMUUsb0JBQWMsR0FBbUI7WUFDckMseUJBQWEsQ0FBQyxLQUFLO1lBQ25CLHlCQUFhLENBQUMsS0FBSztZQUNuQix5QkFBYSxDQUFDLEtBQUs7WUFDbkIseUJBQWEsQ0FBQyxLQUFLO1lBQ25CLHlCQUFhLENBQUMsS0FBSztZQUNuQix5QkFBYSxDQUFDLEtBQUs7WUFDbkIseUJBQWEsQ0FBQyxLQUFLO1NBQ3RCLENBQUE7O0lBd0NMLENBQUM7SUF0Q0csY0FBYztJQUVkLHlCQUFLLEdBQUw7UUFDSSw0Q0FBNEM7SUFDaEQsQ0FBQztJQUVELGlCQUFpQjtJQUVWLCtCQUFXLEdBQWxCLFVBQW1CLE1BQWEsRUFBQyxNQUFhO1FBQTlDLGlCQTRCQztRQTFCRyxJQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ2QsT0FBTztRQUNQLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU1QyxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFDZjtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0Qsc0JBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQ0Q7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDO1lBRWQsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNDO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFuQlYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdFN0I7SUFBRCxnQkFBQztDQXhFRCxBQXdFQyxDQXhFc0MsZ0JBQU0sR0F3RTVDO2tCQXhFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2Jhc2UvQmFzZVVJXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uLy4uL2dhbWVzY2VuZS9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU291bmRDbGlwVHlwZSB9IGZyb20gXCIuLi8uLi9hdWRpby9Tb3VuZENsaXBcIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9Tb3VuZE1hbmFnZXJcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlVUkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGtpbGxlck5hbWVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkaWVNYW5UeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgamlzaGE6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgamlzaGFBcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiZzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGtpbGxBY291bnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vcHJpdmF0ZSBraWxsTXNnQXJyOnN0cmluZ1tdID0gW1wiXCIsXCLlj4zmnYBcIixcIuS4ieadgFwiLFwi5Zub5p2AXCIsXCLkupTmnYBcIixcIuWFreadgFwiLFwi5LiD5p2AXCIsXCLlhavmnYBcIixcIuS5neadgFwiLFwi5Y2B5p2AXCJdO1xyXG4gICAgcHJpdmF0ZSBzb3VuZENsaXBUeXBlczpTb3VuZENsaXBUeXBlW10gPSBbXHJcbiAgICAgICAgU291bmRDbGlwVHlwZS5raWxsMSxcclxuICAgICAgICBTb3VuZENsaXBUeXBlLmtpbGwxLFxyXG4gICAgICAgIFNvdW5kQ2xpcFR5cGUua2lsbDEsXHJcbiAgICAgICAgU291bmRDbGlwVHlwZS5raWxsMSxcclxuICAgICAgICBTb3VuZENsaXBUeXBlLmtpbGw1LFxyXG4gICAgICAgIFNvdW5kQ2xpcFR5cGUua2lsbDYsXHJcbiAgICAgICAgU291bmRDbGlwVHlwZS5raWxsN1xyXG4gICAgXVxyXG5cclxuICAgIC8vb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgc2hvd01lc3NhZ2Uoa2lsbGVyOlBsYXllcixkaWVNYW46UGxheWVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGtpbGxlci5pc0FJKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5raWxsZXJOYW1lVHh0LnN0cmluZyA9IGtpbGxlci5nZXROYW1lKCk7XHJcbiAgICAgICAgdGhpcy5kaWVNYW5UeHQuc3RyaW5nID0gZGllTWFuLmdldE5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZy5ub2RlLmNvbG9yID0ga2lsbGVyLmJvZHkubm9kZS5jb2xvcjtcclxuXHJcbiAgICAgICAgaWYoIWtpbGxlci5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5raWxsQWNvdW50LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmppc2hhLnNwcml0ZUZyYW1lID0gdGhpcy5qaXNoYUFycltraWxsZXIua2lsbENvdW50IC0gMV07XHJcblxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcCh0aGlzLnNvdW5kQ2xpcFR5cGVzW2tpbGxlci5raWxsQ291bnQgLSAxXSk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbEFjb3VudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9LDEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=