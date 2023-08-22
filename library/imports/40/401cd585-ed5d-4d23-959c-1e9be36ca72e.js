"use strict";
cc._RF.push(module, '401cdWF7V1NI5WcHpvjbKcu', 'CustomEventType');
// script/tscript/event/CustomEventType.ts

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
var CustomEventType = /** @class */ (function () {
    function CustomEventType() {
    }
    /**
     * 新的一天
     */
    CustomEventType.NewDay = "newDay";
    /**
     * 金币发生改变时
     */
    CustomEventType.CoinChange = "coinChange";
    /**
     * 黄金发生改变时
     */
    CustomEventType.GoldChange = "goldChange";
    /**
     * 钻石发生改变时
     */
    CustomEventType.DiamondChange = "diamondChange";
    /**
     * 钻石发生改变时
     */
    CustomEventType.ShareTicketUpdate = "shareTicketUpdate";
    return CustomEventType;
}());
exports.default = CustomEventType;

cc._RF.pop();