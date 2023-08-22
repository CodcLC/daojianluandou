"use strict";
cc._RF.push(module, '2900d0hDJpF16INet9u32+C', 'Random');
// script/tscript/util/Random.ts

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
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.Range = function (num1, num2) {
        if (num2 > num1) {
            return Math.random() * (num2 - num1) + num1;
        }
        return Math.random() * (num1 - num2) + num2;
    };
    Random.RangeInteger = function (num1, num2) {
        return Math.floor(this.Range(num1, num2));
    };
    return Random;
}());
exports.default = Random;

cc._RF.pop();