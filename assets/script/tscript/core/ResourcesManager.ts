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
export default class ResourcesManager extends cc.Component {

    private static _instance: ResourcesManager;
    public static get instance(): ResourcesManager {
        if(this._instance == null)
        {
            this._instance = new ResourcesManager();
            this._instance.init();
        }
        return ResourcesManager._instance;
    }

    private jsonRoot = "configtable/";

    private prefabDic:{[key:string]:cc.Prefab} = {};

    private init()
    {
        
    }


    public loadJson(jsonName:string,callback:Function) {
        cc.loader.loadRes(this.jsonRoot + jsonName,(error,data)=>{
            if(!error)
            {
                callback(data.json,jsonName);
            }else
            {
                cc.log( "json" + jsonName + "加载失败 ",error);
            }
        });
    }

    public load(prefabName:string,callback:Function,type:typeof cc.Asset = cc.Prefab,isCache:boolean = true,isInstant:boolean = true,root:string = "prefab/")
    {

        if(this.prefabDic[prefabName])
        {
            if(isInstant)
            {
                var node:cc.Node = cc.instantiate(this.prefabDic[prefabName]);
                if(callback)
                {
                    callback(node);
                }
            }else
            {
                if(callback)
                {
                    callback(this.prefabDic[prefabName]);
                }
            }
            
            return;
        }

        var path:string =  root + prefabName;
        cc.loader.loadRes(path,type,(error,prefab)=>{

            if(!error)
            {
                if(isCache)
                {
                    this.prefabDic[prefabName] = prefab;
                }
    
                if(isInstant)
                {
                    var node:cc.Node = cc.instantiate(prefab);
    
                    if(callback)
                    {
                        callback(node);
                    }
                }else
                {
                    if(callback)
                    {
                        callback(prefab);
                    }
                }
                
            }else
            {
                cc.log("加载资源失败 path",path,error.toString());
            }
            
        })
    }

}
