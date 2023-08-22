"use strict";
cc._RF.push(module, 'fec21c2Ce1BMaGT8QgDMifw', 'WXRank');
// script/tscript/wx/WXRank.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WXRank = /** @class */ (function (_super) {
    __extends(WXRank, _super);
    function WXRank() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.label = null;
        _this_1.text = 'hello';
        _this_1.shareTime = 0;
        _this_1.shareCnt = 0;
        return _this_1;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    WXRank.prototype.start = function () {
    };
    WXRank.prototype.onBtnShareTest = function () {
        var date = new Date();
        this.shareTime = Date.now() / 1000;
        var _this = this;
        var callfunc = function () {
            var curTime = Date.now() / 1000;
            if (curTime - _this.shareTime <= 3) {
                if (_this.shareCnt >= 1)
                    _this.onShowTip("短时间内,不要分享同一个群");
                else
                    _this.onShowTip("请换个群试试哦~~");
                _this.shareCnt++;
            }
            else {
                _this.onShowTip("恭喜,获得xxx奖励");
                _this.shareCnt = 0;
            }
        };
        window["wx"].shareAppMessage({ title: "世界唯一被猪统治的岛，被遗忘却幸福", imageUrl: "https://pigwander-1258819150.file.myqcloud.com/share/share_2.png", query: "" });
        this.scheduleOnce(callfunc, 0.1);
    };
    //系统提示
    WXRank.prototype.onShowTip = function (msg) {
        /*this.sysMessage.active = true;
        this.sysMessage.width = String(msg).length * 40
        let labMsg = this.sysMessage.getChildByName("lab_msg")
        labMsg.getComponent(cc.Label).string = msg
        let _this = this;
        let callfunc = function(){

            _this.sysMessage.active = false;
        }
        this.scheduleOnce(callfunc,1);*/
    };
    __decorate([
        property(cc.Label)
    ], WXRank.prototype, "label", void 0);
    __decorate([
        property
    ], WXRank.prototype, "text", void 0);
    WXRank = __decorate([
        ccclass
    ], WXRank);
    return WXRank;
}(cc.Component));
exports.default = WXRank;

cc._RF.pop();