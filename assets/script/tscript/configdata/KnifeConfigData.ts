// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


export default class KnifeConfigData{


    public id:number = 0;

    /**
     * 说明
     */
    public explain:string;

    /**
     * 累计星星数
     */
    public stars:number = 0;

    /**
     * 获得第一名次数
     */
    public num1:number = 0;

    /**
     * 连胜次数
     */
    public straking:number = 0;

    /**
     * 登录天数
     */
    public logindays:number = 0;

    /**
     * 一局游戏得到最大刀数
     */
    public knives:number = 0;

    /**
     * 时限内成为第一
     */
    public timelimitnum1:number = 0;

    /**
     * 累计击杀数
     */
    public kills:number = 0;

    /**
     * 累计游戏数
     */
    public games:number = 0;

    /**
     * 累计4杀次数
     */
    public kills4:number = 0;

    /**
     * 累计5杀次数
     */
    public kills5:number = 0;

    /**
     * 累计6杀次数
     */
    public kills6:number = 0;

    
}
