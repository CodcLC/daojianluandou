"use strict";
cc._RF.push(module, '5449f0wN5pH8aXxO522sGOD', 'LevelMessageUI');
// script/tscript/ui/main/LevelMessageUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelIcon_1 = require("./LevelIcon");
var BaseUI_1 = require("../base/BaseUI");
var DataManager_1 = require("../../core/DataManager");
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
var ContentType;
(function (ContentType) {
    ContentType[ContentType["none"] = 0] = "none";
    ContentType[ContentType["fhl"] = 1] = "fhl";
    ContentType[ContentType["rocket"] = 2] = "rocket";
    ContentType[ContentType["magnet"] = 3] = "magnet";
    ContentType[ContentType["blackHole"] = 10] = "blackHole";
    ContentType[ContentType["staticMeteor"] = 11] = "staticMeteor";
    ContentType[ContentType["moveMeteor"] = 12] = "moveMeteor";
    ContentType[ContentType["other"] = 100] = "other";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var LevelMessageUI = /** @class */ (function (_super) {
    __extends(LevelMessageUI, _super);
    function LevelMessageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.touchPlane = null;
        _this.title = null;
        _this.levelIcon = null;
        _this.contentIcon = null;
        _this.leftBtn = null;
        _this.rightBtn = null;
        _this.unlockTxt = null;
        _this.detailTxt = null;
        _this.contentImgArr = [];
        _this.contentIndex = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    LevelMessageUI.prototype.onLoad = function () {
        var _this = this;
        this.basePos = this.node.position;
        this.scheduleOnce(function () {
            _this.close();
        }, 0.01);
    };
    LevelMessageUI.prototype.start = function () {
        var _this = this;
        var contentLen = DataManager_1.default.instance.ctlevelConfigDatas.length;
        this.touchPlane.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.close();
        }, this);
        this.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.contentIndex = Mathf_1.default.clamp(_this.contentIndex - 1, 0, contentLen - 1);
            _this.showMsg();
        }, this);
        this.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.contentIndex = Mathf_1.default.clamp(_this.contentIndex + 1, 0, contentLen - 1);
            _this.showMsg();
        }, this);
        var level = DataManager_1.default.instance.getLevel(DataManager_1.default.instance.getPlayerData().star);
        this.contentIndex = level - 1;
    };
    LevelMessageUI.prototype.showMsg = function () {
        var levelcnfdata = DataManager_1.default.instance.ctlevelConfigDatas[this.contentIndex];
        this.levelIcon.updateSkin(levelcnfdata.id, false);
        this.unlockTxt.string = "\u83B7\u5F97" + levelcnfdata.stars + "\u661F\u89E3\u9501";
        this.detailTxt.string = levelcnfdata.newContent;
        if (levelcnfdata.contentType == 100) {
            this.title.active = false;
            this.detailTxt.node.x = 110;
            this.detailTxt.node.y = -18;
        }
        else {
            this.title.active = true;
            this.detailTxt.node.x = 158;
            this.detailTxt.node.y = -43;
        }
        this.contentIcon.spriteFrame = this.contentImgArr[levelcnfdata.contentType];
    };
    // update (dt) {}
    LevelMessageUI.prototype.open = function () {
        _super.prototype.open.call(this);
        this.touchPlane.active = true;
        this.panel.stopAllActions();
        this.panel.y = -250;
        this.panel.runAction(cc.moveTo(0.65, 0, 0).easing(cc.easeCubicActionOut()));
        this.showMsg();
    };
    LevelMessageUI.prototype.close = function () {
        var _this = this;
        this.panel.stopAllActions();
        this.touchPlane.active = false;
        //super.close();
        var seq = cc.sequence(cc.moveTo(0.65, 0, -250).easing(cc.easeCubicActionOut()), cc.callFunc(function () {
            _super.prototype.close.call(_this);
        }, this));
        this.panel.runAction(seq);
    };
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "panel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "touchPlane", void 0);
    __decorate([
        property(cc.Node)
    ], LevelMessageUI.prototype, "title", void 0);
    __decorate([
        property(LevelIcon_1.default)
    ], LevelMessageUI.prototype, "levelIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], LevelMessageUI.prototype, "contentIcon", void 0);
    __decorate([
        property(cc.Button)
    ], LevelMessageUI.prototype, "leftBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LevelMessageUI.prototype, "rightBtn", void 0);
    __decorate([
        property(cc.Label)
    ], LevelMessageUI.prototype, "unlockTxt", void 0);
    __decorate([
        property(cc.Label)
    ], LevelMessageUI.prototype, "detailTxt", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelMessageUI.prototype, "contentImgArr", void 0);
    LevelMessageUI = __decorate([
        ccclass
    ], LevelMessageUI);
    return LevelMessageUI;
}(BaseUI_1.default));
exports.default = LevelMessageUI;

cc._RF.pop();