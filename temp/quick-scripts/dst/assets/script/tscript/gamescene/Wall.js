
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Wall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb3bf7VhEZAh6x80G/z5qtc', 'Wall');
// script/tscript/gamescene/Wall.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
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
var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.left = null;
        _this.right = null;
        _this.top = null;
        _this.down = null;
        _this.promptMsgTxt = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.dis = 1000;
        _this.speed = 30;
        _this.shrinkTime = 0;
        _this.isShrink = false;
        _this.zoom = cc.v2(0.5, 0);
        return _this;
    }
    Wall.prototype.start = function () {
        //this.left.runAction(cc.moveTo(1.2,-800,0));
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.promptMsgTxt.node.active = false;
    };
    Wall.prototype.update = function (dt) {
        //return;
        if (this.shrinkTime > 0) {
            this.shrinkTime -= dt;
            this.isShrink = true;
            if (this.left.x < -(this.dis + this.left.width / 2)) {
                this.left.x += this.speed * dt;
                this.gameScene.sceneSize.width -= 2 * this.speed * dt;
            }
            if (this.right.x > (this.dis + this.right.width / 2)) {
                this.right.x -= this.speed * dt;
            }
            if (this.top.y > (this.dis + this.top.height / 2)) {
                this.top.y -= this.speed * dt;
                this.gameScene.sceneSize.height -= 2 * this.speed * dt;
            }
            if (this.down.y < -(this.dis + this.down.height / 2)) {
                this.down.y += this.speed * dt;
            }
        }
        else {
            if (this.isShrink) {
                this.isShrink = false;
                this.left.getComponent(cc.Animation).stop("splash");
                this.right.getComponent(cc.Animation).stop("splash");
                this.top.getComponent(cc.Animation).stop("splash");
                this.down.getComponent(cc.Animation).stop("splash");
                this.left.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.right.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.top.getComponent(cc.Animation).setCurrentTime(0, "splash");
                this.down.getComponent(cc.Animation).setCurrentTime(0, "splash");
            }
        }
    };
    Wall.prototype.shrink = function () {
        var _this = this;
        this.node.stopAllActions();
        this.promptMsgTxt.node.active = true;
        this.promptMsgTxt.play();
        this.scheduleOnce(function () {
            _this.shrinkTime = 15;
            _this.left.getComponent(cc.Animation).play("splash");
            _this.right.getComponent(cc.Animation).play("splash");
            _this.top.getComponent(cc.Animation).play("splash");
            _this.down.getComponent(cc.Animation).play("splash");
        }, 10);
    };
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "left", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "top", void 0);
    __decorate([
        property(cc.Node)
    ], Wall.prototype, "down", void 0);
    __decorate([
        property(cc.Animation)
    ], Wall.prototype, "promptMsgTxt", void 0);
    Wall = __decorate([
        ccclass
    ], Wall);
    return Wall;
}(cc.Component));
exports.default = Wall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXFdhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUM5RCx5Q0FBb0M7QUFJcEMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQXFIQztRQWpIRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUVqQyx3QkFBd0I7UUFFeEIsZUFBZTtRQUVQLFNBQUcsR0FBVSxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFVLEVBQUUsQ0FBQztRQUVuQixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsS0FBSyxDQUFDO1FBYXpCLFVBQUksR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQzs7SUE0RXhDLENBQUM7SUFwRkcsb0JBQUssR0FBTDtRQUVJLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUtBLHFCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRVAsU0FBUztRQUNULElBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQ3RCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFFdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFckIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFDbEQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDekQ7WUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFDbkQ7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDbkM7WUFFRCxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDaEQ7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDMUQ7WUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUks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SUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9IeEI7SUFBRCxXQUFDO0NBcEhELEFBb0hDLENBcEhpQyxFQUFFLENBQUMsU0FBUyxHQW9IN0M7a0JBcEhvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVNYW5hZ2VyLCB7IEdhbWVTdGF0dXMgfSBmcm9tIFwiLi4vY29yZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuL0dhbWVTY2VuZVwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi4vdXRpbC9WZWN0b3IyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vY29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGVmdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3A6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG93bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIHByb21wdE1zZ1R4dDpjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHByaXZhdGUgZGlzOm51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZDpudW1iZXIgPSAzMDtcclxuXHJcbiAgICBwdWJsaWMgc2hyaW5rVGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgaXNTaHJpbms6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdhbWVTY2VuZTpHYW1lU2NlbmU7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICAvL3RoaXMubGVmdC5ydW5BY3Rpb24oY2MubW92ZVRvKDEuMiwtODAwLDApKTtcclxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTY2VuZS5nZXRDb21wb25lbnQoR2FtZVNjZW5lKTtcclxuICAgICAgICB0aGlzLnByb21wdE1zZ1R4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHpvb206Y2MuVmVjMiA9IGNjLnYyKDAuNSwwKTtcclxuICAgIFxyXG4gICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAgIHtcclxuICAgICAgICAvL3JldHVybjtcclxuICAgICAgICBpZih0aGlzLnNocmlua1RpbWUgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaHJpbmtUaW1lIC09IGR0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1NocmluayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxlZnQueCA8IC0odGhpcy5kaXMgKyB0aGlzLmxlZnQud2lkdGggLyAyKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0LnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUuc2NlbmVTaXplLndpZHRoIC09IDIgKiB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHQueCA+ICh0aGlzLmRpcyArIHRoaXMucmlnaHQud2lkdGggLyAyKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodC54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50b3AueSA+ICh0aGlzLmRpcyArIHRoaXMudG9wLmhlaWdodCAvIDIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcC55IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnNjZW5lU2l6ZS5oZWlnaHQgLT0gMiAqIHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5kb3duLnkgPCAtKHRoaXMuZGlzICsgdGhpcy5kb3duLmhlaWdodCAvIDIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24ueSArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNTaHJpbmspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaHJpbmsgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcInNwbGFzaFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcInNwbGFzaFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJzcGxhc2hcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcInNwbGFzaFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zZXRDdXJyZW50VGltZSgwLFwic3BsYXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zZXRDdXJyZW50VGltZSgwLFwic3BsYXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3AuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc2V0Q3VycmVudFRpbWUoMCxcInNwbGFzaFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zZXRDdXJyZW50VGltZSgwLFwic3BsYXNoXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBzaHJpbmsoKVxyXG4gICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9tcHRNc2dUeHQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJvbXB0TXNnVHh0LnBsYXkoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNocmlua1RpbWUgPSAxNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGVmdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic3BsYXNoXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzcGxhc2hcIik7XHJcbiAgICAgICAgICAgIHRoaXMudG9wLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzcGxhc2hcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwic3BsYXNoXCIpO1xyXG5cclxuICAgICAgICB9LDEwKTtcclxuXHJcbiAgICAgfVxyXG5cclxufVxyXG4iXX0=