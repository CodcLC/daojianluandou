"use strict";
cc._RF.push(module, '8069eAiwitAFqEk/ApiAoTv', 'Guide');
// script/tscript/gamescene/Guide.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MovieClip_1 = require("../util/MovieClip");
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
var Guide = /** @class */ (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msgTxt = null;
        _this.guideMovieClip = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Guide.prototype.start = function () {
        this.node.position = cc.Vec2.ZERO;
        this.guideMovieClip.node.active = false;
        var self = this;
        this.scheduleOnce(function () {
            self.guideMovieClip.node.active = true;
            self.scheduleOnce(function () {
                self.guideMovieClip.node.destroy();
            }, 5);
        }, 1.0);
        this.msgTxt.string = "";
        var i = 0;
        var msgsArr = ["松开手指龟缩防御", "按住屏幕移动捡刀", "攻击敌人圆心"];
        this.schedule(function () {
            if (i < msgsArr.length) {
                self.msgTxt.string = msgsArr[i];
            }
            else {
                self.node.destroy();
            }
            i++;
        }, 4, 3);
    };
    Guide.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], Guide.prototype, "msgTxt", void 0);
    __decorate([
        property(MovieClip_1.default)
    ], Guide.prototype, "guideMovieClip", void 0);
    Guide = __decorate([
        ccclass
    ], Guide);
    return Guide;
}(cc.Component));
exports.default = Guide;

cc._RF.pop();