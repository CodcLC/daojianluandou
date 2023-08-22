
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/base/TabSelectView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d93diVFzZAVp3APNl+nI+9', 'TabSelectView');
// script/tscript/ui/base/TabSelectView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SelectView_1 = require("./SelectView");
var TabButton_1 = require("./TabButton");
var View_1 = require("./View");
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
var TabSelectView = /** @class */ (function (_super) {
    __extends(TabSelectView, _super);
    function TabSelectView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabBtns = [];
        _this.selevtViews = [];
        _this.showView = null;
        return _this;
        // update (dt) {}
    }
    TabSelectView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.tabBtns.length; i++) {
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_START, function (event) {
                //SoundManager.instance.playAudioClip(SoundClipType.click);
            }, this);
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this);
        }
        this.selectTab(0);
    };
    TabSelectView.prototype.open = function () {
        _super.prototype.open.call(this);
        if (this.currentView) {
            this.currentView.awake();
        }
    };
    TabSelectView.prototype.close = function () {
        _super.prototype.close.call(this);
        if (this.currentView) {
            this.currentView.sleep();
        }
    };
    TabSelectView.prototype.selectTab = function (index) {
        if (index === void 0) { index = -1; }
        for (var i = 0; i < this.tabBtns.length; i++) {
            if (i != index) {
                if (this.tabBtns[i].selected) {
                    this.tabBtns[i].selected = false;
                }
            }
            else {
                if (!this.tabBtns[i].selected) {
                    this.tabBtns[i].selected = true;
                    if (this.currentView) {
                        this.currentView.sleep();
                    }
                    this.currentView = this.selevtViews[i];
                    this.currentView.node.setParent(this.showView);
                    this.currentView.node.position = cc.Vec2.ZERO;
                    this.currentView.awake();
                }
            }
        }
    };
    TabSelectView.prototype.onTouchUp = function (event) {
        var btnNode = event.currentTarget;
        var index = this.tabBtns.indexOf(btnNode.getComponent(TabButton_1.default));
        this.selectTab(index);
    };
    __decorate([
        property(TabButton_1.default)
    ], TabSelectView.prototype, "tabBtns", void 0);
    __decorate([
        property(SelectView_1.default)
    ], TabSelectView.prototype, "selevtViews", void 0);
    __decorate([
        property(cc.Node)
    ], TabSelectView.prototype, "showView", void 0);
    TabSelectView = __decorate([
        ccclass
    ], TabSelectView);
    return TabSelectView;
}(View_1.default));
exports.default = TabSelectView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcYmFzZVxcVGFiU2VsZWN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHlDQUFvQztBQUNwQywrQkFBMEI7QUFLMUIsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUsxQztJQUEyQyxpQ0FBSTtJQUQvQztRQUFBLHFFQTJGQztRQXZGVyxhQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUc5QixpQkFBVyxHQUFxQixFQUFFLENBQUM7UUFHbkMsY0FBUSxHQUFXLElBQUksQ0FBQzs7UUFnRmhDLGlCQUFpQjtJQUNyQixDQUFDO0lBN0VHLDhCQUFNLEdBQU47UUFFSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUVmLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDNUM7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLFVBQUMsS0FBeUI7Z0JBQzVFLDJEQUEyRDtZQUMvRCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUU7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFHTSw0QkFBSSxHQUFYO1FBRUksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQ25CO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBRUksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFDZCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQ25CO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFNBQWdCLENBQUM7UUFFOUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM1QztZQUVJLElBQUcsQ0FBQyxJQUFJLEtBQUssRUFDYjtnQkFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUMzQjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3BDO2FBRUo7aUJBQ0Q7Z0JBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUM1QjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBRWhDLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFDbkI7d0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDNUI7b0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzVCO2FBRUo7U0FDSjtJQUNMLENBQUM7SUFFTyxpQ0FBUyxHQUFqQixVQUFrQixLQUF5QjtRQUV2QyxJQUFJLE9BQU8sR0FBVyxLQUFLLENBQUMsYUFBd0IsQ0FBQztRQUVyRCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXBGRDtRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2tEQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3NEQUNzQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNjO0lBVGYsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBGakM7SUFBRCxvQkFBQztDQTFGRCxBQTBGQyxDQTFGMEMsY0FBSSxHQTBGOUM7a0JBMUZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdFZpZXcgZnJvbSBcIi4vU2VsZWN0Vmlld1wiO1xyXG5pbXBvcnQgVGFiQnV0dG9uIGZyb20gXCIuL1RhYkJ1dHRvblwiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZENsaXBUeXBlIH0gZnJvbSBcIi4uLy4uL2F1ZGlvL1NvdW5kQ2xpcFwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiU2VsZWN0VmlldyBleHRlbmRzIFZpZXcge1xyXG5cclxuICAgIEBwcm9wZXJ0eShUYWJCdXR0b24pXHJcbiAgICBwcml2YXRlIHRhYkJ0bnM6QXJyYXk8VGFiQnV0dG9uPiA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTZWxlY3RWaWV3KVxyXG4gICAgcHJpdmF0ZSBzZWxldnRWaWV3czpBcnJheTxTZWxlY3RWaWV3PiA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzaG93VmlldzpjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjdXJyZW50VmlldzpTZWxlY3RWaWV3O1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IHRoaXMudGFiQnRucy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQnRuc1tpXS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy9Tb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcChTb3VuZENsaXBUeXBlLmNsaWNrKTtcclxuICAgICAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50YWJCdG5zW2ldLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25Ub3VjaFVwLHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIoMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvcGVuKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VmlldylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuYXdha2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFZpZXcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnNsZWVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RUYWIoaW5kZXg6bnVtYmVyID0gLTEpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCB0aGlzLnRhYkJ0bnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaWYoaSAhPSBpbmRleCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFiQnRuc1tpXS5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJ0bnNbaV0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy50YWJCdG5zW2ldLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiQnRuc1tpXS5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFZpZXcpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnNsZWVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuc2VsZXZ0Vmlld3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5ub2RlLnNldFBhcmVudCh0aGlzLnNob3dWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3Lm5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5hd2FrZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoVXAoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICB2YXIgYnRuTm9kZTpjYy5Ob2RlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBjYy5Ob2RlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLnRhYkJ0bnMuaW5kZXhPZihidG5Ob2RlLmdldENvbXBvbmVudChUYWJCdXR0b24pKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIoaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcblxyXG5cclxuIl19