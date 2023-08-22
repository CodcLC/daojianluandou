
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/common/PopupMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1647xeGrpNRrq7cNrPUxZu', 'PopupMsg');
// script/tscript/ui/common/PopupMsg.ts

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
var PopupMsg = /** @class */ (function (_super) {
    __extends(PopupMsg, _super);
    function PopupMsg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    PopupMsg.prototype.start = function () {
        var _this = this;
        var compCallback = cc.callFunc(function () {
            _this.destroySelf();
        }, this);
        var seq = cc.sequence(cc.spawn(cc.moveBy(1.0, 0, 150), cc.fadeTo(1.0, 25)), compCallback);
        this.node.runAction(seq);
    };
    PopupMsg.prototype.showText = function (msg, size, color) {
        this.label.string = msg;
        this.label.fontSize = size;
        this.label.node.color = color;
    };
    PopupMsg.prototype.destroySelf = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], PopupMsg.prototype, "label", void 0);
    PopupMsg = __decorate([
        ccclass
    ], PopupMsg);
    return PopupMsg;
}(cc.Component));
exports.default = PopupMsg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcY29tbW9uXFxQb3B1cE1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRzs7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQThCQztRQTFCVyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQTBCbEMsQ0FBQztJQXhCRyx3QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFSRyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFJUCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUdNLDJCQUFRLEdBQWYsVUFBZ0IsR0FBVSxFQUFDLElBQVcsRUFBQyxLQUFjO1FBRWpELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU0sOEJBQVcsR0FBbEI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDVztJQUhiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2QjVCO0lBQUQsZUFBQztDQTdCRCxBQTZCQyxDQTdCcUMsRUFBRSxDQUFDLFNBQVMsR0E2QmpEO2tCQTdCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cE1zZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB2YXIgY29tcENhbGxiYWNrID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95U2VsZigpO1xyXG4gICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLm1vdmVCeSgxLjAsMCwxNTApLGNjLmZhZGVUbygxLjAsMjUpKSxjb21wQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNob3dUZXh0KG1zZzpzdHJpbmcsc2l6ZTpudW1iZXIsY29sb3I6Y2MuQ29sb3IpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBtc2c7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5mb250U2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3lTZWxmKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==