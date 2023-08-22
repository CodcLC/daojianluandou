"use strict";
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