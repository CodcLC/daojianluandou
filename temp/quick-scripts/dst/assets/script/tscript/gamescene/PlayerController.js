
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fffb951/GFGpZQryjExFi+v', 'PlayerController');
// script/tscript/gamescene/PlayerController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var GameManager_1 = require("../core/GameManager");
var Mathf_1 = require("../util/Mathf");
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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.touchPos = cc.Vec2.ZERO;
        _this.baseZoom = 1;
        _this.targetZoom = 1;
        _this.zoomRatio = 1;
        _this.joyStick = null;
        return _this;
    }
    //private currentZoomVec:cc.Vec2 = cc.Vec2.ZERO;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PlayerController.prototype.start = function () {
        var _this = this;
        //this.currentZoomVec.x = cc.Camera.main.zoomRatio;
        this.baseZoom = cc.Camera.main.zoomRatio;
        this.targetZoom = cc.Camera.main.zoomRatio;
        this.player = this.getComponent(Player_1.default);
        this.joyStick = GameManager_1.default.instance.joystick;
        //cc.log("lerp",Mathf.lerp(0.5,1,0.5));
        if (this.player.isAI) {
            return;
        }
        var touchPlane = GameManager_1.default.instance.touchPlane;
        touchPlane.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (!_this.player || _this.player.status == Player_1.PlayerStatus.die) {
                return;
            }
            _this.touchPos = event.getLocation();
            _this.player.changeAttackState();
            if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
                _this.zoomRatio = 0.75;
                _this.joyStick.node.position = cc.v2(event.getLocation().x - cc.winSize.width * 0.5, event.getLocation().y - cc.winSize.height * 0.5);
                _this.joyStick.show();
            }
            _this.player.circle.active = false;
        });
        touchPlane.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (GameManager_1.default.instance.gameStatus != GameManager_1.GameStatus.start) {
                _this.player.moveDir = cc.Vec2.ZERO;
                return;
            }
            if (!_this.player || _this.player.status == Player_1.PlayerStatus.die) {
                return;
            }
            var currentPos = event.getLocation();
            _this.player.moveDir = currentPos.sub(_this.touchPos).normalize();
            _this.joyStick.cursorTo(_this.player.moveDir);
            //this.player.moveDir = event.getDelta().normalize();
        });
        touchPlane.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (!_this.player || _this.player.status == Player_1.PlayerStatus.die) {
                return;
            }
            _this.player.moveDir = cc.Vec2.ZERO;
            _this.player.changeDefenceState();
            _this.zoomRatio = 1;
            if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
                _this.player.circle.active = true;
            }
            _this.joyStick.hidden();
        });
        touchPlane.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (!_this.player || _this.player.status == Player_1.PlayerStatus.die) {
                return;
            }
            _this.player.moveDir = cc.Vec2.ZERO;
            _this.player.changeDefenceState();
            _this.zoomRatio = 1;
            if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
                _this.player.circle.active = true;
            }
            _this.joyStick.hidden();
        });
    };
    PlayerController.prototype.update = function (dt) {
        //cc.Camera.main.zoomRatio = Mathf.lerp(cc.Camera.main.zoomRatio,this.targetZoom,dt);
        //var vec2:cc.Vec2 = Vector2.lerp(this.currentZoomVec,this.targetZoomVec,dt * 5);
        //cc.Camera.main.zoomRatio = vec2.x;
        if (this.player.isAI) {
            return;
        }
        this.targetZoom = (this.baseZoom / this.player.size) * this.zoomRatio;
        cc.Camera.main.zoomRatio = Mathf_1.default.lerp(cc.Camera.main.zoomRatio, this.targetZoom, dt * 5);
    };
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFnRDtBQUNoRCxtREFBOEQ7QUFFOUQsdUNBQWtDO0FBSWxDLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUErSUM7UUEzSVUsWUFBTSxHQUFVLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFVLENBQUMsQ0FBQztRQUVwQixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUV2QixlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBZ0lyQyxDQUFDO0lBN0hHLGdEQUFnRDtJQUVoRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGdDQUFLLEdBQUw7UUFBQSxpQkFzR0M7UUFwR0csbURBQW1EO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFOUMsdUNBQXVDO1FBRXZDLElB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LENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRixDQUFDO0lBN0lnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThJcEM7SUFBRCx1QkFBQztDQTlJRCxBQThJQyxDQTlJNkMsRUFBRSxDQUFDLFNBQVMsR0E4SXpEO2tCQTlJb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciwgeyBQbGF5ZXJTdGF0dXMgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyLCB7IEdhbWVTdGF0dXMgfSBmcm9tIFwiLi4vY29yZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi4vdXRpbC9WZWN0b3IyXCI7XHJcbmltcG9ydCBNYXRoZiBmcm9tIFwiLi4vdXRpbC9NYXRoZlwiO1xyXG5pbXBvcnQgSm95c3RpY2sgZnJvbSBcIi4vSm95c3RpY2tcIjtcclxuaW1wb3J0IENvbW1vblVpbHMgZnJvbSBcIi4uL3V0aWwvQ29tbW9uVWlsc1wiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHBsYXllcjpQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hQb3M6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlWm9vbTpudW1iZXIgPSAxO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHRhcmdldFpvb206bnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgem9vbVJhdGlvOm51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBqb3lTdGljazpKb3lzdGljayA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICAvL3ByaXZhdGUgY3VycmVudFpvb21WZWM6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50Wm9vbVZlYy54ID0gY2MuQ2FtZXJhLm1haW4uem9vbVJhdGlvO1xyXG4gICAgICAgIHRoaXMuYmFzZVpvb20gPSBjYy5DYW1lcmEubWFpbi56b29tUmF0aW87XHJcbiAgICAgICAgdGhpcy50YXJnZXRab29tID0gY2MuQ2FtZXJhLm1haW4uem9vbVJhdGlvO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMuZ2V0Q29tcG9uZW50KFBsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuam95U3RpY2sgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5qb3lzdGljaztcclxuXHJcbiAgICAgICAgLy9jYy5sb2coXCJsZXJwXCIsTWF0aGYubGVycCgwLjUsMSwwLjUpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuaXNBSSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgdG91Y2hQbGFuZTpjYy5Ob2RlID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UudG91Y2hQbGFuZTtcclxuXHJcbiAgICAgICAgdG91Y2hQbGFuZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnBsYXllciB8fCB0aGlzLnBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyA9PSBHYW1lU3RhdHVzLnN0YXJ0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvb21SYXRpbyA9IDAuNzU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5qb3lTdGljay5ub2RlLnBvc2l0aW9uID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54IC0gY2Mud2luU2l6ZS53aWR0aCAqIDAuNSxldmVudC5nZXRMb2NhdGlvbigpLnkgLSBjYy53aW5TaXplLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpveVN0aWNrLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG91Y2hQbGFuZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyAhPSBHYW1lU3RhdHVzLnN0YXJ0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5wbGF5ZXIgfHwgdGhpcy5wbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRGlyID0gY3VycmVudFBvcy5zdWIodGhpcy50b3VjaFBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuam95U3RpY2suY3Vyc29yVG8odGhpcy5wbGF5ZXIubW92ZURpcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXIubW92ZURpciA9IGV2ZW50LmdldERlbHRhKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvdWNoUGxhbmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighdGhpcy5wbGF5ZXIgfHwgdGhpcy5wbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbVJhdGlvID0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmKEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgPT0gR2FtZVN0YXR1cy5zdGFydClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2lyY2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuam95U3RpY2suaGlkZGVuKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b3VjaFBsYW5lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMucGxheWVyIHx8IHRoaXMucGxheWVyLnN0YXR1cyA9PSBQbGF5ZXJTdGF0dXMuZGllKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNoYW5nZURlZmVuY2VTdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21SYXRpbyA9IDE7XHJcbiAgICAgICAgICAgIGlmKEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgPT0gR2FtZVN0YXR1cy5zdGFydClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2lyY2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuam95U3RpY2suaGlkZGVuKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy9jYy5DYW1lcmEubWFpbi56b29tUmF0aW8gPSBNYXRoZi5sZXJwKGNjLkNhbWVyYS5tYWluLnpvb21SYXRpbyx0aGlzLnRhcmdldFpvb20sZHQpO1xyXG4gICAgICAgIC8vdmFyIHZlYzI6Y2MuVmVjMiA9IFZlY3RvcjIubGVycCh0aGlzLmN1cnJlbnRab29tVmVjLHRoaXMudGFyZ2V0Wm9vbVZlYyxkdCAqIDUpO1xyXG4gICAgICAgIC8vY2MuQ2FtZXJhLm1haW4uem9vbVJhdGlvID0gdmVjMi54O1xyXG5cclxuICAgICAgICBpZih0aGlzLnBsYXllci5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICByZXR1cm47ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldFpvb20gPSAodGhpcy5iYXNlWm9vbSAvIHRoaXMucGxheWVyLnNpemUpICogdGhpcy56b29tUmF0aW87XHJcbiAgICAgICAgY2MuQ2FtZXJhLm1haW4uem9vbVJhdGlvID0gTWF0aGYubGVycChjYy5DYW1lcmEubWFpbi56b29tUmF0aW8sdGhpcy50YXJnZXRab29tLGR0ICogNSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==