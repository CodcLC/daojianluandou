"use strict";
cc._RF.push(module, '2833fGUv4RIaqVA9q1xQBOV', 'AccountUI');
// script/tscript/ui/main/AccountUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var GameScene_1 = require("../../gamescene/GameScene");
var GameManager_1 = require("../../core/GameManager");
var Player_1 = require("../../gamescene/Player");
var DataManager_1 = require("../../core/DataManager");
var WXSdk_1 = require("../../wx/WXSdk");
var UIManager_1 = require("../UIManager");
var LevelIcon_1 = require("./LevelIcon");
var MainUI_1 = require("./MainUI");
var Mathf_1 = require("../../util/Mathf");
var SoundManager_1 = require("../../core/SoundManager");
var SoundClip_1 = require("../../audio/SoundClip");
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
var AccountUI = /** @class */ (function (_super) {
    __extends(AccountUI, _super);
    function AccountUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelIcon = null;
        _this.levelProgress = null;
        _this.levelvalueTxt = null;
        _this.rankValueTxt = null;
        _this.killValueTxt = null;
        _this.totalValueTxt = null;
        _this.winStarTxt1 = null;
        _this.killTxt = null;
        _this.winStarTxt2 = null;
        _this.turnBack = null;
        _this.lookRankBtn = null;
        _this.huoquBtn1 = null;
        _this.huoquBtn2 = null;
        _this.recoverBtn = null;
        _this.replayBtn = null;
        _this.rankImg = null;
        _this.numArr = [];
        _this.gameScene = null;
        _this.star = 0;
        return _this;
        /*update (dt) {
   
          
        
        }*/
    }
    AccountUI.prototype.start = function () {
        var _this = this;
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.turnBack.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var lastStar = DataManager_1.default.instance.getPlayerData().star;
            var lastLevelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
            DataManager_1.default.instance.getPlayerData().addStar(_this.star);
            DataManager_1.default.instance.savePlayerData();
            WXSdk_1.default.instance.setUserRankStorage("star", DataManager_1.default.instance.getPlayerData().star);
            var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
            if (levelId > lastLevelId) {
                _this.close();
                UIManager_1.default.instance.upgradeUI.open();
                UIManager_1.default.instance.upgradeUI.showUpgrade(levelId, true);
                UIManager_1.default.instance.upgradeUI.onExit = function () {
                    cc.director.loadScene(cc.director.getScene().name);
                };
            }
            else if (levelId < lastLevelId) {
                _this.close();
                UIManager_1.default.instance.upgradeUI.open();
                UIManager_1.default.instance.upgradeUI.showUpgrade(levelId, false);
                UIManager_1.default.instance.upgradeUI.onExit = function () {
                    cc.director.loadScene(cc.director.getScene().name);
                };
                UIManager_1.default.instance.upgradeUI.onRecover = function () {
                    DataManager_1.default.instance.getPlayerData().star = lastStar;
                    DataManager_1.default.instance.savePlayerData();
                    cc.director.loadScene(cc.director.getScene().name);
                };
            }
            else {
                cc.director.loadScene(cc.director.getScene().name);
            }
        });
        this.huoquBtn2.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.showVideo("adunit-82c0e31583967848", function (closeState) {
                if (closeState == 0) {
                    return;
                }
                var lastStar = DataManager_1.default.instance.getPlayerData().star;
                var lastLevelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
                DataManager_1.default.instance.getPlayerData().addStar(_this.star * 3);
                ;
                DataManager_1.default.instance.savePlayerData();
                WXSdk_1.default.instance.setUserRankStorage("star", DataManager_1.default.instance.getPlayerData().star);
                var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
                if (levelId > lastLevelId) {
                    _this.close();
                    UIManager_1.default.instance.upgradeUI.open();
                    UIManager_1.default.instance.upgradeUI.showUpgrade(levelId, true);
                    UIManager_1.default.instance.upgradeUI.onExit = function () {
                        cc.director.loadScene(cc.director.getScene().name);
                    };
                }
                else if (levelId < lastLevelId) {
                    _this.close();
                    UIManager_1.default.instance.upgradeUI.open();
                    UIManager_1.default.instance.upgradeUI.showUpgrade(levelId, false);
                    UIManager_1.default.instance.upgradeUI.onExit = function () {
                        cc.director.loadScene(cc.director.getScene().name);
                    };
                    UIManager_1.default.instance.upgradeUI.onRecover = function () {
                        DataManager_1.default.instance.getPlayerData().star = lastStar;
                        DataManager_1.default.instance.savePlayerData();
                        cc.director.loadScene(cc.director.getScene().name);
                    };
                }
                else {
                    cc.director.loadScene(cc.director.getScene().name);
                }
            });
        });
        this.recoverBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.showVideo("adunit-58c67892748cf639", function (closeState) {
                if (closeState == 0) {
                    return;
                }
                cc.director.loadScene(cc.director.getScene().name);
            });
        });
        this.lookRankBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            UIManager_1.default.instance.wxOpenDataUI.openRankUI();
        }, this);
        this.replayBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            DataManager_1.default.instance.getPlayerData().addStar(_this.star);
            DataManager_1.default.instance.savePlayerData();
            WXSdk_1.default.instance.setUserRankStorage("star", DataManager_1.default.instance.getPlayerData().star);
            MainUI_1.default.startRightAway = true;
            cc.director.loadScene(cc.director.getScene().name);
        });
    };
    AccountUI.prototype.init = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        if (this.gameScene.player.status == Player_1.PlayerStatus.die) {
            DataManager_1.default.instance.getPlayerData().continueStraking = 0;
        }
        else {
            if (this.gameScene.player.rank == 1) {
                DataManager_1.default.instance.getPlayerData().num1 += 1;
                //cc.log("用时",this.gameScene.clock.currentCount - 1);
                if (this.gameScene.clock.currentCount - 1 > DataManager_1.default.instance.getPlayerData().timelimitnum1) {
                    DataManager_1.default.instance.getPlayerData().timelimitnum1 = this.gameScene.clock.currentCount - 1;
                }
            }
            DataManager_1.default.instance.getPlayerData().continueStraking++;
            if (DataManager_1.default.instance.getPlayerData().continueStraking > DataManager_1.default.instance.getPlayerData().straking) {
                DataManager_1.default.instance.getPlayerData().straking = DataManager_1.default.instance.getPlayerData().continueStraking;
            }
        }
        this.star = 0;
        var rank = Mathf_1.default.clamp(this.gameScene.player.rank, 1, 8);
        //this.rankTxt.string = `第${rank}名`;
        this.rankImg.spriteFrame = this.numArr[rank - 1];
        this.rankImg.node.width = this.numArr[rank - 1].getRect().width;
        this.rankImg.node.height = this.numArr[rank - 1].getRect().height;
        var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
        var rankData = DataManager_1.default.instance.accountRankCnfDatasDic[levelId][rank - 1];
        var rw = rankData.reward;
        this.star += rw;
        this.rankValueTxt.string = rw >= 0 ? "+" + rw : "" + rw;
        if (rw < 0) {
            this.rankValueTxt.node.color = cc.Color.RED;
        }
        var killCount = this.gameScene.player.killCount;
        var kr = 0;
        if (killCount < 2) {
            //------
        }
        else {
            kr = killCount - 1;
        }
        this.killTxt.string = "" + killCount;
        this.killValueTxt.string = "+" + kr;
        this.star += kr;
        this.totalValueTxt.string = this.star >= 0 ? "+" + this.star : "" + this.star;
        //this.winStarTxt1.string = `+${this.star}`;
        //this.winStarTxt2.string = `+${this.star * 3}`;
        if (this.star < 0) {
            this.totalValueTxt.node.color = cc.Color.RED;
            this.recoverBtn.node.active = true;
            this.huoquBtn2.node.active = false;
            SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.fail);
        }
        else {
            this.recoverBtn.node.active = false;
            this.huoquBtn2.node.active = true;
            SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.victory);
        }
        DataManager_1.default.instance.savePlayerData();
        var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas;
        if (levelId == leveCnfdatas.length) {
            this.levelvalueTxt.string = "" + DataManager_1.default.instance.getPlayerData().star;
            this.levelProgress.progress = 1;
        }
        else {
            this.levelvalueTxt.string = DataManager_1.default.instance.getPlayerData().star + "/" + leveCnfdatas[levelId].stars;
            this.levelProgress.progress = DataManager_1.default.instance.getPlayerData().star / leveCnfdatas[levelId].stars;
        }
        this.levelIcon.updatePlayerSkin();
    };
    AccountUI.prototype.open = function () {
        _super.prototype.open.call(this);
        this.init();
        WXSdk_1.default.instance.showBottomBanner("adunit-d39672ca59cf15a2");
        //cc.log("account open",this.node.position.toString());
    };
    AccountUI.prototype.close = function () {
        _super.prototype.close.call(this);
        WXSdk_1.default.instance.removeBanner();
    };
    __decorate([
        property(LevelIcon_1.default)
    ], AccountUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], AccountUI.prototype, "levelProgress", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "levelvalueTxt", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "rankValueTxt", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "killValueTxt", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "totalValueTxt", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "winStarTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "killTxt", void 0);
    __decorate([
        property(cc.Label)
    ], AccountUI.prototype, "winStarTxt2", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "turnBack", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "lookRankBtn", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "huoquBtn1", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "huoquBtn2", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "recoverBtn", void 0);
    __decorate([
        property(cc.Button)
    ], AccountUI.prototype, "replayBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], AccountUI.prototype, "rankImg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], AccountUI.prototype, "numArr", void 0);
    AccountUI = __decorate([
        ccclass
    ], AccountUI);
    return AccountUI;
}(BaseUI_1.default));
exports.default = AccountUI;

cc._RF.pop();