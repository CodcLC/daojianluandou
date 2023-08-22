
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXFBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFHbkcscUNBQThDO0FBQzlDLG1EQUE4RDtBQUU5RCx5Q0FBb0M7QUFDcEMseUNBQW9DO0FBQ3BDLGlDQUF3RDtBQUN4RCwrQkFBMEI7QUFDMUIseUNBQW9DO0FBRXBDLG1EQUE4QztBQUM5Qyx1Q0FBa0M7QUFDbEMscURBQWdEO0FBQ2hELGdEQUFtRDtBQUU3QyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUVwQiwrQ0FBUSxDQUFBO0lBQ1IscURBQVcsQ0FBQTtJQUNYLG1EQUFVLENBQUE7SUFDViw2Q0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBTXZCO0FBR0Q7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUF5ZkM7UUE1ZVUsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBSS9CLFVBQUksR0FBVyxLQUFLLENBQUM7UUFHckIsVUFBSSxHQUFRLElBQUksQ0FBQztRQUdqQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLFVBQUksR0FBVyxJQUFJLENBQUM7UUFHcEIsV0FBSyxHQUFvQixFQUFFLENBQUM7UUFFNUIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVUsR0FBRyxDQUFDO1FBRXRCLGNBQVEsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVqQyxRQUFFLEdBQVUsRUFBRSxDQUFDO1FBRWYsWUFBTSxHQUFpQixZQUFZLENBQUMsT0FBTyxDQUFDO1FBRTVDLGFBQU8sR0FBVSxDQUFDLENBQUM7UUFFbkIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsS0FBSyxDQUFDO1FBR3hCLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUV4QywyQkFBcUIsR0FBcUIsSUFBSSxDQUFDO1FBRy9DLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFFbkIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFHdkI7O1dBRUc7UUFDSSxZQUFNLEdBQVUsSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFFZixlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRXJCLFdBQUssR0FBVyxDQUFDLENBQUM7UUF5Q2xCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBMFg5QixDQUFDO0lBbGFHLHNCQUFXLHdCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUVuRDs7Ozs7K0VBS21FO1lBR25FLElBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQzlCO2dCQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzVFO1lBRUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4RCxDQUFDOzs7T0FwQkE7SUF1QkQsc0JBQVcsOEJBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFFekIsSUFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDOUQ7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckUsQ0FBQzs7O09BWEE7SUFjRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBRXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BTEE7SUFRRCx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUVHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDL0QsZ0RBQWdEO1FBQ2hELG1HQUFtRztRQUVuRyxtRUFBbUU7UUFDbkUsMkJBQTJCO1FBRTNCLGdEQUFnRDtRQUdyRCxFQUFFO0lBRUEsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFFSSxzRUFBc0U7UUFDdEUscURBQXFEO1FBRXJELDRFQUE0RTtRQUM1RSxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFDYjtZQUNJLDRCQUE0QjtTQUMvQjtRQUdQLElBQUksRUFBRSxHQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqRCxJQUFJLEVBQUUsSUFBRyxFQUFFLElBQUksRUFBRSxJQUFFLElBQUksSUFBSSxFQUFFLElBQUcsU0FBUyxFQUN6QztZQUNDLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDWixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUNuQjtZQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUM3QjtJQUdBLENBQUM7SUFHSiwyQkFBVSxHQUFWO1FBRUMsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUNsQjtZQUVBLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRWpDLElBQUksRUFBRSxJQUFHLEVBQUUsRUFDWDtnQkFFQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtJQUVGLENBQUM7SUFFUyw0QkFBVyxHQUFsQjtRQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNiO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsSUFBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDeEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRzlCLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFDbkI7WUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7SUFFQyxDQUFDO0lBR00sd0JBQU8sR0FBZDtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlDQUFnQixHQUF2QixVQUF3QixLQUFpQixFQUFDLElBQWdCO1FBR3RELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsR0FBRyxFQUNsQztZQUNJLE9BQU87U0FDVjtRQUVELElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ2pCO1NBQ0M7YUFBSyxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUN2QjtZQUNJLElBQUksS0FBSyxHQUFTLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7WUFFNUMsb0NBQW9DO1lBRXBDLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksbUJBQVcsQ0FBQyxNQUFNLEVBQzlDO2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FFSjthQUFLLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3ZCO1lBQ0ksSUFBSSxJQUFJLEdBQVEsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztZQUN6QyxRQUFPLElBQUksQ0FBQyxJQUFJLEVBQ2hCO2dCQUNJLEtBQUssZUFBUSxDQUFDLEdBQUc7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDTixLQUFLLGVBQVEsQ0FBQyxNQUFNO29CQUVwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFFeEIsTUFBTTtnQkFDTixLQUFLLGVBQVEsQ0FBQyxNQUFNO29CQUVwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFFeEIsTUFBTTthQUNUO1lBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBRXRCO2FBQ0Q7U0FFQztJQUVMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUFjLEdBQXJCLFVBQXNCLE9BQXlCLEVBQUMsWUFBd0IsRUFBQyxhQUF5QjtRQUU5RixzQ0FBc0M7UUFFdEMsSUFBSSxLQUFLLEdBQVMsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLG1CQUFXLENBQUMsTUFBTSxFQUM5QztZQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUEsdUJBQU0sR0FBTixVQUFRLEVBQUU7UUFFUCxJQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFDckQ7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxJQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUN4QjtZQUNJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQ3pCO2dCQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1NBQ0o7UUFFRCxJQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUN0QjtZQUNJLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUN4QjtTQUNKO1FBRUQsSUFBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDekI7WUFDSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUMxQjtnQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6QjtTQUNKO1FBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRTtRQUMxRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFO1FBRTVGLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRixJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDL0I7WUFDSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDaEM7YUFBSyxJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQ3BDO1lBQ0ksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUMvQjtRQUVELElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNoQztZQUNJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNqQzthQUFLLElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDckM7WUFDSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRTVCLENBQUM7SUFFTSw2QkFBWSxHQUFuQjtRQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFTSw2QkFBWSxHQUFuQixVQUFvQixTQUFpQjtRQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRU0seUJBQVEsR0FBZjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZCQUFZLEdBQW5CLFVBQW9CLEtBQVc7UUFFM0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2I7WUFDRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxtQ0FBa0IsR0FBekI7UUFFSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLE9BQU8sRUFDdEM7WUFDRyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRU0sa0NBQWlCLEdBQXhCO1FBR0csSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQ3JDO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBRUosQ0FBQztJQUVNLDBCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLGdDQUFlLEdBQXRCO1FBRUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0seUJBQVEsR0FBZixVQUFnQixLQUFjO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSx3QkFBTyxHQUFkLFVBQWUsSUFBVztRQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFOUIsQ0FBQztJQUVNLDhCQUFhLEdBQXBCO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFnQixHQUF2QjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRXZCLElBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLHdCQUFVLENBQUMsS0FBSyxFQUN0RDtZQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUVMLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFFSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVNLGlDQUFnQixHQUF2QjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFHTSwwQkFBUyxHQUFoQixVQUFpQixLQUFZLEVBQUMsV0FBa0I7UUFFNUMsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQ2xDO1lBQ0ksT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUM7UUFFakIsSUFBRyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFDZjtZQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUVsQyxzQkFBc0I7WUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtJQUdMLENBQUM7SUFFSywyQkFBVSxHQUFqQixVQUFrQixLQUFZLEVBQUMsS0FBZ0I7UUFBaEIsc0JBQUEsRUFBQSxTQUFnQjtRQUczQyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDYixPQUFPO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFuZmEsZUFBUSxHQUFtQjtRQUNyQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7UUFDeEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBLEdBQUc7S0FDL0IsQ0FBQztJQUdGO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7NkNBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDWTtJQUcvQjtRQURELFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFFOytDQUNrQjtJQUl0QztRQURDLFFBQVEsRUFBRTt3Q0FDaUI7SUFHNUI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3dDQUNTO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNVO0lBbENsQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd2YxQjtJQUFELGFBQUM7Q0F4ZkQsQUF3ZkMsQ0F4Zm1DLEVBQUUsQ0FBQyxTQUFTLEdBd2YvQztrQkF4Zm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDdXN0b21FdmVudFR5cGUgZnJvbSBcIi4uL2V2ZW50L0N1c3RvbUV2ZW50VHlwZVwiO1xyXG5pbXBvcnQgSXRlbSwgeyBJdGVtVHlwZSB9IGZyb20gXCIuLi9pdGVtL0l0ZW1cIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyLCB7IEdhbWVTdGF0dXMgfSBmcm9tIFwiLi4vY29yZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tbW9uVWlscyBmcm9tIFwiLi4vdXRpbC9Db21tb25VaWxzXCI7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBLbmlmZVBvb2wgZnJvbSBcIi4vS25pZmVQb29sXCI7XHJcbmltcG9ydCBLbmlmZSwgeyBLbmlmZVR5cGUsIEtuaWZlU3RhdHVzIH0gZnJvbSBcIi4vS25pZmVcIjtcclxuaW1wb3J0IEJvZHkgZnJvbSBcIi4vQm9keVwiO1xyXG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi91dGlsL1JhbmRvbVwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBNYXRoZiBmcm9tIFwiLi4vdXRpbC9NYXRoZlwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZENsaXBUeXBlIH0gZnJvbSBcIi4uL2F1ZGlvL1NvdW5kQ2xpcFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gUGxheWVyU3RhdHVzXHJcbntcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgZGVmZW5jZSA9IDEsXHJcbiAgICBhdHRhY2sgPSAyLFxyXG4gICAgZGllID0gMyxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbG9yQXJyOkFycmF5PGNjLkNvbG9yPiA9IFtcclxuICAgICAgICBuZXcgY2MuQ29sb3IoMjU1LDE1Miw5NiksLy/mqZlcclxuICAgICAgICBuZXcgY2MuQ29sb3IoNDUsMTg1LDI1MSksLy/ok51cclxuICAgICAgICBuZXcgY2MuQ29sb3IoMTIzLDg3LDI0MCksLy/ntKtcclxuICAgICAgICBuZXcgY2MuQ29sb3IoNjEsMjMwLDE0NiksLy/nu79cclxuICAgICAgICBuZXcgY2MuQ29sb3IoMjQ1LDEzNSwxODkpLC8v57KJXHJcbiAgICAgICAgbmV3IGNjLkNvbG9yKDI1MywyNTMsMTIyKS8v6buEXHJcbiAgICBdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShLbmlmZVBvb2wpXHJcbiAgICBwdWJsaWMga25pZmVQb29sOktuaWZlUG9vbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGljIG5hbWVUeHQ6Y2MuTGFiZWwgPSBudWxsO1xyXG5cdFxyXG5cdCBAcHJvcGVydHkoY2MuRWRpdEJveCApXHJcbiAgICBwdWJsaWMgbmFtZWV4aXRUeHQ6Y2MuRWRpdEJveCAgPSBudWxsO1xyXG5cdFxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgaXNBSTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvZHkpXHJcbiAgICBwdWJsaWMgYm9keTpCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBjaXJjbGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgdGFpbDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgc2tpbnM6Y2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyByYWRpdXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2FtZVNjZW5lOkdhbWVTY2VuZSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgbW92ZURpcjpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHB1YmxpYyBtb3ZlU3BlZWQ6bnVtYmVyID0gNTUwO1xyXG5cclxuICAgIHByaXZhdGUgaGFsZlNpemU6Y2MuU2l6ZSA9IGNjLlNpemUuWkVSTztcclxuXHJcbiAgICBwdWJsaWMgaHA6bnVtYmVyID0gMTA7XHJcblxyXG4gICAgcHVibGljIHN0YXR1czpQbGF5ZXJTdGF0dXMgID0gUGxheWVyU3RhdHVzLmRlZmVuY2U7XHJcblxyXG4gICAgcHVibGljIGtuaWZlSWQ6bnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMga2lsbENvdW50Om51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHNob3dmYWNlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaXJjbGVDb2xsaWRlcjpjYy5DaXJjbGVDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwaHlzaWNzQ2lyY2xlQ29sbGlkZXI6Y2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHNwZWVkQnVmVGltZSA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBmaGxCdWZUaW1lID0gMDtcclxuXHJcbiAgICBwcml2YXRlIG1hZ25ldEJ1ZlRpbWUgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBtb3ZlU3BlZWRVcCA9IDE7XHJcblxyXG4gICAgcHVibGljIHJvdGFTcGVlZFVwID0gMTtcclxuXHJcbiAgICBwdWJsaWMgY2lyY2xlUmFuZ2UgPSAxO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7h+WutlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMga2lsbGVyOlBsYXllciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHJhbms6bnVtYmVyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIGJhc2VTY2FsZTpudW1iZXIgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2l6ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuYm9keS5ub2RlLnNjYWxlID0gdGhpcy5iYXNlU2NhbGUgKiB0aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAvKmlmKCF0aGlzLmNpcmNsZUNvbGxpZGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLmNpcmNsZUNvbGxpZGVyLnJhZGl1cyA9IDIwMCAqIHRoaXMuX3NpemUgKiB0aGlzLmNpcmNsZVJhbmdlOyovXHJcblxyXG5cclxuICAgICAgICBpZighdGhpcy5waHlzaWNzQ2lyY2xlQ29sbGlkZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQ2lyY2xlQ29sbGlkZXIucmFkaXVzID0gNzUgKiB0aGlzLl9zaXplO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9waWNrUmFkaXVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IHBpY2tSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGlja1JhZGl1cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgcGlja1JhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGlja1JhZGl1cyA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZighdGhpcy5jaXJjbGVDb2xsaWRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQ29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5jaXJjbGVDb2xsaWRlci5yYWRpdXMgPSB0aGlzLl9waWNrUmFkaXVzICogdGhpcy5jaXJjbGVSYW5nZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2tpbjogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBnZXQgc2tpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9za2luO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBza2luKHZhbHVlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fc2tpbiA9IE1hdGhmLmNsYW1wKHZhbHVlLDEsOCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LnNraW4uc3ByaXRlRnJhbWUgPSB0aGlzLnNraW5zW3RoaXMuX3NraW4gLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgdGhpcy5nYW1lU2NlbmUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG4gICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLmJvZHkubm9kZS5zY2FsZTtcclxuICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5ib2R5LmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzO1xyXG4gICAgICAgLy90aGlzLmJvZHkgPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oQm9keSk7XHJcbiAgICAgICAvL3RoaXMuYm9keS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKFJhbmRvbS5SYW5nZSgwLDI1NSksUmFuZG9tLlJhbmdlKDAsMjU1KSxSYW5kb20uUmFuZ2UoMCwyNTUpKTtcclxuXHJcbiAgICAgICAvL3ZhciBpbmRleDpudW1iZXIgPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKDAsUGxheWVyLmNvbG9yQXJyLmxlbmd0aCk7XHJcbiAgICAgICAvL3RoaXMuY29sb3JJZCA9IGluZGV4ICsgMTtcclxuXHJcbiAgICAgICAvL3RoaXMuYm9keS5ub2RlLmNvbG9yID0gUGxheWVyLmNvbG9yQXJyW2luZGV4XTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvL1xyXG5cdFx0XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICAvL3ZhciBuYW1lQXJyID0gW1wi6b6Z6Zq8XCIsXCLpo57lk6VcIixcImVmc2xcIixcIuaLieWViuWVplwiLFwi5L2V5qyiXCIsXCLpobnlsJHpvplcIixcIuivtOS5plwiLFwid2UxMVwiLFwi5bCP6IOW5a2QXCJdO1xyXG4gICAgICAgIC8vdmFyIG5hbWVBcnIgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5uYW1lQ29uZmlnRGF0YXM7XHJcblxyXG4gICAgICAgIC8vdGhpcy5uYW1lVHh0LnN0cmluZyA9IG5hbWVBcnJbUmFuZG9tLlJhbmdlSW50ZWdlcigwLG5hbWVBcnIubGVuZ3RoKV0ubmFtZTtcclxuICAgICAgICBpZighdGhpcy5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy90aGlzLmNpcmNsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHRcclxuXHRcdHZhciBubiA9ICBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5bmFtZVwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCBubj09IFwiXCIgfHwgbm49PW51bGwgfHwgbm49PSB1bmRlZmluZWQgIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5uID0gXCLlsI/mnY7po57liIBcIjtcclxuXHRcdFx0XHRjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5bmFtZVwiLG5uKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLm5hbWVleGl0VHh0IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubmFtZWV4aXRUeHQuc3RyaW5nID0gbm47XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcbiAgICB9XHJcblx0XHJcblx0XHJcblx0bmFtZWNoYW5nZSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5uYW1lZXhpdFR4dCApXHJcblx0XHRcdHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgbm4gPSB0aGlzLm5hbWVleGl0VHh0LnN0cmluZztcclxuXHRcdFx0XHJcblx0XHRcdGlmKCBubiE9IFwiXCIgIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheW5hbWVcIixubik7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zZXROYW1lKG5uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBwdWJsaWMgb25HYW1lU3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzQUkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlZEJ1ZlRpbWUgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50YWlsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJvZHkudXBkYXRlU3RhdGUoKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRpZih0aGlzLm5hbWVleGl0VHh0IClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5uYW1lVHh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5uYW1lZXhpdFR4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldE5hbWUoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lVHh0LnN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlcjpjYy5Db2xsaWRlcixzZWxmOmNjLkNvbGxpZGVyKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci50YWcgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBrbmlmZTpLbmlmZSA9IG90aGVyLmdldENvbXBvbmVudChLbmlmZSk7XHJcblxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIueisOaSnuWIsOS6hiBvdGhlciBcIixvdGhlcixrbmlmZSk7XHJcblxyXG4gICAgICAgICAgICBpZihrbmlmZSAmJiBrbmlmZS5zdGF0dXMgPT0gS25pZmVTdGF0dXMubm9ybWFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVLbmlmZShrbmlmZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaXRlbTpJdGVtID0gb3RoZXIuZ2V0Q29tcG9uZW50KEl0ZW0pO1xyXG4gICAgICAgICAgICBzd2l0Y2goaXRlbS50eXBlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLmZobDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZmhsSXRlbUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLnJvY2tldDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvY2tldEl0ZW1FZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLm1hZ25ldDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hZ25ldEl0ZW1FZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveVNlbGYoKTtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnsbvkvLx1bml0eSDnmoRPbkNvbGxpc2lvbkVudGVyIE9uVHJpZ2dlckVudGVy55qE57uT5ZCIXHJcbiAgICAgKiBAcGFyYW0gY29uY2FjdCBcclxuICAgICAqIEBwYXJhbSBzZWxmQ29sbGlkZXIgXHJcbiAgICAgKiBAcGFyYW0gb3RoZXJDb2xsaXNlciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQmVnaW5Db250YWN0KGNvbmNhY3Q6Y2MuUGh5c2ljc0NvbnRhY3Qsc2VsZkNvbGxpZGVyOmNjLkNvbGxpZGVyLG90aGVyQ29sbGlzZXI6Y2MuQ29sbGlkZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jYy5sb2coXCLliJrkvZPlj5HnlJ/norDmkp7kuoZcIixzZWxmQ29sbGlkZXIubmFtZSk7XHJcblxyXG4gICAgICAgIHZhciBrbmlmZTpLbmlmZSA9IG90aGVyQ29sbGlzZXIuZ2V0Q29tcG9uZW50KEtuaWZlKTtcclxuXHJcbiAgICAgICAgaWYoa25pZmUgJiYga25pZmUuc3RhdHVzID09IEtuaWZlU3RhdHVzLm5vcm1hbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZUtuaWZlKGtuaWZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgaWYoR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyA9PSBHYW1lU3RhdHVzLm5vbmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3BlZWRCdWZUaW1lID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRCdWZUaW1lIC09IGR0O1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwZWVkQnVmVGltZSA8PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkQnVmVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTcGVlZFVwID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFpbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5maGxCdWZUaW1lID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmhsQnVmVGltZSAtPSBkdDtcclxuICAgICAgICAgICAgaWYodGhpcy5maGxCdWZUaW1lIDw9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmhsQnVmVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGFTcGVlZFVwID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5tYWduZXRCdWZUaW1lID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWFnbmV0QnVmVGltZSAtPSBkdDtcclxuICAgICAgICAgICAgaWYodGhpcy5tYWduZXRCdWZUaW1lIDw9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFnbmV0QnVmVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZVJhbmdlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuaGFsZlNpemUud2lkdGggPSAodGhpcy5nYW1lU2NlbmUuc2NlbmVTaXplLndpZHRoIC0gMiAqIHRoaXMucmFkaXVzICogdGhpcy5zaXplKSAvIDIgO1xyXG4gICAgICAgIHRoaXMuaGFsZlNpemUuaGVpZ2h0ID0gKHRoaXMuZ2FtZVNjZW5lLnNjZW5lU2l6ZS5oZWlnaHQgLSAyICogdGhpcy5yYWRpdXMgKiB0aGlzLnNpemUpIC8gMiA7XHJcblxyXG4gICAgICAgIHZhciBwb3M6Y2MuVmVjMiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodGhpcy5tb3ZlRGlyLm11bCh0aGlzLmdldE1vdmVTcGVlZCgpICogZHQpKTtcclxuXHJcbiAgICAgICAgaWYocG9zLnggPCAtdGhpcy5oYWxmU2l6ZS53aWR0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvcy54ID0gLXRoaXMuaGFsZlNpemUud2lkdGg7XHJcbiAgICAgICAgfWVsc2UgaWYocG9zLnggPiB0aGlzLmhhbGZTaXplLndpZHRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zLnggPSB0aGlzLmhhbGZTaXplLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocG9zLnkgPCAtdGhpcy5oYWxmU2l6ZS5oZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3MueSA9IC10aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICB9ZWxzZSBpZihwb3MueSA+IHRoaXMuaGFsZlNpemUuaGVpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvcztcclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCk6bnVtYmVyXHJcbiAgICAge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLm1vdmVTcGVlZFVwO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHVibGljIG1vdmVUb1RhcmdldCh0YXJnZXRQb3M6Y2MuVmVjMilcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMubW92ZURpciA9IHRhcmdldFBvcy5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBzdG9wTW92ZSgpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgY2FwdHVyZUtuaWZlKGtuaWZlOktuaWZlKVxyXG4gICAgIHtcclxuICAgICAgICAgaWYoIXRoaXMuaXNBSSlcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcChTb3VuZENsaXBUeXBlLnBpY2spO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmtuaWZlUG9vbC5hZGRLbmlmZShrbmlmZSk7XHJcbiAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnJlbW92ZUtuaWZlKGtuaWZlKTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBjaGFuZ2VEZWZlbmNlU3RhdGUoKVxyXG4gICAgIHtcclxuICAgICAgICAgaWYodGhpcy5zdGF0dXMgIT0gUGxheWVyU3RhdHVzLmRlZmVuY2UpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBQbGF5ZXJTdGF0dXMuZGVmZW5jZTtcclxuICAgICAgICAgICAgdGhpcy5rbmlmZVBvb2wuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRmFjZSgwKTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHVibGljIGNoYW5nZUF0dGFja1N0YXRlKClcclxuICAgICB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdHVzICE9IFBsYXllclN0YXR1cy5hdHRhY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFBsYXllclN0YXR1cy5hdHRhY2s7XHJcbiAgICAgICAgICAgIHRoaXMua25pZmVQb29sLmNoYW5nZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRmFjZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIHB1YmxpYyBpbml0S25pZmUoY291bnQ6bnVtYmVyKVxyXG4gICAgIHtcclxuICAgICAgICAgdGhpcy5rbmlmZVBvb2wuaW5pdEtuaWZlKGNvdW50KTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyByYW5kb21LbmlmZVNraW4oKVxyXG4gICAgIHtcclxuICAgICAgICB0aGlzLmtuaWZlSWQgPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKDEsRGF0YU1hbmFnZXIuaW5zdGFuY2Uua25pZmVDb25maWdEYXRhcy5sZW5ndGggKyAxKTtcclxuICAgICAgICAvL3RoaXMuY29sb3JJZCA9IFJhbmRvbS5SYW5nZUludGVnZXIoMSw3KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUtuaWZlc1NraW4oKTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjpjYy5Db2xvcilcclxuICAgICB7XHJcbiAgICAgICAgdGhpcy5ib2R5Lm5vZGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNpcmNsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHVibGljIHNldE5hbWUobmFtZTpzdHJpbmcpXHJcbiAgICAge1xyXG4gICAgICAgIHRoaXMubmFtZVR4dC5zdHJpbmcgPSBuYW1lO1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBmaGxJdGVtRWZmZWN0KClcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMuZmhsQnVmVGltZSA9IDEwO1xyXG4gICAgICAgICB0aGlzLnJvdGFTcGVlZFVwID0gMjtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyByb2NrZXRJdGVtRWZmZWN0KClcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMuc3BlZWRCdWZUaW1lID0gMTA7XHJcbiAgICAgICAgIHRoaXMubW92ZVNwZWVkVXAgPSAxLjU7XHJcblxyXG4gICAgICAgICBpZihHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdHVzID09IEdhbWVTdGF0dXMuc3RhcnQpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50YWlsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgbWFnbmV0SXRlbUVmZmVjdCgpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLm1hZ25ldEJ1ZlRpbWUgPSA1O1xyXG4gICAgICAgICB0aGlzLmNpcmNsZVJhbmdlID0gMS41O1xyXG4gICAgICAgICB0aGlzLnNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgdXBkYXRlS25pZmVzU2tpbigpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLmtuaWZlUG9vbC51cGRhdGVLbmlmZXNTa2luKHRoaXMua25pZmVJZCk7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgcHVibGljIHNldERhbWFnZSh2YWx1ZTpudW1iZXIsb3RoZXJQbGF5ZXI6UGxheWVyKVxyXG4gICAgIHtcclxuICAgICAgICAgaWYodGhpcy5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmhwIC09IHZhbHVlO1xyXG5cclxuICAgICAgICAgaWYodGhpcy5ocCA8PSAwKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGlzLmhwID0gMDtcclxuICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gUGxheWVyU3RhdHVzLmRpZTtcclxuICAgICAgICAgICAgIHRoaXMua25pZmVQb29sLmRpc3Bvc2VBbGxLbmlmZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAvL3RoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgdGhpcy5raWxsZXIgPSBvdGhlclBsYXllcjtcclxuXHJcbiAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyS2lsbGVkKG90aGVyUGxheWVyLHRoaXMpO1xyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUZhY2UoaW5kZXg6bnVtYmVyLHRpbWVyOm51bWJlciA9IDApXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnNob3dmYWNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5jaGFuZ2VGYWNlKGluZGV4LHRpbWVyKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==