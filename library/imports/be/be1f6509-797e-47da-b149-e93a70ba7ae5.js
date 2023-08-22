"use strict";
cc._RF.push(module, 'be1f6UJeX5H2rFJ6Tpwunrl', 'View');
// script/tscript/ui/base/View.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../UIManager");
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
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.onLoad = function () {
        var _this = this;
        var closeBtn = this.node.getChildByName("Win").getChildByName("CloseBtn");
        if (closeBtn) {
            closeBtn.on(cc.Node.EventType.TOUCH_START, function (event) {
                //SoundManager.instance.playAudioClip(SoundClipType.click);
                UIManager_1.default.instance.closeView(_this.node.name, false);
            }, this);
        }
        //var obj{hh:"dd",fg:5645}
    };
    /*start () {

    }*/
    // update (dt) {}
    View.prototype.open = function () {
        this.node.active = true;
    };
    View.prototype.close = function () {
        this.node.x = 2500;
        this.node.active = false;
    };
    View.prototype.destroySelf = function () {
        this.node.destroy();
    };
    View = __decorate([
        ccclass
    ], View);
    return View;
}(cc.Component));
exports.default = View;

cc._RF.pop();