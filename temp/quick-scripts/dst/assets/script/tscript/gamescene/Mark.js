
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Mark.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77508ChDR1GLYt5yR5jvjxa', 'Mark');
// script/tscript/gamescene/Mark.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
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
var Mark = /** @class */ (function (_super) {
    __extends(Mark, _super);
    function Mark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.targetPlayer = null;
        _this.blackHole = null;
        _this.isPlayer = true;
        _this.halfSize = cc.Size.ZERO;
        /**
         * 视野范围
         */
        _this.viewSize = cc.Size.ZERO;
        _this.targetNode = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Mark.prototype.start = function () {
        if (this.isPlayer) {
            this.getComponent(cc.Sprite).spriteFrame = this.targetPlayer.body.skin.spriteFrame;
            this.targetNode = this.targetPlayer.node;
        }
        else {
            this.getComponent(cc.Sprite).spriteFrame = this.blackHole.skin.spriteFrame;
            this.targetNode = this.blackHole.node;
        }
        this.halfSize.width = (cc.winSize.width - this.node.width) / 2;
        this.halfSize.height = (cc.winSize.height - this.node.height) / 2;
        this.winRadius = cc.v2(this.halfSize.width, this.halfSize.height).mag();
    };
    Mark.prototype.update = function (dt) {
        if (this.isPlayer) {
            if (!this.targetPlayer || !this.targetPlayer.isValid || this.targetPlayer.status == Player_1.PlayerStatus.die) {
                this.node.destroy();
                return;
            }
        }
        else {
            //--------------------------------------------- 
        }
        if (!this.player || !this.player.isValid) {
            return;
        }
        var ratio = 1 / cc.Camera.main.zoomRatio;
        this.viewSize.width = (cc.winSize.width + 160) * ratio / 2;
        this.viewSize.height = (cc.winSize.height + 160) * ratio / 2;
        var dir = this.targetNode.position.sub(this.player.node.position);
        if ((dir.x > -this.viewSize.width && dir.x < this.viewSize.width) && (dir.y > -this.viewSize.height && dir.y < this.viewSize.height)) {
            //对手在视野范围内，隐藏标志
            this.node.opacity = 0;
            return;
        }
        this.node.opacity = 255;
        var angle = Math.atan2(dir.y, dir.x);
        var pos = cc.v2(this.winRadius * Math.cos(angle), this.winRadius * Math.sin(angle));
        //var pos = dir;
        if (pos.x < -this.halfSize.width) {
            pos.x = -this.halfSize.width;
        }
        else if (pos.x > this.halfSize.width) {
            pos.x = this.halfSize.width;
        }
        if (pos.y < -this.halfSize.height) {
            pos.y = -this.halfSize.height;
        }
        else if (pos.y > this.halfSize.height) {
            pos.y = this.halfSize.height;
        }
        this.node.position = pos;
    };
    Mark = __decorate([
        ccclass
    ], Mark);
    return Mark;
}(cc.Component));
exports.default = Mark;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXE1hcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFnRDtBQUdoRCxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBK0dDO1FBNUdVLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFFckIsa0JBQVksR0FBVSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUd4Qzs7V0FFRztRQUNLLGNBQVEsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUtoQyxnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUF5RnRDLENBQUM7SUF2Rkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBRUksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUNoQjtZQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDNUM7YUFDRDtZQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElB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UUFFaEIsSUFBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQy9CO1lBQ0ksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ2hDO2FBQUssSUFBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUNwQztZQUNJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFFRCxJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDaEM7WUFDSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDakM7YUFBSyxJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3JDO1lBQ0ksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUU3QixDQUFDO0lBN0dlLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4R3hCO0lBQUQsV0FBQztDQTlHRCxBQThHQyxDQTlHaUMsRUFBRSxDQUFDLFNBQVMsR0E4RzdDO2tCQTlHb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIsIHsgUGxheWVyU3RhdHVzIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBCbGFja0hvbGUgZnJvbSBcIi4vQmxhY2tIb2xlXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFyayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjpQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB0YXJnZXRQbGF5ZXI6UGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgYmxhY2tIb2xlOkJsYWNrSG9sZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlzUGxheWVyOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgaGFsZlNpemU6Y2MuU2l6ZSA9IGNjLlNpemUuWkVSTztcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop4bph47ojIPlm7RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2aWV3U2l6ZTpjYy5TaXplID0gY2MuU2l6ZS5aRVJPO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHdpblJhZGl1czpudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1BsYXllcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRhcmdldFBsYXllci5ib2R5LnNraW4uc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0UGxheWVyLm5vZGU7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJsYWNrSG9sZS5za2luLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0aGlzLmJsYWNrSG9sZS5ub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhbGZTaXplLndpZHRoID0gKGNjLndpblNpemUud2lkdGggLSB0aGlzLm5vZGUud2lkdGgpIC8gMjtcclxuICAgICAgICB0aGlzLmhhbGZTaXplLmhlaWdodCA9IChjYy53aW5TaXplLmhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgICAgdGhpcy53aW5SYWRpdXMgPSBjYy52Mih0aGlzLmhhbGZTaXplLndpZHRoLHRoaXMuaGFsZlNpemUuaGVpZ2h0KS5tYWcoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAgIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1BsYXllcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnRhcmdldFBsYXllciB8fCAhdGhpcy50YXJnZXRQbGF5ZXIuaXNWYWxpZCB8fCB0aGlzLnRhcmdldFBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllciB8fCAhdGhpcy5wbGF5ZXIuaXNWYWxpZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByYXRpbyA9IDEgLyBjYy5DYW1lcmEubWFpbi56b29tUmF0aW87XHJcblxyXG4gICAgICAgIHRoaXMudmlld1NpemUud2lkdGggPSAoY2Mud2luU2l6ZS53aWR0aCArIDE2MCkgKiByYXRpbyAvIDIgO1xyXG4gICAgICAgIHRoaXMudmlld1NpemUuaGVpZ2h0ID0gKGNjLndpblNpemUuaGVpZ2h0ICsgMTYwKSAqIHJhdGlvIC8gMjtcclxuXHJcbiAgICAgICAgIHZhciBkaXIgPSB0aGlzLnRhcmdldE5vZGUucG9zaXRpb24uc3ViKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgaWYoKGRpci54ID4gLXRoaXMudmlld1NpemUud2lkdGggJiYgZGlyLnggPCB0aGlzLnZpZXdTaXplLndpZHRoKSAmJiAoZGlyLnkgPiAtdGhpcy52aWV3U2l6ZS5oZWlnaHQgJiYgZGlyLnkgPCB0aGlzLnZpZXdTaXplLmhlaWdodCkpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIC8v5a+55omL5Zyo6KeG6YeO6IyD5Zu05YaF77yM6ZqQ6JeP5qCH5b+XXHJcbiAgICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuXHJcbiAgICAgICAgIHZhciBhbmdsZTpudW1iZXIgPSBNYXRoLmF0YW4yKGRpci55LGRpci54KTtcclxuXHJcbiAgICAgICAgIHZhciBwb3MgPSBjYy52Mih0aGlzLndpblJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSx0aGlzLndpblJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgICAgICAvL3ZhciBwb3MgPSBkaXI7XHJcblxyXG4gICAgICAgICBpZihwb3MueCA8IC10aGlzLmhhbGZTaXplLndpZHRoKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICBwb3MueCA9IC10aGlzLmhhbGZTaXplLndpZHRoO1xyXG4gICAgICAgICB9ZWxzZSBpZihwb3MueCA+IHRoaXMuaGFsZlNpemUud2lkdGgpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5oYWxmU2l6ZS53aWR0aDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYocG9zLnkgPCAtdGhpcy5oYWxmU2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIHBvcy55ID0gLXRoaXMuaGFsZlNpemUuaGVpZ2h0O1xyXG4gICAgICAgICB9ZWxzZSBpZihwb3MueSA+IHRoaXMuaGFsZlNpemUuaGVpZ2h0KVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICBwb3MueSA9IHRoaXMuaGFsZlNpemUuaGVpZ2h0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=