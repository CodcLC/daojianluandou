"use strict";
cc._RF.push(module, 'c3b100Vh/REDKGWVEdiJIDB', 'Player');
// script/tscript/gamescene/Player.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("../item/Item");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var KnifePool_1 = require("./KnifePool");
var Knife_1 = require("./Knife");
var Body_1 = require("./Body");
var Random_1 = require("../util/Random");
var DataManager_1 = require("../core/DataManager");
var Mathf_1 = require("../util/Mathf");
var SoundManager_1 = require("../core/SoundManager");
var SoundClip_1 = require("../audio/SoundClip");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["none"] = 0] = "none";
    PlayerStatus[PlayerStatus["defence"] = 1] = "defence";
    PlayerStatus[PlayerStatus["attack"] = 2] = "attack";
    PlayerStatus[PlayerStatus["die"] = 3] = "die";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.knifePool = null;
        _this.nameTxt = null;
        _this.nameexitTxt = null;
        _this.isAI = false;
        _this.body = null;
        _this.circle = null;
        _this.tail = null;
        _this.skins = [];
        _this.radius = 0;
        _this.gameScene = null;
        _this.moveDir = cc.Vec2.ZERO;
        _this.moveSpeed = 550;
        _this.halfSize = cc.Size.ZERO;
        _this.hp = 10;
        _this.status = PlayerStatus.defence;
        _this.knifeId = 1;
        _this.killCount = 0;
        _this.showface = false;
        _this.circleCollider = null;
        _this.physicsCircleCollider = null;
        _this.speedBufTime = 0;
        _this.fhlBufTime = 0;
        _this.magnetBufTime = 0;
        _this.moveSpeedUp = 1;
        _this.rotaSpeedUp = 1;
        _this.circleRange = 1;
        /**
         * 仇家
         */
        _this.killer = null;
        _this.rank = 1;
        _this.baseScale = 1;
        _this._size = 1;
        _this._skin = 1;
        return _this;
    }
    Object.defineProperty(Player.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.body.node.scale = this.baseScale * this._size;
            /*if(!this.circleCollider)
            {
                this.circleCollider = this.getComponent(cc.CircleCollider);
            }
    
            this.circleCollider.radius = 200 * this._size * this.circleRange;*/
            if (!this.physicsCircleCollider) {
                this.physicsCircleCollider = this.getComponent(cc.PhysicsCircleCollider);
            }
            this.physicsCircleCollider.radius = 75 * this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "pickRadius", {
        get: function () {
            return this._pickRadius;
        },
        set: function (value) {
            this._pickRadius = value;
            if (!this.circleCollider) {
                this.circleCollider = this.getComponent(cc.CircleCollider);
            }
            this.circleCollider.radius = this._pickRadius * this.circleRange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "skin", {
        get: function () {
            return this._skin;
        },
        set: function (value) {
            this._skin = Mathf_1.default.clamp(value, 1, 8);
            this.body.skin.spriteFrame = this.skins[this._skin - 1];
        },
        enumerable: true,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.gameScene = this.node.parent.getComponent(GameScene_1.default);
        this.baseScale = this.body.node.scale;
        this.radius = this.body.getComponent(cc.CircleCollider).radius;
        //this.body = this.getComponentInChildren(Body);
        //this.body.node.color = new cc.Color(Random.Range(0,255),Random.Range(0,255),Random.Range(0,255));
        //var index:number = Random.RangeInteger(0,Player.colorArr.length);
        //this.colorId = index + 1;
        //this.body.node.color = Player.colorArr[index];
        //
    };
    Player.prototype.start = function () {
        //var nameArr = ["龙隼","飞哥","efsl","拉啊啦","何欢","项少龙","说书","we11","小胖子"];
        //var nameArr = DataManager.instance.nameConfigDatas;
        //this.nameTxt.string = nameArr[Random.RangeInteger(0,nameArr.length)].name;
        if (!this.isAI) {
            //this.circle.active = true;
        }
        var nn = cc.sys.localStorage.getItem("playname");
        if (nn == "" || nn == null || nn == undefined) {
            nn = "小李飞刀";
            cc.sys.localStorage.setItem("playname", nn);
        }
        if (this.nameexitTxt) {
            this.nameexitTxt.string = nn;
        }
    };
    Player.prototype.namechange = function () {
        if (this.nameexitTxt) {
            var nn = this.nameexitTxt.string;
            if (nn != "") {
                cc.sys.localStorage.setItem("playname", nn);
            }
            this.setName(nn);
        }
    };
    Player.prototype.onGameStart = function () {
        if (!this.isAI) {
            this.circle.active = true;
        }
        if (this.speedBufTime > 0) {
            this.tail.active = true;
        }
        this.body.updateState();
        if (this.nameexitTxt) {
            this.nameTxt.node.active = true;
            this.nameexitTxt.node.active = false;
        }
    };
    Player.prototype.getName = function () {
        return this.nameTxt.string;
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        if (this.status == PlayerStatus.die) {
            return;
        }
        if (other.tag == 0) {
        }
        else if (other.tag == 1) {
            var knife = other.getComponent(Knife_1.default);
            //cc.log("碰撞到了 other ",other,knife);
            if (knife && knife.status == Knife_1.KnifeStatus.normal) {
                this.captureKnife(knife);
            }
        }
        else if (other.tag == 8) {
            var item = other.getComponent(Item_1.default);
            switch (item.type) {
                case Item_1.ItemType.fhl:
                    this.fhlItemEffect();
                    break;
                case Item_1.ItemType.rocket:
                    this.rocketItemEffect();
                    break;
                case Item_1.ItemType.magnet:
                    this.magnetItemEffect();
                    break;
            }
            item.destroySelf();
        }
        else {
        }
    };
    /**
     * 类似unity 的OnCollisionEnter OnTriggerEnter的结合
     * @param concact
     * @param selfCollider
     * @param otherColliser
     */
    Player.prototype.onBeginContact = function (concact, selfCollider, otherColliser) {
        //cc.log("刚体发生碰撞了",selfCollider.name);
        var knife = otherColliser.getComponent(Knife_1.default);
        if (knife && knife.status == Knife_1.KnifeStatus.normal) {
            this.captureKnife(knife);
        }
    };
    Player.prototype.update = function (dt) {
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.none) {
            return;
        }
        if (this.speedBufTime > 0) {
            this.speedBufTime -= dt;
            if (this.speedBufTime <= 0) {
                this.speedBufTime = 0;
                this.moveSpeedUp = 1;
                this.tail.active = false;
            }
        }
        if (this.fhlBufTime > 0) {
            this.fhlBufTime -= dt;
            if (this.fhlBufTime <= 0) {
                this.fhlBufTime = 0;
                this.rotaSpeedUp = 1;
            }
        }
        if (this.magnetBufTime > 0) {
            this.magnetBufTime -= dt;
            if (this.magnetBufTime <= 0) {
                this.magnetBufTime = 0;
                this.circleRange = 1;
                this.size = this.size;
            }
        }
        this.halfSize.width = (this.gameScene.sceneSize.width - 2 * this.radius * this.size) / 2;
        this.halfSize.height = (this.gameScene.sceneSize.height - 2 * this.radius * this.size) / 2;
        var pos = this.node.position.add(this.moveDir.mul(this.getMoveSpeed() * dt));
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
    Player.prototype.getMoveSpeed = function () {
        return this.moveSpeed * this.moveSpeedUp;
    };
    Player.prototype.moveToTarget = function (targetPos) {
        this.moveDir = targetPos.sub(this.node.position).normalize();
    };
    Player.prototype.stopMove = function () {
        this.moveDir = cc.Vec2.ZERO;
    };
    Player.prototype.captureKnife = function (knife) {
        if (!this.isAI) {
            SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.pick);
        }
        this.knifePool.addKnife(knife);
        this.gameScene.removeKnife(knife);
    };
    Player.prototype.changeDefenceState = function () {
        if (this.status != PlayerStatus.defence) {
            this.status = PlayerStatus.defence;
            this.knifePool.changeDefenceState();
            this.changeFace(0);
        }
    };
    Player.prototype.changeAttackState = function () {
        if (this.status != PlayerStatus.attack) {
            this.status = PlayerStatus.attack;
            this.knifePool.changeAttackState();
            this.changeFace(1);
        }
    };
    Player.prototype.initKnife = function (count) {
        this.knifePool.initKnife(count);
    };
    Player.prototype.randomKnifeSkin = function () {
        this.knifeId = Random_1.default.RangeInteger(1, DataManager_1.default.instance.knifeConfigDatas.length + 1);
        //this.colorId = Random.RangeInteger(1,7);
        this.updateKnifesSkin();
    };
    Player.prototype.setColor = function (color) {
        this.body.node.color = color;
        this.circle.color = color;
    };
    Player.prototype.setName = function (name) {
        this.nameTxt.string = name;
    };
    Player.prototype.fhlItemEffect = function () {
        this.fhlBufTime = 10;
        this.rotaSpeedUp = 2;
    };
    Player.prototype.rocketItemEffect = function () {
        this.speedBufTime = 10;
        this.moveSpeedUp = 1.5;
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
            this.tail.active = true;
        }
    };
    Player.prototype.magnetItemEffect = function () {
        this.magnetBufTime = 5;
        this.circleRange = 1.5;
        this.size = this.size;
    };
    Player.prototype.updateKnifesSkin = function () {
        this.knifePool.updateKnifesSkin(this.knifeId);
    };
    Player.prototype.setDamage = function (value, otherPlayer) {
        if (this.status == PlayerStatus.die) {
            return;
        }
        this.hp -= value;
        if (this.hp <= 0) {
            this.hp = 0;
            this.status = PlayerStatus.die;
            this.knifePool.disposeAllKnifes();
            //this.node.destroy();
            this.killer = otherPlayer;
            this.node.active = false;
            this.gameScene.playerKilled(otherPlayer, this);
        }
    };
    Player.prototype.changeFace = function (index, timer) {
        if (timer === void 0) { timer = 0; }
        if (!this.showface)
            return;
        this.body.changeFace(index, timer);
    };
    Player.colorArr = [
        new cc.Color(255, 152, 96),
        new cc.Color(45, 185, 251),
        new cc.Color(123, 87, 240),
        new cc.Color(61, 230, 146),
        new cc.Color(245, 135, 189),
        new cc.Color(253, 253, 122) //黄
    ];
    __decorate([
        property(KnifePool_1.default)
    ], Player.prototype, "knifePool", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.EditBox)
    ], Player.prototype, "nameexitTxt", void 0);
    __decorate([
        property()
    ], Player.prototype, "isAI", void 0);
    __decorate([
        property(Body_1.default)
    ], Player.prototype, "body", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "circle", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "tail", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "skins", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();