
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/event/CustomEventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '401cdWF7V1NI5WcHpvjbKcu', 'CustomEventType');
// script/tscript/event/CustomEventType.ts

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
var CustomEventType = /** @class */ (function () {
    function CustomEventType() {
    }
    /**
     * 新的一天
     */
    CustomEventType.NewDay = "newDay";
    /**
     * 金币发生改变时
     */
    CustomEventType.CoinChange = "coinChange";
    /**
     * 黄金发生改变时
     */
    CustomEventType.GoldChange = "goldChange";
    /**
     * 钻石发生改变时
     */
    CustomEventType.DiamondChange = "diamondChange";
    /**
     * 钻石发生改变时
     */
    CustomEventType.ShareTicketUpdate = "shareTicketUpdate";
    return CustomEventType;
}());
exports.default = CustomEventType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxldmVudFxcQ3VzdG9tRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUduRztJQUFBO0lBNkJBLENBQUM7SUEzQkc7O09BRUc7SUFDVyxzQkFBTSxHQUFHLFFBQVEsQ0FBQztJQUVoQzs7T0FFRztJQUNXLDBCQUFVLEdBQUcsWUFBWSxDQUFDO0lBRXhDOztPQUVHO0lBQ1csMEJBQVUsR0FBRyxZQUFZLENBQUM7SUFFeEM7O09BRUc7SUFDVyw2QkFBYSxHQUFHLGVBQWUsQ0FBQztJQUU5Qzs7T0FFRztJQUNXLGlDQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBSTFELHNCQUFDO0NBN0JELEFBNkJDLElBQUE7a0JBN0JvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRXZlbnRUeXBlIFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIOaWsOeahOS4gOWkqVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5ld0RheSA9IFwibmV3RGF5XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph5HluIHlj5HnlJ/mlLnlj5jml7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb2luQ2hhbmdlID0gXCJjb2luQ2hhbmdlXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu4Tph5Hlj5HnlJ/mlLnlj5jml7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHb2xkQ2hhbmdlID0gXCJnb2xkQ2hhbmdlXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpkrvnn7Plj5HnlJ/mlLnlj5jml7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEaWFtb25kQ2hhbmdlID0gXCJkaWFtb25kQ2hhbmdlXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpkrvnn7Plj5HnlJ/mlLnlj5jml7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFyZVRpY2tldFVwZGF0ZSA9IFwic2hhcmVUaWNrZXRVcGRhdGVcIjtcclxuXHJcblxyXG4gICAgXHJcbn1cclxuIl19