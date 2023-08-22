"use strict";
cc._RF.push(module, 'd4e1bWErCJGeY9M0ENtxngp', 'GameScene');
// script/tscript/gamescene/GameScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var UIManager_1 = require("../ui/UIManager");
;
var GameManager_1 = require("../core/GameManager");
var Knife_1 = require("./Knife");
var Random_1 = require("../util/Random");
var Clock_1 = require("../util/Clock");
var DataManager_1 = require("../core/DataManager");
var WXSdk_1 = require("../wx/WXSdk");
var Wall_1 = require("./Wall");
var Item_1 = require("../item/Item");
var PlayerAI_1 = require("./PlayerAI");
var CameraFollow_1 = require("./CameraFollow");
var SoundManager_1 = require("../core/SoundManager");
var SoundClip_1 = require("../audio/SoundClip");
var BgSoundClip_1 = require("../audio/BgSoundClip");
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
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneSize = null;
        _this.player = null;
        _this.clock = null;
        _this.cdTxt = null;
        _this.wall = null;
        _this.bg = null;
        _this.halfSize = cc.Size.ZERO;
        _this.knifeNum = 25;
        _this.knifeArr = [];
        _this.playerArr = [];
        _this.rank = 8;
        _this.skinIndexArr = [];
        _this.nameIndexArr = [];
        _this.aiPlayerCount = 7;
        _this.aiNameIndexArr = [];
        _this.levelConfigData = null;
        _this.blackHole = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameScene.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.Vec2.ZERO;
        //this.node
        //this.player = this.getComponentInChildren(Player);
        //this.player.gameScene = this;
        this.halfSize.width = (this.sceneSize.width - cc.winSize.width) / 2;
        this.halfSize.height = (this.sceneSize.height - cc.winSize.height) / 2;
        this.player.initKnife(3); //初始化3把刀
        this.player.showface = DataManager_1.default.instance.getPlayerData().todayUseFace;
    };
    GameScene.prototype.start = function () {
        SoundManager_1.default.instance.PlayBGSound(BgSoundClip_1.BgSoundClipType.main);
        this.clock.node.active = false;
        this.cdTxt.node.active = false;
        this.playerArr.push(this.player);
        this.player.skin = 1;
        if (WXSdk_1.default.instance.isWXPlatform()) {
            if (WXSdk_1.default.instance.isLogin) {
                this.onWxLogin();
            }
            else {
                this.player.setName("");
                cc.systemEvent.on("wxLogin", this.onWxLogin, this);
            }
        }
        else {
            var nn = cc.sys.localStorage.getItem("playname");
            if (nn == "" || nn == null || nn == undefined) {
                nn = "小李飞刀";
                cc.sys.localStorage.setItem("playname", nn);
            }
            this.player.setName(nn);
        }
        for (var i = 0; i < this.aiPlayerCount; i++) {
            this.aiNameIndexArr.push(this.getRandomNameIndex());
        }
    };
    GameScene.prototype.onWxLogin = function () {
        this.player.setName(WXSdk_1.default.instance.nickname);
    };
    GameScene.prototype.startGame = function () {
        var _this = this;
        GameManager_1.default.instance.gameStatus = GameManager_1.GameStatus.start;
        GameManager_1.default.gameTimes++;
        DataManager_1.default.instance.getPlayerData().games++;
        DataManager_1.default.instance.savePlayerData();
        var star = DataManager_1.default.instance.getPlayerData().star;
        var levelId = DataManager_1.default.instance.getLevelId(star);
        this.levelConfigData = DataManager_1.default.instance.levelConfigDatas[levelId - 1];
        //cc.log("levelConfigData",this.levelConfigData);
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas;
        if (levelId <= 5) {
            //当玩家还处于第一阶段时 显示导航
            GameManager_1.default.instance.guide.node.active = true;
        }
        else {
            GameManager_1.default.instance.guide.node.active = false;
        }
        this.initBarriers();
        this.initAIPlayer(this.aiPlayerCount);
        this.initKnifes(this.knifeNum);
        this.initMark();
        this.player.onGameStart();
        //var cdTxt:cc.Label = this.clock.getComponent(cc.Label);
        this.clock.node.active = true;
        this.clock.hms = 2;
        this.clock.timeLength = 2 * 60 + 31;
        var timeTxt = this.clock.getComponentInChildren(cc.Label);
        timeTxt.string = "" + this.clock.timeLength;
        this.clock.Play(function (s, m, h, str, t) {
            if (t == 100 || t == 70 || t == 40) {
                _this.wall.shrink();
            }
            if (_this.clock.currentCount % 25 == 0) {
                var otherKfCount = 0;
                if (_this.blackHole) {
                    otherKfCount = Math.ceil(_this.blackHole.knifecount / 2);
                    _this.blackHole.knifecount = 0;
                }
                _this.initKnifes(5 + otherKfCount);
            }
            if (_this.levelConfigData.hotWheels != "") {
                var arr = _this.levelConfigData.hotWheels.split("-");
                if (t % Number(arr[0]) == 0) {
                    _this.initItem(Number(arr[1]), Item_1.ItemType.fhl);
                }
            }
            if (_this.levelConfigData.speedUp != "") {
                var arr = _this.levelConfigData.speedUp.split("-");
                if (t % Number(arr[0]) == 0) {
                    _this.initItem(Number(arr[1]), Item_1.ItemType.rocket);
                }
            }
            if (_this.levelConfigData.magnet != "") {
                var arr = _this.levelConfigData.magnet.split("-");
                if (t % Number(arr[0]) == 0) {
                    _this.initItem(Number(arr[1]), Item_1.ItemType.magnet);
                }
            }
            if (t == 120) {
                if (_this.levelConfigData.blackHole != 0) {
                    var rangeWidth = _this.sceneSize.width / 2 - 350;
                    var rangeHeight = _this.sceneSize.height / 2 - 350;
                    _this.blackHole = GameManager_1.default.instance.getBlackHole();
                    _this.blackHole.node.parent = _this.node;
                    _this.blackHole.node.position = cc.v2(Random_1.default.Range(-rangeWidth, rangeWidth), Random_1.default.Range(-rangeHeight, rangeHeight));
                }
            }
            timeTxt.string = "" + t;
            if (t <= 5) {
                _this.cdTxt.node.active = true;
                _this.cdTxt.string = "" + t;
                SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.dida);
            }
            if (t == 0) {
                _this.cdTxt.node.active = false;
            }
        }, function () {
            _this.clock.Stop();
            var arr = [];
            for (var i = 0; i < _this.playerArr.length; i++) {
                if (_this.playerArr[i].status != Player_1.PlayerStatus.die && _this.playerArr[i].rank == 1) {
                    arr.push(_this.playerArr[i]);
                }
            }
            arr.sort(function (player1, player2) {
                if (player1.killCount > player2.killCount) {
                    return -1;
                }
                else if (player1.killCount < player2.killCount) {
                    return 1;
                }
                else {
                    var len1 = player1.knifePool.knifes.length;
                    var len2 = player2.knifePool.knifes.length;
                    if (len1 > len2) {
                        return -1;
                    }
                    if (len1 < len2) {
                        return 1;
                    }
                }
                return 0;
            });
            for (var i = 0; i < arr.length; i++) {
                arr[i].rank = i + 1;
            }
            _this.gameOver();
        });
        UIManager_1.default.instance.rankUI.node.active = true;
    };
    GameScene.prototype.gameOver = function () {
        GameManager_1.default.instance.gameStatus = GameManager_1.GameStatus.over;
        console.log("game over");
        this.scheduleOnce(function () {
            //GameManager.instance.gameStatus = GameStatus.over;
            UIManager_1.default.instance.rankUI.node.active = false;
            UIManager_1.default.instance.accountUI.open();
        }, 1.8);
    };
    GameScene.prototype.initBarriers = function () {
        var rangeWidth = this.sceneSize.width / 2 - 350;
        var rangeHeight = this.sceneSize.height / 2 - 350;
        if (this.levelConfigData.meteor != "") {
            var arr = this.levelConfigData.meteor.split("-");
            var count = Random_1.default.RangeInteger(Number(arr[0]), Number(arr[0]));
            for (var i = 0; i < count; i++) {
                var barrier = GameManager_1.default.instance.getRandomBarrier(0);
                barrier.parent = this.node;
                barrier.position = cc.v2(Random_1.default.Range(-rangeWidth, rangeWidth), Random_1.default.Range(-rangeHeight, rangeHeight));
            }
        }
        if (this.levelConfigData.movMeteor != "") {
            var arr = this.levelConfigData.movMeteor.split("-");
            var count = Random_1.default.RangeInteger(Number(arr[0]), Number(arr[0]));
            for (var i = 0; i < count; i++) {
                var barrier = GameManager_1.default.instance.getRandomBarrier(1);
                barrier.parent = this.node;
                barrier.position = cc.v2(Random_1.default.Range(-rangeWidth, rangeWidth), Random_1.default.Range(-rangeHeight, rangeHeight));
            }
        }
    };
    GameScene.prototype.initItem = function (count, itemType) {
        if (itemType === void 0) { itemType = Item_1.ItemType.none; }
        var width = this.sceneSize.width / 2 - 150;
        var height = this.sceneSize.height / 2 - 150;
        for (var i = 0; i < count; i++) {
            var item = null;
            if (itemType == Item_1.ItemType.none) {
                item = GameManager_1.default.instance.getItemByType(Random_1.default.RangeInteger(1, 4));
            }
            else {
                item = GameManager_1.default.instance.getItemByType(itemType);
            }
            item.node.parent = this.node;
            item.node.position = cc.v2(Random_1.default.Range(-width, width), Random_1.default.Range(-height, height));
        }
    };
    /**
     *
     * @param count 初始化AI玩家
     */
    GameScene.prototype.initAIPlayer = function (count) {
        var aiLvArr = [];
        for (var i = 1; i <= 4; i++) {
            for (var j = 0; j < this.levelConfigData["ailv" + i]; j++) {
                aiLvArr.push(i);
            }
        }
        for (var i = 0; i < count; i++) {
            var player = GameManager_1.default.instance.getPlayer();
            player.node.parent = this.node;
            player.isAI = true;
            player.showface = Random_1.default.Range(0, 10) < 3 ? true : false;
            player.getComponent(PlayerAI_1.default).aiLevel = !aiLvArr[i] ? PlayerAI_1.PlayerAILevel.level1 : aiLvArr[i];
            player.onGameStart();
            player.randomKnifeSkin();
            player.getComponent(PlayerAI_1.default).onGameStart();
            var index = Random_1.default.RangeInteger(0, this.getSkinIndexArr().length);
            var skinIndex = this.getSkinIndexArr()[index];
            this.getSkinIndexArr().splice(index, 1);
            player.skin = skinIndex;
            player.setName(DataManager_1.default.instance.nameConfigDatas[this.aiNameIndexArr[i]].name);
            this.playerArr.push(player);
            var width = this.sceneSize.width / 2 - 150;
            var height = this.sceneSize.height / 2 - 150;
            player.node.position = cc.v2(Random_1.default.Range(-width, width), Random_1.default.Range(-height, height));
        }
    };
    GameScene.prototype.getSkinIndexArr = function () {
        if (this.skinIndexArr.length == 0) {
            for (var i = 1; i <= 8; i++) {
                this.skinIndexArr.push(i);
            }
            var index = this.skinIndexArr.indexOf(this.player.skin);
            if (index != -1) {
                this.skinIndexArr.splice(index, 1);
            }
        }
        return this.skinIndexArr;
    };
    GameScene.prototype.getRandomNameIndex = function () {
        var index = Random_1.default.RangeInteger(0, this.getNameIndexArr().length);
        var nameIndex = this.getNameIndexArr()[index];
        this.getNameIndexArr().splice(index, 1);
        //return DataManager.instance.nameConfigDatas[nameIndex].name;
        return nameIndex;
    };
    GameScene.prototype.getNameIndexArr = function () {
        if (this.nameIndexArr.length == 0) {
            var nameArr = DataManager_1.default.instance.nameConfigDatas;
            var len = 50;
            for (var i = 0; i < len; i++) {
                this.nameIndexArr.push(i);
            }
        }
        return this.nameIndexArr;
    };
    /**
     * 有玩家被击杀时
     * @param killer 击杀人
     * @param dieMan 被击杀对象
     */
    GameScene.prototype.playerKilled = function (killer, dieMan) {
        //cc.log(killer.getName(),"击杀了",dieMan.getName());
        killer.killCount++;
        dieMan.rank = this.rank;
        this.rank--;
        var killEffect = GameManager_1.default.instance.getKillEffect();
        killEffect.node.color = dieMan.body.node.color;
        killEffect.node.parent = this.node;
        killEffect.node.position = dieMan.node.position;
        killer.changeFace(2, 1.5);
        if (killer == this.player) {
            DataManager_1.default.instance.getPlayerData().kills++;
            if (this.player.killCount == 4) {
                DataManager_1.default.instance.getPlayerData().kills4++;
            }
            else if (this.player.killCount == 5) {
                DataManager_1.default.instance.getPlayerData().kills5++;
            }
            else if (this.player.killCount == 6) {
                DataManager_1.default.instance.getPlayerData().kills6++;
            }
            DataManager_1.default.instance.savePlayerData();
        }
        //if(!killer.isAI)
        //{
        UIManager_1.default.instance.messageUI.showMessage(killer, dieMan);
        //}
        if (!dieMan.isAI) {
            WXSdk_1.default.instance.vibrateLong(); //玩家自己死亡，长震动
            CameraFollow_1.default.instance.shake(1);
            this.clock.Stop();
            this.gameOver();
        }
        else {
            if (!killer.isAI) {
                WXSdk_1.default.instance.vibrateShort(); //别的玩家自己死亡
                CameraFollow_1.default.instance.shake(1);
                SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.killMam);
            }
            var playerArr = this.getComponentsInChildren(Player_1.default);
            var isEnd = true;
            for (var i = 0; i < playerArr.length; i++) {
                if (!playerArr[i].node.active) {
                    continue;
                }
                if (playerArr[i].isAI && playerArr[i].status != Player_1.PlayerStatus.die) {
                    isEnd = false;
                    break;
                }
            }
            if (isEnd) {
                this.clock.Stop();
                this.gameOver();
            }
        }
    };
    GameScene.prototype.initKnifes = function (count) {
        for (var i = 0; i < count; i++) {
            var knife = GameManager_1.default.instance.getKnife(Knife_1.KnifeType.normal);
            var width = this.sceneSize.width / 2 - 150;
            var height = this.sceneSize.height / 2 - 150;
            knife.node.rotation = Random_1.default.Range(0, 360);
            knife.node.position = cc.v2(Random_1.default.Range(-width, width), Random_1.default.Range(-height, height));
            this.addKnife(knife);
        }
    };
    GameScene.prototype.initMark = function () {
        var playerArr = this.getComponentsInChildren(Player_1.default);
        for (var i = 0; i < playerArr.length; i++) {
            var player = playerArr[i];
            if (player.isAI && player.node.active) {
                var mark = GameManager_1.default.instance.getMark();
                //mark.node.parent = cc.Camera.main.node;
                mark.node.parent = UIManager_1.default.instance.getLayer(UIManager_1.LayerType.back);
                mark.player = this.player;
                mark.targetPlayer = player;
            }
        }
    };
    GameScene.prototype.addKnife = function (knife) {
        if (knife.node.parent) {
            knife.node.parent.removeChild(knife.node);
        }
        this.node.addChild(knife.node, 0);
        if (this.knifeArr.indexOf(knife) == -1) {
            this.knifeArr.push(knife);
        }
        this.node.emit("knifesChange", {});
    };
    GameScene.prototype.removeKnife = function (knife) {
        var index = this.knifeArr.indexOf(knife);
        if (index != -1) {
            this.knifeArr.splice(index, 1);
        }
        this.node.emit("knifesChange", {});
    };
    /*update (dt)
    {
        
    }*/
    GameScene.prototype.onDestroy = function () {
        cc.systemEvent.off("wxLogin", this.onWxLogin, this);
    };
    GameScene.levelMax = 1;
    GameScene.levelMin = 1;
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "sceneSize", void 0);
    __decorate([
        property(Player_1.default)
    ], GameScene.prototype, "player", void 0);
    __decorate([
        property(Clock_1.default)
    ], GameScene.prototype, "clock", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "cdTxt", void 0);
    __decorate([
        property(Wall_1.default)
    ], GameScene.prototype, "wall", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameScene.prototype, "bg", void 0);
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.default = GameScene;

cc._RF.pop();