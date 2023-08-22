import View from "./base/View";
import MainUI from "./main/MainUI";
import SuccessPanel from "./result/SuccessPanel";
import MessageUI from "./message/MessageUI";
import RankUI from "./rank/RankUI";
import AccountUI from "./main/AccountUI";
import MatchingUI from "./main/MatchingUI";
import WXSdk from "../wx/WXSdk";
import WXOpenDataUI from "./main/WXOpenDataUI";
import UpgradeUI from "./main/UpgradeUI";
import LevelMessageUI from "./main/LevelMessageUI";
import TryOutUI from "./main/TryOutUI";

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

/**
 * 摊开管理类
 */
@ccclass
export default class UIManager extends cc.Component {

    private static _instance: UIManager;
    
    public static get instance(): UIManager {
        /*if(this._instance == null)
        {
            this._instance = new UIManager();
            this._instance.init();
        }*/
        return UIManager._instance;
    }
    

    @property(cc.Node)
    private viewLayers:Array<cc.Node> = [];

    private viewDic:{[key:string]:View} = {};

    @property(MainUI)
    public mainUI:MainUI = null;

    @property(SuccessPanel)
    public resultUI:SuccessPanel = null;

    @property(MessageUI)
    public messageUI:MessageUI = null;

    @property(RankUI)
    public rankUI:RankUI = null;

    @property(AccountUI)
    public accountUI:AccountUI = null;

    @property(MatchingUI)
    public matchingUI:MatchingUI = null;

    @property(WXOpenDataUI)
    public wxOpenDataUI:WXOpenDataUI = null;

    @property(UpgradeUI)
    public upgradeUI:UpgradeUI = null;

    @property(LevelMessageUI)
    public levelMessageUI:LevelMessageUI = null;

    @property(TryOutUI)
    public tryOutUI:TryOutUI = null;

    private tex:cc.Texture2D = new cc.Texture2D();

    private showOpenData:boolean = false;

    


    onLoad()
    {
        UIManager._instance = this;
        UIManager._instance.init();
    }

    private init()
    {
    }

    start()
    {

    }

    /*update(dt)
    {
  
    }*/



    /**
     * 打开一个界面
     * @param viewName 
     * @param callback 
     * @param layerType 
     * @param root 
     */
    public OpenView(viewName:string,callback:Function = null,layerType:LayerType = LayerType.popup,root:string = "prefab/view/")
    {
        var path = root + viewName;

        if(this.viewDic[viewName])
        {

            var view:View = this.viewDic[viewName];
            view.node.setParent(null);
            this.viewLayers[layerType].addChild(view.node);
            view.node.position = cc.Vec2.ZERO;
            view.open();

            if(callback)
            {
                callback.apply(this,[this.viewDic[viewName]]);
            }
            return;
        }

        cc.loader.loadRes(path,cc.Prefab,(err,prefab)=>{

            if(!err)
            {
                var node:cc.Node = cc.instantiate(prefab);
                var view:View = node.getComponent(View);
                //view.node.setParent(this.viewLayers[layerType]);
                view.node.setParent(null);
                this.viewLayers[layerType].addChild(view.node);
                view.node.position = cc.Vec2.ZERO;
                view.open();
                cc.log("加载到的资源",prefab,view.name);
                this.viewDic[viewName] = view;
                if(callback != null)
                {
                    callback.apply(this,[view]);
                }
                
            }else
            {
                cc.log("路径" + path + "找不到资源");
            }

        })
    }

    /**
     * 关闭一个界面
     * @param viewName 
     * @param isDele 
     */
    public closeView(viewName:string,isDele:boolean = true)
    {
        if(this.viewDic[viewName])
        {
            this.viewDic[viewName].close();
            this.viewDic[viewName].node.setParent(null);
            if(isDele)
            {
                this.viewDic[viewName].destroySelf();
                this.viewDic[viewName] = null;
                delete this.viewDic[viewName];
            }
        }
    }

    public getLayer(layerType:LayerType):cc.Node
    {
        return this.viewLayers[layerType];
    }


}

export class ViewName
{
    public static SuccessPanel = "SuccessPanel";
    public static FailPanel = "FailPanel";
    public static EmployeesView = "EmployeesView";
    public static EmployeesRecuitView = "EmployeesRecuitView";
    public static RankView = "RankView";
    public static GiftView = "GiftView";
    public static DGView = "DGView";
    public static IVView = "IVView";
    public static FarmLevelView = "FarmLevelView";
    public static BonusEffectView = "BonusEffectView";
    public static EmployeeUpView = "EmployeeUpView";
    public static OfflineView = "OfflineView";
    public static FarmAreaUpView = "FarmAreaUpView";
    public static SpeedUpView = "SpeedUpView";
    public static RewardEconomicView = "RewardEconomicView";
    
}

export enum LayerType
{
    back = 0,
    popup,
}


