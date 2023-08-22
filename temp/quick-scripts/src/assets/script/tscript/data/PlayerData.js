"use strict";
cc._RF.push(module, 'e28f1VXaOBPm6AphXLg2K1v', 'PlayerData');
// script/tscript/data/PlayerData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var WXSdk_1 = require("../wx/WXSdk");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
/**
 * 玩家数据
 */
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        /**
         * 星星总数
         */
        this.star = 0;
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
        /**
         * 累计7杀次数
         */
        this.kills7 = 0;
        /****************记录数据 */
        this.continueStraking = 0;
        /**
         * 今天是否用过表情
         */
        this.todayUseFace = false;
        this.highStar = 0;
    }
    PlayerData.prototype.addStar = function (value) {
        this.star += value;
        if (this.star > this.highStar) {
            this.highStar = this.star;
            WXSdk_1.default.instance.unloadUserScore(this.highStar, function () { }, function () { });
        }
    };
    return PlayerData;
}());
exports.default = PlayerData;

cc._RF.pop();