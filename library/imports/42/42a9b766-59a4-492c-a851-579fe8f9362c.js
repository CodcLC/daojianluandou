"use strict";
cc._RF.push(module, '42a9bdmWaRJLKhRV5/o+TYs', 'Knife');
// script/tscript/gamescene/Knife.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesPool_1 = require("../core/ResourcesPool");
var Player_1 = require("./Player");
var Random_1 = require("../util/Random");
var KnifePool_1 = require("./KnifePool");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var WXSdk_1 = require("../wx/WXSdk");
var BlackHole_1 = require("./BlackHole");
var CameraFollow_1 = require("./CameraFollow");
var SoundManager_1 = require("../core/SoundManager");
var SoundClip_1 = require("../audio/SoundClip");
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
var KnifeType;
(function (KnifeType) {
    KnifeType[KnifeType["normal"] = 0] = "normal";
    KnifeType[KnifeType["red"] = 1] = "red";
    KnifeType[KnifeType["green"] = 2] = "green";
})(KnifeType = exports.KnifeType || (exports.KnifeType = {}));
var KnifeStatus;
(function (KnifeStatus) {
    KnifeStatus[KnifeStatus["normal"] = 0] = "normal";
    KnifeStatus[KnifeStatus["capture"] = 1] = "capture";
    KnifeStatus[KnifeStatus["fly"] = 2] = "fly";
    KnifeStatus[KnifeStatus["absorb"] = 3] = "absorb";
})(KnifeStatus = exports.KnifeStatus || (exports.KnifeStatus = {}));
var Knife = /** @class */ (function (_super) {
    __extends(Knife, _super);
    function Knife() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = KnifeType.normal;
        _this.skin = null;
        _this.status = KnifeStatus.normal;
        _this.player = null;
        _this.damage = 30;
        _this.rotaSpeed = 90;
        _this.rotaAngle = 0;
        _this.targetAngle = 0;
        _this.targetPos = cc.Vec2.ZERO;
        _this.halfSize = cc.Size.ZERO;
        return _this;
    }
    Knife_1 = Knife;
    // LIFE-CYCLE CALLBACKS:
    Knife.prototype.onLoad = function () {
        this.baseScale = this.node.scale;
        //this.setSkin(2,5);
    };
    Knife.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.skin.node.width = this.skin.spriteFrame.getRect().width;
        this.skin.node.height = this.skin.spriteFrame.getRect().height;
        /*this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
this.schedule(()=>{
    
    this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
},2.5);*/
    };
    Knife.prototype.setSkin = function (id) {
        /*ResourcesManager.instance.load(`knife/dao_${id - 1}`,(spriteFrame:cc.SpriteFrame)=>{

            if(spriteFrame)
            {
                this.skin.spriteFrame = spriteFrame;
                
                this.skin.node.width = spriteFrame.getRect().width;
                this.skin.node.height = spriteFrame.getRect().height;
                //this.skin.node.width = 500

            }

        },cc.SpriteFrame,true,false)*/
        var spriteFrame = GameManager_1.default.instance.daoImgs[id - 1];
        this.skin.spriteFrame = spriteFrame;
        this.skin.node.width = spriteFrame.getRect().width;
        this.skin.node.height = spriteFrame.getRect().height;
    };
    Knife.prototype.update = function (dt) {
        /*var speed = dt * this.rotaSpeed;

        var dir = this.targetAngle - this.node.rotation;

        if(speed > Math.abs(dir))
        {
            this.node.rotation = this.targetAngle;
            //cc.log("dddd");
        }else
        {
            if(dir > 0)
            {
                this.node.rotation += speed;
            }else
            {
                this.node.rotation -= speed;
            }
            
        }*/
        if (this.node.parent == GameManager_1.default.instance.gameScene) {
            this.halfSize.width = (this.gameScene.sceneSize.width - this.node.width) / 2;
            this.halfSize.height = (this.gameScene.sceneSize.height - this.node.height) / 2;
            var pos = this.node.position;
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
        }
    };
    Knife.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
        }
        else if (other.tag == 1) {
            if (this.status == KnifeStatus.capture) {
                var knife = other.getComponent(Knife_1);
                //cc.log("碰撞到了 other ",knife,this,knife.status,knife.status == KnifeStatus.capture,KnifeStatus.fly);
                if (knife && knife.status == KnifeStatus.capture && knife.player && knife.player != this.player) {
                    if (!this.player.isAI || !knife.player.isAI) {
                        WXSdk_1.default.instance.vibrateShort();
                        CameraFollow_1.default.instance.shake();
                        SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.kfhit);
                    }
                    //cc.log("hit other ",knife,knife.status);
                    var dir = this.node.position.sub(knife.node.position).normalize();
                    if (knife.player.status == Player_1.PlayerStatus.attack) {
                        knife.fly(dir.mul(-1));
                    }
                    if (this.player.status == Player_1.PlayerStatus.attack) {
                        this.fly(dir);
                    }
                }
            }
        }
        else if (other.tag == 2) //碰到了障碍物
         {
            if (this.status == KnifeStatus.capture || this.status == KnifeStatus.fly) {
                if (this.player && !this.player.isAI) {
                    WXSdk_1.default.instance.vibrateShort();
                    CameraFollow_1.default.instance.shake();
                    SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.kfhit);
                }
                var dir = this.node.position.sub(other.node.position).normalize();
                this.fly(dir);
            }
        }
        else if (other.tag == 5) //碰撞刀了黑洞
         {
            this.absorbed(other.node.parent.getComponent(BlackHole_1.default));
        }
    };
    Knife.prototype.fly = function (dir) {
        var _this = this;
        if (dir === void 0) { dir = cc.Vec2.ONE; }
        if (this.status == KnifeStatus.capture) {
            this.status = KnifeStatus.fly;
            var pool = this.node.parent.getComponent(KnifePool_1.default);
            if (pool) {
                pool.removeKnife(this);
            }
        }
        if (this.node.parent != GameManager_1.default.instance.gameScene) {
            var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos = GameManager_1.default.instance.gameScene.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }
        this.node.parent = GameManager_1.default.instance.gameScene;
        this.player = null;
        this.node.stopAllActions();
        this.node.scale = 1;
        var t = Random_1.default.Range(0.65, 1.0);
        var spawn = cc.spawn(cc.moveBy(t, dir.mul(Random_1.default.Range(360, 540))).easing(cc.easeCubicActionOut()), cc.rotateBy(t, 1080).easing(cc.easeCubicActionOut()));
        var seq = cc.sequence(spawn, cc.callFunc(function () {
            _this.status = KnifeStatus.normal;
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).addKnife(_this);
        }, this));
        this.node.runAction(seq);
    };
    Knife.prototype.absorbed = function (blackhole) {
        var _this = this;
        if (!blackhole.appear)
            return;
        if (this.status == KnifeStatus.absorb)
            return;
        if (this.status == KnifeStatus.capture) {
            var pool = this.node.parent.getComponent(KnifePool_1.default);
            if (pool) {
                pool.removeKnife(this);
            }
        }
        this.status = KnifeStatus.absorb;
        if (this.node.parent != blackhole.node) {
            var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos = blackhole.node.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }
        this.node.parent = blackhole.node;
        this.player = null;
        this.node.stopAllActions();
        this.node.scale = 1;
        //var dir:cc.Vec2 = cc.Vec2.ZERO.sub(cc.v2(1,0)).normalize();
        var dir = cc.Vec2.ZERO.sub(this.node.position).normalize();
        var eulerAngle = 90 - Math.atan2(dir.y, dir.x) * 180 / Math.PI;
        this.node.runAction(cc.rotateTo(0.15, eulerAngle));
        //this.node.rotation = eulerAngle;
        var t = Random_1.default.Range(0.65, 1.0);
        var spawnAction = cc.spawn(cc.moveTo(0.45, cc.Vec2.ZERO), cc.fadeTo(0.45, 25), cc.scaleTo(0.45, 0.25));
        var seq = cc.sequence(spawnAction, cc.callFunc(function () {
            blackhole.eat(_this);
            _this.status = KnifeStatus.normal;
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).removeKnife(_this);
            _this.destroySelf();
        }, this));
        this.node.runAction(seq);
    };
    Knife.prototype.setRota = function (eulerAngle) {
        //this.targetAngle = eulerAngle;
        //this.node.stopAllActions();
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
            this.node.runAction(cc.rotateTo(0.1, eulerAngle));
        }
        else {
            //this.node.rotation = eulerAngle;
            //this.node.runAction(cc.rotateTo(0.05,eulerAngle));
            this.node.runAction(cc.rotateTo(0.1, eulerAngle));
        }
        //this.node.rotation = eulerAngle;
    };
    Knife.prototype.setPos = function (pos) {
        //this.targetPos = pos;
        var t = this.node.position.sub(pos).mag() / 1000;
        //t = 0.3;
        this.node.runAction(cc.moveTo(t, pos));
        //this.node.position = pos;
    };
    Knife.prototype.rotateTowards = function () {
    };
    Knife.prototype.setScale = function (size) {
        //this.node.scale = size;
        this.node.scale = this.baseScale * size;
    };
    Knife.prototype.getKey = function () {
        //return PopupText.name;
        return "Knife";
    };
    Knife.prototype.awake = function () {
        this.node.position = cc.Vec2.ZERO;
        this.node.active = true;
        this.node.color = cc.Color.WHITE;
        this.node.opacity = 255;
        this.node.scale = 1;
        this.status = KnifeStatus.normal;
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
    };
    Knife.prototype.sleep = function () {
        this.node.stopAllActions();
        this.node.parent = null;
        this.node.active = false;
        this.status = KnifeStatus.normal;
    };
    Knife.prototype.destroySelf = function () {
        ResourcesPool_1.default.instance.put(this, 50);
    };
    var Knife_1;
    __decorate([
        property({ type: cc.Enum(KnifeType) })
    ], Knife.prototype, "type", void 0);
    __decorate([
        property(cc.Sprite)
    ], Knife.prototype, "skin", void 0);
    Knife = Knife_1 = __decorate([
        ccclass
    ], Knife);
    return Knife;
}(cc.Component));
exports.default = Knife;

cc._RF.pop();