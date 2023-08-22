
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/LevelMessageUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5449f0wN5pH8aXxO522sGOD', 'LevelMessageUI');
// script/tscript/ui/main/LevelMessageUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelIcon_1 = require("./LevelIcon");
var BaseUI_1 = require("../base/BaseUI");
var DataManager_1 = require("../../core/DataManager");
var Mathf_1 = require("../../util/Mathf");
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
var ContentType;
(function (ContentType) {
    ContentType[ContentType["none"] = 0] = "none";
    ContentType[ContentType["fhl"] = 1] = "fhl";
    ContentType[ContentType["rocket"] = 2] = "rocket";
    ContentType[ContentType["magnet"] = 3] = "magnet";
    ContentType[ContentType["blackHole"] = 10] = "blackHole";
    ContentType[ContentType["staticMeteor"] = 11] = "staticMeteor";
    ContentType[ContentType["moveMeteor"] = 12] = "moveMeteor";
    ContentType[ContentType["other"] = 100] = "other";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var LevelMessageUI = /** @class */ (function (_super) {
    __extends(LevelMessageUI, _super);
    function LevelMessageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.touchPlane = null;
        _this.title = null;
        _this.levelIcon = null;
        _this.contentIcon = null;
        _this.leftBtn = null;
        _this.rightBtn = null;
        _this.unlockTxt = null;
        _this.detailTxt = null;
        _this.contentImgArr = [];
        _this.contentIndex = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    LevelMessageUI.prototype.onLoad = function () {
        var _this = this;
        this.basePos = this.node.position;
        this.scheduleOnce(function () {
            _this.close();
        }, 0.01);
    };
    LevelMessageUI.prototype.start = function () {
        var _this = this;
        var contentLen = DataManager_1.default.instance.ctlevelConfigDatas.length;
        this.touchPlane.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.close();
        }, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.contentIndex = Mathf_1.default.clamp(_this.contentIndex - 1, 0, contentLen - 1);
            _this.showMsg();
        }, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.contentIndex = Mathf_1.default.clamp(_this.contentIndex + 1, 0, contentLen - 1);
            _this.showMsg();
        }, this);
        var level = DataManager_1.default.instance.getLevel(DataManager_1.default.instance.getPlayerData().star);
        this.contentIndex = level - 1;
    };
    LevelMessageUI.prototype.showMsg = function () {
        var levelcnfdata = DataManager_1.default.instance.ctlevelConfigDatas[this.contentIndex];
        this.levelIcon.updateSkin(levelcnfdata.id, false);
        this.unlockTxt.string = "\u83B7\u5F97" + levelcnfdata.stars + "\u661F\u89E3\u9501";
        this.detailTxt.string = levelcnfdata.newContent;
        if (levelcnfdata.contentType == 100) {
            this.title.active = false;
            this.detailTxt.node.x = 110;
            this.detailTxt.node.y = -18;
        }
        else {
            this.title.active = true;
            this.detailTxt.node.x = 158;
            this.detailTxt.node.y = -43;
        }
        this.contentIcon.spriteFrame = this.contentImgArr[levelcnfdata.contentType];
    };
    // update (dt) {}
    LevelMessageUI.prototype.open = function () {
        _super.prototype.open.call(this);
        this.touchPlane.active = true;
        this.panel.stopAllActions();
        this.panel.y = -250;
        this.panel.runAction(cc.moveTo(0.65, 0, 0).easing(cc.easeCubicActionOut()));
        this.showMsg();
    };
    LevelMessageUI.prototype.close = function () {
        var _this = this;
        this.panel.stopAllActions();
        this.touchPlane.active = false;
        //super.close();
        var seq = cc.sequence(cc.moveTo(0.65, 0, -250).easing(cc.easeCubicActionOut()), cc.callFunc(function () {
            _super.prototype.close.call(_this);
        }, this));
        this.panel.runAction(seq);
    };
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "panel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "touchPlane", void 0);
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "title", void 0);
    __decorate([
        property(LevelIcon_1.default)
    ], LevelMessageUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], LevelMessageUI.prototype, "contentIcon", void 0);
    __decorate([
        property(cc.Button)
    ], LevelMessageUI.prototype, "leftBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LevelMessageUI.prototype, "rightBtn", void 0);
    __decorate([
        property(cc.Label)
    ], LevelMessageUI.prototype, "unlockTxt", void 0);
    __decorate([
        property(cc.Label)
    ], LevelMessageUI.prototype, "detailTxt", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelMessageUI.prototype, "contentImgArr", void 0);
    LevelMessageUI = __decorate([
        ccclass
    ], LevelMessageUI);
    return LevelMessageUI;
}(BaseUI_1.default));
exports.default = LevelMessageUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcTGV2ZWxNZXNzYWdlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFDcEMsc0RBQWlEO0FBQ2pELDBDQUFxQztBQUdyQyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDLElBQVksV0FXWDtBQVhELFdBQVksV0FBVztJQUVuQiw2Q0FBUSxDQUFBO0lBQ1IsMkNBQU8sQ0FBQTtJQUNQLGlEQUFVLENBQUE7SUFDVixpREFBVSxDQUFBO0lBQ1Ysd0RBQWMsQ0FBQTtJQUNkLDhEQUFpQixDQUFBO0lBQ2pCLDBEQUFlLENBQUE7SUFFZixpREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQVhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBV3RCO0FBR0Q7SUFBNEMsa0NBQU07SUFEbEQ7UUFBQSxxRUF5SUM7UUFySUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFJN0Isa0JBQVksR0FBVSxDQUFDLENBQUM7O0lBc0dwQyxDQUFDO0lBbkdHLHdCQUF3QjtJQUd4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O2lEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO3FEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNZO0lBOUJwQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBd0lsQztJQUFELHFCQUFDO0NBeElELEFBd0lDLENBeEkyQyxnQkFBTSxHQXdJakQ7a0JBeElvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsSWNvbiBmcm9tIFwiLi9MZXZlbEljb25cIjtcclxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vYmFzZS9CYXNlVUlcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBNYXRoZiBmcm9tIFwiLi4vLi4vdXRpbC9NYXRoZlwiO1xyXG5pbXBvcnQgTGV2ZWxDb25maWdEYXRhIGZyb20gXCIuLi8uLi9jb25maWdkYXRhL0xldmVsQ29uZmlnRGF0YVwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBDb250ZW50VHlwZVxyXG57XHJcbiAgICBub25lID0gMCxcclxuICAgIGZobCA9IDEsXHJcbiAgICByb2NrZXQgPSAyLFxyXG4gICAgbWFnbmV0ID0gMyxcclxuICAgIGJsYWNrSG9sZSA9IDEwLFxyXG4gICAgc3RhdGljTWV0ZW9yID0gMTEsXHJcbiAgICBtb3ZlTWV0ZW9yID0gMTIsXHJcbiAgICBcclxuICAgIG90aGVyID0gMTAwLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbE1lc3NhZ2VVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3VjaFBsYW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTGV2ZWxJY29uKVxyXG4gICAgbGV2ZWxJY29uOiBMZXZlbEljb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBjb250ZW50SWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbGVmdEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcmlnaHRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdW5sb2NrVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGV0YWlsVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY29udGVudEltZ0FycjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb250ZW50SW5kZXg6bnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZVBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSwwLjAxKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRlbnRMZW4gPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdGxldmVsQ29uZmlnRGF0YXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoUGxhbmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJbmRleCA9IE1hdGhmLmNsYW1wKHRoaXMuY29udGVudEluZGV4IC0gMSwwLGNvbnRlbnRMZW4gLSAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01zZygpO1xyXG5cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRJbmRleCA9IE1hdGhmLmNsYW1wKHRoaXMuY29udGVudEluZGV4ICsgMSwwLGNvbnRlbnRMZW4gLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TXNnKCk7XHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHZhciBsZXZlbCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldExldmVsKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRJbmRleCA9IGxldmVsIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93TXNnKClcclxuICAgIHtcclxuICAgICAgICB2YXIgbGV2ZWxjbmZkYXRhOkxldmVsQ29uZmlnRGF0YSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmN0bGV2ZWxDb25maWdEYXRhc1t0aGlzLmNvbnRlbnRJbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxJY29uLnVwZGF0ZVNraW4obGV2ZWxjbmZkYXRhLmlkLGZhbHNlKTtcclxuICAgICAgICB0aGlzLnVubG9ja1R4dC5zdHJpbmcgPSBg6I635b6XJHtsZXZlbGNuZmRhdGEuc3RhcnN95pif6Kej6ZSBYDtcclxuICAgICAgICB0aGlzLmRldGFpbFR4dC5zdHJpbmcgPSBsZXZlbGNuZmRhdGEubmV3Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYobGV2ZWxjbmZkYXRhLmNvbnRlbnRUeXBlID09IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsVHh0Lm5vZGUueCA9IDExMDtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxUeHQubm9kZS55ID0gLTE4O1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsVHh0Lm5vZGUueCA9IDE1ODtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxUeHQubm9kZS55ID0gLTQzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50SWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuY29udGVudEltZ0FycltsZXZlbGNuZmRhdGEuY29udGVudFR5cGVdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcHVibGljIG9wZW4oKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFBsYW5lLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWwuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBhbmVsLnkgPSAtMjUwO1xyXG4gICAgICAgIHRoaXMucGFuZWwucnVuQWN0aW9uKGNjLm1vdmVUbygwLjY1LDAsMCkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zaG93TXNnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbC5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoUGxhbmUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vc3VwZXIuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjY1LDAsLTI1MCkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG5cclxuICAgICAgICB9LHRoaXMpKVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsLnJ1bkFjdGlvbihzZXEpXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==