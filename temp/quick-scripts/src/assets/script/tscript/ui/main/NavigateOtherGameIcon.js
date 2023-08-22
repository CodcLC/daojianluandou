"use strict";
cc._RF.push(module, '3fd23EnIfpJR4hWqNwgO2hQ', 'NavigateOtherGameIcon');
// script/tscript/ui/main/NavigateOtherGameIcon.ts

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
var NavigateOtherGameIcon = /** @class */ (function (_super) {
    __extends(NavigateOtherGameIcon, _super);
    function NavigateOtherGameIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameIcon = null;
        _this.gameIconImgArr = [];
        _this.iconIndex = 0;
        _this.appIdArr = ["wx1b0de075c16e0e29"];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NavigateOtherGameIcon.prototype.start = function () {
        //"navigateToMiniProgramAppIdList": ["wx1b0de075c16e0e29"]
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (!WXSdk_1.default.instance.isWXPlatform())
                return;
            WXSdk_1.default.instance.wx.navigateToMiniProgram({
                appId: _this.appIdArr[_this.iconIndex],
                //path: 'page/index/index?from=xqfd',
                extraData: {
                    from: 'xqfd_dzz'
                },
                //envVersion: 'release',//release develop trial
                success: function (res) {
                    // 打开成功
                }
            });
        }, this);
        this.schedule(function () {
            _this.iconIndex++;
            _this.iconIndex %= _this.gameIconImgArr.length;
            _this.gameIcon.spriteFrame = _this.gameIconImgArr[_this.iconIndex];
            //this.addknifeBtn.node.position = cc.v2(-200,0);
            //this.addknifeBtn.node.runAction(cc.moveTo(0.25,0,0));
        }, 3.2);
    };
    __decorate([
        property(cc.Sprite)
    ], NavigateOtherGameIcon.prototype, "gameIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NavigateOtherGameIcon.prototype, "gameIconImgArr", void 0);
    NavigateOtherGameIcon = __decorate([
        ccclass
    ], NavigateOtherGameIcon);
    return NavigateOtherGameIcon;
}(cc.Component));
exports.default = NavigateOtherGameIcon;

cc._RF.pop();