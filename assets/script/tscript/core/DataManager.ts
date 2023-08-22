
import ResourcesManager from "./ResourcesManager";
import DataStorage from "./DataStorage";
import PlayerData from "../data/PlayerData";
import LevelData from "../data/LevelData";
import NameConfigData from "../configdata/NameConfigData";
import LevelConfigData from "../configdata/LevelConfigData";
import KnifeConfigData from "../configdata/KnifeConfigData";
import CustomEventType from "../event/CustomEventType";
import AccountRankData from "../configdata/AccountRankData";

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
export default class DataManager extends cc.Component {

    private static _instance: DataManager;
    public static get instance(): DataManager {
        if(this._instance == null)
        {
            this._instance = new DataManager();
            this._instance.init();
        }
        return DataManager._instance;
    }

    /**
     * 玩家数据
     */
    private _playerData:PlayerData = null;

    private _levelData:LevelData = null;
    

    private _nameConfigDatas: NameConfigData[] = null;
    public get nameConfigDatas(): NameConfigData[] 
    {
        return this._nameConfigDatas;
    }

    private _levelConfigDatas: LevelConfigData[] = null;
    public get levelConfigDatas(): LevelConfigData[] 
    {
        return this._levelConfigDatas;
    }

    private _knifeConfigDatas: KnifeConfigData[] = null;
    public get knifeConfigDatas(): KnifeConfigData[] {
        return this._knifeConfigDatas;
    }


    private _accountRankConfigDatas: AccountRankData[] = null;
    public get accountRankConfigDatas(): AccountRankData[] {
        return this._accountRankConfigDatas;
    }

    private _accountRankCnfDatasDic: {
        [key: number]: AccountRankData[];
    } = {};

    public get accountRankCnfDatasDic(): {
        [key: number]: AccountRankData[];
    } {
        return this._accountRankCnfDatasDic;
    }

    private _ctlevelConfigDatas: LevelConfigData[] = [];
    public get ctlevelConfigDatas(): LevelConfigData[] 
    {
        return this._ctlevelConfigDatas;
    }


    private _isJosnLoaded = false;

    private init()
    {
        /**发布版本一点要删除 */

        //DataStorage.removeItem("playerData");
        //DataStorage.removeItem("levelData");
        //DataStorage.removeItem("day");

    }

    //加载配置数据
    public loadConfigDatas(callback:Function)
    {
        if(this._isJosnLoaded)
        {
            callback();
            return;
        }

        var jsonArr = ["LevelTable","NameTable","KnifeTable","AccountRankTable"];
        
        var resMgr = ResourcesManager.instance;


        resMgr.loadJson("LevelTable",(data,jsonName)=>{this._levelConfigDatas = data; removeJsonitem(jsonName);});
        resMgr.loadJson("NameTable",(data,jsonName)=>{this._nameConfigDatas = data;removeJsonitem(jsonName);});
        resMgr.loadJson("KnifeTable",(data,jsonName)=>{this._knifeConfigDatas = data;removeJsonitem(jsonName);});
        resMgr.loadJson("AccountRankTable",(data,jsonName)=>{this._accountRankConfigDatas = data;removeJsonitem(jsonName);});
        
        this.schedule(wait,0.02);
        var self = this;


        function wait()
        {
            if(jsonArr.length == 0)
            {
                this.onConfigDataLoadComp();
                callback();
                self.unschedule(wait);
                self._isJosnLoaded = true;
            }
        }

        function removeJsonitem(item:string)
        {
            var index = jsonArr.indexOf(item);
            if(index >= 0)
            {
                jsonArr.splice(index,1);
            }
        }
    }

    private onConfigDataLoadComp()
    {

        var len:number = this._accountRankConfigDatas.length;

        for(var i = 0 ; i < len; i++)
        {
            var arcnfdata = this._accountRankConfigDatas[i];

            if(!this._accountRankCnfDatasDic[arcnfdata.level])
            {
                this._accountRankCnfDatasDic[arcnfdata.level] = [];
            }

            this._accountRankCnfDatasDic[arcnfdata.level].push(arcnfdata);
        }

        len = this._levelConfigDatas.length;

        for(var i = 0 ; i < len; i++)
        {
            var levelcnfdata:LevelConfigData = this._levelConfigDatas[i];

            if(levelcnfdata.contentType == 0)
            {
                continue;
            }

            this._ctlevelConfigDatas.push(levelcnfdata);

        }

        this.updateDataEveryDay();
    }

   
    private updateDataEveryDay()
    {
        //DataStorage.setItem("day","2018/11/22");
        
        var yesterday:Date = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        var lastDay:string = DataStorage.getItem("day",this.getLocaleDateString(yesterday));

        //cc.log("上次登录时间",lastDay,DataStorage.getItem("day","没存储"));
        //var date1:Date = new Date("2018/11/15 00:00:00");
        var lastDate:Date = new Date(lastDay); //上一次的日期
       
        var nowDate:Date = new Date(this.getLocaleDateString(new Date())); //现在的日期

        var dateDifc = (nowDate.getTime() - lastDate.getTime()) / 86400000;

        //cc.log("dateDifc",dateDifc,this.getLocaleDateString(nowDate),this.getLocaleDateString(new Date()),this.getSignInData().lastLoginDay);

        var checkTimer = function(dt)
        {
            nowDate = new Date();

            if(nowDate.getHours()>=6)//每天凌晨6点钟刷新数据
            {
                cc.log("新的一天到了");
                
                this.getPlayerData().logindays ++;
                this.getPlayerData().todayUseFace = false; //每天重置表情是否试用
                this.savePlayerData();

                this.unschedule(checkTimer);

                DataStorage.setItem("day",this.getLocaleDateString(nowDate));

                cc.systemEvent.emit(CustomEventType.NewDay);
            }
            
        }.bind(this);

        //this.scheduleOnce(checkTimer,1.25);//首次快速更新一下

        if(dateDifc >= 1)//如果是新的一天
        {
            this.schedule(checkTimer,5);
            checkTimer(0);
            
        }else if(dateDifc < 0)
        {
            //cc.log("用户手动调了系统时间");
            //this.schedule(checkTimer,5);
            //checkTimer(0);
            DataStorage.setItem("day",this.getLocaleDateString(nowDate));//重新存储当前时间
        }
    }

    public getLocaleDateString(date:Date):string
    {
        //"2018/11/22"
        var year:string = date.getFullYear().toString();
        var mon:number = date.getMonth() + 1;
        var month:string = mon < 10 ? "0" + mon : mon.toString();
        var day:string = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();

        return year + "/" + month + "/" + day;

    }

    public getNowTime():number
    {
        return Date.now();
    }


    public getPlayerData():PlayerData
    {
        if(this._playerData == null)
        {
            this._playerData = new PlayerData();
            var localData:PlayerData = JSON.parse(DataStorage.getItem("playerData"));

            if(localData)
            {
                for(var key in localData)
                {
                    if(typeof this._playerData[key] != "undefined")
                    {
                        this._playerData[key] = localData[key];
                    }
                }
            }

            //cc.log("playerdata",this._playerData);
        }

        return this._playerData;
    }
    
    public savePlayerData():void
    {
        DataStorage.setItem("playerData",JSON.stringify(this._playerData));
    }

    public getLevelData():LevelData
    {
        if(this._levelData == null)
        {
            this._levelData = new LevelData();
            var localData:PlayerData = JSON.parse(DataStorage.getItem("levelData"));

            if(localData)
            {
                for(var key in localData)
                {
                    if(typeof this._levelData[key] != "undefined")
                    {
                        this._levelData[key] = localData[key];
                    }
                }
            }
        }

        return this._levelData;
    }

    public saveLevelData():void
    {
        DataStorage.setItem("levelData",JSON.stringify(this._levelData));
    }


    public getNameConfigData(id:number):NameConfigData
    {
        if(id <= 0)
            return null;
        return this._nameConfigDatas[id - 1];
    }

    public getLevelConfigData(id:number):LevelConfigData
    {
        if(id <= 0)
            return null;
        return this._levelConfigDatas[id - 1];
    }

    public getKnifeConfigData(id:number):KnifeConfigData
    {
        if(id <= 0)
            return null;
        return this._knifeConfigDatas[id - 1];
    }

    public getLevelId(star:number):number
    {
        var leveCnfdatas = this.levelConfigDatas;

        var index:number = 0;

        if(star >= leveCnfdatas[leveCnfdatas.length - 1].stars)
        {
            index = leveCnfdatas.length - 1; 
        }else
        {
            for(var i = 0 ; i < leveCnfdatas.length - 1; i++)
            {
                if(star >= leveCnfdatas[i].stars && star < leveCnfdatas[i + 1].stars)
                {
                    index = i;
                    break;
                }
                
            }
        }

        return leveCnfdatas[index].id;

    }

    public getLevel(star:number):number
    {
        var levelId = this.getLevelId(star);
        var levelcnfdata:LevelConfigData = DataManager.instance.levelConfigDatas[levelId - 1];
        return levelcnfdata.level
    }

    // update (dt) {}
}

