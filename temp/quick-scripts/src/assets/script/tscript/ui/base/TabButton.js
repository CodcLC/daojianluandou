"use strict";
cc._RF.push(module, '15064kNii5CiaeP0EhEgt/j', 'TabButton');
// script/tscript/ui/base/TabButton.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabButton = /** @class */ (function (_super) {
    __extends(TabButton, _super);
    function TabButton() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalFrame = null;
        _this.selectedFrame = null;
        _this._selected = false;
        return _this;
        /*start () {
    
        }*/
        // update (dt) {}
    }
    Object.defineProperty(TabButton.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            if (value) {
                //this.node.emit("mousedown",this);
                this.normalFrame.active = false;
                this.selectedFrame.active = true;
            }
            else {
                this.normalFrame.active = true;
                this.selectedFrame.active = false;
            }
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    TabButton.prototype.onLoad = function () {
        //this.selected = false;
    };
    __decorate([
        property(cc.Node)
    ], TabButton.prototype, "normalFrame", void 0);
    __decorate([
        property(cc.Node)
    ], TabButton.prototype, "selectedFrame", void 0);
    __decorate([
        property(cc.Boolean)
    ], TabButton.prototype, "_selected", void 0);
    TabButton = __decorate([
        ccclass
    ], TabButton);
    return TabButton;
}(cc.Component));
exports.default = TabButton;

cc._RF.pop();