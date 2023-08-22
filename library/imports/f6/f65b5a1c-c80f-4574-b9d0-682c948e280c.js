"use strict";
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