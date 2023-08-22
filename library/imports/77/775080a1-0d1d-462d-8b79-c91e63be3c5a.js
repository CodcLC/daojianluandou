"use strict";
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