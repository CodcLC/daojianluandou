
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/data/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxkYXRhXFxQbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFHbkc7O0dBRUc7QUFDSDtJQUFBO1FBRUk7O1dBRUc7UUFDSSxTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBRXZCOztXQUVHO1FBQ0ksU0FBSSxHQUFVLENBQUMsQ0FBQztRQUV2Qjs7V0FFRztRQUNJLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFFM0I7O1dBRUc7UUFDSSxjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRTVCOztXQUVHO1FBQ0ksV0FBTSxHQUFVLENBQUMsQ0FBQztRQUV6Qjs7V0FFRztRQUNJLGtCQUFhLEdBQVUsQ0FBQyxDQUFDO1FBRWhDOztXQUVHO1FBQ0ksVUFBSyxHQUFVLENBQUMsQ0FBQztRQUV4Qjs7V0FFRztRQUNJLFVBQUssR0FBVSxDQUFDLENBQUM7UUFFeEI7O1dBRUc7UUFDSSxXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBRXpCOztXQUVHO1FBQ0ksV0FBTSxHQUFVLENBQUMsQ0FBQztRQUV6Qjs7V0FFRztRQUNJLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFHekI7O1dBRUc7UUFDSSxXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBR3pCLHdCQUF3QjtRQUVqQixxQkFBZ0IsR0FBVSxDQUFDLENBQUM7UUFFbkM7O1dBRUc7UUFDSSxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUU3QixhQUFRLEdBQVUsQ0FBQyxDQUFDO0lBZ0IvQixDQUFDO0lBYlUsNEJBQU8sR0FBZCxVQUFlLEtBQVk7UUFFdkIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFFbkIsSUFBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQzVCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLGVBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsY0FBSyxDQUFDLEVBQUMsY0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUdMLENBQUM7SUFFTCxpQkFBQztBQUFELENBekZBLEFBeUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV1hTZGsgZnJvbSBcIi4uL3d4L1dYU2RrXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG4vKipcclxuICog546p5a625pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJEYXRhIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYn+aYn+aAu+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcjpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X56ys5LiA5ZCN5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBudW0xOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov57og5zmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0cmFraW5nOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmbvlvZXlpKnmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ2luZGF5czpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiA5bGA5ri45oiP5b6X5Yiw5pyA5aSn5YiA5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBrbml2ZXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaXtumZkOWGheaIkOS4uuesrOS4gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGltZWxpbWl0bnVtMTpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57Sv6K6h5Ye75p2A5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBraWxsczpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57Sv6K6h5ri45oiP5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnYW1lczpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57Sv6K6hNOadgOasoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMga2lsbHM0Om51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntK/orqE15p2A5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBraWxsczU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoTbmnYDmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGtpbGxzNjpudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoTfmnYDmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGtpbGxzNzpudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKuiusOW9leaVsOaNriAqL1xyXG5cclxuICAgIHB1YmxpYyBjb250aW51ZVN0cmFraW5nOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku4rlpKnmmK/lkKbnlKjov4fooajmg4VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRvZGF5VXNlRmFjZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGhpZ2hTdGFyOm51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIHB1YmxpYyBhZGRTdGFyKHZhbHVlOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXIgKz0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhciA+IHRoaXMuaGlnaFN0YXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hTdGFyID0gdGhpcy5zdGFyO1xyXG4gICAgICAgICAgICBXWFNkay5pbnN0YW5jZS51bmxvYWRVc2VyU2NvcmUodGhpcy5oaWdoU3RhciwoKT0+e30sKCk9Pnt9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19