
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/CameraFollow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ff65++q1xKkJHP5TbJ+4NT', 'CameraFollow');
// script/tscript/gamescene/CameraFollow.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var Vector2_1 = require("../util/Vector2");
var Quake_1 = require("../util/Quake");
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
var CameraFollow = /** @class */ (function (_super) {
    __extends(CameraFollow, _super);
    function CameraFollow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.player = null;
        _this.quake = null;
        return _this;
    }
    CameraFollow_1 = CameraFollow;
    // LIFE-CYCLE CALLBACKS:
    CameraFollow.prototype.onLoad = function () {
        CameraFollow_1.instance = this;
        //this.quake = this.camera.getComponent(Quake);
    };
    CameraFollow.prototype.start = function () {
        this.player = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).player;
    };
    CameraFollow.prototype.update = function (dt) {
        /**********摄像机平滑跟随 */
        if (this.player && this.player.status != Player_1.PlayerStatus.die) {
            var pos = Vector2_1.default.lerp(this.camera.node.position, this.player.node.position, dt * 25.0);
            //pos = this.player.node.position;
            /*if(pos.x < -this.halfSize.width)
            {
                pos.x = -this.halfSize.width;
            }else if(pos.x > this.halfSize.width)
            {
                pos.x = this.halfSize.width;
            }

            if(pos.y < -this.halfSize.height)
            {
                pos.y = -this.halfSize.height;
            }else if(pos.y > this.halfSize.height)
            {
                pos.y = this.halfSize.height;
            }*/
            this.camera.node.position = pos;
            //cc.Camera.main.node.position = this.player.node.position;
        }
    };
    CameraFollow.prototype.shake = function (time) {
        if (time === void 0) { time = 0; }
        this.quake.shake(time);
    };
    var CameraFollow_1;
    CameraFollow.instance = null;
    __decorate([
        property(cc.Camera)
    ], CameraFollow.prototype, "camera", void 0);
    __decorate([
        property(Quake_1.default)
    ], CameraFollow.prototype, "quake", void 0);
    CameraFollow = CameraFollow_1 = __decorate([
        ccclass
    ], CameraFollow);
    return CameraFollow;
}(cc.Component));
exports.default = CameraFollow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXENhbWVyYUZvbGxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdEO0FBQ2hELG1EQUE4QztBQUM5Qyx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUVsQyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBZ0VDO1FBM0RVLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFJeEIsWUFBTSxHQUFVLElBQUksQ0FBQztRQUlwQixXQUFLLEdBQVMsSUFBSSxDQUFDOztJQW1EL0IsQ0FBQztxQkEvRG9CLFlBQVk7SUFjN0Isd0JBQXdCO0lBRXhCLDZCQUFNLEdBQU47UUFDSSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QiwrQ0FBK0M7SUFDbkQsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoRixDQUFDO0lBRUEsNkJBQU0sR0FBTixVQUFRLEVBQUU7UUFFTixxQkFBcUI7UUFHdEIsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLHFCQUFZLENBQUMsR0FBRyxFQUN4RDtZQUNJLElBQUksR0FBRyxHQUFZLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRS9GLGtDQUFrQztZQUVsQzs7Ozs7Ozs7Ozs7Ozs7ZUFjRztZQUVILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFFaEMsMkRBQTJEO1NBQzlEO0lBQ0osQ0FBQztJQUdNLDRCQUFLLEdBQVosVUFBYSxJQUFlO1FBQWYscUJBQUEsRUFBQSxRQUFlO1FBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O0lBeERZLHFCQUFRLEdBQWdCLElBQUksQ0FBQztJQUYzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBUS9CO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzsrQ0FDVztJQVpWLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0ErRGhDO0lBQUQsbUJBQUM7Q0EvREQsQUErREMsQ0EvRHlDLEVBQUUsQ0FBQyxTQUFTLEdBK0RyRDtrQkEvRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyLCB7IFBsYXllclN0YXR1cyB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4uL3V0aWwvVmVjdG9yMlwiO1xyXG5pbXBvcnQgUXVha2UgZnJvbSBcIi4uL3V0aWwvUXVha2VcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFGb2xsb3cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgcHVibGljIGNhbWVyYTpjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6Q2FtZXJhRm9sbG93ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOlBsYXllciA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShRdWFrZSlcclxuICAgIHByaXZhdGUgcXVha2U6UXVha2UgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgQ2FtZXJhRm9sbG93Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvL3RoaXMucXVha2UgPSB0aGlzLmNhbWVyYS5nZXRDb21wb25lbnQoUXVha2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTY2VuZS5nZXRDb21wb25lbnQoR2FtZVNjZW5lKS5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAgIHtcclxuICAgICAgICAgLyoqKioqKioqKirmkYTlg4/mnLrlubPmu5Hot5/pmo8gKi9cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyICYmIHRoaXMucGxheWVyLnN0YXR1cyAhPSBQbGF5ZXJTdGF0dXMuZGllKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBvczpjYy5WZWMyID0gIFZlY3RvcjIubGVycCh0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uLHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24sZHQgKiAyNS4wKTtcclxuXHJcbiAgICAgICAgICAgIC8vcG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8qaWYocG9zLnggPCAtdGhpcy5oYWxmU2l6ZS53aWR0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zLnggPSAtdGhpcy5oYWxmU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zLnggPiB0aGlzLmhhbGZTaXplLndpZHRoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuaGFsZlNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBvcy55IDwgLXRoaXMuaGFsZlNpemUuaGVpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3MueSA9IC10aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zLnkgPiB0aGlzLmhhbGZTaXplLmhlaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnBvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgLy9jYy5DYW1lcmEubWFpbi5ub2RlLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgcHVibGljIHNoYWtlKHRpbWU6bnVtYmVyID0gMClcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMucXVha2Uuc2hha2UodGltZSk7XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==