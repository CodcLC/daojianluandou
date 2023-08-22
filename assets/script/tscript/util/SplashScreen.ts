// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


/// <summary>
/// 渐入渐出的状态
/// </summary>
export enum FadeStatus
{
    None,
    FadeIn,
    FadeWait,
    FadeOut,
    FadeFinish
}

/// <summary>
/// 渐入渐出的类型  
/// </summary>
export enum SplashType
{
    None,

    /// <summary>
    /// 只执行淡入或者淡出中的一种
    /// </summary>
    SingleOnly,

    /// <summary>
    /// 加载完场景才淡出
    /// </summary>
    LoadSceneThenFadeOut,

}

@ccclass
export default class SplashScreen extends cc.Component {

    public OnFadeInFinish:Function;

    public OnFadeOutFinish:Function;

    //Logo贴图
    public splashLogo:cc.Sprite;

    //渐入渐出速度
    public fadeSpeed:number = 0.5;

    //等待时间
    public waitDuration:number = 0.84;

    /// <summary>
    /// 渐入渐出类型
    /// </summary>
    @property({type:cc.Enum(SplashType)})
    private splashType:SplashType = SplashType.None;

    /// <summary>
    /// 渐入渐出的状态
    /// </summary>
    @property({type:cc.Enum(FadeStatus)})
    private mStatus:FadeStatus = FadeStatus.None;


    //Logo贴图位置
    private mSplashLogoPos:cc.Rect;

    //当前透明度
    private mAlpha:number = 0.0;

    //渐入结束到渐出的时间
    private waitTime:number;

    /// <summary>
    /// 延迟时间
    /// </summary>
    private delay:number;

    onLoad()
    {

    }

    start()
    {
        //计算Logo绘制的位置
        //this.mSplashLogoPos.x = (cc.winSize.width * 0.5 - 1920 * 0.5);
        //this.mSplashLogoPos.y = (cc.winSize.height * 0.5 - 1080 * 0.5);
        this.mSplashLogoPos.x = 0;
        this.mSplashLogoPos.y = 0;
        this.mSplashLogoPos.width = cc.winSize.width;
        this.mSplashLogoPos.height = cc.winSize.height;

    }

    /// <summary>
    /// 播发特效
    /// </summary>
    /// <param name="sceneLoadedFadeOut">是否是加载完场景后才淡出</param>
    public PlaySplash(fadeSpeed:number = 1.0,waitDuration:number = 0.85,delay:number = 0):void
    {
        this.fadeSpeed = fadeSpeed;
        this.waitDuration = waitDuration;
        this.delay = delay;
        this.splashType = SplashType.None;
        this.mStatus = FadeStatus.FadeIn;
    }

    /// <summary>
    /// 播放淡入特效
    /// </summary>
    public PlaySplashFadeIn(fadeSpeed:number = 1.0, delay:number = 0):void
    {
        this.fadeSpeed = fadeSpeed;
        this.delay = delay;
        this.splashType = SplashType.SingleOnly;
        this.mStatus = FadeStatus.FadeIn;
        this.mAlpha = 0.0;
    }

    /// <summary>
    /// 播放淡出特效
    /// </summary>
    public PlaySplashFadeOut(fadeSpeed:number = 1.0,delay:number = 0):void
    {
        this.fadeSpeed = fadeSpeed;
        this.delay = delay;
        this.splashType = SplashType.SingleOnly;
        this.mStatus = FadeStatus.FadeOut;
        this.mAlpha = 1.0;
    }

    update(dt)
    {

        if (this.delay > 0)
        {
            this.delay -= dt;
            return;
        }

        switch (this.mStatus)
        {
            case FadeStatus.FadeIn:

                this.mAlpha += this.fadeSpeed * dt;

                if (this.mAlpha >= 1.0)
                {
                    if(this.splashType != SplashType.SingleOnly)
                    {
                        this.mStatus = FadeStatus.FadeWait;
                        this.waitTime = this.waitDuration;
                    }
                    
                    this.mAlpha = 1.0;

                    if (this.OnFadeInFinish != null)
                    this.OnFadeInFinish();
                }

                break;
            case FadeStatus.FadeOut:

            this.mAlpha -= this.fadeSpeed * dt;

                if (this.mAlpha <= 0.0)
                {
                    this.mStatus = FadeStatus.FadeFinish;
                    this.mAlpha = 0.0;

                    if (this.OnFadeOutFinish != null)
                    this.OnFadeOutFinish();

                }

                break;
            case FadeStatus.FadeWait:

                if (this.splashType != SplashType.SingleOnly)
                {
                    this.waitTime -= dt;
                    if (this.waitTime <= 0)
                    {
                        this.mStatus = FadeStatus.FadeOut;
                        this.waitTime = 0;
                    }
                }
                
                break;
        }
    }
    lateUpdate()
    {
        if (this.splashLogo != null)
        {
            //绘制Logo
            //GUI.color = new Color(GUI.color.r, GUI.color.g, GUI.color.b, Mathf.Clamp(mAlpha, 0, 1));
            //GUI.DrawTexture(mSplashLogoPos, splashLogo);
        }

    }
    
    /*void OnLevelWasLoaded(int index)
    {
        if(splashType == SplashType.LoadSceneThenFadeOut)
        {
            mStatus = FadeStatus.FadeOut;
        }

        //PlaySplashFadeOut(0.5f,0.25f);

        OnFadeInFinish = null;
        OnFadeOutFinish = null;
    }*/

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
