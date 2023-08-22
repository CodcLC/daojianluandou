
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/AccountUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcQWNjb3VudFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsdURBQWtEO0FBQ2xELHNEQUFpRDtBQUNqRCxpREFBOEQ7QUFDOUQsc0RBQWlEO0FBQ2pELHdDQUFtQztBQUNuQywwQ0FBcUM7QUFFckMseUNBQW9DO0FBQ3BDLG1DQUE4QjtBQUM5QiwwQ0FBcUM7QUFDckMsd0RBQW1EO0FBQ25ELG1EQUFzRDtBQUV0RCxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBRDdDO1FBQUEscUVBd1ZDO1FBcFZHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFC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LFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNLO0lBbkRiLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1VjdCO0lBQUQsZ0JBQUM7Q0F2VkQsQUF1VkMsQ0F2VnNDLGdCQUFNLEdBdVY1QztrQkF2Vm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHVhbldlaSBmcm9tIFwiLi9EdWFuV2VpXCI7XHJcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4uL2Jhc2UvQmFzZVVJXCI7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSBcIi4uLy4uL2dhbWVzY2VuZS9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIsIHsgUGxheWVyU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2dhbWVzY2VuZS9QbGF5ZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBXWFNkayBmcm9tIFwiLi4vLi4vd3gvV1hTZGtcIjtcclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCBBY2NvdW50UmFua0RhdGEgZnJvbSBcIi4uLy4uL2NvbmZpZ2RhdGEvQWNjb3VudFJhbmtEYXRhXCI7XHJcbmltcG9ydCBMZXZlbEljb24gZnJvbSBcIi4vTGV2ZWxJY29uXCI7XHJcbmltcG9ydCBNYWluVUkgZnJvbSBcIi4vTWFpblVJXCI7XHJcbmltcG9ydCBNYXRoZiBmcm9tIFwiLi4vLi4vdXRpbC9NYXRoZlwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZENsaXBUeXBlIH0gZnJvbSBcIi4uLy4uL2F1ZGlvL1NvdW5kQ2xpcFwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnRVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KExldmVsSWNvbilcclxuICAgIGxldmVsSWNvbjogTGV2ZWxJY29uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBsZXZlbFByb2dyZXNzOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWx2YWx1ZVR4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJhbmtWYWx1ZVR4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGtpbGxWYWx1ZVR4dDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRvdGFsVmFsdWVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5TdGFyVHh0MTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGtpbGxUeHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5TdGFyVHh0MjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICB0dXJuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbG9va1JhbmtCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGh1b3F1QnRuMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgaHVvcXVCdG4yOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICByZWNvdmVyQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICByZXBsYXlCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHJhbmtJbWc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbnVtQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVNjZW5lOkdhbWVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFyOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLypwdWJsaWMgb25Mb2FkICgpIHtcclxuICAgICAgICAvL3RoaXMuYmFzZVBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgIH0qL1xyXG5cclxuICAgIHByaXZhdGUgaXNJbml0OmJvb2xlYW47XHJcbiAgICBcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnR1cm5CYWNrLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIHZhciBsYXN0U3RhciA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyO1xyXG4gICAgICAgICAgICB2YXIgbGFzdExldmVsSWQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRMZXZlbElkKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5hZGRTdGFyKHRoaXMuc3Rhcik7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zZXRVc2VyUmFua1N0b3JhZ2UoXCJzdGFyXCIsRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxldmVsSWQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRMZXZlbElkKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGxldmVsSWQgPiBsYXN0TGV2ZWxJZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVwZ3JhZGVVSS5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXBncmFkZVVJLnNob3dVcGdyYWRlKGxldmVsSWQsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXBncmFkZVVJLm9uRXhpdCA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsZXZlbElkIDwgbGFzdExldmVsSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVwZ3JhZGVVSS5zaG93VXBncmFkZShsZXZlbElkLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkub25FeGl0ID0gKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVwZ3JhZGVVSS5vblJlY292ZXIgPSAoKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkuc3RhciA9IGxhc3RTdGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVQbGF5ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odW9xdUJ0bjIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKGV2ZW50KT0+e1xyXG5cclxuXHJcbiAgICAgICAgICAgIFdYU2RrLmluc3RhbmNlLnNob3dWaWRlbyhcImFkdW5pdC04MmMwZTMxNTgzOTY3ODQ4XCIsKGNsb3NlU3RhdGU6bnVtYmVyKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNsb3NlU3RhdGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGFyID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdExldmVsSWQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRMZXZlbElkKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmFkZFN0YXIodGhpcy5zdGFyICogMyk7O1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZVBsYXllckRhdGEoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uuc2V0VXNlclJhbmtTdG9yYWdlKFwic3RhclwiLERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxldmVsSWQgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRMZXZlbElkKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZihsZXZlbElkID4gbGFzdExldmVsSWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkuc2hvd1VwZ3JhZGUobGV2ZWxJZCx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXBncmFkZVVJLm9uRXhpdCA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihsZXZlbElkIDwgbGFzdExldmVsSWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGdyYWRlVUkuc2hvd1VwZ3JhZGUobGV2ZWxJZCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVwZ3JhZGVVSS5vbkV4aXQgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVwZ3JhZGVVSS5vblJlY292ZXIgPSAoKT0+e1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdGFyID0gbGFzdFN0YXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVQbGF5ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjb3ZlckJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT57XHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zaG93VmlkZW8oXCJhZHVuaXQtNThjNjc4OTI3NDhjZjYzOVwiLChjbG9zZVN0YXRlOm51bWJlcik9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjbG9zZVN0YXRlID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvb2tSYW5rQnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnd4T3BlbkRhdGFVSS5vcGVuUmFua1VJKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwbGF5QnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5hZGRTdGFyKHRoaXMuc3Rhcik7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS5zZXRVc2VyUmFua1N0b3JhZ2UoXCJzdGFyXCIsRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIpO1xyXG5cclxuICAgICAgICAgICAgTWFpblVJLnN0YXJ0UmlnaHRBd2F5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVNjZW5lLnBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5jb250aW51ZVN0cmFraW5nID0gMDtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTY2VuZS5wbGF5ZXIucmFuayA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkubnVtMSArPTE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCLnlKjml7ZcIix0aGlzLmdhbWVTY2VuZS5jbG9jay5jdXJyZW50Q291bnQgLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVTY2VuZS5jbG9jay5jdXJyZW50Q291bnQgLSAxID4gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnRpbWVsaW1pdG51bTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnRpbWVsaW1pdG51bTEgPSB0aGlzLmdhbWVTY2VuZS5jbG9jay5jdXJyZW50Q291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmNvbnRpbnVlU3RyYWtpbmcgKys7XHJcblxyXG4gICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkuY29udGludWVTdHJha2luZyA+IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS5zdHJha2luZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0cmFraW5nID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmNvbnRpbnVlU3RyYWtpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhciA9IDA7XHJcblxyXG4gICAgICAgIHZhciByYW5rOm51bWJlciA9IE1hdGhmLmNsYW1wKHRoaXMuZ2FtZVNjZW5lLnBsYXllci5yYW5rLDEsOCk7XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMucmFua1R4dC5zdHJpbmcgPSBg56ysJHtyYW5rfeWQjWA7XHJcbiAgICAgICAgdGhpcy5yYW5rSW1nLnNwcml0ZUZyYW1lID0gdGhpcy5udW1BcnJbcmFuayAtIDFdO1xyXG4gICAgICAgIHRoaXMucmFua0ltZy5ub2RlLndpZHRoID0gdGhpcy5udW1BcnJbcmFuayAtIDFdLmdldFJlY3QoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnJhbmtJbWcubm9kZS5oZWlnaHQgPSB0aGlzLm51bUFycltyYW5rIC0gMV0uZ2V0UmVjdCgpLmhlaWdodDtcclxuXHJcbiAgICAgICAgdmFyIGxldmVsSWQ6bnVtYmVyID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0TGV2ZWxJZChEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkuc3Rhcik7XHJcbiAgICAgICAgdmFyIHJhbmtEYXRhOkFjY291bnRSYW5rRGF0YSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmFjY291bnRSYW5rQ25mRGF0YXNEaWNbbGV2ZWxJZF1bcmFuayAtIDFdO1xyXG5cclxuICAgICAgICB2YXIgcnc6bnVtYmVyID0gcmFua0RhdGEucmV3YXJkO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXIgKz0gcnc7XHJcblxyXG4gICAgICAgIHRoaXMucmFua1ZhbHVlVHh0LnN0cmluZyA9IHJ3ID49IDAgPyBgKyR7cnd9YCA6IGAke3J3fWA7XHJcbiAgICAgICAgaWYocncgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5rVmFsdWVUeHQubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBraWxsQ291bnQ6bnVtYmVyID0gdGhpcy5nYW1lU2NlbmUucGxheWVyLmtpbGxDb3VudDtcclxuXHJcbiAgICAgICAgdmFyIGtyOm51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmKGtpbGxDb3VudCA8IDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLy0tLS0tLVxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrciA9IGtpbGxDb3VudCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtpbGxUeHQuc3RyaW5nID0gYCR7a2lsbENvdW50fWBcclxuICAgICAgICB0aGlzLmtpbGxWYWx1ZVR4dC5zdHJpbmcgPSBgKyR7a3J9YDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFyICs9IGtyO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsVmFsdWVUeHQuc3RyaW5nID0gdGhpcy5zdGFyID49IDAgPyBgKyR7dGhpcy5zdGFyfWAgOiBgJHt0aGlzLnN0YXJ9YDtcclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy53aW5TdGFyVHh0MS5zdHJpbmcgPSBgKyR7dGhpcy5zdGFyfWA7XHJcbiAgICAgICAgLy90aGlzLndpblN0YXJUeHQyLnN0cmluZyA9IGArJHt0aGlzLnN0YXIgKiAzfWA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhciA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsVmFsdWVUeHQubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVjb3ZlckJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaHVvcXVCdG4yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcChTb3VuZENsaXBUeXBlLmZhaWwpO1xyXG5cclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvdmVyQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaHVvcXVCdG4yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5QXVkaW9DbGlwKFNvdW5kQ2xpcFR5cGUudmljdG9yeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zYXZlUGxheWVyRGF0YSgpO1xyXG5cclxuICAgICAgICB2YXIgbGV2ZWxJZCA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdldExldmVsSWQoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIpO1xyXG4gICAgICAgIHZhciBsZXZlQ25mZGF0YXMgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbENvbmZpZ0RhdGFzO1xyXG5cclxuICAgICAgICBpZihsZXZlbElkID09IGxldmVDbmZkYXRhcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsdmFsdWVUeHQuc3RyaW5nID0gIFwiXCIgKyBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkuc3RhcjtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFByb2dyZXNzLnByb2dyZXNzID0gMTtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWx2YWx1ZVR4dC5zdHJpbmcgPSAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIgKyBcIi9cIiArIGxldmVDbmZkYXRhc1tsZXZlbElkXS5zdGFycztcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFByb2dyZXNzLnByb2dyZXNzID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnN0YXIgLyBsZXZlQ25mZGF0YXNbbGV2ZWxJZF0uc3RhcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxldmVsSWNvbi51cGRhdGVQbGF5ZXJTa2luKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLnNob3dCb3R0b21CYW5uZXIoXCJhZHVuaXQtZDM5NjcyY2E1OWNmMTVhMlwiKTtcclxuXHJcbiAgICAgICAgLy9jYy5sb2coXCJhY2NvdW50IG9wZW5cIix0aGlzLm5vZGUucG9zaXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLnJlbW92ZUJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgLyp1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgfSovXHJcbn1cclxuIl19