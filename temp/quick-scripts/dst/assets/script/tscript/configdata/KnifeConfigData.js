
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/configdata/KnifeConfigData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb25maWdkYXRhXFxLbmlmZUNvbmZpZ0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBR25HO0lBQUE7UUFHVyxPQUFFLEdBQVUsQ0FBQyxDQUFDO1FBT3JCOztXQUVHO1FBQ0ksVUFBSyxHQUFVLENBQUMsQ0FBQztRQUV4Qjs7V0FFRztRQUNJLFNBQUksR0FBVSxDQUFDLENBQUM7UUFFdkI7O1dBRUc7UUFDSSxhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBRTNCOztXQUVHO1FBQ0ksY0FBUyxHQUFVLENBQUMsQ0FBQztRQUU1Qjs7V0FFRztRQUNJLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSSxrQkFBYSxHQUFVLENBQUMsQ0FBQztRQUVoQzs7V0FFRztRQUNJLFVBQUssR0FBVSxDQUFDLENBQUM7UUFFeEI7O1dBRUc7UUFDSSxVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBRXhCOztXQUVHO1FBQ0ksV0FBTSxHQUFVLENBQUMsQ0FBQztRQUV6Qjs7V0FFRztRQUNJLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSSxXQUFNLEdBQVUsQ0FBQyxDQUFDO0lBRzdCLENBQUM7SUFBRCxzQkFBQztBQUFELENBbEVBLEFBa0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlmZUNvbmZpZ0RhdGF7XHJcblxyXG5cclxuICAgIHB1YmxpYyBpZDpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+05piOXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleHBsYWluOnN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoeaYn+aYn+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+esrOS4gOWQjeasoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbnVtMTpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+e6IOc5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJha2luZzpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55m75b2V5aSp5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dpbmRheXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOWxgOa4uOaIj+W+l+WIsOacgOWkp+WIgOaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMga25pdmVzOm51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDml7bpmZDlhoXmiJDkuLrnrKzkuIBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRpbWVsaW1pdG51bTE6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoeWHu+adgOaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMga2lsbHM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoea4uOaIj+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2FtZXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0r+iuoTTmnYDmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGtpbGxzNDpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57Sv6K6hNeadgOasoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMga2lsbHM1Om51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntK/orqE25p2A5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBraWxsczY6bnVtYmVyID0gMDtcclxuXHJcbiAgICBcclxufVxyXG4iXX0=