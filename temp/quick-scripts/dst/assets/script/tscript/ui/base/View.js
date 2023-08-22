
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/base/View.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be1f6UJeX5H2rFJ6Tpwunrl', 'View');
// script/tscript/ui/base/View.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../UIManager");
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
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.onLoad = function () {
        var _this = this;
        var closeBtn = this.node.getChildByName("Win").getChildByName("CloseBtn");
        if (closeBtn) {
            closeBtn.on(cc.Node.EventType.TOUCH_START, function (event) {
                //SoundManager.instance.playAudioClip(SoundClipType.click);
                UIManager_1.default.instance.closeView(_this.node.name, false);
            }, this);
        }
        //var obj{hh:"dd",fg:5645}
    };
    /*start () {

    }*/
    // update (dt) {}
    View.prototype.open = function () {
        this.node.active = true;
    };
    View.prototype.close = function () {
        this.node.x = 2500;
        this.node.active = false;
    };
    View.prototype.destroySelf = function () {
        this.node.destroy();
    };
    View = __decorate([
        ccclass
    ], View);
    return View;
}(cc.Component));
exports.default = View;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcYmFzZVxcVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBSXJDLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFJMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBMENBLENBQUM7SUF2Q0kscUJBQU0sR0FBTjtRQUFBLGlCQWVDO1FBYkUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTFFLElBQUcsUUFBUSxFQUNYO1lBQ0ksUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsVUFBQyxLQUF5QjtnQkFDaEUsMkRBQTJEO2dCQUMzRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFHRCwwQkFBMEI7SUFFN0IsQ0FBQztJQUVGOztPQUVHO0lBRUgsaUJBQWlCO0lBRVYsbUJBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sb0JBQUssR0FBWjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFXLEdBQWxCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeENnQixJQUFJO1FBRnhCLE9BQU87T0FFYSxJQUFJLENBMEN4QjtJQUFELFdBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBMEM3QztrQkExQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRDbGlwVHlwZSB9IGZyb20gXCIuLi8uLi9hdWRpby9Tb3VuZENsaXBcIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9Tb3VuZE1hbmFnZXJcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICB2YXIgY2xvc2VCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJXaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJDbG9zZUJ0blwiKTtcclxuICAgIFxyXG4gICAgICAgIGlmKGNsb3NlQnRuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xvc2VCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpPT57XHJcbiAgICAgICAgICAgICAgICAvL1NvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5QXVkaW9DbGlwKFNvdW5kQ2xpcFR5cGUuY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmNsb3NlVmlldyh0aGlzLm5vZGUubmFtZSxmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy92YXIgb2Jqe2hoOlwiZGRcIixmZzo1NjQ1fVxyXG5cclxuICAgICB9XHJcblxyXG4gICAgLypzdGFydCAoKSB7XHJcblxyXG4gICAgfSovXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgb3BlbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IDI1MDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95U2VsZigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19