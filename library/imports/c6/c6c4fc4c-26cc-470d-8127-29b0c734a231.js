"use strict";
cc._RF.push(module, 'c6c4fxMJsxHDYEnKbDHNKIx', 'DataManager');
// script/tscript/core/DataManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesManager_1 = require("./ResourcesManager");
var DataStorage_1 = require("./DataStorage");
var PlayerData_1 = require("../data/PlayerData");
var LevelData_1 = require("../data/LevelData");
var CustomEventType_1 = require("../event/CustomEventType");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DataManager = /** @class */ (function (_super) {
    __extends(DataManager, _super);
    function DataManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 玩家数据
         */
        _this._playerData = null;
        _this._levelData = null;
        _this._nameConfigDatas = null;
        _this._levelConfigDatas = null;
        _this._knifeConfigDatas = null;
        _this._accountRankConfigDatas = null;
        _this._accountRankCnfDatasDic = {};
        _this._ctlevelConfigDatas = [];
        _this._isJosnLoaded = false;
        return _this;
        // update (dt) {}
    }
    DataManager_1 = DataManager;
    Object.defineProperty(DataManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new DataManager_1();
                this._instance.init();
            }
            return DataManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "nameConfigDatas", {
        get: function () {
            return this._nameConfigDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "levelConfigDatas", {
        get: function () {
            return this._levelConfigDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "knifeConfigDatas", {
        get: function () {
            return this._knifeConfigDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "accountRankConfigDatas", {
        get: function () {
            return this._accountRankConfigDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "accountRankCnfDatasDic", {
        get: function () {
            return this._accountRankCnfDatasDic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "ctlevelConfigDatas", {
        get: function () {
            return this._ctlevelConfigDatas;
        },
        enumerable: true,
        configurable: true
    });
    DataManager.prototype.init = function () {
        /**发布版本一点要删除 */
        //DataStorage.removeItem("playerData");
        //DataStorage.removeItem("levelData");
        //DataStorage.removeItem("day");
    };
    //加载配置数据
    DataManager.prototype.loadConfigDatas = function (callback) {
        var _this = this;
        if (this._isJosnLoaded) {
            callback();
            return;
        }
        var jsonArr = ["LevelTable", "NameTable", "KnifeTable", "AccountRankTable"];
        var resMgr = ResourcesManager_1.default.instance;
        resMgr.loadJson("LevelTable", function (data, jsonName) { _this._levelConfigDatas = data; removeJsonitem(jsonName); });
        resMgr.loadJson("NameTable", function (data, jsonName) { _this._nameConfigDatas = data; removeJsonitem(jsonName); });
        resMgr.loadJson("KnifeTable", function (data, jsonName) { _this._knifeConfigDatas = data; removeJsonitem(jsonName); });
        resMgr.loadJson("AccountRankTable", function (data, jsonName) { _this._accountRankConfigDatas = data; removeJsonitem(jsonName); });
        this.schedule(wait, 0.02);
        var self = this;
        function wait() {
            if (jsonArr.length == 0) {
                this.onConfigDataLoadComp();
                callback();
                self.unschedule(wait);
                self._isJosnLoaded = true;
            }
        }
        function removeJsonitem(item) {
            var index = jsonArr.indexOf(item);
            if (index >= 0) {
                jsonArr.splice(index, 1);
            }
        }
    };
    DataManager.prototype.onConfigDataLoadComp = function () {
        var len = this._accountRankConfigDatas.length;
        for (var i = 0; i < len; i++) {
            var arcnfdata = this._accountRankConfigDatas[i];
            if (!this._accountRankCnfDatasDic[arcnfdata.level]) {
                this._accountRankCnfDatasDic[arcnfdata.level] = [];
            }
            this._accountRankCnfDatasDic[arcnfdata.level].push(arcnfdata);
        }
        len = this._levelConfigDatas.length;
        for (var i = 0; i < len; i++) {
            var levelcnfdata = this._levelConfigDatas[i];
            if (levelcnfdata.contentType == 0) {
                continue;
            }
            this._ctlevelConfigDatas.push(levelcnfdata);
        }
        this.updateDataEveryDay();
    };
    DataManager.prototype.updateDataEveryDay = function () {
        //DataStorage.setItem("day","2018/11/22");
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var lastDay = DataStorage_1.default.getItem("day", this.getLocaleDateString(yesterday));
        //cc.log("上次登录时间",lastDay,DataStorage.getItem("day","没存储"));
        //var date1:Date = new Date("2018/11/15 00:00:00");
        var lastDate = new Date(lastDay); //上一次的日期
        var nowDate = new Date(this.getLocaleDateString(new Date())); //现在的日期
        var dateDifc = (nowDate.getTime() - lastDate.getTime()) / 86400000;
        //cc.log("dateDifc",dateDifc,this.getLocaleDateString(nowDate),this.getLocaleDateString(new Date()),this.getSignInData().lastLoginDay);
        var checkTimer = function (dt) {
            nowDate = new Date();
            if (nowDate.getHours() >= 6) //每天凌晨6点钟刷新数据
             {
                cc.log("新的一天到了");
                this.getPlayerData().logindays++;
                this.getPlayerData().todayUseFace = false; //每天重置表情是否试用
                this.savePlayerData();
                this.unschedule(checkTimer);
                DataStorage_1.default.setItem("day", this.getLocaleDateString(nowDate));
                cc.systemEvent.emit(CustomEventType_1.default.NewDay);
            }
        }.bind(this);
        //this.scheduleOnce(checkTimer,1.25);//首次快速更新一下
        if (dateDifc >= 1) //如果是新的一天
         {
            this.schedule(checkTimer, 5);
            checkTimer(0);
        }
        else if (dateDifc < 0) {
            //cc.log("用户手动调了系统时间");
            //this.schedule(checkTimer,5);
            //checkTimer(0);
            DataStorage_1.default.setItem("day", this.getLocaleDateString(nowDate)); //重新存储当前时间
        }
    };
    DataManager.prototype.getLocaleDateString = function (date) {
        //"2018/11/22"
        var year = date.getFullYear().toString();
        var mon = date.getMonth() + 1;
        var month = mon < 10 ? "0" + mon : mon.toString();
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
        return year + "/" + month + "/" + day;
    };
    DataManager.prototype.getNowTime = function () {
        return Date.now();
    };
    DataManager.prototype.getPlayerData = function () {
        if (this._playerData == null) {
            this._playerData = new PlayerData_1.default();
            var localData = JSON.parse(DataStorage_1.default.getItem("playerData"));
            if (localData) {
                for (var key in localData) {
                    if (typeof this._playerData[key] != "undefined") {
                        this._playerData[key] = localData[key];
                    }
                }
            }
            //cc.log("playerdata",this._playerData);
        }
        return this._playerData;
    };
    DataManager.prototype.savePlayerData = function () {
        DataStorage_1.default.setItem("playerData", JSON.stringify(this._playerData));
    };
    DataManager.prototype.getLevelData = function () {
        if (this._levelData == null) {
            this._levelData = new LevelData_1.default();
            var localData = JSON.parse(DataStorage_1.default.getItem("levelData"));
            if (localData) {
                for (var key in localData) {
                    if (typeof this._levelData[key] != "undefined") {
                        this._levelData[key] = localData[key];
                    }
                }
            }
        }
        return this._levelData;
    };
    DataManager.prototype.saveLevelData = function () {
        DataStorage_1.default.setItem("levelData", JSON.stringify(this._levelData));
    };
    DataManager.prototype.getNameConfigData = function (id) {
        if (id <= 0)
            return null;
        return this._nameConfigDatas[id - 1];
    };
    DataManager.prototype.getLevelConfigData = function (id) {
        if (id <= 0)
            return null;
        return this._levelConfigDatas[id - 1];
    };
    DataManager.prototype.getKnifeConfigData = function (id) {
        if (id <= 0)
            return null;
        return this._knifeConfigDatas[id - 1];
    };
    DataManager.prototype.getLevelId = function (star) {
        var leveCnfdatas = this.levelConfigDatas;
        var index = 0;
        if (star >= leveCnfdatas[leveCnfdatas.length - 1].stars) {
            index = leveCnfdatas.length - 1;
        }
        else {
            for (var i = 0; i < leveCnfdatas.length - 1; i++) {
                if (star >= leveCnfdatas[i].stars && star < leveCnfdatas[i + 1].stars) {
                    index = i;
                    break;
                }
            }
        }
        return leveCnfdatas[index].id;
    };
    DataManager.prototype.getLevel = function (star) {
        var levelId = this.getLevelId(star);
        var levelcnfdata = DataManager_1.instance.levelConfigDatas[levelId - 1];
        return levelcnfdata.level;
    };
    var DataManager_1;
    DataManager = DataManager_1 = __decorate([
        ccclass
    ], DataManager);
    return DataManager;
}(cc.Component));
exports.default = DataManager;

cc._RF.pop();