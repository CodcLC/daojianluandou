"use strict";
cc._RF.push(module, 'd4d69/p1JFKgId+Qa96rIlv', 'CommonUils');
// script/tscript/util/CommonUils.ts

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
var CommonUils = /** @class */ (function () {
    function CommonUils() {
    }
    /**
     * 获得相对于某个节点的位置
     * @param relaNode
     * @param targetNode
     */
    CommonUils.transRelativePos = function (relaNode, targetNode) {
        var worldPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
        var relaPos = relaNode.parent.convertToNodeSpaceAR(worldPos);
        return relaPos;
    };
    CommonUils.transRelativeFromPos = function (relaNode, position) {
        var worldPos = relaNode.convertToWorldSpaceAR(position);
        var pos = cc.v2(worldPos.x - cc.winSize.width * 0.5, worldPos.y - cc.winSize.height * 0.5);
        return pos;
    };
    CommonUils.converCHNumber = function (num) {
        num = Math.floor(num);
        if (num < 0)
            num = 0;
        if (num > 9)
            num = 9;
        return this.chNumArr[num];
    };
    CommonUils.chNumArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    CommonUils = __decorate([
        ccclass
    ], CommonUils);
    return CommonUils;
}());
exports.default = CommonUils;

cc._RF.pop();