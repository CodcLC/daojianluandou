"use strict";
cc._RF.push(module, 'ffa54D2yqNEcZ2pIBowdJyx', 'Main');
// script/tscript/Main.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./core/DataManager");
var GameManager_1 = require("./core/GameManager");
var WXSdk_1 = require("./wx/WXSdk");
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
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.bgcion = null;
        _this.bg1 = null;
        _this.bg2 = null;
        _this.onloadConfigDatas = function () {
            this.gameMagr.init();
            this.canvas.active = true;
            //SoundManager.instance.PlayBGSound(BgSoundClipType.main);
            this.loginWx();
        }.bind(_this);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Main.prototype.onLoad = function () {
        window.main = this;
        cc.game.setFrameRate(60);
        this.gameMagr = this.canvas.getComponent(GameManager_1.default);
        this.canvas.active = false;
        DataManager_1.default.instance.loadConfigDatas(this.onloadConfigDatas);
        this.randombg();
    };
    Main.prototype.loginWx = function () {
        var _this = this;
        WXSdk_1.default.instance.login("ss", "ss", function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                cc.log("微信登录成功");
                console.log("发送微信事件");
                var baseData = {
                    name: "init",
                    levelConfigDatas: DataManager_1.default.instance.levelConfigDatas
                };
                WXSdk_1.default.instance.wx.postMessage(baseData); //向开发数据域发送初始数据
                cc.systemEvent.emit("wxLogin");
                WXSdk_1.default.instance.wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        }, function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                cc.log("微信登录失败");
                _this.showModal();
            }
        });
    };
    Main.prototype.showModal = function () {
        var _this = this;
        WXSdk_1.default.instance.wx.showModal({
            title: '异常',
            showCancel: false,
            confirmText: "重试",
            content: '游戏登录失败，请重试',
            success: function (res) {
                if (res.confirm) {
                    _this.loginWx();
                }
                else {
                    _this.loginWx();
                }
            }
        });
    };
    Main.prototype.start = function () {
    };
    Main.prototype.randombg = function () {
        if (Math.random() > 0.5) {
            this.bgcion.spriteFrame = this.bg2;
        }
        else {
            this.bgcion.spriteFrame = this.bg1;
        }
    };
    __decorate([
        property(cc.Node)
    ], Main.prototype, "canvas", void 0);
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "bgcion", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "bg1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "bg2", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();