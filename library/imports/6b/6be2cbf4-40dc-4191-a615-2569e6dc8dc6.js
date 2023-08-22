"use strict";
cc._RF.push(module, '6be2cv0QNxBkaYVJWnm3I3G', 'UpgradeUI');
// script/tscript/ui/main/UpgradeUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var WXSdk_1 = require("../../wx/WXSdk");
var LevelIcon_1 = require("./LevelIcon");
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
var UpgradeUI = /** @class */ (function (_super) {
    __extends(UpgradeUI, _super);
    function UpgradeUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnbackBtn = null;
        _this.showBtn = null;
        _this.recoverBtn = null;
        _this.title = null;
        _this.titleSkins = [];
        _this.levelIcon = null;
        _this.iconSkins = [];
        _this.onExit = null;
        _this.onRecover = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UpgradeUI.prototype.start = function () {
        var _this = this;
        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.close();
            _this.onExit && _this.onExit();
        }, this);
        this.showBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () {
                _this.close();
                _this.onExit && _this.onExit();
            }, function () { });
        }, this);
        this.recoverBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () {
                _this.close();
                _this.onRecover && _this.onRecover();
            }, function () { });
        }, this);
    };
    // update (dt) {}
    UpgradeUI.prototype.open = function () {
        _super.prototype.open.call(this);
        WXSdk_1.default.instance.showBottomBanner("adunit-d39672ca59cf15a2");
    };
    UpgradeUI.prototype.close = function () {
        _super.prototype.close.call(this);
        WXSdk_1.default.instance.removeBanner();
    };
    UpgradeUI.prototype.showUpgrade = function (levelId, up) {
        this.levelIcon.updateSkin(levelId);
        if (up) {
            this.showBtn.node.active = true;
            this.recoverBtn.node.active = false;
            this.title.spriteFrame = this.titleSkins[0];
        }
        else {
            this.showBtn.node.active = false;
            this.recoverBtn.node.active = true;
            this.title.spriteFrame = this.titleSkins[1];
        }
    };
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "turnbackBtn", void 0);
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Button)
    ], UpgradeUI.prototype, "recoverBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], UpgradeUI.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], UpgradeUI.prototype, "titleSkins", void 0);
    __decorate([
        property(LevelIcon_1.default)
    ], UpgradeUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], UpgradeUI.prototype, "iconSkins", void 0);
    UpgradeUI = __decorate([
        ccclass
    ], UpgradeUI);
    return UpgradeUI;
}(BaseUI_1.default));
exports.default = UpgradeUI;

cc._RF.pop();