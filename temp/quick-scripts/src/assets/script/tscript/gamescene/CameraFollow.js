"use strict";
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