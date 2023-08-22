"use strict";
cc._RF.push(module, '68f37xrkmpGcZut7SNLEz2/', 'Body');
// script/tscript/gamescene/Body.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Knife_1 = require("./Knife");
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
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skin = null;
        _this.face = null;
        _this.player = null;
        _this.faceSFArr = [];
        _this.timer = 0;
        return _this;
    }
    // onLoad () {}
    Body.prototype.start = function () {
        this.player = this.node.parent.getComponent(Player_1.default);
        //this.face.node.active = false;
        //this.face.node.active = this.player.showface;
    };
    Body.prototype.update = function (dt) {
        if (this.player.showface) {
            if (this.timer > 0) {
                this.timer -= dt;
                if (this.timer <= 0) {
                    //this.face.spriteFrame = this.faceSFArr[Random.RangeInteger(0,this.faceSFArr.length)];
                    //this.timer = Random.Range(1.5,2.5);
                    this.face.spriteFrame = this.faceSFArr[1];
                }
            }
        }
    };
    Body.prototype.onCollisionEnter = function (other, self) {
        if (this.player.status == Player_1.PlayerStatus.die) {
            return;
        }
        if (other.tag == 0) {
        }
        else if (other.tag == 1) {
            var knife = other.getComponent(Knife_1.default);
            if (knife && knife.status == Knife_1.KnifeStatus.capture && knife.player && knife.player != this.player) {
                this.player.setDamage(knife.damage, knife.player);
                /*var pos1 = knife.node.parent.convertToWorldSpaceAR(knife.node.position);
                var pos2 = this.node.parent.convertToWorldSpaceAR(this.node.position);

                var dir:cc.Vec2 = pos1.sub(pos2).normalize();
                knife.fly(dir);*/
            }
        }
        else if (other.tag == 8) {
            /*var item:Item = other.getComponent(Item);
            switch(item.type)
            {
                case ItemType.fhl:
                this.player.fhlItemEffect();
                break;
                case ItemType.rocket:

                this.player.rocketItemEffect();
                
                break;
                case ItemType.magnet:

                this.player.magnetItemEffect();
                
                break;
            }

            item.destroySelf();*/
        }
        else {
        }
    };
    Body.prototype.updateState = function () {
        if (!this.player) {
            this.player = this.node.parent.getComponent(Player_1.default);
        }
        this.face.node.active = this.player.showface;
    };
    Body.prototype.changeFace = function (index, timer) {
        if (timer === void 0) { timer = 0; }
        this.timer = timer;
        this.face.spriteFrame = this.faceSFArr[index];
    };
    __decorate([
        property(cc.Sprite)
    ], Body.prototype, "skin", void 0);
    __decorate([
        property(cc.Sprite)
    ], Body.prototype, "face", void 0);
    __decorate([
        property(Player_1.default)
    ], Body.prototype, "player", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Body.prototype, "faceSFArr", void 0);
    Body = __decorate([
        ccclass
    ], Body);
    return Body;
}(cc.Component));
exports.default = Body;

cc._RF.pop();