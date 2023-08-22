
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/AnimationController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd208TAM6hOe5rynE0i/9TS', 'AnimationController');
// script/tscript/util/AnimationController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnimationController = /** @class */ (function (_super) {
    __extends(AnimationController, _super);
    function AnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = [];
        _this.frameTime = 0.1;
        /// <summary>
        /// 播放次数
        /// </summary>
        _this.playTimes = 0;
        /// <summary>
        /// 播放完自动销毁
        /// </summary>
        _this.autoDestroy = false;
        _this.frameNum = 0;
        _this.frameIndex = 0;
        _this.running = true;
        _this.time = 0;
        _this.currentTimes = 0;
        return _this;
    }
    AnimationController.prototype.onLoad = function () {
        this.m_render = this.getComponent(cc.Sprite);
    };
    // Use this for initialization
    AnimationController.prototype.start = function () {
        if (this.images.length != 0) {
            this.frameNum = this.images.length;
        }
        this.time = this.frameTime;
    };
    // Update is called once per frame
    AnimationController.prototype.update = function (dt) {
        if (!this.running)
            return;
        if (this.images.length == 0)
            return;
        this.time -= dt;
        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
            return;
        if (this.time <= 0) {
            this.time = this.frameTime;
            this.frameIndex = this.frameIndex % this.frameNum;
            this.m_render.spriteFrame = this.images[this.frameIndex];
            if (this.frameCallback != null) {
                this.frameCallback(this.frameIndex);
            }
            if (this.frameIndex == this.frameNum - 1) {
                this.currentTimes++;
                if (this.completeCallback != null) {
                    this.completeCallback();
                }
                if (this.autoDestroy) {
                    this.node.destroy();
                }
            }
            this.frameIndex++;
        }
    };
    /// <summary>
    /// 播放
    /// </summary>
    AnimationController.prototype.play = function (completeCallback, frameCallback) {
        if (completeCallback === void 0) { completeCallback = null; }
        if (frameCallback === void 0) { frameCallback = null; }
        this.completeCallback = completeCallback;
        this.frameCallback = frameCallback;
        this.running = true;
        this.frameIndex = 0;
        this.currentTimes = 0;
        this.time = this.frameTime;
        if (this.images.length != 0) {
            this.frameNum = this.images.length;
        }
        if (this.m_render)
            this.m_render.spriteFrame = this.images[0];
    };
    AnimationController.prototype.gotoAndPlay = function (frameIndex) {
    };
    /// <summary>
    /// 停止
    /// </summary>
    AnimationController.prototype.stop = function () {
        this.running = false;
    };
    AnimationController.prototype.gotoAndStop = function (frameIndex) {
        if (this.frameIndex < 0)
            this.frameIndex = 0;
        if (this.frameIndex > this.images.length - 1)
            this.frameIndex = this.images.length - 1;
        this.m_render.spriteFrame = this.images[this.frameIndex];
        this.running = false;
    };
    AnimationController.prototype.isPlayEnd = function () {
        return this.frameIndex == this.frameNum;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], AnimationController.prototype, "images", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "frameTime", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "playTimes", void 0);
    __decorate([
        property()
    ], AnimationController.prototype, "autoDestroy", void 0);
    AnimationController = __decorate([
        ccclass
    ], AnimationController);
    return AnimationController;
}(cc.Component));
exports.default = AnimationController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxBbmltYXRpb25Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBRDdEO1FBQUEscUVBd0pDO1FBcEpVLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBRzdCLGVBQVMsR0FBVSxHQUFHLENBQUM7UUFFOUIsYUFBYTtRQUNiLFFBQVE7UUFDUixjQUFjO1FBRVAsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUU1QixhQUFhO1FBQ2IsV0FBVztRQUNYLGNBQWM7UUFFUCxpQkFBVyxHQUFXLEtBQUssQ0FBQztRQUU1QixjQUFRLEdBQVUsQ0FBQyxDQUFDO1FBRXBCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBR3RCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFJdEIsVUFBSSxHQUFVLENBQUMsQ0FBQztRQU1oQixrQkFBWSxHQUFVLENBQUMsQ0FBQzs7SUFvSHBDLENBQUM7SUFsSEcsb0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVKLDhCQUE4QjtJQUM5QixtQ0FBSyxHQUFMO1FBQ08sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQzNCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxD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QyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1Q0FBUyxHQUFoQjtRQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFqSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDVztJQUdwQztRQURDLFFBQVEsRUFBRTswREFDbUI7SUFNOUI7UUFEQyxRQUFRLEVBQUU7MERBQ2lCO0lBTTVCO1FBREMsUUFBUSxFQUFFOzREQUN3QjtJQWxCbEIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F1SnZDO0lBQUQsMEJBQUM7Q0F2SkQsQUF1SkMsQ0F2SmdELEVBQUUsQ0FBQyxTQUFTLEdBdUo1RDtrQkF2Sm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgaW1hZ2VzOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIGZyYW1lVGltZTpudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvuasoeaVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgcGxheVRpbWVzOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvuWujOiHquWKqOmUgOavgVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgYXV0b0Rlc3Ryb3k6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBmcmFtZU51bTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBmcmFtZUluZGV4Om51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIHB1YmxpYyBydW5uaW5nOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbV9yZW5kZXI6Y2MuU3ByaXRlO1xyXG5cclxuICAgIHByaXZhdGUgdGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVDYWxsYmFjazpGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGZyYW1lQ2FsbGJhY2s6RnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubV9yZW5kZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuXHQvLyBVc2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuXHRzdGFydCAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZU51bSA9IHRoaXMuaW1hZ2VzLmxlbmd0aDsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmZyYW1lVGltZTtcclxuXHR9XHJcblx0XHJcblx0Ly8gVXBkYXRlIGlzIGNhbGxlZCBvbmNlIHBlciBmcmFtZVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICBcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudGltZSAtPSBkdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheVRpbWVzICE9IDAgJiYgdGhpcy5jdXJyZW50VGltZXMgPT0gdGhpcy5wbGF5VGltZXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA8PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5mcmFtZVRpbWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSB0aGlzLmZyYW1lSW5kZXggJSB0aGlzLmZyYW1lTnVtO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tX3JlbmRlci5zcHJpdGVGcmFtZSA9IHRoaXMuaW1hZ2VzW3RoaXMuZnJhbWVJbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUNhbGxiYWNrICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayh0aGlzLmZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUluZGV4ID09IHRoaXMuZnJhbWVOdW0gLSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lcysrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvRGVzdHJveSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXgrKztcclxuXHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5pKt5pS+XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBsYXkoY29tcGxldGVDYWxsYmFjazpGdW5jdGlvbiA9IG51bGwsIGZyYW1lQ2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gZnJhbWVDYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVzID0gMDtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmZyYW1lVGltZTtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoICE9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lTnVtID0gdGhpcy5pbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tX3JlbmRlcilcclxuICAgICAgICAgICAgdGhpcy5tX3JlbmRlci5zcHJpdGVGcmFtZSA9IHRoaXMuaW1hZ2VzWzBdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ290b0FuZFBsYXkoZnJhbWVJbmRleDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWBnOatolxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzdG9wKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ290b0FuZFN0b3AoZnJhbWVJbmRleDpGdW5jdGlvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUluZGV4IDwgMClcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA+IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMubV9yZW5kZXIuc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlc1t0aGlzLmZyYW1lSW5kZXhdO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNQbGF5RW5kKCk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYW1lSW5kZXggPT0gdGhpcy5mcmFtZU51bTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==