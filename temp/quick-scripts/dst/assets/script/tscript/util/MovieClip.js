
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/util/MovieClip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10fa9noqZpH3pYATAmeKpIH', 'MovieClip');
// script/tscript/util/MovieClip.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Mathf_1 = require("./Mathf");
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
var MovieClip = /** @class */ (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /// <summary>
        /// Sprite渲染器
        /// </summary>
        _this.m_sprite = null;
        /// <summary>
        /// 动画计时间隔 每隔0.1s更新一帧
        /// </summary>
        _this.timer = 0.1;
        /// <summary>
        /// 播放 时间 间隔
        /// </summary>
        _this.interval = 0.1;
        /// <summary>
        /// 贴图文件名
        /// </summary>
        _this.texture = null;
        /// <summary>
        /// 播放次数
        /// </summary>
        _this.playTimes = 0;
        /// <summary>
        /// 图片切割成几行
        /// </summary>
        _this.row = 4;
        /// <summary>
        /// 图片切割成几列
        /// </summary>
        _this.col = 4;
        _this.rowIndex = 0;
        _this.isAll = false;
        _this.autoPlayOnLoad = true;
        /// <summary>
        /// 播放完自动销毁
        /// </summary>
        _this.autoDestroy = false;
        _this.begin = 0;
        _this.end = 4;
        /// <summary>
        /// 动画帧数
        /// </summary>
        _this.totalFrame = 8;
        /// <summary>
        /// 当前帧数
        /// </summary>
        _this.currentFrame = 0;
        /**
         * 当前播放了第几次
         */
        _this.currentTimes = 0;
        /// <summary>
        /// 影片是否在跑动中
        /// </summary>
        _this.running = true;
        //private _direction:number = 1;
        _this._playIndex = 0;
        _this._pieceWidth = 0;
        _this._pieceHeight = 0;
        _this.rect = new cc.Rect();
        return _this;
    }
    ;
    // Use this for initialization
    MovieClip.prototype.start = function () {
        //this. m_clips = new cc.SpriteFrame[this.row][this.col];
        //Texture2D tex = Resources.Load<Texture2D>("Image/Avatar/" + m_sprite_name);
        this.begin = 0;
        this.end = this.col;
        this.rowIndex = Mathf_1.default.clamp(this.rowIndex, 0, this.row - 1);
        this._pieceWidth = this.texture.width / this.col;
        this._pieceHeight = this.texture.height / this.row;
        this.m_sprite = this.getComponent(cc.Sprite);
        this.m_sprite.spriteFrame = new cc.SpriteFrame(this.texture, new cc.Rect(0, this.rowIndex * this._pieceHeight, this._pieceWidth, this._pieceHeight), false, cc.v2(0, 0), new cc.Size(this._pieceWidth, this._pieceHeight));
        //this.m_sprite.spriteFrame.setTexture(this.texture,new cc.Rect(0,0,this._pieceWidth * j,i * this._pieceHeight),false,cc.v2(0,0),new cc.Size(this._pieceWidth,this._pieceHeight));
        this.rect.width = this._pieceWidth;
        this.rect.height = this._pieceHeight;
        this.node.width = this._pieceWidth;
        this.node.height = this._pieceHeight;
        this.timer = this.interval;
        this.running = this.autoPlayOnLoad;
    };
    MovieClip.prototype.update = function (dt) {
        if (!this.running)
            return;
        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
            return;
        this.timer -= dt;
        if (this.timer <= 0) {
            this.timer = this.interval;
            this.currentFrame = this.currentFrame % this.col;
            this.playAction();
            this.currentFrame++;
            if (this.currentFrame == this.col) {
                if (this.isAll) {
                    this.rowIndex++;
                    if (this.rowIndex == this.row) {
                        this.currentTimes++;
                        this.node.emit("completeTimes");
                        if (this.playTimes != 0 && this.currentTimes == this.playTimes) {
                            this.node.emit("complete");
                            if (this.autoDestroy) {
                                this.node.destroy();
                            }
                        }
                    }
                    this.rowIndex %= this.row;
                }
                else {
                    this.currentTimes++;
                    this.node.emit("completeTimes");
                    if (this.playTimes != 0 && this.currentTimes == this.playTimes) {
                        this.node.emit("complete");
                        if (this.autoDestroy) {
                            this.node.destroy();
                        }
                    }
                }
            }
        }
    };
    MovieClip.prototype.playAction = function () {
        this.rowIndex = Mathf_1.default.clamp(this.rowIndex, 0, this.row - 1);
        this._playIndex = this._playIndex % (this.begin - this.end) + this.begin;
        //this.m_sprite.sprite = m_clips[rowIndex, _playIndex];
        this.rect.x = this._playIndex * this._pieceWidth;
        this.rect.y = this.rowIndex * this._pieceHeight;
        this.m_sprite.spriteFrame.setRect(this.rect);
        this._playIndex++;
    };
    /// <summary>
    /// 播放影片
    /// </summary>
    MovieClip.prototype.play = function () {
        this.running = true;
    };
    /// <summary>
    /// 停止播放影片
    /// </summary>
    MovieClip.prototype.stop = function () {
        this.running = false;
    };
    /// <summary>
    /// 跳帧播放
    /// </summary>
    /// <param name="frame">帧</param>
    MovieClip.prototype.gotoAndPlay = function (frame) {
        this.running = true;
        this._playIndex = frame;
        this._playIndex = Mathf_1.default.clamp(this._playIndex, 0, this.col - 1);
    };
    /// <summary>
    /// 跳帧停止
    /// </summary>
    /// <param name="frame">帧</param>
    MovieClip.prototype.gotoAndStop = function (frame) {
        this.running = false;
        this._playIndex = frame;
        this._playIndex = Mathf_1.default.clamp(this._playIndex, 0, this.col - 1);
        this.rect.x = this._playIndex * this._pieceWidth;
        this.rect.y = this.rowIndex * this._pieceHeight;
        this.m_sprite.spriteFrame.setRect(this.rect);
    };
    __decorate([
        property(cc.Float)
    ], MovieClip.prototype, "interval", void 0);
    __decorate([
        property({ type: cc.Texture2D })
    ], MovieClip.prototype, "texture", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], MovieClip.prototype, "playTimes", void 0);
    __decorate([
        property(cc.Integer)
    ], MovieClip.prototype, "row", void 0);
    __decorate([
        property(cc.Integer)
    ], MovieClip.prototype, "col", void 0);
    __decorate([
        property(cc.Integer)
    ], MovieClip.prototype, "rowIndex", void 0);
    __decorate([
        property(cc.Boolean)
    ], MovieClip.prototype, "isAll", void 0);
    __decorate([
        property(cc.Boolean)
    ], MovieClip.prototype, "autoPlayOnLoad", void 0);
    __decorate([
        property(cc.Boolean)
    ], MovieClip.prototype, "autoDestroy", void 0);
    MovieClip = __decorate([
        ccclass
    ], MovieClip);
    return MovieClip;
}(cc.Component));
exports.default = MovieClip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1dGlsXFxNb3ZpZUNsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE0QjtBQUU1QixvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBbVFDO1FBaFFHLGFBQWE7UUFDYixhQUFhO1FBQ2IsY0FBYztRQUNKLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHcEMsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixjQUFjO1FBQ0osV0FBSyxHQUFVLEdBQUcsQ0FBQztRQUU3QixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFFUCxjQUFRLEdBQVUsR0FBRyxDQUFDO1FBRTdCLGFBQWE7UUFDYixTQUFTO1FBQ1QsY0FBYztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRW5DLGFBQWE7UUFDYixRQUFRO1FBQ1IsY0FBYztRQUVQLGVBQVMsR0FBVSxDQUFDLENBQUM7UUFFNUIsYUFBYTtRQUNiLFdBQVc7UUFDWCxjQUFjO1FBR1AsU0FBRyxHQUFVLENBQUMsQ0FBQztRQUV0QixhQUFhO1FBQ2IsV0FBVztRQUNYLGNBQWM7UUFFUCxTQUFHLEdBQVUsQ0FBQyxDQUFDO1FBR2YsY0FBUSxHQUFVLENBQUMsQ0FBQztRQUdwQixXQUFLLEdBQVcsS0FBSyxDQUFDO1FBR3RCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBRXJDLGFBQWE7UUFDYixXQUFXO1FBQ1gsY0FBYztRQUVQLGlCQUFXLEdBQVcsS0FBSyxDQUFDO1FBRzNCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFFakIsU0FBRyxHQUFVLENBQUMs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Q0FBQyxPQUFPLENBQUM7MENBQ0M7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDTTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzRDQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ2dCO0lBTXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7a0RBQ2M7SUF6RGxCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrUTdCO0lBQUQsZ0JBQUM7Q0FsUUQsQUFrUUMsQ0FsUXNDLEVBQUUsQ0FBQyxTQUFTLEdBa1FsRDtrQkFsUW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0aGYgZnJvbSBcIi4vTWF0aGZcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZUNsaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBTcHJpdGXmuLLmn5PlmahcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcm90ZWN0ZWQgbV9zcHJpdGU6Y2MuU3ByaXRlID0gbnVsbDs7XHJcblxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDliqjnlLvorqHml7bpl7TpmpQg5q+P6ZqUMC4xc+abtOaWsOS4gOW4p1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCB0aW1lcjpudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUviDml7bpl7Qg6Ze06ZqUXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGludGVydmFsOm51bWJlciA9IDAuMTtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6LS05Zu+5paH5Lu25ZCNXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlRleHR1cmUyRH0pXHJcbiAgICBwdWJsaWMgdGV4dHVyZTpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmkq3mlL7mrKHmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuSW50ZWdlcn0pXHJcbiAgICBwdWJsaWMgcGxheVRpbWVzOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWbvueJh+WIh+WJsuaIkOWHoOihjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHB1YmxpYyByb3c6bnVtYmVyID0gNDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Zu+54mH5YiH5Ymy5oiQ5Yeg5YiXXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgY29sOm51bWJlciA9IDQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgcm93SW5kZXg6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHB1YmxpYyBpc0FsbDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwdWJsaWMgYXV0b1BsYXlPbkxvYWQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvuWujOiHquWKqOmUgOavgVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHVibGljIGF1dG9EZXN0cm95OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgZW5kOm51bWJlciA9IDQ7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWKqOeUu+W4p+aVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0b3RhbEZyYW1lOm51bWJlciA9IDg7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW9k+WJjeW4p+aVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjdXJyZW50RnJhbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeaSreaUvuS6huesrOWHoOasoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lczpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlvbHniYfmmK/lkKblnKjot5HliqjkuK1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcnVubmluZzpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvL3ByaXZhdGUgX2RpcmVjdGlvbjpudW1iZXIgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgX3BsYXlJbmRleDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3BpZWNlV2lkdGg6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9waWVjZUhlaWdodDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVjdDpjYy5SZWN0ID0gbmV3IGNjLlJlY3QoKTtcclxuXHJcblxyXG4gICAgLy8gVXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vdGhpcy4gbV9jbGlwcyA9IG5ldyBjYy5TcHJpdGVGcmFtZVt0aGlzLnJvd11bdGhpcy5jb2xdO1xyXG4gICAgICAgIC8vVGV4dHVyZTJEIHRleCA9IFJlc291cmNlcy5Mb2FkPFRleHR1cmUyRD4oXCJJbWFnZS9BdmF0YXIvXCIgKyBtX3Nwcml0ZV9uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWdpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmQgPSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dJbmRleCA9IE1hdGhmLmNsYW1wKHRoaXMucm93SW5kZXgsMCx0aGlzLnJvdyAtIDEpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fcGllY2VXaWR0aCA9IHRoaXMudGV4dHVyZS53aWR0aCAvIHRoaXMuY29sO1xyXG4gICAgICAgIHRoaXMuX3BpZWNlSGVpZ2h0ID0gdGhpcy50ZXh0dXJlLmhlaWdodCAvIHRoaXMucm93O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubV9zcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICB0aGlzLm1fc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRoaXMudGV4dHVyZSxuZXcgY2MuUmVjdCgwLHRoaXMucm93SW5kZXggKiB0aGlzLl9waWVjZUhlaWdodCx0aGlzLl9waWVjZVdpZHRoLCB0aGlzLl9waWVjZUhlaWdodCksZmFsc2UsY2MudjIoMCwwKSxuZXcgY2MuU2l6ZSh0aGlzLl9waWVjZVdpZHRoLHRoaXMuX3BpZWNlSGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5tX3Nwcml0ZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4dHVyZSxuZXcgY2MuUmVjdCgwLDAsdGhpcy5fcGllY2VXaWR0aCAqIGosaSAqIHRoaXMuX3BpZWNlSGVpZ2h0KSxmYWxzZSxjYy52MigwLDApLG5ldyBjYy5TaXplKHRoaXMuX3BpZWNlV2lkdGgsdGhpcy5fcGllY2VIZWlnaHQpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5fcGllY2VXaWR0aDtcclxuICAgICAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5fcGllY2VIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuX3BpZWNlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuX3BpZWNlSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5pbnRlcnZhbDtcclxuXHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdGhpcy5hdXRvUGxheU9uTG9hZDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheVRpbWVzICE9IDAgJiYgdGhpcy5jdXJyZW50VGltZXMgPT0gdGhpcy5wbGF5VGltZXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPD0gMClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5pbnRlcnZhbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gdGhpcy5jdXJyZW50RnJhbWUgJSB0aGlzLmNvbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheUFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUrKztcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID09IHRoaXMuY29sKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc0FsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd0luZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucm93SW5kZXggPT0gdGhpcy5yb3cpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lcyArKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY29tcGxldGVUaW1lc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlUaW1lcyAhPSAwICYmIHRoaXMuY3VycmVudFRpbWVzID09IHRoaXMucGxheVRpbWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImNvbXBsZXRlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXV0b0Rlc3Ryb3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dJbmRleCAlPSB0aGlzLnJvdztcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZXMgKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY29tcGxldGVUaW1lc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheVRpbWVzICE9IDAgJiYgdGhpcy5jdXJyZW50VGltZXMgPT0gdGhpcy5wbGF5VGltZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImNvbXBsZXRlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRvRGVzdHJveSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5QWN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvd0luZGV4ID0gTWF0aGYuY2xhbXAodGhpcy5yb3dJbmRleCwgMCwgdGhpcy5yb3cgLSAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGxheUluZGV4ID0gdGhpcy5fcGxheUluZGV4ICUgKHRoaXMuYmVnaW4gLSB0aGlzLmVuZCkgKyB0aGlzLmJlZ2luO1xyXG4gICAgICAgIC8vdGhpcy5tX3Nwcml0ZS5zcHJpdGUgPSBtX2NsaXBzW3Jvd0luZGV4LCBfcGxheUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWN0LnggPSB0aGlzLl9wbGF5SW5kZXggKiB0aGlzLl9waWVjZVdpZHRoO1xyXG4gICAgICAgIHRoaXMucmVjdC55ID0gdGhpcy5yb3dJbmRleCAqIHRoaXMuX3BpZWNlSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLm1fc3ByaXRlLnNwcml0ZUZyYW1lLnNldFJlY3QodGhpcy5yZWN0KTtcclxuICAgICAgICB0aGlzLl9wbGF5SW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5pKt5pS+5b2x54mHXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWBnOatouaSreaUvuW9seeJh1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzdG9wKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6Lez5bin5pKt5pS+XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZnJhbWVcIj7luKc8L3BhcmFtPlxyXG4gICAgcHVibGljIGdvdG9BbmRQbGF5KGZyYW1lOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGZyYW1lO1xyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IE1hdGhmLmNsYW1wKHRoaXMuX3BsYXlJbmRleCwgMCwgdGhpcy5jb2wgLSAxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOi3s+W4p+WBnOatolxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImZyYW1lXCI+5binPC9wYXJhbT5cclxuICAgIHB1YmxpYyBnb3RvQW5kU3RvcChmcmFtZTpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGZyYW1lO1xyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IE1hdGhmLmNsYW1wKHRoaXMuX3BsYXlJbmRleCwgMCwgdGhpcy5jb2wgLSAxKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlY3QueCA9IHRoaXMuX3BsYXlJbmRleCAqIHRoaXMuX3BpZWNlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5yZWN0LnkgPSB0aGlzLnJvd0luZGV4ICogdGhpcy5fcGllY2VIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tX3Nwcml0ZS5zcHJpdGVGcmFtZS5zZXRSZWN0KHRoaXMucmVjdCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==