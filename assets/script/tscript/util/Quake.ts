import Random from "./Random";

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
export default class Quake extends cc.Component {

    // 震动幅度
    @property
    public  shakeLevel:number = 3;
    // 震动时间
    @property
    public  setShakeTime:number = 0.2;
    // 震动的FPS
    @property
    public  shakeFps:number = 45;

    private  fps;
    private  shakeTime = 0.0;
    private  frameTime = 0.0;
    private  shakeDelta = 0.005;


    public isShake:boolean = false;


    private basePos:cc.Vec2;

    onLoad()
    {
        this.basePos = this.node.position;

        //this.shakeLevel = 5;
        //changeRect = new Rect(0.0f, 0.0f, 1.0f, 1.0f);
    }

    // Use this for initialization
    start()
    {
        this.shakeTime = this.setShakeTime;
        this.fps = this.shakeFps;
        this.frameTime = 0.03;
        this.shakeDelta = 0.005;
    }

// Update is called once per frame
    update(dt)
    {
        if (this.isShake)
        {
            if (this.shakeTime > 0)
            {
                this.shakeTime -= dt;
                if (this.shakeTime <= 0)
                {
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
                else
                {
                    this.frameTime += dt;

                    if (this.frameTime > 1.0 / this.fps)
                    {
                        this.frameTime = 0;
                        //changeRect.xMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //changeRect.yMin = shakeDelta * (-1.0f + shakeLevel * Random.value);
                        //selfCamera.rect = changeRect;
                        this.node.position = this.basePos.add(cc.v2(Random.Range(-this.shakeLevel,this.shakeLevel),Random.Range(-this.shakeLevel,this.shakeLevel)));
                    }
                }
            }
        }
    }

    public shake(time:number = 0)
    {
        this.isShake = true;

        if(time != 0)
        {
            this.shakeTime = time;
        }else
        {
            this.shakeTime = this.setShakeTime;
        }
    }

}
