"use strict";
cc._RF.push(module, '1de79iLlGBPfIamdZenkimw', 'DuanWei');
// script/tscript/ui/main/DuanWei.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../../core/DataManager");
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
var DuanWei = /** @class */ (function (_super) {
    __extends(DuanWei, _super);
    function DuanWei() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.nameTxt = null;
        _this.valueTxt = null;
        _this.skins = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DuanWei.prototype.start = function () {
        this.showDuanWei();
    };
    DuanWei.prototype.showDuanWei = function () {
        var star = DataManager_1.default.instance.getPlayerData().star;
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas;
        var index = 0;
        if (star >= leveCnfdatas[leveCnfdatas.length - 1].stars) {
            index = leveCnfdatas.length - 1;
        }
        else {
            for (var i = 0; i < leveCnfdatas.length - 1; i++) {
                if (star >= leveCnfdatas[i].stars && star < leveCnfdatas[i + 1].stars) {
                    index = i;
                    break;
                }
            }
        }
        if (index == leveCnfdatas.length - 1) {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string = "" + DataManager_1.default.instance.getPlayerData().star;
            var spriteFrame = this.skins[this.skins.length - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;
        }
        else {
            this.nameTxt.string = leveCnfdatas[index].name;
            this.valueTxt.string = DataManager_1.default.instance.getPlayerData().star + "/" + leveCnfdatas[index + 1].stars;
            var spriteFrame = this.skins[leveCnfdatas[index].id - 1];
            this.icon.spriteFrame = spriteFrame;
            this.icon.node.width = spriteFrame.getOriginalSize().width;
            this.icon.node.height = spriteFrame.getOriginalSize().width;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], DuanWei.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], DuanWei.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], DuanWei.prototype, "valueTxt", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], DuanWei.prototype, "skins", void 0);
    DuanWei = __decorate([
        ccclass
    ], DuanWei);
    return DuanWei;
}(cc.Component));
exports.default = DuanWei;

cc._RF.pop();