
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Guide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8069eAiwitAFqEk/ApiAoTv', 'Guide');
// script/tscript/gamescene/Guide.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MovieClip_1 = require("../util/MovieClip");
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
var Guide = /** @class */ (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msgTxt = null;
        _this.guideMovieClip = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Guide.prototype.start = function () {
        this.node.position = cc.Vec2.ZERO;
        this.guideMovieClip.node.active = false;
        var self = this;
        this.scheduleOnce(function () {
            self.guideMovieClip.node.active = true;
            self.scheduleOnce(function () {
                self.guideMovieClip.node.destroy();
            }, 5);
        }, 1.0);
        this.msgTxt.string = "";
        var i = 0;
        var msgsArr = ["松开手指龟缩防御", "按住屏幕移动捡刀", "攻击敌人圆心"];
        this.schedule(function () {
            if (i < msgsArr.length) {
                self.msgTxt.string = msgsArr[i];
            }
            else {
                self.node.destroy();
            }
            i++;
        }, 4, 3);
    };
    Guide.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], Guide.prototype, "msgTxt", void 0);
    __decorate([
        property(MovieClip_1.default)
    ], Guide.prototype, "guideMovieClip", void 0);
    Guide = __decorate([
        ccclass
    ], Guide);
    return Guide;
}(cc.Component));
exports.default = Guide;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEd1aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFMUMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQXVEQztRQW5ERyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLG9CQUFjLEdBQWMsSUFBSSxDQUFDOztJQWdEckMsQ0FBQztJQTlDRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBRWQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUNSLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUdQLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLE9BQU8sR0FBWSxDQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVWLElBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQ3JCO2dCQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQztpQkFDRDtnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1lBRUQsQ0FBQyxFQUFFLENBQUM7UUFDUixDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUdELHNCQUFNLEdBQU4sVUFBUSxFQUFFO0lBR1YsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7aURBQ2E7SUFOaEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXNEekI7SUFBRCxZQUFDO0NBdERELEFBc0RDLENBdERrQyxFQUFFLENBQUMsU0FBUyxHQXNEOUM7a0JBdERvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllQ2xpcCBmcm9tIFwiLi4vdXRpbC9Nb3ZpZUNsaXBcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbXNnVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1vdmllQ2xpcClcclxuICAgIGd1aWRlTW92aWVDbGlwOiBNb3ZpZUNsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICB0aGlzLmd1aWRlTW92aWVDbGlwLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuZ3VpZGVNb3ZpZUNsaXAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuZ3VpZGVNb3ZpZUNsaXAubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sNSlcclxuICAgICAgICB9LDEuMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm1zZ1R4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBpID0gMDsgXHJcbiAgICAgICAgdmFyIG1zZ3NBcnI6c3RyaW5nW10gPSBbXCLmnb7lvIDmiYvmjIfpvp/nvKnpmLLlvqFcIixcIuaMieS9j+Wxj+W5leenu+WKqOaNoeWIgFwiLFwi5pS75Ye75pWM5Lq65ZyG5b+DXCJdO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBpZihpIDwgbXNnc0Fyci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubXNnVHh0LnN0cmluZyA9IG1zZ3NBcnJbaV07XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9LDQsMylcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=