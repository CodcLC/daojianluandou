
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/selector/SelectItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38be4b5v19JL5N+84whw5uc', 'SelectItem');
// script/tscript/ui/selector/SelectItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
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
var SelectItem = /** @class */ (function (_super) {
    __extends(SelectItem, _super);
    function SelectItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //@property(cc.Label)
    //titleTxt: cc.Label = null;
    //@property(cc.String)
    //public levelMax:number = 0;
    //@property(cc.String)
    //public levelMix:number = 0;
    SelectItem.prototype.start = function () {
        /*this.titleTxt.string = this.levelMax + "-" + this.levelMix;

        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            GameScene.levelMax = this.levelMax;
            GameScene.levelMin = this.levelMix;
            cc.director.loadScene("level" + this.levelMax + "-" + this.levelMix);
        });*/
    };
    SelectItem = __decorate([
        ccclass
    ], SelectItem);
    return SelectItem;
}(cc.Component));
exports.default = SelectItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcc2VsZWN0b3JcXFNlbGVjdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBd0JBLENBQUM7SUF0QkcscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUU1QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFFN0IsMEJBQUssR0FBTDtRQUVJOzs7Ozs7YUFNSztJQUVULENBQUM7SUFyQmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3QjlCO0lBQUQsaUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QnVDLEVBQUUsQ0FBQyxTQUFTLEdBd0JuRDtrQkF4Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuLi8uLi9nYW1lc2NlbmUvR2FtZVNjZW5lXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvL3RpdGxlVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgLy9wdWJsaWMgbGV2ZWxNYXg6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICAvL3B1YmxpYyBsZXZlbE1peDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgLyp0aGlzLnRpdGxlVHh0LnN0cmluZyA9IHRoaXMubGV2ZWxNYXggKyBcIi1cIiArIHRoaXMubGV2ZWxNaXg7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIEdhbWVTY2VuZS5sZXZlbE1heCA9IHRoaXMubGV2ZWxNYXg7XHJcbiAgICAgICAgICAgIEdhbWVTY2VuZS5sZXZlbE1pbiA9IHRoaXMubGV2ZWxNaXg7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsXCIgKyB0aGlzLmxldmVsTWF4ICsgXCItXCIgKyB0aGlzLmxldmVsTWl4KTtcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==