"use strict";
cc._RF.push(module, '2e241NFGeFI0aRL3ryh8mzv', 'RankItem');
// script/tscript/ui/rank/RankItem.ts

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
var RankItem = /** @class */ (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mark = null;
        _this.nameTxt = null;
        _this.rankTxt = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    RankItem.prototype.onLoad = function () { };
    RankItem.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], RankItem.prototype, "mark", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], RankItem.prototype, "rankTxt", void 0);
    RankItem = __decorate([
        ccclass
    ], RankItem);
    return RankItem;
}(cc.Component));
exports.default = RankItem;

cc._RF.pop();