
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/CommonUils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4d69/p1JFKgId+Qa96rIlv', 'CommonUils');
// script/tscript/util/CommonUils.ts

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
var CommonUils = /** @class */ (function () {
    function CommonUils() {
    }
    /**
     * 获得相对于某个节点的位置
     * @param relaNode
     * @param targetNode
     */
    CommonUils.transRelativePos = function (relaNode, targetNode) {
        var worldPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
        var relaPos = relaNode.parent.convertToNodeSpaceAR(worldPos);
        return relaPos;
    };
    CommonUils.transRelativeFromPos = function (relaNode, position) {
        var worldPos = relaNode.convertToWorldSpaceAR(position);
        var pos = cc.v2(worldPos.x - cc.winSize.width * 0.5, worldPos.y - cc.winSize.height * 0.5);
        return pos;
    };
    CommonUils.converCHNumber = function (num) {
        num = Math.floor(num);
        if (num < 0)
            num = 0;
        if (num > 9)
            num = 9;
        return this.chNumArr[num];
    };
    CommonUils.chNumArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    CommonUils = __decorate([
        ccclass
    ], CommonUils);
    return CommonUils;
}());
exports.default = CommonUils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxDb21tb25VaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQUE7SUFzQ0EsQ0FBQztJQWpDRTs7OztPQUlHO0lBQ1csMkJBQWdCLEdBQTlCLFVBQStCLFFBQWdCLEVBQUMsVUFBa0I7UUFFN0QsSUFBSSxRQUFRLEdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEYsSUFBSSxPQUFPLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxPQUFPLE9BQU8sQ0FBQztJQUNwQixDQUFDO0lBSWEsK0JBQW9CLEdBQWxDLFVBQW1DLFFBQWdCLEVBQUMsUUFBZ0I7UUFFL0QsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMxRixPQUFPLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBRWEseUJBQWMsR0FBNUIsVUFBNkIsR0FBVTtRQUVyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ0wsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUcsR0FBRyxHQUFHLENBQUM7WUFDTCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFqQ2dCLG1CQUFRLEdBQVksQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUg3RCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc0M5QjtJQUFELGlCQUFDO0NBdENELEFBc0NDLElBQUE7a0JBdENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblVpbHMge1xyXG5cclxuXHJcbiAgICAgcHJpdmF0ZSBzdGF0aWMgY2hOdW1BcnI6c3RyaW5nW10gPSBbXCLpm7ZcIixcIuS4gFwiLFwi5LqMXCIsXCLkuIlcIixcIuWbm1wiLFwi5LqUXCIsXCLlha1cIixcIuS4g1wiLFwi5YWrXCIsXCLkuZ1cIl07XHJcblxyXG4gICAvKipcclxuICAgICog6I635b6X55u45a+55LqO5p+Q5Liq6IqC54K555qE5L2N572uXHJcbiAgICAqIEBwYXJhbSByZWxhTm9kZSBcclxuICAgICogQHBhcmFtIHRhcmdldE5vZGUgXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIHRyYW5zUmVsYXRpdmVQb3MocmVsYU5vZGU6Y2MuTm9kZSx0YXJnZXROb2RlOmNjLk5vZGUpOmNjLlZlYzJcclxuICAge1xyXG4gICAgICAgIHZhciB3b3JsZFBvczpjYy5WZWMyID0gdGFyZ2V0Tm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldE5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHZhciByZWxhUG9zOmNjLlZlYzIgPSByZWxhTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHJldHVybiByZWxhUG9zO1xyXG4gICB9XHJcblxyXG4gICBcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgdHJhbnNSZWxhdGl2ZUZyb21Qb3MocmVsYU5vZGU6Y2MuTm9kZSxwb3NpdGlvbjpjYy5WZWMyKTpjYy5WZWMyXHJcbiAgIHtcclxuICAgICAgICB2YXIgd29ybGRQb3MgPSByZWxhTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zaXRpb24pO1xyXG4gICAgICAgIHZhciBwb3MgPSBjYy52Mih3b3JsZFBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAqIDAuNSx3b3JsZFBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29udmVyQ0hOdW1iZXIobnVtOm51bWJlcik6c3RyaW5nXHJcbiAgIHtcclxuICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgaWYobnVtIDwgMClcclxuICAgICAgICAgIG51bSA9IDA7XHJcbiAgICAgXHJcbiAgICAgaWYobnVtID4gOSlcclxuICAgICAgICAgIG51bSA9IDk7XHJcblxyXG4gICAgIHJldHVybiB0aGlzLmNoTnVtQXJyW251bV07XHJcbiAgIH1cclxuICAgXHJcbn1cclxuIl19