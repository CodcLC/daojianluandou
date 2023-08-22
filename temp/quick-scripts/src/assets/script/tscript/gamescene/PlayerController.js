"use strict";
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