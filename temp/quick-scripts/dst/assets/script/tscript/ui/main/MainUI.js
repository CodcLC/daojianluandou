
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/MainUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcTWFpblVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFFbEQseUNBQW9DO0FBQ3BDLHNEQUFpRDtBQUVqRCxzREFBaUQ7QUFFakQsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUVuQyxxRUFBZ0U7QUFDaEUseUNBQW9DO0FBQ3BDLHVDQUF3QztBQUV4QyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQW9DLDBCQUFNO0lBRDFDO1FBQUEscUVBZ2JDO1FBemFHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFxQixFQUFFLENBQUM7UUFHaEMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsc0JBQXNCO1FBQ3RCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHcEIsY0FBUSxHQUFVLENBQUMsQ0FBQztRQUVwQixjQUFRLEdBQVksQ0FBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsRUFB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SUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEdWFuV2VpIGZyb20gXCIuL0R1YW5XZWlcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi4vLi4vZ2FtZXNjZW5lL0dhbWVTY2VuZVwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi8uLi9nYW1lc2NlbmUvUGxheWVyXCI7XHJcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2Jhc2UvQmFzZVVJXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgS25pZmVDb25maWdEYXRhIGZyb20gXCIuLi8uLi9jb25maWdkYXRhL0tuaWZlQ29uZmlnRGF0YVwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllckRhdGEgZnJvbSBcIi4uLy4uL2RhdGEvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFdYU2RrIGZyb20gXCIuLi8uLi93eC9XWFNka1wiO1xyXG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi8uLi91dGlsL1JhbmRvbVwiO1xyXG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vZ2FtZXNjZW5lL1BsYXllckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IExldmVsSWNvbiBmcm9tIFwiLi9MZXZlbEljb25cIjtcclxuaW1wb3J0IHsgUmV3YXJkVHlwZSB9IGZyb20gXCIuL1RyeU91dFVJXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblVJIGV4dGVuZHMgQmFzZVVJIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydFJpZ2h0QXdheTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGxlZnRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHJpZ2h0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzdGFydEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgdHJ5T3V0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBhZGRrbmlmZUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBidXRTa2luczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBsb29rQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwbGFuZXRTa2luQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMZXZlbEljb24pXHJcbiAgICBsZXZlbEljb246IExldmVsSWNvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3RhclZhbHVlVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29uZGl0aW9uVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvZ3Jlc3NUeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllck1zZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoR2FtZVNjZW5lKVxyXG4gICAgZ2FtZVNjZW5lOiBHYW1lU2NlbmUgPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBidG5JbmRleDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYnRuTmFtZXM6c3RyaW5nW10gPSBbXCLlvIDlsYA25oqK5YiAXCIsXCLlvIDlsYDliqDpgJ9cIixcIuWFjei0ueihqOaDhVwiLFwiXCIsXCJcIixcIlwiLFwiXCJdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGxvb2tWaWRpb0tmSWREaWM6e1trZXk6bnVtYmVyXTpib29sZWFufSA9IHt9O1xyXG5cclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICAvL3BsYXllcjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmJhc2VQb3MgPSBjYy52MigtMjUwMCwwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcblxyXG4gICAgICAgIC8vdmFyIGJnSW1nczpjYy5TcHJpdGVGcmFtZVtdID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuYmdJbWdzO1xyXG4gICAgICAgIC8vdGhpcy5nYW1lU2NlbmUuYmcuc3ByaXRlRnJhbWUgPSBiZ0ltZ3NbUmFuZG9tLlJhbmdlSW50ZWdlcigwLGJnSW1ncy5sZW5ndGgpXTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVLbmlmZU1zZygpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTY2VuZS5wbGF5ZXIua25pZmVJZCA+IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5rbmlmZUlkIC09IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpLnpvb21SYXRpbyA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIudXBkYXRlS25pZmVzU2tpbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmNoYW5nZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nYW1lU2NlbmUuYmcuc3ByaXRlRnJhbWUgPSBiZ0ltZ3NbUmFuZG9tLlJhbmdlSW50ZWdlcigwLGJnSW1ncy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlS25pZmVNc2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTY2VuZS5wbGF5ZXIua25pZmVJZCA8IERhdGFNYW5hZ2VyLmluc3RhbmNlLmtuaWZlQ29uZmlnRGF0YXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIua25pZmVJZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKS56b29tUmF0aW8gPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLnVwZGF0ZUtuaWZlc1NraW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nYW1lU2NlbmUuYmcuc3ByaXRlRnJhbWUgPSBiZ0ltZ3NbUmFuZG9tLlJhbmdlSW50ZWdlcigwLGJnSW1ncy5sZW5ndGgpXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtuaWZlTXNnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmNoYW5nZURlZmVuY2VTdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpLnpvb21SYXRpbyA9IDE7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodEJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5jaGFuZ2VEZWZlbmNlU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKS56b29tUmF0aW8gPSAxO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5jaGFuZ2VEZWZlbmNlU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKS56b29tUmF0aW8gPSAxO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcikuem9vbVJhdGlvID0gMTtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5nYW1lU2NlbmUuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5ub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVNjZW5lLm5vZGU7O1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubWF0Y2hpbmdVSS5vcGVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2UucmVtb3ZlQmFubmVyKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIm9wZW4gbWF0Y2hpbmd1aVwiKTtcclxuICAgICAgICAgICAgLy9XWFNkay5pbnN0YW5jZS5zaG93QmFubmVyKFwiYWR1bml0LWQzOTY3MmNhNTljZjE1YTJcIix7bGVmdDowLHRvcDo1MDAsd2lkdGg6NzIwfSk7XHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5T3V0QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGtmSWQ6bnVtYmVyID0gdGhpcy5nYW1lU2NlbmUucGxheWVyLmtuaWZlSWQ7XHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zaG93VmlkZW8oXCJhZHVuaXQtODJjMGUzMTU4Mzk2Nzg0OFwiLChjbG9zZVN0YXRlOm51bWJlcik9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjbG9zZVN0YXRlID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLmiJDlip/lhbPpl63op4bpopEgY2xvc2VTdGF0ZSBcIixjbG9zZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9va1ZpZGlvS2ZJZERpY1trZklkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtuaWZlTXNnKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRka25pZmVCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnd4T3BlbkRhdGFVSS5vcGVuRnJpZW5kUmFua1VJKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kZXg6bnVtYmVyID0gdGhpcy5idG5JbmRleDtcclxuXHJcblxyXG4gICAgICAgICAgICAvKldYU2RrLmluc3RhbmNlLnNob3dWaWRlbyhcImFkdW5pdC04MmMwZTMxNTgzOTY3ODQ4XCIsKGNsb3NlU3RhdGU6bnVtYmVyKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5Yqf5YWz6Zet6KeG6aKRIGNsb3NlU3RhdGUgXCIsY2xvc2VTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB9KSovXHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zaGFyZVRvQW55T25lKCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGluZGV4KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLmluaXRLbmlmZSg2KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIucm9ja2V0SXRlbUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5zaG93ZmFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCgpPT57fSk7XHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9va0J0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS53eE9wZW5EYXRhVUkub3BlblJhbmtVSSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICBpZighV1hTZGsuaW5zdGFuY2UuaXNXWFBsYXRmb3JtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxvb2tCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxhbmV0U2tpbkJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnd4T3BlbkRhdGFVSS5vcGVuRnJpZW5kUmFua1VJKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyTXNnLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxldmVsTWVzc2FnZVVJLm9wZW4oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbEljb24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoZXZlbnQpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5sZXZlbE1lc3NhZ2VVSS5vcGVuKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG5cclxuICAgICAgICBpZihXWFNkay5pbnN0YW5jZS5pc1dYUGxhdGZvcm0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFdYU2RrLmluc3RhbmNlLmlzTG9naW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5vbld4TG9naW4oKTtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNc2cuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lVHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFwid3hMb2dpblwiLHRoaXMub25XeExvZ2luLHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgbGV2ZWxJZCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldExldmVsSWQoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIpO1xyXG4gICAgICAgIHZhciBsZXZlQ25mZGF0YXMgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbENvbmZpZ0RhdGFzO1xyXG5cclxuICAgICAgICBpZihsZXZlbElkID09IGxldmVDbmZkYXRhcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJWYWx1ZVR4dC5zdHJpbmcgPSAgXCJcIiArIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJWYWx1ZVR4dC5zdHJpbmcgPSAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIgKyBcIi9cIiArIGxldmVDbmZkYXRhc1tsZXZlbElkXS5zdGFycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxJY29uLnVwZGF0ZVBsYXllclNraW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibnRGbGlwKCk7XHJcblxyXG4gICAgICAgIGlmKE1haW5VSS5zdGFydFJpZ2h0QXdheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgLy8gdGhpcy5zdGFydEJ0bi5ub2RlLmVtaXQoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgaWYoVUlNYW5hZ2VyLmluc3RhbmNlLnRyeU91dFVJLnJld2FyZFR5cGUgPT0gUmV3YXJkVHlwZS5ub25lKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5ub2RlLnBhcmVudCA9IHRoaXMuZ2FtZVNjZW5lLm5vZGU7O1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLm1hdGNoaW5nVUkub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnRyeU91dFVJLmNsb3NlQ2FsbGJhY2sgPSAoKT0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLm5vZGUucGFyZW50ID0gdGhpcy5nYW1lU2NlbmUubm9kZTs7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLm1hdGNoaW5nVUkub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIE1haW5VSS5zdGFydFJpZ2h0QXdheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbld4TG9naW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGxheWVyTXNnLmdldENoaWxkQnlOYW1lKFwiTmFtZVR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFdYU2RrLmluc3RhbmNlLm5pY2tuYW1lO1xyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLmdldFVzZXJJY29uKCh0ZXh0dXJlOmNjLlRleHR1cmUyRCk9PntcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWFkSWNvbjpjYy5TcHJpdGUgPSB0aGlzLnBsYXllck1zZy5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaGVhZEljb24uc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblxyXG4gICAgICAgIH0sNjQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAgeyBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXCJ3eExvZ2luXCIsdGhpcy5vbld4TG9naW4sdGhpcyk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJudEZsaXAoKVxyXG4gICAge1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0bkluZGV4ICsrO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkluZGV4ICU9IDM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZGtuaWZlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5idXRTa2luc1t0aGlzLmJ0bkluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5hZGRrbmlmZUJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGl0bGVUeHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJ0bk5hbWVzW3RoaXMuYnRuSW5kZXhdO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRka25pZmVCdG4ubm9kZS5wb3NpdGlvbiA9IGNjLnYyKC0yMDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRka25pZmVCdG4ubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuMjUsMCwwKSk7XHJcbiAgICAgICAgfSwzLjYpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEtuaWZlKGtuaWZlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5rbmlmZUlkID0ga25pZmVJZDtcclxuICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIudXBkYXRlS25pZmVzU2tpbigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lLnBsYXllci5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlS25pZmVNc2coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlS25pZmVNc2coKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBrbmlmZUNuZkRhdGE6S25pZmVDb25maWdEYXRhID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0S25pZmVDb25maWdEYXRhKHRoaXMuZ2FtZVNjZW5lLnBsYXllci5rbmlmZUlkKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbmRpdGlvbkRhdGE6Q29uZGl0aW9uRGF0YSA9IHRoaXMuZ2V0Q29uZGl0b25EYXRhKGtuaWZlQ25mRGF0YSk7XHJcblxyXG4gICAgICAgIHZhciBwbGF5ZXJEYXRhOlBsYXllckRhdGEgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uVHh0LnN0cmluZyA9IGtuaWZlQ25mRGF0YS5leHBsYWluO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUeHQubm9kZS5jb2xvciA9IHRoaXMuZ2FtZVNjZW5lLnBsYXllci5ib2R5Lm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1R4dC5zdHJpbmcgPSBwbGF5ZXJEYXRhW2NvbmRpdGlvbkRhdGEua2V5XSArIFwiL1wiICsgY29uZGl0aW9uRGF0YS52YWx1ZTtcclxuICAgICAgICAvL3RoaXMudW5sb2NrU3RhclR4dC5zdHJpbmcgPSBwbGF5ZXJEYXRhLnN0YXIgKyBcIi9cIiArIGNvbmRpdGlvbkRhdGEuc3RhcnM7XHJcblxyXG4gICAgICAgIGlmKGNvbmRpdGlvbkRhdGEua2V5ID09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvblR4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVHh0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50cnlPdXRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uVHh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1R4dC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZihwbGF5ZXJEYXRhW2NvbmRpdGlvbkRhdGEua2V5XSA+PSBjb25kaXRpb25EYXRhLnZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5T3V0QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5T3V0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyppZihwbGF5ZXJEYXRhLnN0YXIgPj0gY29uZGl0aW9uRGF0YS5zdGFycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeU91dEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJEYXRhW2NvbmRpdGlvbkRhdGEua2V5XSA+PSBjb25kaXRpb25EYXRhLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5T3V0QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeU91dEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sb29rVmlkaW9LZklkRGljW3RoaXMuZ2FtZVNjZW5lLnBsYXllci5rbmlmZUlkXSkgLy/or6Xmiorpo57liIDmmK/nnIvov4fop4bpopHnmoTvvIzlj6/ku6Xmv4DmtLtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyeU91dEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5pbnN0YW5jZS50cnlPdXRVSS5yZXdhcmRUeXBlID09IFJld2FyZFR5cGUua2Zza2luKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU2NlbmUucGxheWVyLmtuaWZlSWQgPT0gVUlNYW5hZ2VyLmluc3RhbmNlLnRyeU91dFVJLmtmSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlPdXRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldENvbmRpdG9uRGF0YShrbmlmZUNuZkRhdGE6S25pZmVDb25maWdEYXRhKTpDb25kaXRpb25EYXRhXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhOkNvbmRpdGlvbkRhdGEgPSBuZXcgQ29uZGl0aW9uRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuaWQgPSBrbmlmZUNuZkRhdGEuaWQ7XHJcbiAgICAgICAgZGF0YS5leHBsYWluID0ga25pZmVDbmZEYXRhLmV4cGxhaW47XHJcbiAgICAgICAgZGF0YS5zdGFycyA9IGtuaWZlQ25mRGF0YS5zdGFycztcclxuXHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4ga25pZmVDbmZEYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09IFwiaWRcIiB8fCBrZXkgPT0gXCJleHBsYWluXCIgfHwga2V5ID09IFwic3RhcnNcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGtuaWZlQ25mRGF0YVtrZXldICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEua2V5ID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IGtuaWZlQ25mRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcblxyXG5jbGFzcyBDb25kaXRpb25EYXRhXHJcbntcclxuICAgIHB1YmxpYyBpZDpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGV4cGxhaW46c3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBzdGFyczpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGtleTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHZhbHVlOm51bWJlciA9IDA7XHJcblxyXG59XHJcbiJdfQ==