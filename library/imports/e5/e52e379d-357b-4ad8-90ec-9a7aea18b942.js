"use strict";
cc._RF.push(module, 'e52e3edNXtK2JDsmnrqGLlC', 'KnifeConfigData');
// script/tscript/configdata/KnifeConfigData.ts

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
var KnifeConfigData = /** @class */ (function () {
    function KnifeConfigData() {
        this.id = 0;
        /**
         * 累计星星数
         */
        this.stars = 0;
        /**
         * 获得第一名次数
         */
        this.num1 = 0;
        /**
         * 连胜次数
         */
        this.straking = 0;
        /**
         * 登录天数
         */
        this.logindays = 0;
        /**
         * 一局游戏得到最大刀数
         */
        this.knives = 0;
        /**
         * 时限内成为第一
         */
        this.timelimitnum1 = 0;
        /**
         * 累计击杀数
         */
        this.kills = 0;
        /**
         * 累计游戏数
         */
        this.games = 0;
        /**
         * 累计4杀次数
         */
        this.kills4 = 0;
        /**
         * 累计5杀次数
         */
        this.kills5 = 0;
        /**
         * 累计6杀次数
         */
        this.kills6 = 0;
    }
    return KnifeConfigData;
}());
exports.default = KnifeConfigData;

cc._RF.pop();