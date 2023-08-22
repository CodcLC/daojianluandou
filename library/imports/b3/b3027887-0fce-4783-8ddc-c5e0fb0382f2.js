"use strict";
cc._RF.push(module, 'b3027iHD85Hg43cxeD7A4Ly', 'GameManager');
// script/tscript/core/GameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var PopupText_1 = require("../ui/common/PopupText");
var ResourcesPool_1 = require("./ResourcesPool");
var ResourcesManager_1 = require("./ResourcesManager");
var Knife_1 = require("../gamescene/Knife");
var Mark_1 = require("../gamescene/Mark");
var Player_1 = require("../gamescene/Player");
var Joystick_1 = require("../gamescene/Joystick");
var Guide_1 = require("../gamescene/Guide");
var MovieClip_1 = require("../util/MovieClip");
var Random_1 = require("../util/Random");
var BlackHole_1 = require("../gamescene/BlackHole");
var Item_1 = require("../item/Item");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["none"] = 0] = "none";
    GameStatus[GameStatus["start"] = 1] = "start";
    GameStatus[GameStatus["over"] = 2] = "over";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.gameScene = null;
        _this.touchPlane = null;
        _this.playerPrefab = null;
        _this.knifePrefab = null;
        _this.markPrefab = null;
        _this.killEffectPrefab = null;
        _this.blackHolePrefab = null;
        _this.joystick = null;
        _this.guide = null;
        _this.bgImgs = [];
        _this.daoImgs = [];
        _this.levelImgs = [];
        _this.barrierPrefabArr = [];
        _this.itemPrefabArr = [];
        _this.gameStatus = GameStatus.none;
        return _this;
        /*start () {
    
        }*/
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    Object.defineProperty(GameManager, "instance", {
        get: function () {
            /*if(this._instance == null)
            {
                this._instance = new GameManager();
                this._instance.init();
            }*/
            return GameManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    /*@property(Product)
    private productList:Product[] = [];
    private productDic:{[key:number]:Product} = {};*/
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        GameManager_1._instance = this;
        //GameManager._instance.init();
    };
    GameManager.prototype.init = function () {
        //this.canvas = cc.find("Canvas");
    };
    GameManager.prototype.showPopupText = function (position, msg, size, color) {
        var _this = this;
        if (size === void 0) { size = 32; }
        if (color === void 0) { color = cc.Color.YELLOW; }
        var popupText = ResourcesPool_1.default.instance.get(PopupText_1.default);
        if (popupText) {
            popupText.node.setParent(this.canvas);
            popupText.node.position = position;
            popupText.showText(msg, size, color);
        }
        else {
            ResourcesManager_1.default.instance.load("PopupText", function (node) {
                popupText = node.getComponent(PopupText_1.default);
                popupText.node.setParent(_this.canvas);
                popupText.node.position = position;
                popupText.showText(msg, size, color);
            });
        }
    };
    GameManager.prototype.showPopupMsg = function (position, msg, size, color) {
        if (size === void 0) { size = 32; }
        if (color === void 0) { color = cc.Color.YELLOW; }
    };
    /**
     * 获得玩家
     */
    GameManager.prototype.getPlayer = function () {
        var node = cc.instantiate(this.playerPrefab);
        var player = node.getComponent(Player_1.default);
        player.node.position = cc.Vec2.ZERO;
        player.node.active = true;
        return player;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getKnife = function (type) {
        var knife = ResourcesPool_1.default.instance.get(Knife_1.default);
        if (knife) {
            return knife;
        }
        var node = cc.instantiate(this.knifePrefab);
        knife = node.getComponent(Knife_1.default);
        knife.node.position = cc.Vec2.ZERO;
        knife.type = type;
        knife.node.active = true;
        return knife;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getMark = function () {
        var node = cc.instantiate(this.markPrefab);
        var mark = node.getComponent(Mark_1.default);
        mark.node.position = cc.Vec2.ZERO;
        mark.node.active = true;
        return mark;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getKillEffect = function () {
        var node = cc.instantiate(this.killEffectPrefab);
        var mc = node.getComponent(MovieClip_1.default);
        mc.node.position = cc.Vec2.ZERO;
        mc.node.active = true;
        return mc;
    };
    GameManager.prototype.getRandomBarrier = function (type) {
        var node = null;
        if (type == 0) {
            node = cc.instantiate(this.barrierPrefabArr[Random_1.default.RangeInteger(0, 4)]);
        }
        else {
            node = cc.instantiate(this.barrierPrefabArr[Random_1.default.RangeInteger(4, this.barrierPrefabArr.length)]);
        }
        node.position = cc.Vec2.ZERO;
        node.rotation = Random_1.default.RangeInteger(0, 360);
        node.active = true;
        return node;
    };
    GameManager.prototype.getBlackHole = function () {
        var node = cc.instantiate(this.blackHolePrefab);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(BlackHole_1.default);
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getItemByType = function (type) {
        var node = cc.instantiate(this.itemPrefabArr[type - 1]);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(Item_1.default);
    };
    var GameManager_1;
    /**
     * 玩家打开游戏后，玩了多少次游戏
     */
    GameManager.gameTimes = 0; //
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameScene", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "touchPlane", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "playerPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "knifePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "markPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "killEffectPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "blackHolePrefab", void 0);
    __decorate([
        property(Joystick_1.default)
    ], GameManager.prototype, "joystick", void 0);
    __decorate([
        property(Guide_1.default)
    ], GameManager.prototype, "guide", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "bgImgs", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "daoImgs", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "levelImgs", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "barrierPrefabArr", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "itemPrefabArr", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();