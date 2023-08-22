"use strict";
cc._RF.push(module, '07a505naSVOI6ydPPukyqp/', 'TryOutUI');
// script/tscript/ui/main/TryOutUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var WXSdk_1 = require("../../wx/WXSdk");
var Clock_1 = require("../../util/Clock");
var GameManager_1 = require("../../core/GameManager");
var DataManager_1 = require("../../core/DataManager");
var Random_1 = require("../../util/Random");
var UIManager_1 = require("../UIManager");
var GameScene_1 = require("../../gamescene/GameScene");
var MainUI_1 = require("./MainUI");
var Mathf_1 = require("../../util/Mathf");
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
var RewardType;
(function (RewardType) {
    RewardType[RewardType["none"] = 0] = "none";
    RewardType[RewardType["face"] = 1] = "face";
    RewardType[RewardType["kf6"] = 2] = "kf6";
    RewardType[RewardType["kfskin"] = 3] = "kfskin";
    RewardType[RewardType["rocket"] = 4] = "rocket";
})(RewardType = exports.RewardType || (exports.RewardType = {}));
var TryOutUI = /** @class */ (function (_super) {
    __extends(TryOutUI, _super);
    function TryOutUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardType = RewardType.none;
        _this.otherRewardType = RewardType.none;
        _this.turnbackBtn = null;
        _this.useBtn = null;
        _this.rewardTxt1 = null;
        _this.rewardTxt2 = null;
        _this.useTxt = null;
        _this.levelImg = null;
        _this.rewardIcon = null;
        _this.lightImg = null;
        _this.cdImg = null;
        _this.cdImgArr = [];
        _this.faceSF = null;
        _this.kf6SF = null;
        _this.kfId = 0;
        _this.gameScene = null;
        _this.closeCallback = null;
        _this.lookingVidio = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TryOutUI.prototype.onLoad = function () {
        this.basePos = this.node.position;
        this.checkReward();
    };
    TryOutUI.prototype.start = function () {
        var _this = this;
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.lightImg.node.runAction(cc.rotateBy(3.6, 360).repeatForever());
        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.close();
        }, this);
        this.useBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            //WXSdk.instance.shareToAnyOne(()=>{},()=>{});
            _this.lookingVidio = true;
            WXSdk_1.default.instance.showVideo(MainUI_1.default.startRightAway ? "adunit-82c0e31583967848" : "adunit-4fce270de78f93a0", function (closeState) {
                _this.lookingVidio = false;
                if (closeState == 0) {
                    return;
                }
                switch (_this.rewardType) {
                    case RewardType.face:
                        DataManager_1.default.instance.getPlayerData().todayUseFace = true;
                        DataManager_1.default.instance.saveLevelData();
                        _this.gameScene.player.showface = true;
                        break;
                    case RewardType.kf6:
                        _this.gameScene.player.initKnife(6);
                        break;
                    case RewardType.kfskin:
                        UIManager_1.default.instance.mainUI.selectKnife(_this.kfId);
                        break;
                }
                switch (_this.otherRewardType) {
                    case RewardType.kf6:
                        _this.gameScene.player.initKnife(6);
                        break;
                    case RewardType.rocket:
                        _this.gameScene.player.rocketItemEffect();
                        break;
                }
                _this.close();
            });
        }, this);
    };
    TryOutUI.prototype.checkReward = function () {
        var _this = this;
        this.rewardType = RewardType.none;
        var gameTimes = GameManager_1.default.gameTimes;
        if (gameTimes == 1) {
            if (!DataManager_1.default.instance.getPlayerData().todayUseFace) {
                this.rewardType = RewardType.face;
            }
            else {
                this.rewardType = RewardType.kf6;
            }
        }
        else if (gameTimes > 1) {
            if (gameTimes % 2 == 1) {
                if (gameTimes % 4 == 3) {
                    //奇
                    if (!DataManager_1.default.instance.getPlayerData().todayUseFace) {
                        this.rewardType = RewardType.face;
                    }
                    else {
                        this.rewardType = RewardType.kf6;
                    }
                }
                else {
                    //偶
                    this.rewardType = RewardType.kfskin;
                }
            }
        }
        //this.rewardType = RewardType.face;
        if (this.rewardType == RewardType.none) {
            this.close();
        }
        else {
            switch (this.rewardType) {
                case RewardType.face:
                    this.rewardIcon.spriteFrame = this.faceSF;
                    this.rewardTxt1.string = "免费今日表情";
                    this.otherRewardType = RewardType.kf6;
                    break;
                case RewardType.kf6:
                    this.rewardIcon.spriteFrame = this.kf6SF;
                    this.rewardTxt1.string = "开局6把刀";
                    this.otherRewardType = RewardType.rocket;
                    break;
                case RewardType.kfskin:
                    //this.rewardIcon.spriteFrame = this;
                    this.kfId = Random_1.default.RangeInteger(11, 26);
                    this.rewardIcon.spriteFrame = GameManager_1.default.instance.daoImgs[this.kfId - 1];
                    this.rewardTxt1.string = "免费试用飞刀皮肤";
                    this.otherRewardType = Mathf_1.default.probability(0.5) ? RewardType.kf6 : RewardType.rocket;
                    break;
            }
            switch (this.otherRewardType) {
                case RewardType.kf6:
                    this.rewardTxt2.string = "附赠：开局6把刀";
                    break;
                case RewardType.rocket:
                    this.rewardTxt2.string = "附赠：开局加速";
                    break;
            }
            this.rewardIcon.node.width = this.rewardIcon.spriteFrame.getRect().width;
            this.rewardIcon.node.height = this.rewardIcon.spriteFrame.getRect().height;
            this.scheduleOnce(function () {
                _this.open();
            }, 0.05);
        }
    };
    TryOutUI.prototype.close = function () {
        _super.prototype.close.call(this);
        this.cdImg.getComponent(Clock_1.default).Stop();
        if (!this.lookingVidio) {
            this.closeCallback && this.closeCallback();
        }
        WXSdk_1.default.instance.removeBanner();
    };
    TryOutUI.prototype.open = function () {
        var _this = this;
        _super.prototype.open.call(this);
        WXSdk_1.default.instance.showBottomBanner("adunit-d39672ca59cf15a2");
        var clock = this.cdImg.getComponent(Clock_1.default);
        clock.Reset();
        clock.timeLength = 6;
        clock.Play(function (s, m, h, str, t) {
            if (t <= 5) {
                _this.cdImg.spriteFrame = _this.cdImgArr[t - 1];
            }
        }, function () {
            _this.close();
        });
    };
    __decorate([
        property({ type: cc.Enum(RewardType) })
    ], TryOutUI.prototype, "rewardType", void 0);
    __decorate([
        property({ type: cc.Enum(RewardType) })
    ], TryOutUI.prototype, "otherRewardType", void 0);
    __decorate([
        property(cc.Button)
    ], TryOutUI.prototype, "turnbackBtn", void 0);
    __decorate([
        property(cc.Button)
    ], TryOutUI.prototype, "useBtn", void 0);
    __decorate([
        property(cc.Label)
    ], TryOutUI.prototype, "rewardTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], TryOutUI.prototype, "rewardTxt2", void 0);
    __decorate([
        property(cc.Label)
    ], TryOutUI.prototype, "useTxt", void 0);
    __decorate([
        property(cc.Sprite)
    ], TryOutUI.prototype, "levelImg", void 0);
    __decorate([
        property(cc.Sprite)
    ], TryOutUI.prototype, "rewardIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], TryOutUI.prototype, "lightImg", void 0);
    __decorate([
        property(cc.Sprite)
    ], TryOutUI.prototype, "cdImg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TryOutUI.prototype, "cdImgArr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TryOutUI.prototype, "faceSF", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TryOutUI.prototype, "kf6SF", void 0);
    TryOutUI = __decorate([
        ccclass
    ], TryOutUI);
    return TryOutUI;
}(BaseUI_1.default));
exports.default = TryOutUI;

cc._RF.pop();