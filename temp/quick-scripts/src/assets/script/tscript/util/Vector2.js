"use strict";
cc._RF.push(module, 'e92a0MK9VVImIf+/qVez0xa', 'Vector2');
// script/tscript/util/Vector2.ts

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
var Vector2 = /** @class */ (function () {
    function Vector2() {
    }
    /**
     *
     * @param posStart 插值运算
     * @param posEnd
     * @param t
     */
    Vector2.lerp = function (posStart, posEnd, t) {
        return this.bezierOne(t, posStart, posEnd);
    };
    //一次贝塞尔即为线性插值函数
    Vector2.bezierOne = function (t, posStart, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        //return posStart.addSelf(posEnd.subSelf(posStart).mulSelf(t));
        return posStart.mul(1 - t).add(posEnd.mul(t));
    };
    //二次贝塞尔曲线
    Vector2.bezierTwo = function (t, posStart, posCon, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        var n = (1 - t);
        var tt = t * t;
        var pos = posStart;
        pos.addSelf(posStart.mul(n * n));
        pos.addSelf(posCon.mul(2 * n * t));
        pos.addSelf(posEnd.mul(tt));
        return pos;
    };
    //三次贝塞尔
    Vector2.bezierThree = function (t, posStart, posCon1, posCon2, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        var n = (1 - t);
        var nn = n * n;
        var nnn = nn * n;
        var tt = t * t;
        var ttt = tt * t;
        var pos = posStart;
        pos.addSelf(posStart.mul(nnn));
        pos.addSelf(posCon1.mul(3 * nn * t));
        pos.addSelf(posCon2.mul(3 * n * tt));
        pos.addSelf(posEnd.mul(ttt));
        return pos;
    };
    Vector2.distance = function (pos1, pos2) {
        return pos2.sub(pos1).mag();
    };
    return Vector2;
}());
exports.default = Vector2;

cc._RF.pop();