
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/wx/SystemTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a26d3p99ilP1ZqFHCYHQRqX', 'SystemTools');
// script/tscript/wx/SystemTools.ts

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
var SystemTools = /** @class */ (function () {
    function SystemTools() {
    }
    SystemTools.format = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = str;
        if (args.length > 0) {
            var value = void 0;
            for (var key in args) {
                value = args[key];
                if (value != null && value.length != 0) {
                    var reg = new RegExp("\\{" + key + "\\}", "g");
                    result = result.replace(reg, value);
                }
            }
        }
        return result;
    };
    SystemTools = __decorate([
        ccclass
    ], SystemTools);
    return SystemTools;
}());
exports.default = SystemTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx3eFxcU3lzdGVtVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7O0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBQTtJQXNCQSxDQUFDO0lBcEJpQixrQkFBTSxHQUFwQixVQUFxQixHQUFVO1FBQUMsY0FBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYiw2QkFBYTs7UUFFekMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCO1lBQ0ksSUFBSSxLQUFLLFNBQUEsQ0FBQztZQUNWLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUNwQjtnQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ3JDO29CQUNJLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQU0sR0FBRyxRQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdkM7YUFDSjtTQUNKO1FBR0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQXJCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXNCL0I7SUFBRCxrQkFBQztDQXRCRCxBQXNCQyxJQUFBO2tCQXRCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1Ub29sc3tcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdChzdHI6c3RyaW5nLC4uLmFyZ3M6YW55W10pOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdHI7XHJcbiAgICAgICAgaWYoYXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJncykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJnc1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChgXFxcXHske2tleX1cXFxcfWAsXCJnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJlZywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==