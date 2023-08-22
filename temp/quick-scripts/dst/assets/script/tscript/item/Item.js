
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/item/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80113nWi9FNLaCAbUWEg+lL', 'Item');
// script/tscript/item/Item.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["none"] = 0] = "none";
    ItemType[ItemType["fhl"] = 1] = "fhl";
    ItemType[ItemType["rocket"] = 2] = "rocket";
    ItemType[ItemType["magnet"] = 3] = "magnet";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ItemType.none;
        return _this;
        // update (dt) {}
    }
    //@property
    //public value:number = 0;
    // LIFE-CYCLE CALLBACKS:
    Item.prototype.onLoad = function () { };
    Item.prototype.start = function () {
        //this.node.
    };
    Item.prototype.destroySelf = function () {
        this.node.destroy();
    };
    __decorate([
        property({ type: cc.Enum(ItemType) })
    ], Item.prototype, "type", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxpdGVtXFxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRTFDLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUVoQix1Q0FBUSxDQUFBO0lBQ1IscUNBQU8sQ0FBQTtJQUNQLDJDQUFVLENBQUE7SUFDViwyQ0FBVSxDQUFBO0FBRWQsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBR0Q7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUF1QkM7UUFuQlUsVUFBSSxHQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1FBa0JyQyxpQkFBaUI7SUFDckIsQ0FBQztJQWhCRyxXQUFXO0lBQ1gsMEJBQTBCO0lBRTFCLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLG9CQUFLLEdBQUw7UUFDSSxZQUFZO0lBQ2hCLENBQUM7SUFFTSwwQkFBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7c0NBQ0U7SUFIcEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNCeEI7SUFBRCxXQUFDO0NBdEJELEFBc0JDLENBdEJpQyxFQUFFLENBQUMsU0FBUyxHQXNCN0M7a0JBdEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBlXHJcbntcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgZmhsID0gMSxcclxuICAgIHJvY2tldCA9IDIsXHJcbiAgICBtYWduZXQgPSAzXHJcblxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuRW51bShJdGVtVHlwZSl9KVxyXG4gICAgcHVibGljIHR5cGU6SXRlbVR5cGUgPSBJdGVtVHlwZS5ub25lO1xyXG5cclxuXHJcbiAgICAvL0Bwcm9wZXJ0eVxyXG4gICAgLy9wdWJsaWMgdmFsdWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3lTZWxmKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==