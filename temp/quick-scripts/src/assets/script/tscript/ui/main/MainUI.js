"use strict";
cc._RF.push(module, '442c8WlqyBFWqEM6A26dU1o', 'MainUI');
// script/tscript/ui/main/MainUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameScene_1 = require("../../gamescene/GameScene");
var BaseUI_1 = require("../base/BaseUI");
var GameManager_1 = require("../../core/GameManager");
var DataManager_1 = require("../../core/DataManager");
var UIManager_1 = require("../UIManager");
var WXSdk_1 = require("../../wx/WXSdk");
var PlayerController_1 = require("../../gamescene/PlayerController");
var LevelIcon_1 = require("./LevelIcon");
var TryOutUI_1 = require("./TryOutUI");
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
var MainUI = /** @class */ (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftBtn = null;
        _this.rightBtn = null;
        _this.startBtn = null;
        _this.tryOutBtn = null;
        _this.addknifeBtn = null;
        _this.butSkins = [];
        _this.lookBtn = null;
        _this.planetSkinBtn = null;
        _this.levelIcon = null;
        _this.starValueTxt = null;
        _this.conditionTxt = null;
        _this.progressTxt = null;
        _this.playerMsg = null;
        //@property(GameScene)
        _this.gameScene = null;
        _this.btnIndex = 0;
        _this.btnNames = ["开局6把刀", "开局加速", "免费表情", "", "", "", ""];
        _this.lookVidioKfIdDic = {};
        return _this;
        // update (dt) {}
    }
    MainUI_1 = MainUI;
    //@property(Player)
    //player: Player = null;
    // LIFE-CYCLE CALLBACKS:
    MainUI.prototype.onLoad = function () {
        this.basePos = cc.v2(-2500, 0);
    };
    MainUI.prototype.start = function () {
        var _this = this;
        this.node.position = cc.Vec2.ZERO;
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        //var bgImgs:cc.SpriteFrame[] = GameManager.instance.bgImgs;
        //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];
        this.gameScene.player.node.parent = this.node;
        this.updateKnifeMsg();
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.gameScene.player.knifeId > 1) {
                _this.gameScene.player.knifeId -= 1;
                _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 2;
                _this.gameScene.player.updateKnifesSkin();
                _this.gameScene.player.changeAttackState();
                //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];
                _this.updateKnifeMsg();
            }
        }, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.gameScene.player.knifeId < DataManager_1.default.instance.knifeConfigDatas.length) {
                _this.gameScene.player.knifeId += 1;
                _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 2;
                _this.gameScene.player.updateKnifesSkin();
                _this.gameScene.player.changeAttackState();
                //this.gameScene.bg.spriteFrame = bgImgs[Random.RangeInteger(0,bgImgs.length)];
                _this.updateKnifeMsg();
            }
        }, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.gameScene.player.changeDefenceState();
            _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 1;
        }, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.gameScene.player.changeDefenceState();
            _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 1;
        }, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.gameScene.player.changeDefenceState();
            _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 1;
        }, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.gameScene.player.changeDefenceState();
            _this.gameScene.player.getComponent(PlayerController_1.default).zoomRatio = 1;
        }, this);
        this.startBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            //this.gameScene.startGame();
            _this.gameScene.player.node.parent = _this.gameScene.node;
            ;
            UIManager_1.default.instance.matchingUI.open();
            _this.close();
            WXSdk_1.default.instance.removeBanner();
            cc.log("open matchingui");
            //WXSdk.instance.showBanner("adunit-d39672ca59cf15a2",{left:0,top:500,width:720});
        }, this);
        this.tryOutBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var kfId = _this.gameScene.player.knifeId;
            WXSdk_1.default.instance.showVideo("adunit-82c0e31583967848", function (closeState) {
                if (closeState == 0) {
                    return;
                }
                //console.log("成功关闭视频 closeState ",closeState);
                _this.lookVidioKfIdDic[kfId] = true;
                _this.updateKnifeMsg();
            });
        }, this);
        this.addknifeBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //UIManager.instance.wxOpenDataUI.openFriendRankUI();
            var index = _this.btnIndex;
            /*WXSdk.instance.showVideo("adunit-82c0e31583967848",(closeState:number)=>{

                console.log("成功关闭视频 closeState ",closeState);

            })*/
            WXSdk_1.default.instance.shareToAnyOne(function () {
                switch (index) {
                    case 0:
                        _this.gameScene.player.initKnife(6);
                        break;
                    case 1:
                        _this.gameScene.player.rocketItemEffect();
                        break;
                    case 2:
                        _this.gameScene.player.showface = true;
                        break;
                }
            }, function () { });
        }, this);
        this.lookBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            UIManager_1.default.instance.wxOpenDataUI.openRankUI();
        }, this);
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            this.lookBtn.node.active = false;
        }
        this.planetSkinBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            //UIManager.instance.wxOpenDataUI.openFriendRankUI();
        }, this);
        this.playerMsg.on(cc.Node.EventType.TOUCH_START, function (event) {
            UIManager_1.default.instance.levelMessageUI.open();
        }, this);
        this.levelIcon.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            UIManager_1.default.instance.levelMessageUI.open();
        }, this);
        if (WXSdk_1.default.instance.isWXPlatform()) {
            if (WXSdk_1.default.instance.isLogin) {
                this.onWxLogin();
            }
            else {
                this.playerMsg.getChildByName("NameTxt").getComponent(cc.Label).string = "";
                cc.systemEvent.on("wxLogin", this.onWxLogin, this);
            }
        }
        var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas;
        if (levelId == leveCnfdatas.length) {
            this.starValueTxt.string = "" + DataManager_1.default.instance.getPlayerData().star;
        }
        else {
            this.starValueTxt.string = DataManager_1.default.instance.getPlayerData().star + "/" + leveCnfdatas[levelId].stars;
        }
        this.levelIcon.updatePlayerSkin();
        this.bntFlip();
        if (MainUI_1.startRightAway) {
            // this.startBtn.node.emit(cc.Node.EventType.TOUCH_START);
            if (UIManager_1.default.instance.tryOutUI.rewardType == TryOutUI_1.RewardType.none) {
                this.gameScene.player.node.parent = this.gameScene.node;
                ;
                UIManager_1.default.instance.matchingUI.open();
                this.close();
            }
            else {
                UIManager_1.default.instance.tryOutUI.closeCallback = function () {
                    _this.gameScene.player.node.parent = _this.gameScene.node;
                    ;
                    UIManager_1.default.instance.matchingUI.open();
                    _this.close();
                };
            }
            MainUI_1.startRightAway = false;
        }
    };
    MainUI.prototype.onWxLogin = function () {
        var _this = this;
        this.playerMsg.getChildByName("NameTxt").getComponent(cc.Label).string = WXSdk_1.default.instance.nickname;
        WXSdk_1.default.instance.getUserIcon(function (texture) {
            var headIcon = _this.playerMsg.getChildByName("Mask").getChildByName("HeadIcon").getComponent(cc.Sprite);
            headIcon.spriteFrame = new cc.SpriteFrame(texture);
        }, 64);
    };
    MainUI.prototype.onDestroy = function () {
        cc.systemEvent.off("wxLogin", this.onWxLogin, this);
    };
    MainUI.prototype.bntFlip = function () {
        var _this = this;
        this.schedule(function () {
            _this.btnIndex++;
            _this.btnIndex %= 3;
            _this.addknifeBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _this.butSkins[_this.btnIndex];
            _this.addknifeBtn.node.getChildByName("TitleTxt").getComponent(cc.Label).string = _this.btnNames[_this.btnIndex];
            _this.addknifeBtn.node.position = cc.v2(-200, 0);
            _this.addknifeBtn.node.runAction(cc.moveTo(0.25, 0, 0));
        }, 3.6);
    };
    MainUI.prototype.selectKnife = function (knifeId) {
        this.gameScene.player.knifeId = knifeId;
        this.gameScene.player.updateKnifesSkin();
        this.gameScene.player.changeAttackState();
        this.updateKnifeMsg();
    };
    MainUI.prototype.updateKnifeMsg = function () {
        var knifeCnfData = DataManager_1.default.instance.getKnifeConfigData(this.gameScene.player.knifeId);
        var conditionData = this.getConditonData(knifeCnfData);
        var playerData = DataManager_1.default.instance.getPlayerData();
        this.conditionTxt.string = knifeCnfData.explain;
        this.progressTxt.node.color = this.gameScene.player.body.node.color;
        this.progressTxt.string = playerData[conditionData.key] + "/" + conditionData.value;
        //this.unlockStarTxt.string = playerData.star + "/" + conditionData.stars;
        if (conditionData.key == "") {
            this.conditionTxt.node.active = false;
            this.progressTxt.node.active = false;
            this.startBtn.node.active = true;
            this.tryOutBtn.node.active = false;
        }
        else {
            this.conditionTxt.node.active = true;
            this.progressTxt.node.active = true;
            if (playerData[conditionData.key] >= conditionData.value) {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }
            else {
                this.startBtn.node.active = false;
                this.tryOutBtn.node.active = true;
            }
            /*if(playerData.star >= conditionData.stars)
            {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }else
            {
                if(playerData[conditionData.key] >= conditionData.value)
                {
                    this.startBtn.node.active = true;
                    this.tryOutBtn.node.active = false;
                }else
                {
                    this.startBtn.node.active = false;
                    this.tryOutBtn.node.active = true;
                }
            }*/
        }
        if (this.lookVidioKfIdDic[this.gameScene.player.knifeId]) //该把飞刀是看过视频的，可以激活
         {
            this.startBtn.node.active = true;
            this.tryOutBtn.node.active = false;
        }
        if (UIManager_1.default.instance.tryOutUI.rewardType == TryOutUI_1.RewardType.kfskin) {
            if (this.gameScene.player.knifeId == UIManager_1.default.instance.tryOutUI.kfId) {
                this.startBtn.node.active = true;
                this.tryOutBtn.node.active = false;
            }
        }
    };
    MainUI.prototype.getConditonData = function (knifeCnfData) {
        var data = new ConditionData();
        data.id = knifeCnfData.id;
        data.explain = knifeCnfData.explain;
        data.stars = knifeCnfData.stars;
        for (var key in knifeCnfData) {
            if (key == "id" || key == "explain" || key == "stars") {
                continue;
            }
            if (knifeCnfData[key] != 0) {
                data.key = key;
                data.value = knifeCnfData[key];
                break;
            }
        }
        return data;
    };
    var MainUI_1;
    MainUI.startRightAway = false;
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "leftBtn", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "rightBtn", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "tryOutBtn", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "addknifeBtn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MainUI.prototype, "butSkins", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "lookBtn", void 0);
    __decorate([
        property(cc.Button)
    ], MainUI.prototype, "planetSkinBtn", void 0);
    __decorate([
        property(LevelIcon_1.default)
    ], MainUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.Label)
    ], MainUI.prototype, "starValueTxt", void 0);
    __decorate([
        property(cc.Label)
    ], MainUI.prototype, "conditionTxt", void 0);
    __decorate([
        property(cc.Label)
    ], MainUI.prototype, "progressTxt", void 0);
    __decorate([
        property(cc.Node)
    ], MainUI.prototype, "playerMsg", void 0);
    MainUI = MainUI_1 = __decorate([
        ccclass
    ], MainUI);
    return MainUI;
}(BaseUI_1.default));
exports.default = MainUI;
var ConditionData = /** @class */ (function () {
    function ConditionData() {
        this.id = 0;
        this.explain = "";
        this.stars = 0;
        this.key = "";
        this.value = 0;
    }
    return ConditionData;
}());

cc._RF.pop();