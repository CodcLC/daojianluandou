
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/LevelIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a516H4mcJAb7hInBhucHS5', 'LevelIcon');
// script/tscript/ui/main/LevelIcon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../../core/DataManager");
var GameManager_1 = require("../../core/GameManager");
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
var LevelIcon = /** @class */ (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.uplevel = null;
        _this.upelementArr = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LevelIcon.prototype.start = function () {
    };
    LevelIcon.prototype.updatePlayerSkin = function () {
        var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
        this.updateSkin(levelId);
    };
    LevelIcon.prototype.updateSkin = function (levelId, showup) {
        if (showup === void 0) { showup = true; }
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas[levelId - 1];
        var spriteFrame = GameManager_1.default.instance.levelImgs[leveCnfdatas.level - 1];
        this.icon.spriteFrame = spriteFrame;
        this.icon.node.width = spriteFrame.getRect().width;
        this.icon.node.height = spriteFrame.getRect().height;
        if (!showup) {
            this.uplevel.active = false;
            return;
        }
        if (leveCnfdatas.uplevel == 0) {
            this.uplevel.active = false;
        }
        else {
            this.uplevel.active = true;
            for (var i = 0; i < this.upelementArr.length; i++) {
                if (i < leveCnfdatas.uplevel) {
                    this.upelementArr[i].getChildByName("upstate").active = true;
                }
                else {
                    this.upelementArr[i].getChildByName("upstate").active = false;
                }
            }
        }
    };
    __decorate([
        property(cc.Sprite)
    ], LevelIcon.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], LevelIcon.prototype, "uplevel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelIcon.prototype, "upelementArr", void 0);
    LevelIcon = __decorate([
        ccclass
    ], LevelIcon);
    return LevelIcon;
}(cc.Component));
exports.default = LevelIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcTGV2ZWxJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFDakQsc0RBQWlEO0FBR2pELG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFrRUM7UUE5REcsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFZLEdBQWMsRUFBRSxDQUFDOztRQXVEN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVNLG9DQUFnQixHQUF2QjtRQUVJLElBQUksT0FBTyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixPQUFjLEVBQUMsTUFBcUI7UUFBckIsdUJBQUEsRUFBQSxhQUFxQjtRQUdsRCxJQUFJLFlBQVksR0FBbUIscUJBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXRGLElBQUksV0FBVyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUVyRCxJQUFHLENBQUMsTUFBTSxFQUNWO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUVELElBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQzVCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQy9CO2FBQ0Q7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFM0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNqRDtnQkFDSSxJQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUMzQjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNoRTtxQkFDRDtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNqRTthQUNKO1NBRUo7SUFFTCxDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNXO0lBVFosU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWlFN0I7SUFBRCxnQkFBQztDQWpFRCxBQWlFQyxDQWpFc0MsRUFBRSxDQUFDLFNBQVMsR0FpRWxEO2tCQWpFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IExldmVsQ29uZmlnRGF0YSBmcm9tIFwiLi4vLi4vY29uZmlnZGF0YS9MZXZlbENvbmZpZ0RhdGFcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEljb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdXBsZXZlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1cGVsZW1lbnRBcnI6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQbGF5ZXJTa2luKClcclxuICAgIHtcclxuICAgICAgICB2YXIgbGV2ZWxJZCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldExldmVsSWQoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2tpbihsZXZlbElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2tpbihsZXZlbElkOm51bWJlcixzaG93dXA6Ym9vbGVhbiA9IHRydWUpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBsZXZlQ25mZGF0YXM6TGV2ZWxDb25maWdEYXRhID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxDb25maWdEYXRhc1tsZXZlbElkIC0gMV07XHJcblxyXG4gICAgICAgIHZhciBzcHJpdGVGcmFtZSA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmxldmVsSW1nc1tsZXZlQ25mZGF0YXMubGV2ZWwgLSAxXTtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmljb24ubm9kZS53aWR0aCA9IHNwcml0ZUZyYW1lLmdldFJlY3QoKS53aWR0aDtcclxuICAgICAgICB0aGlzLmljb24ubm9kZS5oZWlnaHQgPSBzcHJpdGVGcmFtZS5nZXRSZWN0KCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZighc2hvd3VwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGxldmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihsZXZlQ25mZGF0YXMudXBsZXZlbCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGxldmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwbGV2ZWwuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgdGhpcy51cGVsZW1lbnRBcnIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPCBsZXZlQ25mZGF0YXMudXBsZXZlbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZWxlbWVudEFycltpXS5nZXRDaGlsZEJ5TmFtZShcInVwc3RhdGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGVsZW1lbnRBcnJbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ1cHN0YXRlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=