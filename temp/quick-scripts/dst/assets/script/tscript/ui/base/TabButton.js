
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/base/TabButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15064kNii5CiaeP0EhEgt/j', 'TabButton');
// script/tscript/ui/base/TabButton.ts

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
var TabButton = /** @class */ (function (_super) {
    __extends(TabButton, _super);
    function TabButton() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalFrame = null;
        _this.selectedFrame = null;
        _this._selected = false;
        return _this;
        /*start () {
    
        }*/
        // update (dt) {}
    }
    Object.defineProperty(TabButton.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            if (value) {
                //this.node.emit("mousedown",this);
                this.normalFrame.active = false;
                this.selectedFrame.active = true;
            }
            else {
                this.normalFrame.active = true;
                this.selectedFrame.active = false;
            }
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    TabButton.prototype.onLoad = function () {
        //this.selected = false;
    };
    __decorate([
        property(cc.Node)
    ], TabButton.prototype, "normalFrame", void 0);
    __decorate([
        property(cc.Node)
    ], TabButton.prototype, "selectedFrame", void 0);
    __decorate([
        property(cc.Boolean)
    ], TabButton.prototype, "_selected", void 0);
    TabButton = __decorate([
        ccclass
    ], TabButton);
    return TabButton;
}(cc.Component));
exports.default = TabButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcYmFzZVxcVGFiQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBR0ksd0JBQXdCO1FBSDVCLHFFQWdEQztRQXpDVyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFXLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksS0FBSyxDQUFDOztRQTRCbkM7O1dBRUc7UUFJSCxpQkFBaUI7SUFDckIsQ0FBQztJQWxDRyxzQkFBVywrQkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBb0IsS0FBYztZQUU5QixJQUFHLEtBQUssRUFDUjtnQkFDSSxtQ0FBbUM7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBR3BDO2lCQUNEO2dCQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JDO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BakJBO0lBb0JELDBCQUFNLEdBQU47UUFFSSx3QkFBd0I7SUFDNUIsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNtQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNjO0lBWmxCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0ErQzdCO0lBQUQsZ0JBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBK0NsRDtrQkEvQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG5vcm1hbEZyYW1lOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEZyYW1lOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICBpZih2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmVtaXQoXCJtb3VzZWRvd25cIix0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxGcmFtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZyYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbEZyYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGcmFtZS5hY3RpdmUgPSBmYWxzZTsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKnN0YXJ0ICgpIHtcclxuXHJcbiAgICB9Ki9cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==