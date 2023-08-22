// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


export default class Mathf {

    /**
     * 
     * @param dirNum 获得向量方向
     */
    public getDirValue(dirNum:number)
    {
        if(dirNum > 0)
        {
            return 1;
        }

        if(dirNum < 0)
        {
            return  -1;
        }

        return 0;
    }

    /**
     * 获得随机方向
     */
    public getRandomDir()
    {
        if(Math.random() >= 0.5)
        {
            return 1;
        }

        return -1;
    }

    public static lerp(numStart:number,numEnd:number,t:number):number
    {
        if(t > 1)
        {
            t = 1;
        }else if(t < 0)
        {
            t = 0
        }

        return numStart * (1 - t) + (numEnd * t);
    }
    
    public static clamp(value:number,minLimit:number,maxLimit:number)
    {
        if(value < minLimit)
        {
            return minLimit;
        }

        if(value > maxLimit)
        {
            return maxLimit;
        }

        return value;

    }

    /**
     * 
     * @param value 获得一个值的概率
     */
    public static probability(value:number)
    {
        return Math.random() < value;
    }

}
