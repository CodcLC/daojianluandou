"use strict";
cc._RF.push(module, '8a516H4mcJAb7hInBhucHS5', 'LevelIcon');
// script/tscript/ui/main/LevelIcon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../../core/DataManager");
var GameManager_1 = require("../../core/GameManager");
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
var LevelIcon = /** @class */ (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.uplevel = null;
        _this.upelementArr = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LevelIcon.prototype.start = function () {
    };
    LevelIcon.prototype.updatePlayerSkin = function () {
        var levelId = DataManager_1.default.instance.getLevelId(DataManager_1.default.instance.getPlayerData().star);
        this.updateSkin(levelId);
    };
    LevelIcon.prototype.updateSkin = function (levelId, showup) {
        if (showup === void 0) { showup = true; }
        var leveCnfdatas = DataManager_1.default.instance.levelConfigDatas[levelId - 1];
        var spriteFrame = GameManager_1.default.instance.levelImgs[leveCnfdatas.level - 1];
        this.icon.spriteFrame = spriteFrame;
        this.icon.node.width = spriteFrame.getRect().width;
        this.icon.node.height = spriteFrame.getRect().height;
        if (!showup) {
            this.uplevel.active = false;
            return;
        }
        if (leveCnfdatas.uplevel == 0) {
            this.uplevel.active = false;
        }
        else {
            this.uplevel.active = true;
            for (var i = 0; i < this.upelementArr.length; i++) {
                if (i < leveCnfdatas.uplevel) {
                    this.upelementArr[i].getChildByName("upstate").active = true;
                }
                else {
                    this.upelementArr[i].getChildByName("upstate").active = false;
                }
            }
        }
    };
    __decorate([
        property(cc.Sprite)
    ], LevelIcon.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], LevelIcon.prototype, "uplevel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelIcon.prototype, "upelementArr", void 0);
    LevelIcon = __decorate([
        ccclass
    ], LevelIcon);
    return LevelIcon;
}(cc.Component));
exports.default = LevelIcon;

cc._RF.pop();