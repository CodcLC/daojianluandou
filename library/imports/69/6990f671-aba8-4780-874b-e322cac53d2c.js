"use strict";
cc._RF.push(module, '6990fZxq6hHgIdL4yLKxT0s', 'MessageUI');
// script/tscript/ui/message/MessageUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var SoundClip_1 = require("../../audio/SoundClip");
var SoundManager_1 = require("../../core/SoundManager");
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
var MessageUI = /** @class */ (function (_super) {
    __extends(MessageUI, _super);
    function MessageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.killerNameTxt = null;
        _this.dieManTxt = null;
        _this.jisha = null;
        _this.jishaArr = [];
        _this.bg = null;
        _this.killAcount = null;
        // LIFE-CYCLE CALLBACKS:
        //private killMsgArr:string[] = ["","双杀","三杀","四杀","五杀","六杀","七杀","八杀","九杀","十杀"];
        _this.soundClipTypes = [
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill1,
            SoundClip_1.SoundClipType.kill5,
            SoundClip_1.SoundClipType.kill6,
            SoundClip_1.SoundClipType.kill7
        ];
        return _this;
    }
    //onLoad () {}
    MessageUI.prototype.start = function () {
        //var renderTexture = new cc.RenderTexture()
    };
    // update (dt) {}
    MessageUI.prototype.showMessage = function (killer, dieMan) {
        var _this = this;
        if (killer.isAI)
            return;
        this.unscheduleAllCallbacks();
        this.killerNameTxt.string = killer.getName();
        this.dieManTxt.string = dieMan.getName();
        this.bg.node.color = killer.body.node.color;
        if (!killer.isAI) {
            this.killAcount.active = true;
            this.jisha.spriteFrame = this.jishaArr[killer.killCount - 1];
            SoundManager_1.default.instance.playAudioClip(this.soundClipTypes[killer.killCount - 1]);
        }
        else {
            this.killAcount.active = false;
        }
        this.open();
        this.scheduleOnce(function () {
            _this.close();
        }, 1);
    };
    __decorate([
        property(cc.Label)
    ], MessageUI.prototype, "killerNameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], MessageUI.prototype, "dieManTxt", void 0);
    __decorate([
        property(cc.Sprite)
    ], MessageUI.prototype, "jisha", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MessageUI.prototype, "jishaArr", void 0);
    __decorate([
        property(cc.Sprite)
    ], MessageUI.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], MessageUI.prototype, "killAcount", void 0);
    MessageUI = __decorate([
        ccclass
    ], MessageUI);
    return MessageUI;
}(BaseUI_1.default));
exports.default = MessageUI;

cc._RF.pop();