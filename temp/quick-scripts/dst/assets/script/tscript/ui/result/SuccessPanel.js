
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/result/SuccessPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5bf9IbcQJHtLeLpeQbul8E', 'SuccessPanel');
// script/tscript/ui/result/SuccessPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameScene_1 = require("../../gamescene/GameScene");
var BaseUI_1 = require("../base/BaseUI");
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
var SuccessPanel = /** @class */ (function (_super) {
    __extends(SuccessPanel, _super);
    function SuccessPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextLevelBtn = null;
        _this.exitBtn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    SuccessPanel.prototype.onLoad = function () { };
    SuccessPanel.prototype.start = function () {
        this.nextLevelBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            GameScene_1.default.levelMin++;
            if (GameScene_1.default.levelMin > 5) {
                GameScene_1.default.levelMin = 1;
            }
            window.main.randombg();
            //cc.director.loadScene("level" + GameScene.levelMax + "-" + GameScene.levelMin);
            cc.director.loadScene(cc.director.getScene().name);
        });
        /*this.exitBtn.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

            cc.director.loadScene("selector");

        });*/
    };
    __decorate([
        property(cc.Button)
    ], SuccessPanel.prototype, "nextLevelBtn", void 0);
    __decorate([
        property(cc.Button)
    ], SuccessPanel.prototype, "exitBtn", void 0);
    SuccessPanel = __decorate([
        ccclass
    ], SuccessPanel);
    return SuccessPanel;
}(BaseUI_1.default));
exports.default = SuccessPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxccmVzdWx0XFxTdWNjZXNzUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFrRDtBQUNsRCx5Q0FBb0M7QUFFcEMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBTTtJQURoRDtRQUFBLHFFQXNDQztRQWxDRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixhQUFPLEdBQWMsSUFBSSxDQUFDOztRQThCMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Qkcsd0JBQXdCO0lBRXhCLDZCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosNEJBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsVUFBQyxLQUFLO1lBRzFELG1CQUFTLENBQUMsUUFBUSxFQUFHLENBQUM7WUFDdEIsSUFBRyxtQkFBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQ3pCO2dCQUNJLG1CQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDZixpRkFBaUY7WUFDakYsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxDQUFDLENBQUMsQ0FBQztRQUVIOzs7O2FBSUs7SUFDVCxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDTTtJQU5ULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxQ2hDO0lBQUQsbUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3lDLGdCQUFNLEdBcUMvQztrQkFyQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi4vYmFzZS9WaWV3XCI7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSBcIi4uLy4uL2dhbWVzY2VuZS9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IEJhc2VVSSBmcm9tIFwiLi4vYmFzZS9CYXNlVUlcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWNjZXNzUGFuZWwgZXh0ZW5kcyBCYXNlVUkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBuZXh0TGV2ZWxCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGV4aXRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWxCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoZXZlbnQpPT57XHJcblxyXG5cdFx0XHJcbiAgICAgICAgICAgIEdhbWVTY2VuZS5sZXZlbE1pbiArKztcclxuICAgICAgICAgICAgaWYoR2FtZVNjZW5lLmxldmVsTWluID4gNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lLmxldmVsTWluID0gMTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHQgd2luZG93Lm1haW4ucmFuZG9tYmcoKTtcclxuICAgICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsZXZlbFwiICsgR2FtZVNjZW5lLmxldmVsTWF4ICsgXCItXCIgKyBHYW1lU2NlbmUubGV2ZWxNaW4pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qdGhpcy5leGl0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2VsZWN0b3JcIik7XHJcblxyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=