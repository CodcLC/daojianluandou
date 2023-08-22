
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/UpgradeUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6be2cv0QNxBkaYVJWnm3I3G', 'UpgradeUI');
// script/tscript/ui/main/UpgradeUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var WXSdk_1 = require("../../wx/WXSdk");
var LevelIcon_1 = require("./LevelIcon");
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
var UpgradeUI = /** @class */ (function (_super) {
    __extends(UpgradeUI, _super);
    function UpgradeUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnbackBtn = null;
        _this.showBtn = null;
        _this.recoverBtn = null;
        _this.title = null;
        _this.titleSkins = [];
        _this.levelIcon = null;
        _this.iconSkins = [];
        _this.onExit = null;
        _this.onRecover = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UpgradeUI.prototype.start = function () {
        var _this = this;
        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.close();
            _this.onExit && _this.onExit();
        }, this);
        this.showBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () {
                _this.close();
                _this.onExit && _this.onExit();
            }, function () { });
        }, this);
        this.recoverBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () {
                _this.close();
                _this.onRecover && _this.onRecover();
            }, function () { });
        }, this);
    };
    // update (dt) {}
    UpgradeUI.prototype.open = function () {
        _super.prototype.open.call(this);
        WXSdk_1.default.instance.showBottomBanner("adunit-d39672ca59cf15a2");
    };
    UpgradeUI.prototype.close = function () {
        _super.prototype.close.call(this);
        WXSdk_1.default.instance.removeBanner();
    };
    UpgradeUI.prototype.showUpgrade = function (levelId, up) {
        this.levelIcon.updateSkin(levelId);
        if (up) {
            this.showBtn.node.active = true;
            this.recoverBtn.node.active = false;
            this.title.spriteFrame = this.titleSkins[0];
        }
        else {
            this.showBtn.node.active = false;
            this.recoverBtn.node.active = true;
            this.title.spriteFrame = this.titleSkins[1];
        }
    };
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "turnbackBtn", void 0);
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "recoverBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], UpgradeUI.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], UpgradeUI.prototype, "titleSkins", void 0);
    __decorate([
        property(LevelIcon_1.default)
    ], UpgradeUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], UpgradeUI.prototype, "iconSkins", void 0);
    UpgradeUI = __decorate([
        ccclass
    ], UpgradeUI);
    return UpgradeUI;
}(BaseUI_1.default));
exports.default = UpgradeUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcVXBncmFkZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsd0NBQW1DO0FBQ25DLHlDQUFvQztBQUVwQyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBRDdDO1FBQUEscUVBbUdDO1FBOUZVLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHbkMsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEMsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUcxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBdUVyQyxDQUFDO0lBckVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtRQUFBLGlCQWdDQztRQTlCRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLFVBQUMsS0FBeUI7WUFFM0UsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxVQUFDLEtBQXlCO1lBRXZFLGVBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUV6QixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFakMsQ0FBQyxFQUFDLGNBQUssQ0FBQyxDQUFDLENBQUM7UUFHZCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLFVBQUMsS0FBeUI7WUFHNUUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBRXpCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixLQUFJLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV2QyxDQUFDLEVBQUMsY0FBSyxDQUFDLENBQUMsQ0FBQztRQUdkLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxpQkFBaUI7SUFFVix3QkFBSSxHQUFYO1FBRUksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFFSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNkLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLE9BQWMsRUFBQyxFQUFVO1FBRXhDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUcsRUFBRSxFQUNMO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7YUFDRDtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBRUwsQ0FBQztJQTdGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNnQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7Z0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUTtJQXRCaEIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtHN0I7SUFBRCxnQkFBQztDQWxHRCxBQWtHQyxDQWxHc0MsZ0JBQU0sR0FrRzVDO2tCQWxHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2Jhc2UvQmFzZVVJXCI7XHJcbmltcG9ydCBXWFNkayBmcm9tIFwiLi4vLi4vd3gvV1hTZGtcIjtcclxuaW1wb3J0IExldmVsSWNvbiBmcm9tIFwiLi9MZXZlbEljb25cIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGdyYWRlVUkgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHVibGljIHR1cm5iYWNrQnRuOmNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHB1YmxpYyBzaG93QnRuOmNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHB1YmxpYyByZWNvdmVyQnRuOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICB0aXRsZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICB0aXRsZVNraW5zOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KExldmVsSWNvbilcclxuICAgIGxldmVsSWNvbjogTGV2ZWxJY29uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpY29uU2tpbnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHVibGljIG9uRXhpdDpGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIG9uUmVjb3ZlcjpGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLnR1cm5iYWNrQnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25FeGl0ICYmIHRoaXMub25FeGl0KCk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zaGFyZVRvQW55T25lKCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkV4aXQgJiYgdGhpcy5vbkV4aXQoKTtcclxuXHJcbiAgICAgICAgICAgIH0sKCk9Pnt9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjb3ZlckJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uuc2hhcmVUb0FueU9uZSgoKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZWNvdmVyICYmIHRoaXMub25SZWNvdmVyKCk7XHJcblxyXG4gICAgICAgICAgICB9LCgpPT57fSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcHVibGljIG9wZW4oKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgICAgICBXWFNkay5pbnN0YW5jZS5zaG93Qm90dG9tQmFubmVyKFwiYWR1bml0LWQzOTY3MmNhNTljZjE1YTJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLnJlbW92ZUJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VXBncmFkZShsZXZlbElkOm51bWJlcix1cDpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGV2ZWxJY29uLnVwZGF0ZVNraW4obGV2ZWxJZCk7XHJcblxyXG4gICAgICAgIGlmKHVwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWNvdmVyQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlU2tpbnNbMF07XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlY292ZXJCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy50aXRsZVNraW5zWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19