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
export default class AnimationController extends cc.Component {

    @property(cc.SpriteFrame)
    public images:cc.SpriteFrame[] = [];

    @property()
    public frameTime:number = 0.1;

    /// <summary>
    /// 播放次数
    /// </summary>
    @property()
    public playTimes:number = 0;

    /// <summary>
    /// 播放完自动销毁
    /// </summary>
    @property()
    public autoDestroy:boolean = false;

    public frameNum:number = 0;

    public frameIndex:number = 0;


    public running:boolean = true;

    private m_render:cc.Sprite;

    private time:number = 0;

    private completeCallback:Function;

    private frameCallback:Function;

    private currentTimes:number = 0;

    onLoad()
    {
        this.m_render = this.getComponent(cc.Sprite);
    }

	// Use this for initialization
	start () {
        if (this.images.length != 0)
        {
            this.frameNum = this.images.length; 
        }

        this.time = this.frameTime;
	}
	
	// Update is called once per frame
    update (dt) {
      
        if (!this.running)
            return;
       
        if (this.images.length == 0)
            return;

        this.time -= dt;

        if (this.playTimes != 0 && this.currentTimes == this.playTimes)
            return;

        if (this.time <= 0)
        {
            this.time = this.frameTime;

            this.frameIndex = this.frameIndex % this.frameNum;

            this.m_render.spriteFrame = this.images[this.frameIndex];

            if (this.frameCallback != null)
            {
                this.frameCallback(this.frameIndex);
            }

            if (this.frameIndex == this.frameNum - 1)
            {
                this.currentTimes++;

                if (this.completeCallback != null)
                {
                    this.completeCallback();
                }

                if (this.autoDestroy)
                {
                    this.node.destroy();
                }
            }

            this.frameIndex++;

        }
	}

    /// <summary>
    /// 播放
    /// </summary>
    public play(completeCallback:Function = null, frameCallback:Function = null)
    {
        this.completeCallback = completeCallback;
        this.frameCallback = frameCallback;

        this.running = true;
        this.frameIndex = 0;
        this.currentTimes = 0;
        this.time = this.frameTime;
        if (this.images.length != 0)
        {
            this.frameNum = this.images.length;
        }
        if (this.m_render)
            this.m_render.spriteFrame = this.images[0];

    }

    public gotoAndPlay(frameIndex:number)
    {
    }

    /// <summary>
    /// 停止
    /// </summary>
    public stop()
    {
        this.running = false;
    }

    public gotoAndStop(frameIndex:Function)
    {
        if (this.frameIndex < 0)
            this.frameIndex = 0;

        if (this.frameIndex > this.images.length - 1)
            this.frameIndex = this.images.length - 1;

        this.m_render.spriteFrame = this.images[this.frameIndex];

        this.running = false;
    }

    public isPlayEnd():boolean
    {
        return this.frameIndex == this.frameNum;
    }


}
