
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/common/PopupText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e6fcfe6F9CqaGVaos3yc6A', 'PopupText');
// script/tscript/ui/common/PopupText.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesPool_1 = require("../../core/ResourcesPool");
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
var PopupText = /** @class */ (function (_super) {
    __extends(PopupText, _super);
    function PopupText() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.label = null;
        return _this;
    }
    PopupText.prototype.start = function () {
    };
    PopupText.prototype.showText = function (msg, size, color) {
        var _this = this;
        this.label.string = msg;
        this.label.fontSize = size;
        this.label.node.color = color;
        var compCallback = cc.callFunc(function () {
            _this.destroySelf();
        }, this);
        var seq = cc.sequence(cc.spawn(cc.moveBy(1.0, 0, 150), cc.fadeTo(1.0, 25)), compCallback);
        this.node.runAction(seq);
    };
    // update (dt) {}
    PopupText.prototype.getKey = function () {
        //return PopupText.name;
        return "PopupText";
    };
    PopupText.prototype.awake = function () {
        this.node.position = cc.Vec2.ZERO;
        this.node.active = true;
        this.node.color = cc.Color.WHITE;
        this.node.opacity = 255;
    };
    PopupText.prototype.sleep = function () {
        this.node.stopAllActions();
        this.node.parent = null;
        this.node.active = false;
    };
    PopupText.prototype.destroySelf = function () {
        ResourcesPool_1.default.instance.put(this, 45);
    };
    __decorate([
        property(cc.Label)
    ], PopupText.prototype, "label", void 0);
    PopupText = __decorate([
        ccclass
    ], PopupText);
    return PopupText;
}(cc.Component));
exports.default = PopupText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcY29tbW9uXFxQb3B1cFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUFrRTtBQUNsRSxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBR0ksd0JBQXdCO1FBSDVCLHFFQTJEQztRQXRERyxlQUFlO1FBSVAsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUFrRGxDLENBQUM7SUFoREcseUJBQUssR0FBTDtJQUVBLENBQUM7SUFHTSw0QkFBUSxHQUFmLFVBQWdCLEdBQVUsRUFBQyxJQUFXLEVBQUMsS0FBYztRQUFyRCxpQkFhQztRQVhHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUU5QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFUixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUVELGlCQUFpQjtJQUVWLDBCQUFNLEdBQWI7UUFHSSx3QkFBd0I7UUFDeEIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFDTSx5QkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUVJLHVCQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNXO0lBUmIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBEN0I7SUFBRCxnQkFBQztDQTFERCxBQTBEQyxDQTFEc0MsRUFBRSxDQUFDLFNBQVMsR0EwRGxEO2tCQTFEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVzb3VyY2VzUG9vbCwgeyBSZWN5Y2xlIH0gZnJvbSBcIi4uLy4uL2NvcmUvUmVzb3VyY2VzUG9vbFwiO1xyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IGltcGxlbWVudHMgUmVjeWNsZSB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93VGV4dChtc2c6c3RyaW5nLHNpemU6bnVtYmVyLGNvbG9yOmNjLkNvbG9yKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgIHRoaXMubGFiZWwuZm9udFNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICB2YXIgY29tcENhbGxiYWNrID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95U2VsZigpO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICBcclxuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZUJ5KDEuMCwwLDE1MCksY2MuZmFkZVRvKDEuMCwyNSkpLGNvbXBDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRLZXkoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAvL3JldHVybiBQb3B1cFRleHQubmFtZTtcclxuICAgICAgICByZXR1cm4gXCJQb3B1cFRleHRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXdha2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzbGVlcCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95U2VsZigpXHJcbiAgICB7XHJcbiAgICAgICAgUmVzb3VyY2VzUG9vbC5pbnN0YW5jZS5wdXQodGhpcyw0NSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==