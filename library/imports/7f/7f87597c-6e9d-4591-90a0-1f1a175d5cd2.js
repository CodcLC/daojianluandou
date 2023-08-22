"use strict";
cc._RF.push(module, '7f875l8bp1FkZCgHxoXXVzS', 'WXOpenDataUI');
// script/tscript/ui/main/WXOpenDataUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
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
var WXOpenDataUI = /** @class */ (function (_super) {
    __extends(WXOpenDataUI, _super);
    function WXOpenDataUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnbackBtn = null;
        _this.shareBtn = null;
        _this.openDataCanvasDisPlay = null;
        _this.shareBtnSkinArr = [];
        _this.shareIndex = 1;
        _this.showOpenData = false;
        _this.tex = new cc.Texture2D();
        _this.wxSubContext = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    WXOpenDataUI.prototype.start = function () {
        var _this = this;
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            this.node.active = false;
            return;
        }
        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.closeOpenDataField();
        }, this);
        this.shareBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () { }, function () { });
        }, this);
        this.wxSubContext = this.getComponent(cc.WXSubContextView);
        this.openDataCanvasDisPlay = this.getComponent(cc.Sprite);
        //this.wxSubContext.enabled = false;
        //this.wxSubContext.updateSubContextViewport();
        this.updateOpenDataCanvas();
        if (!this.showOpenData) {
            this.node.active = false;
        }
        cc.systemEvent.on("shareTicketUpdate", this.onShareTicketUpdate, this);
    };
    WXOpenDataUI.prototype.onShareTicketUpdate = function () {
        if (!this.showOpenData)
            return;
        if (WXSdk_1.default.instance.shareTicket != "") {
            this.openGroupRankUI();
        }
    };
    WXOpenDataUI.prototype.onDestroy = function () {
        cc.systemEvent.off("shareTicketUpdate", this.onShareTicketUpdate, this);
    };
    // update (dt) {}
    WXOpenDataUI.prototype.update = function (dt) {
        if (this.showOpenData) {
            this.updateOpenDataCanvas();
        }
    };
    WXOpenDataUI.prototype.updateOpenDataCanvas = function () {
        this.tex.initWithElement(WXSdk_1.default.instance.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.openDataCanvasDisPlay.spriteFrame.setTexture(this.tex);
        //this.openDataCanvasDisPlay.spriteFrame = new cc.SpriteFrame(this.tex);
    };
    /**
     * 显示开发数据域
     */
    WXOpenDataUI.prototype.showOpenDataField = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        this.showOpenData = true;
        this.node.active = true;
        //this.wxSubContext.enabled = true;
        //(this.wxSubContext["update"] as Function)();
    };
    WXOpenDataUI.prototype.openRankUI = function () {
        var _this = this;
        if (WXSdk_1.default.instance.shareTicket != "") {
            this.openGroupRankUI();
        }
        else {
            WXSdk_1.default.instance.getUserScoreWorldRank(function (data) {
                _this.openWorldRankUI(data);
            }, function () { });
            //this.openFriendRankUI();
        }
    };
    /**
     * 打开好友排行榜
     */
    WXOpenDataUI.prototype.openFriendRankUI = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 1;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "friend" });
    };
    /**
     * 打开群排行榜
     */
    WXOpenDataUI.prototype.openGroupRankUI = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 2;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "group", shareTicket: WXSdk_1.default.instance.shareTicket });
    };
    /**
     * 打开世界排行榜
     */
    WXOpenDataUI.prototype.openWorldRankUI = function (rankData) {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 3;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "world", rankData: rankData });
    };
    /**
     * 关闭开放数据域
     */
    WXOpenDataUI.prototype.closeOpenDataField = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.showOpenData = false;
        this.node.active = false;
        WXSdk_1.default.instance.wx.postMessage({ name: "close" });
        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        //this.wxSubContext.enabled = false;
        //(this.wxSubContext["update"] as Function)();
    };
    __decorate([
        property(cc.Button)
    ], WXOpenDataUI.prototype, "turnbackBtn", void 0);
    __decorate([
        property(cc.Button)
    ], WXOpenDataUI.prototype, "shareBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], WXOpenDataUI.prototype, "openDataCanvasDisPlay", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], WXOpenDataUI.prototype, "shareBtnSkinArr", void 0);
    WXOpenDataUI = __decorate([
        ccclass
    ], WXOpenDataUI);
    return WXOpenDataUI;
}(cc.Component));
exports.default = WXOpenDataUI;

cc._RF.pop();