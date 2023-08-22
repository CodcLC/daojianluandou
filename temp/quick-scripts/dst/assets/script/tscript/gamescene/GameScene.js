
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEdhbWVTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdEO0FBRWhELDZDQUFpRTtBQUVULENBQUM7QUFDekQsbURBQThEO0FBQzlELGlDQUEyQztBQUMzQyx5Q0FBb0M7QUFDcEMsdUNBQWtDO0FBQ2xDLG1EQUE4QztBQUM5QyxxQ0FBZ0M7QUFDaEMsK0JBQTBCO0FBRzFCLHFDQUE4QztBQUU5Qyx1Q0FBcUQ7QUFDckQsK0NBQTBDO0FBQzFDLHFEQUFnRDtBQUNoRCxnREFBbUQ7QUFDbkQsb0RBQXVEO0FBRXZELG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUE0bkJDO1FBcG5CVSxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFHckIsV0FBSyxHQUFTLElBQUksQ0FBQztRQUduQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFVBQUksR0FBUSxJQUFJLENBQUM7UUFHakIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVuQixjQUFRLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUV0QixjQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUUzQixlQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUU1QixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBRWhCLGtCQUFZLEdBQVksRUFBRSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksRUFBRSxDQUFDO1FBRTNCLG1CQUFhLEdBQVUs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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyLCB7IFBsYXllclN0YXR1cyB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi4vdXRpbC9WZWN0b3IyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIsIHsgVmlld05hbWUsIExheWVyVHlwZSB9IGZyb20gXCIuLi91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IEN1c3RvbUV2ZW50VHlwZSBmcm9tIFwiLi4vZXZlbnQvQ3VzdG9tRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBSZXNvdXJjZXNNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL1Jlc291cmNlc01hbmFnZXJcIjs7XHJcbmltcG9ydCBHYW1lTWFuYWdlciwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEtuaWZlLCB7IEtuaWZlVHlwZSB9IGZyb20gXCIuL0tuaWZlXCI7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vdXRpbC9DbG9ja1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL2NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFdYU2RrIGZyb20gXCIuLi93eC9XWFNka1wiO1xyXG5pbXBvcnQgV2FsbCBmcm9tIFwiLi9XYWxsXCI7XHJcbmltcG9ydCBNb3ZpZUNsaXAgZnJvbSBcIi4uL3V0aWwvTW92aWVDbGlwXCI7XHJcbmltcG9ydCBCbGFja0hvbGUgZnJvbSBcIi4vQmxhY2tIb2xlXCI7XHJcbmltcG9ydCBJdGVtLCB7IEl0ZW1UeXBlIH0gZnJvbSBcIi4uL2l0ZW0vSXRlbVwiO1xyXG5pbXBvcnQgTGV2ZWxDb25maWdEYXRhIGZyb20gXCIuLi9jb25maWdkYXRhL0xldmVsQ29uZmlnRGF0YVwiO1xyXG5pbXBvcnQgUGxheWVyQUksIHsgUGxheWVyQUlMZXZlbCB9IGZyb20gXCIuL1BsYXllckFJXCI7XHJcbmltcG9ydCBDYW1lcmFGb2xsb3cgZnJvbSBcIi4vQ2FtZXJhRm9sbG93XCI7XHJcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL2NvcmUvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ2xpcFR5cGUgfSBmcm9tIFwiLi4vYXVkaW8vU291bmRDbGlwXCI7XHJcbmltcG9ydCB7IEJnU291bmRDbGlwVHlwZSB9IGZyb20gXCIuLi9hdWRpby9CZ1NvdW5kQ2xpcFwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsZXZlbE1heDpudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGV2ZWxNaW46bnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBzY2VuZVNpemU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwdWJsaWMgcGxheWVyOlBsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KENsb2NrKVxyXG4gICAgcHVibGljIGNsb2NrOkNsb2NrID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwdWJsaWMgY2RUeHQ6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShXYWxsKVxyXG4gICAgcHVibGljIHdhbGw6V2FsbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHB1YmxpYyBiZzpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGFsZlNpemU6Y2MuU2l6ZSA9IGNjLlNpemUuWkVSTztcclxuXHJcbiAgICBwcml2YXRlIGtuaWZlTnVtOm51bWJlciA9IDI1O1xyXG5cclxuICAgIHB1YmxpYyBrbmlmZUFycjpBcnJheTxLbmlmZT4gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyQXJyOkFycmF5PFBsYXllcj4gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHJhbms6bnVtYmVyID0gODtcclxuXHJcbiAgICBwcml2YXRlIHNraW5JbmRleEFycjpudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbmFtZUluZGV4QXJyOm51bWJlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBhaVBsYXllckNvdW50Om51bWJlciA9IDc7XHJcblxyXG4gICAgcHVibGljIGFpTmFtZUluZGV4QXJyOm51bWJlcltdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgbGV2ZWxDb25maWdEYXRhOkxldmVsQ29uZmlnRGF0YSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGJsYWNrSG9sZTpCbGFja0hvbGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICAvL3RoaXMubm9kZVxyXG4gICAgICAgIC8vdGhpcy5wbGF5ZXIgPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUGxheWVyKTtcclxuICAgICAgICAvL3RoaXMucGxheWVyLmdhbWVTY2VuZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaGFsZlNpemUud2lkdGggPSAodGhpcy5zY2VuZVNpemUud2lkdGggLSBjYy53aW5TaXplLndpZHRoKSAvIDIgO1xyXG4gICAgICAgIHRoaXMuaGFsZlNpemUuaGVpZ2h0ID0gKHRoaXMuc2NlbmVTaXplLmhlaWdodCAtIGNjLndpblNpemUuaGVpZ2h0KSAvIDIgO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5pbml0S25pZmUoMyk7IC8v5Yid5aeL5YyWM+aKiuWIgFxyXG4gICAgICAgIHRoaXMucGxheWVyLnNob3dmYWNlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnRvZGF5VXNlRmFjZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UuUGxheUJHU291bmQoQmdTb3VuZENsaXBUeXBlLm1haW4pO1xyXG5cclxuICAgICAgICB0aGlzLmNsb2NrLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZFR4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyQXJyLnB1c2godGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5za2luID0gMTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoV1hTZGsuaW5zdGFuY2UuaXNXWFBsYXRmb3JtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihXWFNkay5pbnN0YW5jZS5pc0xvZ2luKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub25XeExvZ2luKCk7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE5hbWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihcInd4TG9naW5cIix0aGlzLm9uV3hMb2dpbix0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbm4gPSAgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheW5hbWVcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiggbm49PSBcIlwiIHx8IG5uPT1udWxsIHx8IG5uPT0gdW5kZWZpbmVkICApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRubiA9IFwi5bCP5p2O6aOe5YiAXCI7XHJcblx0XHRcdFx0Y2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheW5hbWVcIixubik7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldE5hbWUobm4pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmFpUGxheWVyQ291bnQgOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFpTmFtZUluZGV4QXJyLnB1c2godGhpcy5nZXRSYW5kb21OYW1lSW5kZXgoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbld4TG9naW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldE5hbWUoV1hTZGsuaW5zdGFuY2Uubmlja25hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLnN0YXJ0O1xyXG4gICAgICAgIEdhbWVNYW5hZ2VyLmdhbWVUaW1lcyArKztcclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmdhbWVzKys7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZVBsYXllckRhdGEoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIHN0YXI6bnVtYmVyID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXI7XHJcblxyXG4gICAgICAgIHZhciBsZXZlbElkID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0TGV2ZWxJZChzdGFyKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZ0RhdGEgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbENvbmZpZ0RhdGFzW2xldmVsSWQgLSAxXTtcclxuXHJcbiAgICAgICAgLy9jYy5sb2coXCJsZXZlbENvbmZpZ0RhdGFcIix0aGlzLmxldmVsQ29uZmlnRGF0YSk7XHJcblxyXG4gICAgICAgIHZhciBsZXZlQ25mZGF0YXMgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbENvbmZpZ0RhdGFzO1xyXG5cclxuICAgICAgICBpZihsZXZlbElkIDw9IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+W9k+eOqeWutui/mOWkhOS6juesrOS4gOmYtuauteaXtiDmmL7npLrlr7zoiKpcclxuICAgICAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ3VpZGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5ndWlkZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEJhcnJpZXJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QUlQbGF5ZXIodGhpcy5haVBsYXllckNvdW50KTtcclxuICAgICAgICB0aGlzLmluaXRLbmlmZXModGhpcy5rbmlmZU51bSk7XHJcbiAgICAgICAgdGhpcy5pbml0TWFyaygpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5vbkdhbWVTdGFydCgpO1xyXG5cclxuICAgICAgICAvL3ZhciBjZFR4dDpjYy5MYWJlbCA9IHRoaXMuY2xvY2suZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9jay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jbG9jay5obXMgPSAyO1xyXG4gICAgICAgIHRoaXMuY2xvY2sudGltZUxlbmd0aCA9IDIgKiA2MCArIDMxO1xyXG5cclxuICAgICAgICB2YXIgdGltZVR4dCA9IHRoaXMuY2xvY2suZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XHJcbiAgICAgICAgdGltZVR4dC5zdHJpbmcgPSBcIlwiICsgdGhpcy5jbG9jay50aW1lTGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLmNsb2NrLlBsYXkoKHMsbSxoLHN0cix0KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0ID09IDEwMCB8fCB0ID09IDcwIHx8IHQgPT0gNDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbC5zaHJpbmsoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jbG9jay5jdXJyZW50Q291bnQgJSAyNSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG90aGVyS2ZDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ibGFja0hvbGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJLZkNvdW50ID0gTWF0aC5jZWlsKHRoaXMuYmxhY2tIb2xlLmtuaWZlY291bnQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsYWNrSG9sZS5rbmlmZWNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRLbmlmZXMoNSArIG90aGVyS2ZDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWxDb25maWdEYXRhLmhvdFdoZWVscyAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gdGhpcy5sZXZlbENvbmZpZ0RhdGEuaG90V2hlZWxzLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0ICUgTnVtYmVyKGFyclswXSkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRJdGVtKE51bWJlcihhcnJbMV0pLEl0ZW1UeXBlLmZobClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbENvbmZpZ0RhdGEuc3BlZWRVcCAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gdGhpcy5sZXZlbENvbmZpZ0RhdGEuc3BlZWRVcC5zcGxpdChcIi1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodCAlIE51bWJlcihhcnJbMF0pID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0SXRlbShOdW1iZXIoYXJyWzFdKSxJdGVtVHlwZS5yb2NrZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWxDb25maWdEYXRhLm1hZ25ldCAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gdGhpcy5sZXZlbENvbmZpZ0RhdGEubWFnbmV0LnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0ICUgTnVtYmVyKGFyclswXSkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRJdGVtKE51bWJlcihhcnJbMV0pLEl0ZW1UeXBlLm1hZ25ldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodCA9PSAxMjApXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxldmVsQ29uZmlnRGF0YS5ibGFja0hvbGUgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2VXaWR0aCA9IHRoaXMuc2NlbmVTaXplLndpZHRoLzIgLSAzNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlSGVpZ2h0ID0gdGhpcy5zY2VuZVNpemUuaGVpZ2h0LzIgLSAzNTA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tIb2xlID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2V0QmxhY2tIb2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFja0hvbGUubm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFja0hvbGUubm9kZS5wb3NpdGlvbiA9IGNjLnYyKFJhbmRvbS5SYW5nZSgtcmFuZ2VXaWR0aCxyYW5nZVdpZHRoKSxSYW5kb20uUmFuZ2UoLXJhbmdlSGVpZ2h0LHJhbmdlSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGltZVR4dC5zdHJpbmcgPSBgJHt0fWA7XHJcblxyXG4gICAgICAgICAgICBpZih0IDw9IDUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RUeHQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFR4dC5zdHJpbmcgPSBcIlwiICsgdDtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5QXVkaW9DbGlwKFNvdW5kQ2xpcFR5cGUuZGlkYSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFR4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgICgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNsb2NrLlN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnI6QXJyYXk8UGxheWVyPiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCB0aGlzLnBsYXllckFyci5sZW5ndGggOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyQXJyW2ldLnN0YXR1cyAhPSBQbGF5ZXJTdGF0dXMuZGllICYmIHRoaXMucGxheWVyQXJyW2ldLnJhbmsgPT0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLnBsYXllckFycltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb3J0KChwbGF5ZXIxOlBsYXllcixwbGF5ZXIyOlBsYXllcik6bnVtYmVyPT5cclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjEua2lsbENvdW50ID4gcGxheWVyMi5raWxsQ291bnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyMS5raWxsQ291bnQgPCBwbGF5ZXIyLmtpbGxDb3VudClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbjE6bnVtYmVyID0gcGxheWVyMS5rbmlmZVBvb2wua25pZmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuMjpudW1iZXIgPSBwbGF5ZXIyLmtuaWZlUG9vbC5rbmlmZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihsZW4xID4gbGVuMilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobGVuMSA8IGxlbjIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgYXJyLmxlbmd0aCA7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyW2ldLnJhbmsgPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5yYW5rVUkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpXHJcbiAgICB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMub3ZlcjtcclxuXHRcdGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcblxyXG4gICAgICAgICAgICAvL0dhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLm92ZXI7XHJcblxyXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UucmFua1VJLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5hY2NvdW50VUkub3BlbigpO1xyXG4gICAgICAgIH0sMS44KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdEJhcnJpZXJzKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIHJhbmdlV2lkdGggPSB0aGlzLnNjZW5lU2l6ZS53aWR0aC8yIC0gMzUwO1xyXG4gICAgICAgIHZhciByYW5nZUhlaWdodCA9IHRoaXMuc2NlbmVTaXplLmhlaWdodC8yIC0gMzUwO1xyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsQ29uZmlnRGF0YS5tZXRlb3IgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB0aGlzLmxldmVsQ29uZmlnRGF0YS5tZXRlb3Iuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICB2YXIgY291bnQ6bnVtYmVyID0gUmFuZG9tLlJhbmdlSW50ZWdlcihOdW1iZXIoYXJyWzBdKSxOdW1iZXIoYXJyWzBdKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGNvdW50IDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFycmllcjpjYy5Ob2RlID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2V0UmFuZG9tQmFycmllcigwKTtcclxuICAgICAgICAgICAgICAgIGJhcnJpZXIucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgYmFycmllci5wb3NpdGlvbiA9IGNjLnYyKFJhbmRvbS5SYW5nZSgtcmFuZ2VXaWR0aCxyYW5nZVdpZHRoKSxSYW5kb20uUmFuZ2UoLXJhbmdlSGVpZ2h0LHJhbmdlSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb25maWdEYXRhLm1vdk1ldGVvciAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHRoaXMubGV2ZWxDb25maWdEYXRhLm1vdk1ldGVvci5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIHZhciBjb3VudDpudW1iZXIgPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKE51bWJlcihhcnJbMF0pLE51bWJlcihhcnJbMF0pKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgY291bnQgOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXJyaWVyOmNjLk5vZGUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRSYW5kb21CYXJyaWVyKDEpO1xyXG4gICAgICAgICAgICAgICAgYmFycmllci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBiYXJyaWVyLnBvc2l0aW9uID0gY2MudjIoUmFuZG9tLlJhbmdlKC1yYW5nZVdpZHRoLHJhbmdlV2lkdGgpLFJhbmRvbS5SYW5nZSgtcmFuZ2VIZWlnaHQscmFuZ2VIZWlnaHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdEl0ZW0oY291bnQ6bnVtYmVyLGl0ZW1UeXBlOkl0ZW1UeXBlID0gSXRlbVR5cGUubm9uZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgd2lkdGg6bnVtYmVyID0gdGhpcy5zY2VuZVNpemUud2lkdGggLyAyIC0gMTUwO1xyXG4gICAgICAgIHZhciBoZWlnaHQ6bnVtYmVyID0gdGhpcy5zY2VuZVNpemUuaGVpZ2h0IC8gMiAtIDE1MDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50IDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW06SXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpdGVtVHlwZSA9PSBJdGVtVHlwZS5ub25lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2V0SXRlbUJ5VHlwZShSYW5kb20uUmFuZ2VJbnRlZ2VyKDEsNCkpXHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRJdGVtQnlUeXBlKGl0ZW1UeXBlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUucG9zaXRpb24gPSBjYy52MihSYW5kb20uUmFuZ2UoLXdpZHRoLHdpZHRoKSxSYW5kb20uUmFuZ2UoLWhlaWdodCxoZWlnaHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBjb3VudCDliJ3lp4vljJZBSeeOqeWutlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdEFJUGxheWVyKGNvdW50Om51bWJlcilcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIGFpTHZBcnI6UGxheWVyQUlMZXZlbFtdID0gW107XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDEgOyBpIDw9IDQgOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwIDsgaiA8IHRoaXMubGV2ZWxDb25maWdEYXRhW2BhaWx2JHtpfWBdOyBqKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFpTHZBcnIucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50IDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBsYXllciA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllcigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIubm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0FJID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGxheWVyLnNob3dmYWNlID0gUmFuZG9tLlJhbmdlKDAsMTApIDwgMyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgcGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJBSSkuYWlMZXZlbCA9ICFhaUx2QXJyW2ldID8gUGxheWVyQUlMZXZlbC5sZXZlbDEgOiBhaUx2QXJyW2ldO1xyXG4gICAgICAgICAgICBwbGF5ZXIub25HYW1lU3RhcnQoKTtcclxuICAgICAgICAgICAgcGxheWVyLnJhbmRvbUtuaWZlU2tpbigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckFJKS5vbkdhbWVTdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gUmFuZG9tLlJhbmdlSW50ZWdlcigwLHRoaXMuZ2V0U2tpbkluZGV4QXJyKCkubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIHNraW5JbmRleCA9IHRoaXMuZ2V0U2tpbkluZGV4QXJyKClbaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNraW5JbmRleEFycigpLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBsYXllci5za2luID0gc2tpbkluZGV4O1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0TmFtZShEYXRhTWFuYWdlci5pbnN0YW5jZS5uYW1lQ29uZmlnRGF0YXNbdGhpcy5haU5hbWVJbmRleEFycltpXV0ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckFyci5wdXNoKHBsYXllcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgd2lkdGg6bnVtYmVyID0gdGhpcy5zY2VuZVNpemUud2lkdGggLyAyIC0gMTUwO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0Om51bWJlciA9IHRoaXMuc2NlbmVTaXplLmhlaWdodCAvIDIgLSAxNTA7XHJcbiAgICAgICAgICAgIHBsYXllci5ub2RlLnBvc2l0aW9uID0gY2MudjIoUmFuZG9tLlJhbmdlKC13aWR0aCx3aWR0aCksUmFuZG9tLlJhbmdlKC1oZWlnaHQsaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNraW5JbmRleEFycigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5za2luSW5kZXhBcnIubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxIDsgaSA8PSA4OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbkluZGV4QXJyLnB1c2goaSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuc2tpbkluZGV4QXJyLmluZGV4T2YodGhpcy5wbGF5ZXIuc2tpbik7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraW5JbmRleEFyci5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNraW5JbmRleEFycjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmFuZG9tTmFtZUluZGV4KCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IFJhbmRvbS5SYW5nZUludGVnZXIoMCx0aGlzLmdldE5hbWVJbmRleEFycigpLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIG5hbWVJbmRleDpudW1iZXIgPSB0aGlzLmdldE5hbWVJbmRleEFycigpW2luZGV4XTtcclxuICAgICAgICB0aGlzLmdldE5hbWVJbmRleEFycigpLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAvL3JldHVybiBEYXRhTWFuYWdlci5pbnN0YW5jZS5uYW1lQ29uZmlnRGF0YXNbbmFtZUluZGV4XS5uYW1lO1xyXG4gICAgICAgIHJldHVybiBuYW1lSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWVJbmRleEFycigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5uYW1lSW5kZXhBcnIubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbmFtZUFyciA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLm5hbWVDb25maWdEYXRhcztcclxuICAgICAgICAgICAgdmFyIGxlbjpudW1iZXIgPSA1MDtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUluZGV4QXJyLnB1c2goaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZUluZGV4QXJyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOacieeOqeWutuiiq+WHu+adgOaXtlxyXG4gICAgICogQHBhcmFtIGtpbGxlciDlh7vmnYDkurpcclxuICAgICAqIEBwYXJhbSBkaWVNYW4g6KKr5Ye75p2A5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5ZXJLaWxsZWQoa2lsbGVyOlBsYXllcixkaWVNYW46UGxheWVyKVxyXG4gICAge1xyXG5cclxuICAgICAgICAvL2NjLmxvZyhraWxsZXIuZ2V0TmFtZSgpLFwi5Ye75p2A5LqGXCIsZGllTWFuLmdldE5hbWUoKSk7XHJcblxyXG4gICAgICAgIGtpbGxlci5raWxsQ291bnQgKys7XHJcblxyXG4gICAgICAgIGRpZU1hbi5yYW5rID0gdGhpcy5yYW5rO1xyXG4gICAgICAgIHRoaXMucmFuay0tO1xyXG5cclxuICAgICAgICB2YXIga2lsbEVmZmVjdDpNb3ZpZUNsaXAgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRLaWxsRWZmZWN0KCk7XHJcbiAgICAgICAga2lsbEVmZmVjdC5ub2RlLmNvbG9yID0gZGllTWFuLmJvZHkubm9kZS5jb2xvcjtcclxuICAgICAgICBraWxsRWZmZWN0Lm5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGtpbGxFZmZlY3Qubm9kZS5wb3NpdGlvbiA9IGRpZU1hbi5ub2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICBraWxsZXIuY2hhbmdlRmFjZSgyLDEuNSk7XHJcblxyXG4gICAgICAgIGlmKGtpbGxlciA9PSB0aGlzLnBsYXllcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5raWxscyArKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLmtpbGxDb3VudCA9PSA0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkua2lsbHM0ICsrO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnBsYXllci5raWxsQ291bnQgPT0gNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmtpbGxzNSArKztcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5wbGF5ZXIua2lsbENvdW50ID09IDYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5raWxsczYgKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZigha2lsbGVyLmlzQUkpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5tZXNzYWdlVUkuc2hvd01lc3NhZ2Uoa2lsbGVyLGRpZU1hbik7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKCFkaWVNYW4uaXNBSSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS52aWJyYXRlTG9uZygpOy8v546p5a626Ieq5bex5q275Lqh77yM6ZW/6ZyH5YqoXHJcbiAgICAgICAgICAgIENhbWVyYUZvbGxvdy5pbnN0YW5jZS5zaGFrZSgxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2suU3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZigha2lsbGVyLmlzQUkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdYU2RrLmluc3RhbmNlLnZpYnJhdGVTaG9ydCgpOy8v5Yir55qE546p5a626Ieq5bex5q275LqhXHJcbiAgICAgICAgICAgICAgICBDYW1lcmFGb2xsb3cuaW5zdGFuY2Uuc2hha2UoMSk7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcChTb3VuZENsaXBUeXBlLmtpbGxNYW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdmFyIHBsYXllckFycjpQbGF5ZXJbXSA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oUGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpc0VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IHBsYXllckFyci5sZW5ndGggOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighcGxheWVyQXJyW2ldLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBsYXllckFycltpXS5pc0FJICYmIHBsYXllckFycltpXS5zdGF0dXMgIT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0VuZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9jay5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpbml0S25pZmVzKGNvdW50Om51bWJlcilcclxuICAgIHtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBjb3VudCA7IGkrKylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIga25pZmU6S25pZmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRLbmlmZShLbmlmZVR5cGUubm9ybWFsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB3aWR0aDpudW1iZXIgPSB0aGlzLnNjZW5lU2l6ZS53aWR0aCAvIDIgLSAxNTA7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQ6bnVtYmVyID0gdGhpcy5zY2VuZVNpemUuaGVpZ2h0IC8gMiAtIDE1MDtcclxuICAgICAgICAgICAga25pZmUubm9kZS5yb3RhdGlvbiA9IFJhbmRvbS5SYW5nZSgwLDM2MCk7XHJcbiAgICAgICAgICAgIGtuaWZlLm5vZGUucG9zaXRpb24gPSBjYy52MihSYW5kb20uUmFuZ2UoLXdpZHRoLHdpZHRoKSxSYW5kb20uUmFuZ2UoLWhlaWdodCxoZWlnaHQpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkS25pZmUoa25pZmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRNYXJrKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIHBsYXllckFycjpBcnJheTxQbGF5ZXI+ID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihQbGF5ZXIpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IHBsYXllckFyci5sZW5ndGggOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyOlBsYXllciA9IHBsYXllckFycltpXTtcclxuICAgICAgICAgICAgaWYocGxheWVyLmlzQUkgJiYgcGxheWVyLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFyayA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdldE1hcmsoKTtcclxuICAgICAgICAgICAgICAgIC8vbWFyay5ub2RlLnBhcmVudCA9IGNjLkNhbWVyYS5tYWluLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBtYXJrLm5vZGUucGFyZW50ID0gVUlNYW5hZ2VyLmluc3RhbmNlLmdldExheWVyKExheWVyVHlwZS5iYWNrKTtcclxuICAgICAgICAgICAgICAgIG1hcmsucGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJrLnRhcmdldFBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhZGRLbmlmZShrbmlmZTpLbmlmZSlcclxuICAgIHtcclxuICAgICAgICBpZihrbmlmZS5ub2RlLnBhcmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtuaWZlLm5vZGUucGFyZW50LnJlbW92ZUNoaWxkKGtuaWZlLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoa25pZmUubm9kZSwwKTtcclxuICAgICAgICBpZih0aGlzLmtuaWZlQXJyLmluZGV4T2Yoa25pZmUpID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5rbmlmZUFyci5wdXNoKGtuaWZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwia25pZmVzQ2hhbmdlXCIse30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVLbmlmZShrbmlmZTpLbmlmZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5rbmlmZUFyci5pbmRleE9mKGtuaWZlKTtcclxuXHJcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmtuaWZlQXJyLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwia25pZmVzQ2hhbmdlXCIse30pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyp1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH0qL1xyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7IFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihcInd4TG9naW5cIix0aGlzLm9uV3hMb2dpbix0aGlzKTsgICBcclxuICAgIH1cclxufVxyXG4iXX0=