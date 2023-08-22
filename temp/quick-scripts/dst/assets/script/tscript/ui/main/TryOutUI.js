
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/TryOutUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcVHJ5T3V0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyx3Q0FBbUM7QUFDbkMsMENBQXFDO0FBQ3JDLHNEQUFpRDtBQUNqRCxzREFBaUQ7QUFDakQsNENBQXVDO0FBQ3ZDLDBDQUFxQztBQUNyQyx1REFBa0Q7QUFDbEQsbUNBQThCO0FBQzlCLDBDQUFxQztBQUVyQyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUVsQiwyQ0FBUSxDQUFBO0lBQ1IsMkNBQVEsQ0FBQTtJQUNSLHlDQUFPLENBQUE7SUFDUCwrQ0FBVSxDQUFBO0lBQ1YsK0NBQVUsQ0FBQTtBQUVkLENBQUMsRUFSVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVFyQjtBQUdEO0lBQXNDLDRCQUFNO0lBRDVDO1FBQUEscUVBOFFDO1FBelFVLGdCQUFVLEdBQWMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUd4QyxxQkFBZSxHQUFjLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFHcEQsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixXQUFLLEdB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Q0FBQzs0Q0FDVztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNVO0lBM0NsQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNlE1QjtJQUFELGVBQUM7Q0E3UUQsQUE2UUMsQ0E3UXFDLGdCQUFNLEdBNlEzQztrQkE3UW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9iYXNlL0Jhc2VVSVwiO1xyXG5pbXBvcnQgV1hTZGsgZnJvbSBcIi4uLy4uL3d4L1dYU2RrXCI7XHJcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vLi4vdXRpbC9DbG9ja1wiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uLy4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuLi8uLi9nYW1lc2NlbmUvR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBNYWluVUkgZnJvbSBcIi4vTWFpblVJXCI7XHJcbmltcG9ydCBNYXRoZiBmcm9tIFwiLi4vLi4vdXRpbC9NYXRoZlwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBSZXdhcmRUeXBlXHJcbntcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgZmFjZSA9IDEsXHJcbiAgICBrZjYgPSAyLFxyXG4gICAga2Zza2luID0gMyxcclxuICAgIHJvY2tldCA9IDQsXHJcblxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnlPdXRVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5FbnVtKFJld2FyZFR5cGUpfSlcclxuICAgIHB1YmxpYyByZXdhcmRUeXBlOlJld2FyZFR5cGUgPSBSZXdhcmRUeXBlLm5vbmU7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkVudW0oUmV3YXJkVHlwZSl9KVxyXG4gICAgcHVibGljIG90aGVyUmV3YXJkVHlwZTpSZXdhcmRUeXBlID0gUmV3YXJkVHlwZS5ub25lO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICB0dXJuYmFja0J0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgdXNlQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJld2FyZFR4dDE6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZXdhcmRUeHQyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdXNlVHh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGxldmVsSW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICByZXdhcmRJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBsaWdodEltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgY2RJbWc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHVibGljIGNkSW1nQXJyOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgZmFjZVNGOmNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMga2Y2U0Y6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBrZklkOm51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU2NlbmU6R2FtZVNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY2xvc2VDYWxsYmFjazpGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsb29raW5nVmlkaW86Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBwdWJsaWMgb25Mb2FkICgpIFxyXG4gICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tSZXdhcmQoKTtcclxuICAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmxpZ2h0SW1nLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZUJ5KDMuNiwzNjApLnJlcGVhdEZvcmV2ZXIoKSk7XHJcblxyXG4gICAgICAgIHRoaXMudHVybmJhY2tCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKGV2ZW50KT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlQnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9XWFNkay5pbnN0YW5jZS5zaGFyZVRvQW55T25lKCgpPT57fSwoKT0+e30pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb29raW5nVmlkaW8gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uuc2hvd1ZpZGVvKE1haW5VSS5zdGFydFJpZ2h0QXdheSA/IFwiYWR1bml0LTgyYzBlMzE1ODM5Njc4NDhcIiA6IFwiYWR1bml0LTRmY2UyNzBkZTc4ZjkzYTBcIixcclxuICAgICAgICAgICAgKGNsb3NlU3RhdGU6bnVtYmVyKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9va2luZ1ZpZGlvID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2xvc2VTdGF0ZSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5yZXdhcmRUeXBlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5mYWNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF5ZXJEYXRhKCkudG9kYXlVc2VGYWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZUxldmVsRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuc2hvd2ZhY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFJld2FyZFR5cGUua2Y2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuaW5pdEtuaWZlKDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFJld2FyZFR5cGUua2Zza2luOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLm1haW5VSS5zZWxlY3RLbmlmZSh0aGlzLmtmSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMub3RoZXJSZXdhcmRUeXBlKVxyXG4gICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFJld2FyZFR5cGUua2Y2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS5wbGF5ZXIuaW5pdEtuaWZlKDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFJld2FyZFR5cGUucm9ja2V0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUucGxheWVyLnJvY2tldEl0ZW1FZmZlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgcHJpdmF0ZSBjaGVja1Jld2FyZCgpXHJcbiAgICAge1xyXG4gICAgICAgIHRoaXMucmV3YXJkVHlwZSA9IFJld2FyZFR5cGUubm9uZTtcclxuXHJcbiAgICAgICAgdmFyIGdhbWVUaW1lczpudW1iZXIgPSBHYW1lTWFuYWdlci5nYW1lVGltZXM7XHJcblxyXG4gICAgICAgIGlmKGdhbWVUaW1lcyA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIURhdGFNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXllckRhdGEoKS50b2RheVVzZUZhY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkVHlwZSA9IFJld2FyZFR5cGUuZmFjZTtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRUeXBlID0gUmV3YXJkVHlwZS5rZjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihnYW1lVGltZXMgPiAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZ2FtZVRpbWVzICUgMiA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihnYW1lVGltZXMgJSA0ID09IDMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpYdcclxuICAgICAgICAgICAgICAgICAgICBpZighRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLnRvZGF5VXNlRmFjZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkVHlwZSA9IFJld2FyZFR5cGUuZmFjZTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRUeXBlID0gUmV3YXJkVHlwZS5rZjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WBtlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkVHlwZSA9IFJld2FyZFR5cGUua2Zza2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMucmV3YXJkVHlwZSA9IFJld2FyZFR5cGUuZmFjZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5yZXdhcmRUeXBlID09IFJld2FyZFR5cGUubm9uZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMucmV3YXJkVHlwZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBSZXdhcmRUeXBlLmZhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5mYWNlU0Y7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRUeHQxLnN0cmluZyA9IFwi5YWN6LS55LuK5pel6KGo5oOFXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlclJld2FyZFR5cGUgPSBSZXdhcmRUeXBlLmtmNjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5rZjY6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5rZjZTRjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZFR4dDEuc3RyaW5nID0gXCLlvIDlsYA25oqK5YiAXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlclJld2FyZFR5cGUgPSBSZXdhcmRUeXBlLnJvY2tldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5rZnNraW46XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJld2FyZEljb24uc3ByaXRlRnJhbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtmSWQgPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKDExLDI2KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZEljb24uc3ByaXRlRnJhbWUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5kYW9JbWdzW3RoaXMua2ZJZCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZFR4dDEuc3RyaW5nID0gXCLlhY3otLnor5XnlKjpo57liIDnmq7ogqRcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyUmV3YXJkVHlwZSA9IE1hdGhmLnByb2JhYmlsaXR5KDAuNSkgPyBSZXdhcmRUeXBlLmtmNiA6IFJld2FyZFR5cGUucm9ja2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5vdGhlclJld2FyZFR5cGUpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFJld2FyZFR5cGUua2Y2OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkVHh0Mi5zdHJpbmcgPSBcIumZhOi1oO+8muW8gOWxgDbmiorliIBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUmV3YXJkVHlwZS5yb2NrZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRUeHQyLnN0cmluZyA9IFwi6ZmE6LWg77ya5byA5bGA5Yqg6YCfXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRJY29uLm5vZGUud2lkdGggPSB0aGlzLnJld2FyZEljb24uc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZEljb24ubm9kZS5oZWlnaHQgPSB0aGlzLnJld2FyZEljb24uc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLmhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgICAgIH0sMC4wNSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZSgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmNkSW1nLmdldENvbXBvbmVudChDbG9jaykuU3RvcCgpO1xyXG5cclxuICAgICAgICBpZighdGhpcy5sb29raW5nVmlkaW8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLnJlbW92ZUJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb3BlbigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG5cclxuICAgICAgICBXWFNkay5pbnN0YW5jZS5zaG93Qm90dG9tQmFubmVyKFwiYWR1bml0LWQzOTY3MmNhNTljZjE1YTJcIik7XHJcblxyXG4gICAgICAgIHZhciBjbG9jazpDbG9jayA9IHRoaXMuY2RJbWcuZ2V0Q29tcG9uZW50KENsb2NrKTtcclxuICAgICAgICBjbG9jay5SZXNldCgpO1xyXG4gICAgICAgIGNsb2NrLnRpbWVMZW5ndGggPSA2O1xyXG4gICAgICAgIGNsb2NrLlBsYXkoKHMsbSxoLHN0cix0KT0+e1xyXG5cclxuICAgICAgICAgICAgaWYodCA8PSA1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkSW1nLnNwcml0ZUZyYW1lID0gdGhpcy5jZEltZ0Fyclt0IC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwoKT0+e1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=