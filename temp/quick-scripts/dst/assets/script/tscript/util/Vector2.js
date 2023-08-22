
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/Vector2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxWZWN0b3IyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUVuRztJQUFBO0lBc0ZBLENBQUM7SUFwRkc7Ozs7O09BS0c7SUFDVyxZQUFJLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUMsTUFBYyxFQUFDLENBQVE7UUFFdkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGVBQWU7SUFDRCxpQkFBUyxHQUF2QixVQUF3QixDQUFRLEVBQUMsUUFBZ0IsRUFBQyxNQUFjO1FBRzVELElBQUcsQ0FBQyxHQUFHLENBQUMsRUFDUjtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFLLElBQUcsQ0FBQyxHQUFHLENBQUMsRUFDZDtZQUNJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDUjtRQUVELCtEQUErRDtRQUMvRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUVELFNBQVM7SUFDSyxpQkFBUyxHQUF2QixVQUF3QixDQUFRLEVBQUMsUUFBZ0IsRUFBQyxNQUFjLEVBQUMsTUFBYztRQUczRSxJQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1I7WUFDSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBSyxJQUFHLENBQUMsR0FBRyxDQUFDLEVBQ2Q7WUFDSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ1I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBRW5CLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELE9BQU87SUFDTyxtQkFBVyxHQUF6QixVQUEwQixDQUFRLEVBQUMsUUFBZ0IsRUFBQyxPQUFlLEVBQUMsT0FBZSxFQUFDLE1BQWM7UUFFOUYsSUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUNSO1lBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQUssSUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUNkO1lBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFYSxnQkFBUSxHQUF0QixVQUF1QixJQUFZLEVBQUMsSUFBWTtRQUU1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUdMLGNBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBvc1N0YXJ0IOaPkuWAvOi/kOeul1xyXG4gICAgICogQHBhcmFtIHBvc0VuZCBcclxuICAgICAqIEBwYXJhbSB0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxlcnAocG9zU3RhcnQ6Y2MuVmVjMixwb3NFbmQ6Y2MuVmVjMix0Om51bWJlcik6Y2MuVmVjMlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJlemllck9uZSh0LHBvc1N0YXJ0LHBvc0VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuIDmrKHotJ3loZ7lsJTljbPkuLrnur/mgKfmj5LlgLzlh73mlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgYmV6aWVyT25lKHQ6bnVtYmVyLHBvc1N0YXJ0OmNjLlZlYzIscG9zRW5kOmNjLlZlYzIpOmNjLlZlYzJcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBpZih0ID4gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHQgPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHQgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9yZXR1cm4gcG9zU3RhcnQuYWRkU2VsZihwb3NFbmQuc3ViU2VsZihwb3NTdGFydCkubXVsU2VsZih0KSk7XHJcbiAgICAgICAgcmV0dXJuIHBvc1N0YXJ0Lm11bCgxIC0gdCkuYWRkKHBvc0VuZC5tdWwodCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+S6jOasoei0neWhnuWwlOabsue6v1xyXG4gICAgcHVibGljIHN0YXRpYyBiZXppZXJUd28odDpudW1iZXIscG9zU3RhcnQ6Y2MuVmVjMixwb3NDb246Y2MuVmVjMixwb3NFbmQ6Y2MuVmVjMik6Y2MuVmVjMlxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHQgPiAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdCA9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgbiA9ICgxIC0gdCk7XHJcbiAgICAgICAgdmFyIHR0ID0gdCAqIHQ7XHJcblxyXG4gICAgICAgIHZhciBwb3MgPSBwb3NTdGFydDtcclxuXHJcbiAgICAgICAgcG9zLmFkZFNlbGYocG9zU3RhcnQubXVsKG4gKiBuKSk7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYocG9zQ29uLm11bCgyICogbiAqIHQpKTtcclxuICAgICAgICBwb3MuYWRkU2VsZihwb3NFbmQubXVsKHR0KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuInmrKHotJ3loZ7lsJRcclxuICAgIHB1YmxpYyBzdGF0aWMgYmV6aWVyVGhyZWUodDpudW1iZXIscG9zU3RhcnQ6Y2MuVmVjMixwb3NDb24xOmNjLlZlYzIscG9zQ29uMjpjYy5WZWMyLHBvc0VuZDpjYy5WZWMyKTpjYy5WZWMyXHJcbiAgICB7XHJcbiAgICAgICAgaWYodCA+IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ID0gMTtcclxuICAgICAgICB9ZWxzZSBpZih0IDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9ICgxIC0gdCk7XHJcbiAgICAgICAgdmFyIG5uID0gbiAqIG47XHJcbiAgICAgICAgdmFyIG5ubiA9IG5uICogbjtcclxuICAgICAgICB2YXIgdHQgPSB0ICogdDtcclxuICAgICAgICB2YXIgdHR0ID0gdHQgKiB0O1xyXG5cclxuICAgICAgICB2YXIgcG9zID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYocG9zU3RhcnQubXVsKG5ubikpO1xyXG4gICAgICAgIHBvcy5hZGRTZWxmKHBvc0NvbjEubXVsKDMqbm4gKiB0KSk7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYocG9zQ29uMi5tdWwoMypuKnR0KSk7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYocG9zRW5kLm11bCh0dHQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlKHBvczE6Y2MuVmVjMixwb3MyOmNjLlZlYzIpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwb3MyLnN1Yihwb3MxKS5tYWcoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iXX0=