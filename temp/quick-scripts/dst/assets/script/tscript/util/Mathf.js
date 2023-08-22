
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/Mathf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f65b5ocyA9FdLnQaCyUjigM', 'Mathf');
// script/tscript/util/Mathf.ts

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
var Mathf = /** @class */ (function () {
    function Mathf() {
    }
    /**
     *
     * @param dirNum 获得向量方向
     */
    Mathf.prototype.getDirValue = function (dirNum) {
        if (dirNum > 0) {
            return 1;
        }
        if (dirNum < 0) {
            return -1;
        }
        return 0;
    };
    /**
     * 获得随机方向
     */
    Mathf.prototype.getRandomDir = function () {
        if (Math.random() >= 0.5) {
            return 1;
        }
        return -1;
    };
    Mathf.lerp = function (numStart, numEnd, t) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        return numStart * (1 - t) + (numEnd * t);
    };
    Mathf.clamp = function (value, minLimit, maxLimit) {
        if (value < minLimit) {
            return minLimit;
        }
        if (value > maxLimit) {
            return maxLimit;
        }
        return value;
    };
    /**
     *
     * @param value 获得一个值的概率
     */
    Mathf.probability = function (value) {
        return Math.random() < value;
    };
    return Mathf;
}());
exports.default = Mathf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxNYXRoZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFHbkc7SUFBQTtJQXdFQSxDQUFDO0lBdEVHOzs7T0FHRztJQUNJLDJCQUFXLEdBQWxCLFVBQW1CLE1BQWE7UUFFNUIsSUFBRyxNQUFNLEdBQUcsQ0FBQyxFQUNiO1lBQ0ksT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELElBQUcsTUFBTSxHQUFHLENBQUMsRUFDYjtZQUNJLE9BQVEsQ0FBQyxDQUFDLENBQUM7U0FDZDtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNEJBQVksR0FBbkI7UUFFSSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEVBQ3ZCO1lBQ0ksT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRWEsVUFBSSxHQUFsQixVQUFtQixRQUFlLEVBQUMsTUFBYSxFQUFDLENBQVE7UUFFckQsSUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUNSO1lBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQUssSUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUNkO1lBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNSO1FBRUQsT0FBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLFdBQUssR0FBbkIsVUFBb0IsS0FBWSxFQUFDLFFBQWUsRUFBQyxRQUFlO1FBRTVELElBQUcsS0FBSyxHQUFHLFFBQVEsRUFDbkI7WUFDSSxPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUVELElBQUcsS0FBSyxHQUFHLFFBQVEsRUFDbkI7WUFDSSxPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFFRDs7O09BR0c7SUFDVyxpQkFBVyxHQUF6QixVQUEwQixLQUFZO1FBRWxDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUwsWUFBQztBQUFELENBeEVBLEFBd0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoZiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBkaXJOdW0g6I635b6X5ZCR6YeP5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXREaXJWYWx1ZShkaXJOdW06bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGRpck51bSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGRpck51bSA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpfpmo/mnLrmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJhbmRvbURpcigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA+PSAwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxlcnAobnVtU3RhcnQ6bnVtYmVyLG51bUVuZDpudW1iZXIsdDpudW1iZXIpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHQgPiAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdCA9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bVN0YXJ0ICogKDEgLSB0KSArIChudW1FbmQgKiB0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFtcCh2YWx1ZTpudW1iZXIsbWluTGltaXQ6bnVtYmVyLG1heExpbWl0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih2YWx1ZSA8IG1pbkxpbWl0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pbkxpbWl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodmFsdWUgPiBtYXhMaW1pdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXhMaW1pdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDojrflvpfkuIDkuKrlgLznmoTmpoLnjodcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwcm9iYWJpbGl0eSh2YWx1ZTpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCB2YWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19