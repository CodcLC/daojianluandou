"use strict";
cc._RF.push(module, 'bd1b5wmfrVFRaC+JmCerd3a', 'MatchingUI');
// script/tscript/ui/main/MatchingUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var Random_1 = require("../../util/Random");
var GameManager_1 = require("../../core/GameManager");
var GameScene_1 = require("../../gamescene/GameScene");
var ResourcesManager_1 = require("../../core/ResourcesManager");
var DataManager_1 = require("../../core/DataManager");
var WXSdk_1 = require("../../wx/WXSdk");
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
var MatchingUI = /** @class */ (function (_super) {
    __extends(MatchingUI, _super);
    function MatchingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherUsers = [];
        _this.dotArr = [];
        _this.radius = 220;
        _this.gameSceme = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MatchingUI.prototype.start = function () {
        var _this = this;
        this.gameSceme = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        var angle = 2 * Math.PI / this.otherUsers.length;
        var idArr = [];
        for (var i = 1; i < this.otherUsers.length; i++) {
            var node = this.otherUsers[i];
            node.active = false;
        }
        for (var i = 1; i <= 50; i++) {
            idArr.push(i);
        }
        this.scheduleOnce(function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                if (WXSdk_1.default.instance.isLogin) {
                    _this.onWxLogin();
                }
                else {
                    cc.systemEvent.on("wxLogin", _this.onWxLogin, _this);
                }
            }
            var _loop_1 = function () {
                var node = _this.otherUsers[i];
                node.active = false;
                var id = _this.gameSceme.aiNameIndexArr[i - 1];
                ResourcesManager_1.default.instance.load("headIcon/" + id, function (spriteFrame) {
                    if (spriteFrame) {
                        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    node.getChildByName("NameTxt").getComponent(cc.Label).string = DataManager_1.default.instance.nameConfigDatas[id].name;
                }, cc.SpriteFrame, false, false);
            };
            for (var i = 1; i < _this.otherUsers.length; i++) {
                _loop_1();
            }
        }, 0.1);
    };
    MatchingUI.prototype.open = function () {
        var _this = this;
        _super.prototype.open.call(this);
        var t = Random_1.default.Range(2.5, 4.8);
        this.scheduleOnce(function () {
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).startGame();
            _this.close();
        }, t + 1.5);
        var n = this.otherUsers.length + Random_1.default.RangeInteger(2, 8);
        var idArr = [];
        for (var i = 0; i < n; i++) {
            idArr.push(i);
        }
        this.schedule(function () {
            var index = Random_1.default.RangeInteger(0, idArr.length);
            var id = idArr[index];
            if (_this.otherUsers[id]) {
                _this.otherUsers[id].active = true;
            }
            idArr.splice(index, 1);
        }, t / n, n - 1);
        for (var j = 0; j < this.dotArr.length; j++) {
            this.dotArr[j].active = false;
        }
        var i = 0;
        this.schedule(function () {
            for (var j = 0; j < _this.dotArr.length; j++) {
                _this.dotArr[j].active = (j < i);
            }
            i++;
            i %= _this.dotArr.length + 1;
        }, 0.25, 20);
    };
    MatchingUI.prototype.onWxLogin = function () {
        var _this = this;
        this.otherUsers[0].active = false;
        WXSdk_1.default.instance.getUserIcon(function (texture) {
            _this.otherUsers[0].active = true;
            var headIcon = _this.otherUsers[0].getChildByName("Mask").getChildByName("HeadIcon").getComponent(cc.Sprite);
            headIcon.spriteFrame = new cc.SpriteFrame(texture);
            _this.otherUsers[0].getChildByName("NameTxt").getComponent(cc.Label).string = WXSdk_1.default.instance.nickname;
        }, 64);
    };
    MatchingUI.prototype.onDestroy = function () {
        cc.systemEvent.off("wxLogin", this.onWxLogin, this);
    };
    __decorate([
        property(cc.Node)
    ], MatchingUI.prototype, "otherUsers", void 0);
    __decorate([
        property(cc.Node)
    ], MatchingUI.prototype, "dotArr", void 0);
    __decorate([
        property
    ], MatchingUI.prototype, "radius", void 0);
    MatchingUI = __decorate([
        ccclass
    ], MatchingUI);
    return MatchingUI;
}(BaseUI_1.default));
exports.default = MatchingUI;

cc._RF.pop();