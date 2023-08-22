"use strict";
cc._RF.push(module, '7d93diVFzZAVp3APNl+nI+9', 'TabSelectView');
// script/tscript/ui/base/TabSelectView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SelectView_1 = require("./SelectView");
var TabButton_1 = require("./TabButton");
var View_1 = require("./View");
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
var TabSelectView = /** @class */ (function (_super) {
    __extends(TabSelectView, _super);
    function TabSelectView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabBtns = [];
        _this.selevtViews = [];
        _this.showView = null;
        return _this;
        // update (dt) {}
    }
    TabSelectView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.tabBtns.length; i++) {
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_START, function (event) {
                //SoundManager.instance.playAudioClip(SoundClipType.click);
            }, this);
            this.tabBtns[i].node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this);
        }
        this.selectTab(0);
    };
    TabSelectView.prototype.open = function () {
        _super.prototype.open.call(this);
        if (this.currentView) {
            this.currentView.awake();
        }
    };
    TabSelectView.prototype.close = function () {
        _super.prototype.close.call(this);
        if (this.currentView) {
            this.currentView.sleep();
        }
    };
    TabSelectView.prototype.selectTab = function (index) {
        if (index === void 0) { index = -1; }
        for (var i = 0; i < this.tabBtns.length; i++) {
            if (i != index) {
                if (this.tabBtns[i].selected) {
                    this.tabBtns[i].selected = false;
                }
            }
            else {
                if (!this.tabBtns[i].selected) {
                    this.tabBtns[i].selected = true;
                    if (this.currentView) {
                        this.currentView.sleep();
                    }
                    this.currentView = this.selevtViews[i];
                    this.currentView.node.setParent(this.showView);
                    this.currentView.node.position = cc.Vec2.ZERO;
                    this.currentView.awake();
                }
            }
        }
    };
    TabSelectView.prototype.onTouchUp = function (event) {
        var btnNode = event.currentTarget;
        var index = this.tabBtns.indexOf(btnNode.getComponent(TabButton_1.default));
        this.selectTab(index);
    };
    __decorate([
        property(TabButton_1.default)
    ], TabSelectView.prototype, "tabBtns", void 0);
    __decorate([
        property(SelectView_1.default)
    ], TabSelectView.prototype, "selevtViews", void 0);
    __decorate([
        property(cc.Node)
    ], TabSelectView.prototype, "showView", void 0);
    TabSelectView = __decorate([
        ccclass
    ], TabSelectView);
    return TabSelectView;
}(View_1.default));
exports.default = TabSelectView;

cc._RF.pop();