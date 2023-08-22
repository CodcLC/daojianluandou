
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/Quake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '390c1a5gv9Mqa5w+RUhJNNc', 'Quake');
// script/tscript/util/Quake.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("./Random");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Quake = /** @class */ (function (_super) {
    __extends(Quake, _super);
    function Quake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 震动幅度
        _this.shakeLevel = 3;
        // 震动时间
        _this.setShakeTime = 0.2;
        // 震动的FPS
        _this.shakeFps = 45;
        _this.shakeTime = 0.0;
        _this.frameTime = 0.0;
        _this.shakeDelta = 0.005;
        _this.isShake = false;
        return _this;
    }
    Quake.prototype.onLoad = function () {
        this.basePos = this.node.position;
        //this.shakeLevel = 5;
        //changeRect = new Rect(0.0f, 0.0f, 1.0f, 1.0f);
    };
    // Use this for initialization
    Quake.prototype.start = function () {
        this.shakeTime = this.setShakeTime;
        this.fps = this.shakeFps;
        this.frameTime = 0.03;
        this.shakeDelta = 0.005;
    };
    // Update is called once per frame
    Quake.prototype.update = function (dt) {
        if (this.isShake) {
            if (this.shakeTime > 0) {
                this.shakeTime -= dt;
                if (this.shakeTime <= 0) {
                    //changeRect.xMin = 0.0f;
                    //changeRect.yMin = 0.0f;
                    //selfCamera.rect = changeRect;
                    this.node.position = this.basePos;
                    this.isShake = false;
                    this.shakeTime = this.setShakeTime;
                    this.fps = this.shakeFps;
                    this.frameTime = 0.03;
                    this.shakeDelta = 0.005;
                }
                else {
                    this.frameTime += dt;
                    if (this.frameTime > 1.0 / this.fps) {
                        this.frameTime = 0;
                        //changeRect.xMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //changeRect.yMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //selfCamera.rect = changeRect;
                        this.node.position = this.basePos.add(cc.v2(Random_1.default.Range(-this.shakeLevel, this.shakeLevel), Random_1.default.Range(-this.shakeLevel, this.shakeLevel)));
                    }
                }
            }
        }
    };
    Quake.prototype.shake = function (time) {
        if (time === void 0) { time = 0; }
        this.isShake = true;
        if (time != 0) {
            this.shakeTime = time;
        }
        else {
            this.shakeTime = this.setShakeTime;
        }
    };
    __decorate([
        property
    ], Quake.prototype, "shakeLevel", void 0);
    __decorate([
        property
    ], Quake.prototype, "setShakeTime", void 0);
    __decorate([
        property
    ], Quake.prototype, "shakeFps", void 0);
    Quake = __decorate([
        ccclass
    ], Quake);
    return Quake;
}(cc.Component));
exports.default = Quake;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxRdWFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRTlCLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUEyRkM7UUF4RkcsT0FBTztRQUVDLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQzlCLE9BQU87UUFFQyxrQkFBWSxHQUFVLEdBQUcsQ0FBQztRQUNsQyxTQUFTO1FBRUQsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUdwQixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFHckIsYUFBTyxHQUFXLEtBQUssQ0FBQzs7SUF3RW5DLENBQUM7SUFuRUcsc0JBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsc0JBQXNCO1FBQ3RCLGdEQUFnRDtJQUNwRCxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLHFCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTCxrQ0FBa0M7SUFDOUIsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQ2hCO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFDdEI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQ3ZCO29CQUNJLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QiwrQkFBK0I7b0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjtxQkFFRDtvQkFDSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztvQkFFckIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUNuQzt3QkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIscUVBQXFFO3dCQUNyRSxxRUFBcUU7d0JBQ3JFLCtCQUErQjt3QkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMvSTtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU0scUJBQUssR0FBWixVQUFhLElBQWU7UUFBZixxQkFBQSxFQUFBLFFBQWU7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBRyxJQUFJLElBQUksQ0FBQyxFQUNaO1lBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFDRDtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztJQUNMLENBQUM7SUFwRkQ7UUFEQyxRQUFROzZDQUNxQjtJQUc5QjtRQURDLFFBQVE7K0NBQ3lCO0lBR2xDO1FBREMsUUFBUTsyQ0FDb0I7SUFWWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMEZ6QjtJQUFELFlBQUM7Q0ExRkQsQUEwRkMsQ0ExRmtDLEVBQUUsQ0FBQyxTQUFTLEdBMEY5QztrQkExRm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFuZG9tIGZyb20gXCIuL1JhbmRvbVwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YWtlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyDpnIfliqjluYXluqZcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljICBzaGFrZUxldmVsOm51bWJlciA9IDM7XHJcbiAgICAvLyDpnIfliqjml7bpl7RcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljICBzZXRTaGFrZVRpbWU6bnVtYmVyID0gMC4yO1xyXG4gICAgLy8g6ZyH5Yqo55qERlBTXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHB1YmxpYyAgc2hha2VGcHM6bnVtYmVyID0gNDU7XHJcblxyXG4gICAgcHJpdmF0ZSAgZnBzO1xyXG4gICAgcHJpdmF0ZSAgc2hha2VUaW1lID0gMC4wO1xyXG4gICAgcHJpdmF0ZSAgZnJhbWVUaW1lID0gMC4wO1xyXG4gICAgcHJpdmF0ZSAgc2hha2VEZWx0YSA9IDAuMDA1O1xyXG5cclxuXHJcbiAgICBwdWJsaWMgaXNTaGFrZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByaXZhdGUgYmFzZVBvczpjYy5WZWMyO1xyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iYXNlUG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAvL3RoaXMuc2hha2VMZXZlbCA9IDU7XHJcbiAgICAgICAgLy9jaGFuZ2VSZWN0ID0gbmV3IFJlY3QoMC4wZiwgMC4wZiwgMS4wZiwgMS4wZik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaGFrZVRpbWUgPSB0aGlzLnNldFNoYWtlVGltZTtcclxuICAgICAgICB0aGlzLmZwcyA9IHRoaXMuc2hha2VGcHM7XHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwLjAzO1xyXG4gICAgICAgIHRoaXMuc2hha2VEZWx0YSA9IDAuMDA1O1xyXG4gICAgfVxyXG5cclxuLy8gVXBkYXRlIGlzIGNhbGxlZCBvbmNlIHBlciBmcmFtZVxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hha2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGFrZVRpbWUgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWtlVGltZSAtPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoYWtlVGltZSA8PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hhbmdlUmVjdC54TWluID0gMC4wZjtcclxuICAgICAgICAgICAgICAgICAgICAvL2NoYW5nZVJlY3QueU1pbiA9IDAuMGY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZWxmQ2FtZXJhLnJlY3QgPSBjaGFuZ2VSZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuYmFzZVBvcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hha2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWtlVGltZSA9IHRoaXMuc2V0U2hha2VUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnBzID0gdGhpcy5zaGFrZUZwcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lVGltZSA9IDAuMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFrZURlbHRhID0gMC4wMDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWUgKz0gZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lVGltZSA+IDEuMCAvIHRoaXMuZnBzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoYW5nZVJlY3QueE1pbiA9IHNoYWtlRGVsdGEgKiAoLTEuMGYgKyBzaGFrZUxldmVsICogUmFuZG9tLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGFuZ2VSZWN0LnlNaW4gPSBzaGFrZURlbHRhICogKC0xLjBmICsgc2hha2VMZXZlbCAqIFJhbmRvbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZkNhbWVyYS5yZWN0ID0gY2hhbmdlUmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5iYXNlUG9zLmFkZChjYy52MihSYW5kb20uUmFuZ2UoLXRoaXMuc2hha2VMZXZlbCx0aGlzLnNoYWtlTGV2ZWwpLFJhbmRvbS5SYW5nZSgtdGhpcy5zaGFrZUxldmVsLHRoaXMuc2hha2VMZXZlbCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNoYWtlKHRpbWU6bnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzU2hha2UgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZih0aW1lICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNoYWtlVGltZSA9IHRpbWU7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hha2VUaW1lID0gdGhpcy5zZXRTaGFrZVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=