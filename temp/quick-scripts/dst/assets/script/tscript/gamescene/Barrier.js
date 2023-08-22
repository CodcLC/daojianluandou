
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Barrier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4c4cYS2FtI6p+AI35rs0jE', 'Barrier');
// script/tscript/gamescene/Barrier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("../util/Random");
var GameScene_1 = require("./GameScene");
var GameManager_1 = require("../core/GameManager");
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
var BarrierType;
(function (BarrierType) {
    BarrierType[BarrierType["static"] = 0] = "static";
    BarrierType[BarrierType["dynamic"] = 1] = "dynamic";
    BarrierType[BarrierType["blackhole"] = 2] = "blackhole";
})(BarrierType = exports.BarrierType || (exports.BarrierType = {}));
var Barrier = /** @class */ (function (_super) {
    __extends(Barrier, _super);
    function Barrier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarrierType.static;
        // LIFE-CYCLE CALLBACKS:
        _this.gameScene = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Barrier.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.node.scale = 0.7;
        if (this.type == BarrierType.dynamic) {
            //return;
            var sceneSize = this.gameScene.sceneSize;
            var starPos = cc.v2(Random_1.default.Range(-sceneSize.width / 2, sceneSize.width / 2), Random_1.default.Range(-sceneSize.height / 2, sceneSize.height / 2));
            var endPos = cc.v2(Random_1.default.Range(-sceneSize.width / 2, sceneSize.width / 2), Random_1.default.Range(-sceneSize.height / 2, sceneSize.height / 2));
            var dis = endPos.sub(starPos).mag();
            var baseSpeed = Random_1.default.Range(0.5, 2.5) * 60;
            var baseTimer = dis / baseSpeed;
            this.node.position = starPos;
            //baseTimer = 2.5;
            var seq = cc.sequence(cc.moveTo(baseTimer, endPos).easing(cc.easeCubicActionInOut()), cc.moveTo(baseTimer, starPos).easing(cc.easeCubicActionInOut()));
            this.node.runAction(seq.repeatForever());
        }
    };
    __decorate([
        property({ type: cc.Enum(BarrierType) })
    ], Barrier.prototype, "type", void 0);
    Barrier = __decorate([
        ccclass
    ], Barrier);
    return Barrier;
}(cc.Component));
exports.default = Barrier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEJhcnJpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFFMUMsSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBRW5CLGlEQUFNLENBQUE7SUFDTixtREFBTyxDQUFBO0lBQ1AsdURBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUdEO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBeUNDO1FBckNVLFVBQUksR0FBZSxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRTdDLHdCQUF3QjtRQUVkLGVBQVMsR0FBYSxJQUFJLENBQUM7O1FBZ0NyQyxpQkFBaUI7SUFDckIsQ0FBQztJQS9CRyxlQUFlO0lBRVIsdUJBQUssR0FBWjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXRCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsT0FBTyxFQUNuQztZQUNJLFNBQVM7WUFDVCxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUVqRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3SCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1SCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksU0FBUyxHQUFHLGdCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0MsSUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUdoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDN0Isa0JBQWtCO1lBRWxCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUVMLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO3lDQUNPO0lBSDVCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3QzNCO0lBQUQsY0FBQztDQXhDRCxBQXdDQyxDQXhDb0MsRUFBRSxDQUFDLFNBQVMsR0F3Q2hEO2tCQXhDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vY29yZS9HYW1lTWFuYWdlclwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEJhcnJpZXJUeXBlXHJcbntcclxuICAgIHN0YXRpYyxcclxuICAgIGR5bmFtaWMsXHJcbiAgICBibGFja2hvbGUsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhcnJpZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5FbnVtKEJhcnJpZXJUeXBlKX0pXHJcbiAgICBwdWJsaWMgdHlwZTpCYXJyaWVyVHlwZSA9IEJhcnJpZXJUeXBlLnN0YXRpYztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVNjZW5lOkdhbWVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuNztcclxuXHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IEJhcnJpZXJUeXBlLmR5bmFtaWMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL3JldHVybjtcclxuICAgICAgICAgICAgdmFyIHNjZW5lU2l6ZTpjYy5Ob2RlID0gdGhpcy5nYW1lU2NlbmUuc2NlbmVTaXplO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJQb3MgPSBjYy52MihSYW5kb20uUmFuZ2UoLXNjZW5lU2l6ZS53aWR0aC8yLHNjZW5lU2l6ZS53aWR0aC8yKSxSYW5kb20uUmFuZ2UoLXNjZW5lU2l6ZS5oZWlnaHQvMixzY2VuZVNpemUuaGVpZ2h0LzIpKTtcclxuICAgICAgICAgICAgdmFyIGVuZFBvcyA9IGNjLnYyKFJhbmRvbS5SYW5nZSgtc2NlbmVTaXplLndpZHRoLzIsc2NlbmVTaXplLndpZHRoLzIpLFJhbmRvbS5SYW5nZSgtc2NlbmVTaXplLmhlaWdodC8yLHNjZW5lU2l6ZS5oZWlnaHQvMikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpcyA9IGVuZFBvcy5zdWIoc3RhclBvcykubWFnKCk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlU3BlZWQgPSBSYW5kb20uUmFuZ2UoMC41LDIuNSkgKiA2MDtcclxuICAgICAgICAgICAgdmFyIGJhc2VUaW1lciA9IGRpcyAvIGJhc2VTcGVlZDtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBzdGFyUG9zO1xyXG4gICAgICAgICAgICAvL2Jhc2VUaW1lciA9IDIuNTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oYmFzZVRpbWVyLGVuZFBvcykuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluT3V0KCkpLGNjLm1vdmVUbyhiYXNlVGltZXIsc3RhclBvcykuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluT3V0KCkpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19