
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/DuanWei.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1de79iLlGBPfIamdZenkimw', 'DuanWei');
// script/tscript/ui/main/DuanWei.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../../core/DataManager");
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
var DuanWei = /** @class */ (function (_super) {
    __extends(DuanWei, _super);
    function DuanWei() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.nameTxt = null;
        _this.valueTxt = null;
        _this.skins = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DuanWei.prototype.start = function () {
        this.showDuanWei();
    };
    DuanWei.prototype.showDuanWei = function () {
        var star = DataManager_1.default.instance.getPlayerData().star;
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas;
        var index = 0;
        if (star >= leveCnfdatas[leveCnfdatas.length - 1].stars) {
            index = leveCnfdatas.length - 1;
        }
        else {
            for (var i = 0; i < leveCnfdatas.length - 1; i++) {
                if (star >= leveCnfdatas[i].stars && star < leveCnfdatas[i + 1].stars) {
                    index = i;
                    break;
                }
            }
        }
        if (index == leveCnfdatas.length - 1) {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string = "" + DataManager_1.default.instance.getPlayerData().star;
            var spriteFrame = this.skins[this.skins.length - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;
        }
        else {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string = DataManager_1.default.instance.getPlayerData().star + "/" + leveCnfdatas[index + 1].stars;
            var spriteFrame = this.skins[leveCnfdatas[index].id - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], DuanWei.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], DuanWei.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], DuanWei.prototype, "valueTxt", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], DuanWei.prototype, "skins", void 0);
    DuanWei = __decorate([
        ccclass
    ], DuanWei);
    return DuanWei;
}(cc.Component));
exports.default = DuanWei;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcRHVhbldlaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBRWpELG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFxRUM7UUFqRUcsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFvQixFQUFFLENBQUE7O1FBdUQzQixpQkFBaUI7SUFDckIsQ0FBQztJQXRERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLDZCQUFXLEdBQWxCO1FBRUksSUFBSSxJQUFJLEdBQVUscUJBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRTVELElBQUksWUFBWSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBRXpELElBQUksS0FBSyxHQUFVLENBQUMsQ0FBQztRQUVyQixJQUFHLElBQUksSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3REO1lBQ0ksS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO2FBQ0Q7WUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2hEO2dCQUNJLElBQUcsSUFBSSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwRTtvQkFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNWLE1BQU07aUJBQ1Q7YUFFSjtTQUNKO1FBRUQsSUFBRyxLQUFLLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ25DO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBSSxFQUFFLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3ZFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBRS9EO2FBQ0Q7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEcsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUMvRDtJQUVMLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDRTtJQVpWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FvRTNCO0lBQUQsY0FBQztDQXBFRCxBQW9FQyxDQXBFb0MsRUFBRSxDQUFDLFNBQVMsR0FvRWhEO2tCQXBFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1YW5XZWkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5hbWVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB2YWx1ZVR4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNraW5zOmNjLlNwcml0ZUZyYW1lW10gPSBbXVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNob3dEdWFuV2VpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEdWFuV2VpKClcclxuICAgIHtcclxuICAgICAgICB2YXIgc3RhcjpudW1iZXIgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkuc3RhcjtcclxuXHJcbiAgICAgICAgdmFyIGxldmVDbmZkYXRhcyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsQ29uZmlnRGF0YXM7XHJcblxyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZihzdGFyID49IGxldmVDbmZkYXRhc1tsZXZlQ25mZGF0YXMubGVuZ3RoIC0gMV0uc3RhcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleCA9IGxldmVDbmZkYXRhcy5sZW5ndGggLSAxOyBcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZXZlQ25mZGF0YXMubGVuZ3RoIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihzdGFyID49IGxldmVDbmZkYXRhc1tpXS5zdGFycyAmJiBzdGFyIDwgbGV2ZUNuZmRhdGFzW2kgKyAxXS5zdGFycylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5kZXggPT0gbGV2ZUNuZmRhdGFzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUeHQuc3RyaW5nID0gbGV2ZUNuZmRhdGFzW2luZGV4XS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlVHh0LnN0cmluZyA9ICBcIlwiICsgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXI7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGVGcmFtZSA9IHRoaXMuc2tpbnNbdGhpcy5za2lucy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLndpZHRoID0gc3ByaXRlRnJhbWUuZ2V0T3JpZ2luYWxTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLmhlaWdodCA9IHNwcml0ZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpLndpZHRoO1xyXG5cclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lVHh0LnN0cmluZyA9IGxldmVDbmZkYXRhc1tpbmRleF0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVR4dC5zdHJpbmcgPSAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIgKyBcIi9cIiArIGxldmVDbmZkYXRhc1tpbmRleCArIDFdLnN0YXJzO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlRnJhbWUgPSB0aGlzLnNraW5zW2xldmVDbmZkYXRhc1tpbmRleF0uaWQgLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLndpZHRoID0gc3ByaXRlRnJhbWUuZ2V0T3JpZ2luYWxTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLmhlaWdodCA9IHNwcml0ZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=