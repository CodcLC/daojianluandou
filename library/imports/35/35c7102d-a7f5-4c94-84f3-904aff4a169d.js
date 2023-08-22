"use strict";
cc._RF.push(module, '35c71Atp/VMlITzkEr/Shad', 'CustomButton');
// script/tscript/ui/base/CustomButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SoundClip_1 = require("../../audio/SoundClip");
var SoundManager_1 = require("../../core/SoundManager");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CBState;
(function (CBState) {
    CBState[CBState["normal"] = 0] = "normal";
    CBState[CBState["pressed"] = 1] = "pressed";
    CBState[CBState["hover"] = 2] = "hover";
    CBState[CBState["disabled"] = 3] = "disabled";
})(CBState = exports.CBState || (exports.CBState = {}));
var CustomButton = /** @class */ (function (_super) {
    __extends(CustomButton, _super);
    function CustomButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 点击时的播放声音
         */
        _this.clickSound = SoundClip_1.SoundClipType.none;
        /**
         * 正常状态
         */
        _this.normal = null;
        /**
         *  按下状态
         */
        _this.pressed = null;
        /**
         * 划过状态
         */
        _this.hover = null;
        /**
         * 无效状态
         */
        _this.disabled = null;
        _this._state = CBState.normal;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(CustomButton.prototype, "sprite", {
        get: function () {
            if (!this._sprite) {
                this._sprite = this.getComponent(cc.Sprite);
            }
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this.sprite && this[CBState[value]]) {
                this.sprite.spriteFrame = this[CBState[value]];
            }
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomButton.prototype.onLoad = function () {
        this.init();
    };
    /*start () {

    }*/
    CustomButton.prototype.init = function () {
        var _this = this;
        this.state = CBState.normal;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.state == CBState.disabled)
                return;
            SoundManager_1.default.instance.playAudioClip(_this.clickSound);
            _this.state = CBState.pressed;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.hover;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.hover;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
    };
    __decorate([
        property({ type: cc.Enum(SoundClip_1.SoundClipType) })
    ], CustomButton.prototype, "clickSound", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "normal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "pressed", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "hover", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "disabled", void 0);
    CustomButton = __decorate([
        ccclass
    ], CustomButton);
    return CustomButton;
}(cc.Component));
exports.default = CustomButton;

cc._RF.pop();