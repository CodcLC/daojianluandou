
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBQ2xELDZDQUF3QztBQUN4QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBSTFDLDREQUF1RDtBQUd2RCxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBbVZDO1FBdFVHOztXQUVHO1FBQ0ssaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsc0JBQWdCLEdBQXFCLElBQUksQ0FBQztRQU0xQyx1QkFBaUIsR0FBc0IsSUFBSSxDQUFDO1FBTTVDLHVCQUFpQixHQUFzQixJQUFJLENBQUM7UUFNNUMsNkJBQXVCLEdBQXNCLElBQUksQ0FBQztRQUtsRCw2QkFBdUIsR0FFM0IsRUFBRSxDQUFDO1FBUUMseUJBQW1CLEdBQXNCLEVBQUUsQ0FBQztRQU81QyxtQkFBYSxHQUFHLEtBQUssQ0FBQzs7UUFxUjlCLGlCQUFpQjtJQUNyQixDQUFDO29CQWxWb0IsV0FBVztJQUc1QixzQkFBa0IsdUJBQVE7YUFBMUI7WUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUN6QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksYUFBVyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekI7WUFDRCxPQUFPLGFBQVcsQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFXRCxzQkFBVyx3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TSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDaEQ7Z0JBQ0ksSUFBRyxJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BFO29CQUNJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1YsTUFBTTtpQkFDVDthQUVKO1NBQ0o7UUFFRCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVNLDhCQUFRLEdBQWYsVUFBZ0IsSUFBVztRQUV2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksWUFBWSxHQUFtQixhQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUE7SUFDN0IsQ0FBQzs7SUEvVWdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrVi9CO0lBQUQsa0JBQUM7Q0FsVkQsQUFrVkMsQ0FsVndDLEVBQUUsQ0FBQyxTQUFTLEdBa1ZwRDtrQkFsVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlc291cmNlc01hbmFnZXIgZnJvbSBcIi4vUmVzb3VyY2VzTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YVN0b3JhZ2UgZnJvbSBcIi4vRGF0YVN0b3JhZ2VcIjtcclxuaW1wb3J0IFBsYXllckRhdGEgZnJvbSBcIi4uL2RhdGEvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgTGV2ZWxEYXRhIGZyb20gXCIuLi9kYXRhL0xldmVsRGF0YVwiO1xyXG5pbXBvcnQgTmFtZUNvbmZpZ0RhdGEgZnJvbSBcIi4uL2NvbmZpZ2RhdGEvTmFtZUNvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IExldmVsQ29uZmlnRGF0YSBmcm9tIFwiLi4vY29uZmlnZGF0YS9MZXZlbENvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IEtuaWZlQ29uZmlnRGF0YSBmcm9tIFwiLi4vY29uZmlnZGF0YS9LbmlmZUNvbmZpZ0RhdGFcIjtcclxuaW1wb3J0IEN1c3RvbUV2ZW50VHlwZSBmcm9tIFwiLi4vZXZlbnQvQ3VzdG9tRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBBY2NvdW50UmFua0RhdGEgZnJvbSBcIi4uL2NvbmZpZ2RhdGEvQWNjb3VudFJhbmtEYXRhXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRGF0YU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBEYXRhTWFuYWdlciB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9wbGF5ZXJEYXRhOlBsYXllckRhdGEgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2xldmVsRGF0YTpMZXZlbERhdGEgPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZUNvbmZpZ0RhdGFzOiBOYW1lQ29uZmlnRGF0YVtdID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgbmFtZUNvbmZpZ0RhdGFzKCk6IE5hbWVDb25maWdEYXRhW10gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVDb25maWdEYXRhcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sZXZlbENvbmZpZ0RhdGFzOiBMZXZlbENvbmZpZ0RhdGFbXSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGxldmVsQ29uZmlnRGF0YXMoKTogTGV2ZWxDb25maWdEYXRhW10gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsQ29uZmlnRGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfa25pZmVDb25maWdEYXRhczogS25pZmVDb25maWdEYXRhW10gPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBrbmlmZUNvbmZpZ0RhdGFzKCk6IEtuaWZlQ29uZmlnRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa25pZmVDb25maWdEYXRhcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfYWNjb3VudFJhbmtDb25maWdEYXRhczogQWNjb3VudFJhbmtEYXRhW10gPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBhY2NvdW50UmFua0NvbmZpZ0RhdGFzKCk6IEFjY291bnRSYW5rRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudFJhbmtDb25maWdEYXRhcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hY2NvdW50UmFua0NuZkRhdGFzRGljOiB7XHJcbiAgICAgICAgW2tleTogbnVtYmVyXTogQWNjb3VudFJhbmtEYXRhW107XHJcbiAgICB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGdldCBhY2NvdW50UmFua0NuZkRhdGFzRGljKCk6IHtcclxuICAgICAgICBba2V5OiBudW1iZXJdOiBBY2NvdW50UmFua0RhdGFbXTtcclxuICAgIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2NvdW50UmFua0NuZkRhdGFzRGljO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N0bGV2ZWxDb25maWdEYXRhczogTGV2ZWxDb25maWdEYXRhW10gPSBbXTtcclxuICAgIHB1YmxpYyBnZXQgY3RsZXZlbENvbmZpZ0RhdGFzKCk6IExldmVsQ29uZmlnRGF0YVtdIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdGxldmVsQ29uZmlnRGF0YXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2lzSm9zbkxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgLyoq5Y+R5biD54mI5pys5LiA54K56KaB5Yig6ZmkICovXHJcblxyXG4gICAgICAgIC8vRGF0YVN0b3JhZ2UucmVtb3ZlSXRlbShcInBsYXllckRhdGFcIik7XHJcbiAgICAgICAgLy9EYXRhU3RvcmFnZS5yZW1vdmVJdGVtKFwibGV2ZWxEYXRhXCIpO1xyXG4gICAgICAgIC8vRGF0YVN0b3JhZ2UucmVtb3ZlSXRlbShcImRheVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3phY3nva7mlbDmja5cclxuICAgIHB1YmxpYyBsb2FkQ29uZmlnRGF0YXMoY2FsbGJhY2s6RnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5faXNKb3NuTG9hZGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGpzb25BcnIgPSBbXCJMZXZlbFRhYmxlXCIsXCJOYW1lVGFibGVcIixcIktuaWZlVGFibGVcIixcIkFjY291bnRSYW5rVGFibGVcIl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc01nciA9IFJlc291cmNlc01hbmFnZXIuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICByZXNNZ3IubG9hZEpzb24oXCJMZXZlbFRhYmxlXCIsKGRhdGEsanNvbk5hbWUpPT57dGhpcy5fbGV2ZWxDb25maWdEYXRhcyA9IGRhdGE7IHJlbW92ZUpzb25pdGVtKGpzb25OYW1lKTt9KTtcclxuICAgICAgICByZXNNZ3IubG9hZEpzb24oXCJOYW1lVGFibGVcIiwoZGF0YSxqc29uTmFtZSk9Pnt0aGlzLl9uYW1lQ29uZmlnRGF0YXMgPSBkYXRhO3JlbW92ZUpzb25pdGVtKGpzb25OYW1lKTt9KTtcclxuICAgICAgICByZXNNZ3IubG9hZEpzb24oXCJLbmlmZVRhYmxlXCIsKGRhdGEsanNvbk5hbWUpPT57dGhpcy5fa25pZmVDb25maWdEYXRhcyA9IGRhdGE7cmVtb3ZlSnNvbml0ZW0oanNvbk5hbWUpO30pO1xyXG4gICAgICAgIHJlc01nci5sb2FkSnNvbihcIkFjY291bnRSYW5rVGFibGVcIiwoZGF0YSxqc29uTmFtZSk9Pnt0aGlzLl9hY2NvdW50UmFua0NvbmZpZ0RhdGFzID0gZGF0YTtyZW1vdmVKc29uaXRlbShqc29uTmFtZSk7fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh3YWl0LDAuMDIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHdhaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoanNvbkFyci5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbmZpZ0RhdGFMb2FkQ29tcCgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudW5zY2hlZHVsZSh3YWl0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2lzSm9zbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUpzb25pdGVtKGl0ZW06c3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0ganNvbkFyci5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZihpbmRleCA+PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBqc29uQXJyLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29uZmlnRGF0YUxvYWRDb21wKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIGxlbjpudW1iZXIgPSB0aGlzLl9hY2NvdW50UmFua0NvbmZpZ0RhdGFzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcmNuZmRhdGEgPSB0aGlzLl9hY2NvdW50UmFua0NvbmZpZ0RhdGFzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuX2FjY291bnRSYW5rQ25mRGF0YXNEaWNbYXJjbmZkYXRhLmxldmVsXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjb3VudFJhbmtDbmZEYXRhc0RpY1thcmNuZmRhdGEubGV2ZWxdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FjY291bnRSYW5rQ25mRGF0YXNEaWNbYXJjbmZkYXRhLmxldmVsXS5wdXNoKGFyY25mZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZW4gPSB0aGlzLl9sZXZlbENvbmZpZ0RhdGFzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZW47IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbGNuZmRhdGE6TGV2ZWxDb25maWdEYXRhID0gdGhpcy5fbGV2ZWxDb25maWdEYXRhc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGxldmVsY25mZGF0YS5jb250ZW50VHlwZSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3RsZXZlbENvbmZpZ0RhdGFzLnB1c2gobGV2ZWxjbmZkYXRhKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFFdmVyeURheSgpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBwcml2YXRlIHVwZGF0ZURhdGFFdmVyeURheSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9EYXRhU3RvcmFnZS5zZXRJdGVtKFwiZGF5XCIsXCIyMDE4LzExLzIyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB5ZXN0ZXJkYXk6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgeWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5LmdldERhdGUoKSAtIDEpO1xyXG5cclxuICAgICAgICB2YXIgbGFzdERheTpzdHJpbmcgPSBEYXRhU3RvcmFnZS5nZXRJdGVtKFwiZGF5XCIsdGhpcy5nZXRMb2NhbGVEYXRlU3RyaW5nKHllc3RlcmRheSkpO1xyXG5cclxuICAgICAgICAvL2NjLmxvZyhcIuS4iuasoeeZu+W9leaXtumXtFwiLGxhc3REYXksRGF0YVN0b3JhZ2UuZ2V0SXRlbShcImRheVwiLFwi5rKh5a2Y5YKoXCIpKTtcclxuICAgICAgICAvL3ZhciBkYXRlMTpEYXRlID0gbmV3IERhdGUoXCIyMDE4LzExLzE1IDAwOjAwOjAwXCIpO1xyXG4gICAgICAgIHZhciBsYXN0RGF0ZTpEYXRlID0gbmV3IERhdGUobGFzdERheSk7IC8v5LiK5LiA5qyh55qE5pel5pyfXHJcbiAgICAgICBcclxuICAgICAgICB2YXIgbm93RGF0ZTpEYXRlID0gbmV3IERhdGUodGhpcy5nZXRMb2NhbGVEYXRlU3RyaW5nKG5ldyBEYXRlKCkpKTsgLy/njrDlnKjnmoTml6XmnJ9cclxuXHJcbiAgICAgICAgdmFyIGRhdGVEaWZjID0gKG5vd0RhdGUuZ2V0VGltZSgpIC0gbGFzdERhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAvL2NjLmxvZyhcImRhdGVEaWZjXCIsZGF0ZURpZmMsdGhpcy5nZXRMb2NhbGVEYXRlU3RyaW5nKG5vd0RhdGUpLHRoaXMuZ2V0TG9jYWxlRGF0ZVN0cmluZyhuZXcgRGF0ZSgpKSx0aGlzLmdldFNpZ25JbkRhdGEoKS5sYXN0TG9naW5EYXkpO1xyXG5cclxuICAgICAgICB2YXIgY2hlY2tUaW1lciA9IGZ1bmN0aW9uKGR0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZihub3dEYXRlLmdldEhvdXJzKCk+PTYpLy/mr4/lpKnlh4zmmag254K56ZKf5Yi35paw5pWw5o2uXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaWsOeahOS4gOWkqeWIsOS6hlwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJEYXRhKCkubG9naW5kYXlzICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJEYXRhKCkudG9kYXlVc2VGYWNlID0gZmFsc2U7IC8v5q+P5aSp6YeN572u6KGo5oOF5piv5ZCm6K+V55SoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKGNoZWNrVGltZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIERhdGFTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIix0aGlzLmdldExvY2FsZURhdGVTdHJpbmcobm93RGF0ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoQ3VzdG9tRXZlbnRUeXBlLk5ld0RheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc2NoZWR1bGVPbmNlKGNoZWNrVGltZXIsMS4yNSk7Ly/pppbmrKHlv6vpgJ/mm7TmlrDkuIDkuItcclxuXHJcbiAgICAgICAgaWYoZGF0ZURpZmMgPj0gMSkvL+WmguaenOaYr+aWsOeahOS4gOWkqVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShjaGVja1RpbWVyLDUpO1xyXG4gICAgICAgICAgICBjaGVja1RpbWVyKDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZihkYXRlRGlmYyA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIueUqOaIt+aJi+WKqOiwg+S6huezu+e7n+aXtumXtFwiKTtcclxuICAgICAgICAgICAgLy90aGlzLnNjaGVkdWxlKGNoZWNrVGltZXIsNSk7XHJcbiAgICAgICAgICAgIC8vY2hlY2tUaW1lcigwKTtcclxuICAgICAgICAgICAgRGF0YVN0b3JhZ2Uuc2V0SXRlbShcImRheVwiLHRoaXMuZ2V0TG9jYWxlRGF0ZVN0cmluZyhub3dEYXRlKSk7Ly/ph43mlrDlrZjlgqjlvZPliY3ml7bpl7RcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2FsZURhdGVTdHJpbmcoZGF0ZTpEYXRlKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICAvL1wiMjAxOC8xMS8yMlwiXHJcbiAgICAgICAgdmFyIHllYXI6c3RyaW5nID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIG1vbjpudW1iZXIgPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBtb250aDpzdHJpbmcgPSBtb24gPCAxMCA/IFwiMFwiICsgbW9uIDogbW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIGRheTpzdHJpbmcgPSBkYXRlLmdldERhdGUoKSA8IDEwID8gXCIwXCIgKyBkYXRlLmdldERhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB5ZWFyICsgXCIvXCIgKyBtb250aCArIFwiL1wiICsgZGF5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm93VGltZSgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyRGF0YSgpOlBsYXllckRhdGFcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl9wbGF5ZXJEYXRhID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhID0gbmV3IFBsYXllckRhdGEoKTtcclxuICAgICAgICAgICAgdmFyIGxvY2FsRGF0YTpQbGF5ZXJEYXRhID0gSlNPTi5wYXJzZShEYXRhU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyRGF0YVwiKSk7XHJcblxyXG4gICAgICAgICAgICBpZihsb2NhbERhdGEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGxvY2FsRGF0YSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5fcGxheWVyRGF0YVtrZXldICE9IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJEYXRhW2tleV0gPSBsb2NhbERhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwicGxheWVyZGF0YVwiLHRoaXMuX3BsYXllckRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckRhdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzYXZlUGxheWVyRGF0YSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBEYXRhU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyRGF0YVwiLEpTT04uc3RyaW5naWZ5KHRoaXMuX3BsYXllckRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGV2ZWxEYXRhKCk6TGV2ZWxEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5fbGV2ZWxEYXRhID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9sZXZlbERhdGEgPSBuZXcgTGV2ZWxEYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciBsb2NhbERhdGE6UGxheWVyRGF0YSA9IEpTT04ucGFyc2UoRGF0YVN0b3JhZ2UuZ2V0SXRlbShcImxldmVsRGF0YVwiKSk7XHJcblxyXG4gICAgICAgICAgICBpZihsb2NhbERhdGEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGxvY2FsRGF0YSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5fbGV2ZWxEYXRhW2tleV0gIT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsRGF0YVtrZXldID0gbG9jYWxEYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlTGV2ZWxEYXRhKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIERhdGFTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbERhdGFcIixKU09OLnN0cmluZ2lmeSh0aGlzLl9sZXZlbERhdGEpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldE5hbWVDb25maWdEYXRhKGlkOm51bWJlcik6TmFtZUNvbmZpZ0RhdGFcclxuICAgIHtcclxuICAgICAgICBpZihpZCA8PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZUNvbmZpZ0RhdGFzW2lkIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExldmVsQ29uZmlnRGF0YShpZDpudW1iZXIpOkxldmVsQ29uZmlnRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGlmKGlkIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbENvbmZpZ0RhdGFzW2lkIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtuaWZlQ29uZmlnRGF0YShpZDpudW1iZXIpOktuaWZlQ29uZmlnRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGlmKGlkIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rbmlmZUNvbmZpZ0RhdGFzW2lkIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExldmVsSWQoc3RhcjpudW1iZXIpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHZhciBsZXZlQ25mZGF0YXMgPSB0aGlzLmxldmVsQ29uZmlnRGF0YXM7XHJcblxyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZihzdGFyID49IGxldmVDbmZkYXRhc1tsZXZlQ25mZGF0YXMubGVuZ3RoIC0gMV0uc3RhcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleCA9IGxldmVDbmZkYXRhcy5sZW5ndGggLSAxOyBcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZXZlQ25mZGF0YXMubGVuZ3RoIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihzdGFyID49IGxldmVDbmZkYXRhc1tpXS5zdGFycyAmJiBzdGFyIDwgbGV2ZUNuZmRhdGFzW2kgKyAxXS5zdGFycylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxldmVDbmZkYXRhc1tpbmRleF0uaWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMZXZlbChzdGFyOm51bWJlcik6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxldmVsSWQgPSB0aGlzLmdldExldmVsSWQoc3Rhcik7XHJcbiAgICAgICAgdmFyIGxldmVsY25mZGF0YTpMZXZlbENvbmZpZ0RhdGEgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbENvbmZpZ0RhdGFzW2xldmVsSWQgLSAxXTtcclxuICAgICAgICByZXR1cm4gbGV2ZWxjbmZkYXRhLmxldmVsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG5cclxuIl19