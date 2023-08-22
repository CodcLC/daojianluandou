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
export default class DataStorage  {

    private static _wx: any = null;
    public static get wx(): any {
        if(!this._wx)
        {
            this._wx = window["wx"];
        }
        return this._wx;
    }


    public static getItem(key:string,defaultValue:any = null):any
    {
        var value = this.getStorage(key);

        if(!value)
            return defaultValue;

        return value;
    }


    public static getIntItem(key:string,defaultValue:number):number
    {
        var value = parseInt(this.getStorage(key));

        if(!value)
            return defaultValue;

        return value;
    }

    public static getFloatItem(key:string,defaultValue:number):number
    {
        var value = parseFloat(this.getStorage(key));

        if(!value)
            return defaultValue;

        return value;
    }

    public static setItem(key:string,value:any)
    {

        //wx.setStorage(Object object)
        //wx.setStorageSync

        this.setStorage(key,value);

    }

    public static getStorage(key:string):any
    {

        if(this.wx)
        {
            return this.wx.getStorageSync(key);
        }

        return cc.sys.localStorage.getItem(key);
    }

    public static setStorage(key:string,value:any):any
    {
        if(this.wx)
        {
            this.wx.setStorage({key: key, data: value});
        }else
        {
            cc.sys.localStorage.setItem(key,value);
        }
    }

    public static removeItem(key:string)
    {
        return cc.sys.localStorage.removeItem(key);
    }

    public static clearStorage()
    {
        if(this.wx)
        {
            this.wx.clearStorage();
        }
    }

}
