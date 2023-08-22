
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/rank/RankUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd73ce+gRgVNxoqR1GSxYKDv', 'RankUI');
// script/tscript/ui/rank/RankUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RankItem_1 = require("./RankItem");
var GameScene_1 = require("../../gamescene/GameScene");
var GameManager_1 = require("../../core/GameManager");
var Player_1 = require("../../gamescene/Player");
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
var RankUI = /** @class */ (function (_super) {
    __extends(RankUI, _super);
    function RankUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankItemArr = [];
        //@property(cc.Prefab)
        //public knifePrefab:cc.Prefab = null;
        _this.gameScene = null;
        _this.playerColor = new cc.Color(200, 141, 51);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    RankUI.prototype.onLoad = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
    };
    RankUI.prototype.start = function () {
        this.gameScene.node.on("knifesChange", this.onKnifesChange, this);
    };
    RankUI.prototype.onKnifesChange = function () {
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.over) {
            return;
        }
        this.gameScene.playerArr.sort(function (player1, player2) {
            var kfLen1 = player1.knifePool.knifes.length;
            var kfLen2 = player2.knifePool.knifes.length;
            if (kfLen1 > kfLen2) {
                return -1;
            }
            if (kfLen1 < kfLen2) {
                return 1;
            }
            return 0;
        });
        for (var i = 0; i < this.rankItemArr.length; i++) {
            var player = this.gameScene.playerArr[i];
            if (player != null) {
                this.rankItemArr[i].mark.spriteFrame = player.body.skin.spriteFrame;
                this.rankItemArr[i].nameTxt.string = player.getName();
                if (player.status != Player_1.PlayerStatus.die) {
                    this.rankItemArr[i].rankTxt.string = "" + player.knifePool.knifes.length;
                }
                else {
                    this.rankItemArr[i].rankTxt.string = "0";
                }
                if (player == this.gameScene.player) {
                    this.rankItemArr[i].nameTxt.node.color = this.playerColor;
                }
                else {
                    this.rankItemArr[i].nameTxt.node.color = cc.Color.WHITE;
                }
            }
        }
    };
    __decorate([
        property(RankItem_1.default)
    ], RankUI.prototype, "rankItemArr", void 0);
    RankUI = __decorate([
        ccclass
    ], RankUI);
    return RankUI;
}(cc.Component));
exports.default = RankUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxccmFua1xcUmFua1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsdURBQWtEO0FBQ2xELHNEQUFpRTtBQUNqRSxpREFBOEQ7QUFFOUQsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQURoRDtRQUFBLHFFQXdGQztRQXBGRyxpQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUU3QixzQkFBc0I7UUFDdEIsc0NBQXNDO1FBRzlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQzs7UUEwRXhELGlCQUFpQjtJQUNyQixDQUFDO0lBekVHLHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUdJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRU8sK0JBQWMsR0FBdEI7UUFFSSxJQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFDckQ7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFjLEVBQUMsT0FBYztZQUV4RCxJQUFJLE1BQU0sR0FBVSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBSSxNQUFNLEdBQVUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRXBELElBQUcsTUFBTSxHQUFHLE1BQU0sRUFDbEI7Z0JBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiO1lBRUQsSUFBRyxNQUFNLEdBQUcsTUFBTSxFQUNsQjtnQkFDSSxPQUFPLENBQUMsQ0FBQzthQUNaO1lBRUQsT0FBUSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFDakQ7WUFDSSxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFHLE1BQU0sSUFBSSxJQUFJLEVBQ2pCO2dCQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXRELElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxxQkFBWSxDQUFDLEdBQUcsRUFDcEM7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQzVFO3FCQUNEO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQzVDO2dCQUVELElBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUNsQztvQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzdEO3FCQUNEO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQzNEO2FBRUo7U0FFSjtJQUdMLENBQUM7SUFqRkQ7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzsrQ0FDVTtJQUhaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RjFCO0lBQUQsYUFBQztDQXZGRCxBQXVGQyxDQXZGbUMsRUFBRSxDQUFDLFNBQVMsR0F1Ri9DO2tCQXZGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYW5rSXRlbSBmcm9tIFwiLi9SYW5rSXRlbVwiO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuLi8uLi9nYW1lc2NlbmUvR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciwgeyBQbGF5ZXJTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZ2FtZXNjZW5lL1BsYXllclwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFJhbmtJdGVtKVxyXG4gICAgcmFua0l0ZW1BcnI6IFJhbmtJdGVtW10gPSBbXTtcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICAvL3B1YmxpYyBrbmlmZVByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdhbWVTY2VuZTpHYW1lU2NlbmUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHBsYXllckNvbG9yOmNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDIwMCwxNDEsNTEpO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdhbWVTY2VuZS5ub2RlLm9uKFwia25pZmVzQ2hhbmdlXCIsdGhpcy5vbktuaWZlc0NoYW5nZSx0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktuaWZlc0NoYW5nZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyA9PSBHYW1lU3RhdHVzLm92ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXJBcnIuc29ydCgocGxheWVyMTpQbGF5ZXIscGxheWVyMjpQbGF5ZXIpOm51bWJlcj0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIga2ZMZW4xOm51bWJlciA9IHBsYXllcjEua25pZmVQb29sLmtuaWZlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBrZkxlbjI6bnVtYmVyID0gcGxheWVyMi5rbmlmZVBvb2wua25pZmVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmKGtmTGVuMSA+IGtmTGVuMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihrZkxlbjEgPCBrZkxlbjIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgdGhpcy5yYW5rSXRlbUFyci5sZW5ndGggOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyOlBsYXllciA9IHRoaXMuZ2FtZVNjZW5lLnBsYXllckFycltpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBsYXllciAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmtJdGVtQXJyW2ldLm1hcmsuc3ByaXRlRnJhbWUgPSBwbGF5ZXIuYm9keS5za2luLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5rSXRlbUFycltpXS5uYW1lVHh0LnN0cmluZyA9IHBsYXllci5nZXROYW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLnN0YXR1cyAhPSBQbGF5ZXJTdGF0dXMuZGllKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua0l0ZW1BcnJbaV0ucmFua1R4dC5zdHJpbmcgPSBcIlwiICsgcGxheWVyLmtuaWZlUG9vbC5rbmlmZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtJdGVtQXJyW2ldLnJhbmtUeHQuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyID09IHRoaXMuZ2FtZVNjZW5lLnBsYXllcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtJdGVtQXJyW2ldLm5hbWVUeHQubm9kZS5jb2xvciA9IHRoaXMucGxheWVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua0l0ZW1BcnJbaV0ubmFtZVR4dC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==