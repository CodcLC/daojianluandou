import Mathf from "./Mathf";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MovieClip extends cc.Component {

    /// <summary>
    /// Sprite渲染器
    /// </summary>
    protected m_sprite:cc.Sprite = null;;


    /// <summary>
    /// 动画计时间隔 每隔0.1s更新一帧
    /// </summary>
    protected timer:number = 0.1;

    /// <summary>
    /// 播放 时间 间隔
    /// </summary>
    @property(cc.Float)
    public interval:number = 0.1;

    /// <summary>
    /// 贴图文件名
    /// </summary>
    @property({type:cc.Texture2D})
    public texture:cc.Texture2D = null;

    /// <summary>
    /// 播放次数
    /// </summary>
    @property({type:cc.Integer})
    public playTimes:number = 0;

    /// <summary>
    /// 图片切割成几行
    /// </summary>

    @property(cc.Integer)
    public row:number = 4;

    /// <summary>
    /// 图片切割成几列
    /// </summary>
    @property(cc.Integer)
    public col:number = 4;

    @property(cc.Integer)
    public rowIndex:number = 0;

    @property(cc.Boolean)
    public isAll:boolean = false;

    @property(cc.Boolean)
    public autoPlayOnLoad:boolean = true;

    /// <summary>
    /// 播放完自动销毁
    /// </summary>
    @property(cc.Boolean)
    public autoDestroy:boolean = false;


    private begin:number = 0;

    private end:number = 4;

    /// <summary>
    /// 动画帧数
    /// </summary>
    public totalFrame:number = 8;

    /// <summary>
    /// 当前帧数
    /// </summary>
    public currentFrame:number = 0;

    /**
     * 当前播放了第几次
     */
    private currentTimes:number = 0;

    /// <summary>
    /// 影片是否在跑动中
    /// </summary>
    public running:boolean = true;

    //private _direction:number = 1;

    private _playIndex:number = 0;

    private _pieceWidth:number = 0;

    private _pieceHeight:number = 0;

    private rect:cc.Rect = new cc.Rect();


    // Use this for initialization
    start()
    {

        //this. m_clips = new cc.SpriteFrame[this.row][this.col];
        //Texture2D tex = Resources.Load<Texture2D>("Image/Avatar/" + m_sprite_name);

        this.begin = 0;
        this.end = this.col;

        this.rowIndex = Mathf.clamp(this.rowIndex,0,this.row - 1);


        this._pieceWidth = this.texture.width / this.col;
        this._pieceHeight = this.texture.height / this.row;
        
        this.m_sprite = this.getComponent(cc.Sprite);

        this.m_sprite.spriteFrame = new cc.SpriteFrame(this.texture,new cc.Rect(0,this.rowIndex * this._pieceHeight,this._pieceWidth, this._pieceHeight),false,cc.v2(0,0),new cc.Size(this._pieceWidth,this._pieceHeight));

        //this.m_sprite.spriteFrame.setTexture(this.texture,new cc.Rect(0,0,this._pieceWidth * j,i * this._pieceHeight),false,cc.v2(0,0),new cc.Size(this._pieceWidth,this._pieceHeight));

        this.rect.width = this._pieceWidth;
        this.rect.height = this._pieceHeight;

        this.node.width = this._pieceWidth;
        this.node.height = this._pieceHeight;

        this.timer = this.interval;

        this.running = this.autoPlayOnLoad;


    }

    update(dt)
    {

        if (!this.running)
            return;

        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
            return;

        this.timer -= dt;

        if (this.timer <= 0)
        {

            this.timer = this.interval;

            this.currentFrame = this.currentFrame % this.col;

            this.playAction();

            this.currentFrame++;

            if(this.currentFrame == this.col)
            {

                if(this.isAll)
                {
                    this.rowIndex++;

                    if(this.rowIndex == this.row)
                    {
                        this.currentTimes ++;

                        this.node.emit("completeTimes");

                        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
                        {
                            this.node.emit("complete");

                            if(this.autoDestroy)
                            {
                                this.node.destroy();
                            }
                        }
                    }

                    this.rowIndex %= this.row;
                }else
                {
                    this.currentTimes ++;

                    this.node.emit("completeTimes");

                    if (this.playTimes != 0 && this.currentTimes == this.playTimes)
                    {
                        this.node.emit("complete");

                        if(this.autoDestroy)
                        {
                            this.node.destroy();
                        }
                    }
                }

            }
        }
 
    }


    private playAction()
    {
        this.rowIndex = Mathf.clamp(this.rowIndex, 0, this.row - 1);

        this._playIndex = this._playIndex % (this.begin - this.end) + this.begin;
        //this.m_sprite.sprite = m_clips[rowIndex, _playIndex];

        this.rect.x = this._playIndex * this._pieceWidth;
        this.rect.y = this.rowIndex * this._pieceHeight;

        this.m_sprite.spriteFrame.setRect(this.rect);
        this._playIndex++;
    }

    /// <summary>
    /// 播放影片
    /// </summary>
    public play()
    {
        this.running = true;
    }

    /// <summary>
    /// 停止播放影片
    /// </summary>
    public stop()
    {
        this.running = false;
    }

    /// <summary>
    /// 跳帧播放
    /// </summary>
    /// <param name="frame">帧</param>
    public gotoAndPlay(frame:number)
    {
        this.running = true;
        this._playIndex = frame;
        this._playIndex = Mathf.clamp(this._playIndex, 0, this.col - 1);

    }

    /// <summary>
    /// 跳帧停止
    /// </summary>
    /// <param name="frame">帧</param>
    public gotoAndStop(frame:number)
    {
        this.running = false;

        this._playIndex = frame;
        this._playIndex = Mathf.clamp(this._playIndex, 0, this.col - 1);
        
        this.rect.x = this._playIndex * this._pieceWidth;
        this.rect.y = this.rowIndex * this._pieceHeight;
        this.m_sprite.spriteFrame.setRect(this.rect);
    }

}
