
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f6aeGt+WZA972S9YhvS8BF', 'UIManager');
// script/tscript/ui/UIManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./base/View");
var MainUI_1 = require("./main/MainUI");
var SuccessPanel_1 = require("./result/SuccessPanel");
var MessageUI_1 = require("./message/MessageUI");
var RankUI_1 = require("./rank/RankUI");
var AccountUI_1 = require("./main/AccountUI");
var MatchingUI_1 = require("./main/MatchingUI");
var WXOpenDataUI_1 = require("./main/WXOpenDataUI");
var UpgradeUI_1 = require("./main/UpgradeUI");
var LevelMessageUI_1 = require("./main/LevelMessageUI");
var TryOutUI_1 = require("./main/TryOutUI");
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
/**
 * 摊开管理类
 */
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewLayers = [];
        _this.viewDic = {};
        _this.mainUI = null;
        _this.resultUI = null;
        _this.messageUI = null;
        _this.rankUI = null;
        _this.accountUI = null;
        _this.matchingUI = null;
        _this.wxOpenDataUI = null;
        _this.upgradeUI = null;
        _this.levelMessageUI = null;
        _this.tryOutUI = null;
        _this.tex = new cc.Texture2D();
        _this.showOpenData = false;
        return _this;
    }
    UIManager_1 = UIManager;
    Object.defineProperty(UIManager, "instance", {
        get: function () {
            /*if(this._instance == null)
            {
                this._instance = new UIManager();
                this._instance.init();
            }*/
            return UIManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    UIManager.prototype.onLoad = function () {
        UIManager_1._instance = this;
        UIManager_1._instance.init();
    };
    UIManager.prototype.init = function () {
    };
    UIManager.prototype.start = function () {
    };
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
    UIManager.prototype.OpenView = function (viewName, callback, layerType, root) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (layerType === void 0) { layerType = LayerType.popup; }
        if (root === void 0) { root = "prefab/view/"; }
        var path = root + viewName;
        if (this.viewDic[viewName]) {
            var view = this.viewDic[viewName];
            view.node.setParent(null);
            this.viewLayers[layerType].addChild(view.node);
            view.node.position = cc.Vec2.ZERO;
            view.open();
            if (callback) {
                callback.apply(this, [this.viewDic[viewName]]);
            }
            return;
        }
        cc.loader.loadRes(path, cc.Prefab, function (err, prefab) {
            if (!err) {
                var node = cc.instantiate(prefab);
                var view = node.getComponent(View_1.default);
                //view.node.setParent(this.viewLayers[layerType]);
                view.node.setParent(null);
                _this.viewLayers[layerType].addChild(view.node);
                view.node.position = cc.Vec2.ZERO;
                view.open();
                cc.log("加载到的资源", prefab, view.name);
                _this.viewDic[viewName] = view;
                if (callback != null) {
                    callback.apply(_this, [view]);
                }
            }
            else {
                cc.log("路径" + path + "找不到资源");
            }
        });
    };
    /**
     * 关闭一个界面
     * @param viewName
     * @param isDele
     */
    UIManager.prototype.closeView = function (viewName, isDele) {
        if (isDele === void 0) { isDele = true; }
        if (this.viewDic[viewName]) {
            this.viewDic[viewName].close();
            this.viewDic[viewName].node.setParent(null);
            if (isDele) {
                this.viewDic[viewName].destroySelf();
                this.viewDic[viewName] = null;
                delete this.viewDic[viewName];
            }
        }
    };
    UIManager.prototype.getLayer = function (layerType) {
        return this.viewLayers[layerType];
    };
    var UIManager_1;
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "viewLayers", void 0);
    __decorate([
        property(MainUI_1.default)
    ], UIManager.prototype, "mainUI", void 0);
    __decorate([
        property(SuccessPanel_1.default)
    ], UIManager.prototype, "resultUI", void 0);
    __decorate([
        property(MessageUI_1.default)
    ], UIManager.prototype, "messageUI", void 0);
    __decorate([
        property(RankUI_1.default)
    ], UIManager.prototype, "rankUI", void 0);
    __decorate([
        property(AccountUI_1.default)
    ], UIManager.prototype, "accountUI", void 0);
    __decorate([
        property(MatchingUI_1.default)
    ], UIManager.prototype, "matchingUI", void 0);
    __decorate([
        property(WXOpenDataUI_1.default)
    ], UIManager.prototype, "wxOpenDataUI", void 0);
    __decorate([
        property(UpgradeUI_1.default)
    ], UIManager.prototype, "upgradeUI", void 0);
    __decorate([
        property(LevelMessageUI_1.default)
    ], UIManager.prototype, "levelMessageUI", void 0);
    __decorate([
        property(TryOutUI_1.default)
    ], UIManager.prototype, "tryOutUI", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;
var ViewName = /** @class */ (function () {
    function ViewName() {
    }
    ViewName.SuccessPanel = "SuccessPanel";
    ViewName.FailPanel = "FailPanel";
    ViewName.EmployeesView = "EmployeesView";
    ViewName.EmployeesRecuitView = "EmployeesRecuitView";
    ViewName.RankView = "RankView";
    ViewName.GiftView = "GiftView";
    ViewName.DGView = "DGView";
    ViewName.IVView = "IVView";
    ViewName.FarmLevelView = "FarmLevelView";
    ViewName.BonusEffectView = "BonusEffectView";
    ViewName.EmployeeUpView = "EmployeeUpView";
    ViewName.OfflineView = "OfflineView";
    ViewName.FarmAreaUpView = "FarmAreaUpView";
    ViewName.SpeedUpView = "SpeedUpView";
    ViewName.RewardEconomicView = "RewardEconomicView";
    return ViewName;
}());
exports.ViewName = ViewName;
var LayerType;
(function (LayerType) {
    LayerType[LayerType["back"] = 0] = "back";
    LayerType[LayerType["popup"] = 1] = "popup";
})(LayerType = exports.LayerType || (exports.LayerType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0Isd0NBQW1DO0FBQ25DLHNEQUFpRDtBQUNqRCxpREFBNEM7QUFDNUMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUN6QyxnREFBMkM7QUFFM0Msb0RBQStDO0FBQy9DLDhDQUF5QztBQUN6Qyx3REFBbUQ7QUFDbkQsNENBQXVDO0FBRXZDLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFFMUM7O0dBRUc7QUFFSDtJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQThKQztRQTlJVyxnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFFL0IsYUFBTyxHQUF1QixFQUFFLENBQUM7UUFHbEMsWUFBTSxHQUFVLElBQUksQ0FBQztRQUdyQixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFHckIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixvQkFBYyxHQUFrQixJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWdCLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXRDLGtCQUFZLEdBQVcsS0FBSyxDQUFDOztJQTBHekMsQ0FBQztrQkE3Sm9CLFNBQVM7SUFJMUIsc0JBQWtCLHFCQUFRO2FBQTFCO1lBQ0k7Ozs7ZUFJRztZQUNILE9BQU8sV0FBUyxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQTZDRCwwQkFBTSxHQUFOO1FBRUksV0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDM0IsV0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sd0JBQUksR0FBWjtJQUVBLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVEOzs7T0FHRztJQUlIOzs7Ozs7T0FNRztJQUNJLDRCQUFRLEdBQWYsVUFBZ0IsUUFBZSxFQUFDLFFBQXdCLEVBQUMsU0FBcUMsRUFBQyxJQUE0QjtRQUEzSCxpQkE0Q0M7UUE1QytCLHlCQUFBLEVBQUEsZUFBd0I7UUFBQywwQkFBQSxFQUFBLFlBQXNCLFNBQVMsQ0FBQyxLQUFLO1FBQUMscUJBQUEsRUFBQSxxQkFBNEI7UUFFdkgsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUUzQixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQ3pCO1lBRUksSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVosSUFBRyxRQUFRLEVBQ1g7Z0JBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUNELE9BQU87U0FDVjtRQUVELEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFDLFVBQUMsR0FBRyxFQUFDLE1BQU07WUFFeEMsSUFBRyxDQUFDLEdBQUcsRUFDUDtnQkFDSSxJQUFJLElBQUksR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO2dCQUN4QyxrREFBa0Q7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUcsUUFBUSxJQUFJLElBQUksRUFDbkI7b0JBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQjthQUVKO2lCQUNEO2dCQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQzthQUNqQztRQUVMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw2QkFBUyxHQUFoQixVQUFpQixRQUFlLEVBQUMsTUFBcUI7UUFBckIsdUJBQUEsRUFBQSxhQUFxQjtRQUVsRCxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQ3pCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBRyxNQUFNLEVBQ1Q7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQztTQUNKO0lBQ0wsQ0FBQztJQUVNLDRCQUFRLEdBQWYsVUFBZ0IsU0FBbUI7UUFFL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O0lBM0lEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ3FCO0lBS3ZDO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7NkNBQ1c7SUFHNUI7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzsrQ0FDYTtJQUdwQztRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7NkNBQ1c7SUFHNUI7UUFEQyxRQUFRLENBQUMsbUJBQVMsQ0FBQztnREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO2lEQUNlO0lBR3BDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7bURBQ2lCO0lBR3hDO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7Z0RBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztxREFDbUI7SUFHNUM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzsrQ0FDYTtJQS9DZixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNko3QjtJQUFELGdCQUFDO0NBN0pELEFBNkpDLENBN0pzQyxFQUFFLENBQUMsU0FBUyxHQTZKbEQ7a0JBN0pvQixTQUFTO0FBK0o5QjtJQUFBO0lBa0JBLENBQUM7SUFoQmlCLHFCQUFZLEdBQUcsY0FBYyxDQUFDO0lBQzlCLGtCQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLHNCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLDRCQUFtQixHQUFHLHFCQUFxQixDQUFDO0lBQzVDLGlCQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3RCLGlCQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3RCLGVBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsZUFBTSxHQUFHLFFBQVEsQ0FBQztJQUNsQixzQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyx3QkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHVCQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEMsb0JBQVcsR0FBRyxhQUFhLENBQUM7SUFDNUIsdUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNsQyxvQkFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1QiwyQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztJQUU1RCxlQUFDO0NBbEJELEFBa0JDLElBQUE7QUFsQlksNEJBQVE7QUFvQnJCLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUVqQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNULENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCIuL2Jhc2UvVmlld1wiO1xyXG5pbXBvcnQgTWFpblVJIGZyb20gXCIuL21haW4vTWFpblVJXCI7XHJcbmltcG9ydCBTdWNjZXNzUGFuZWwgZnJvbSBcIi4vcmVzdWx0L1N1Y2Nlc3NQYW5lbFwiO1xyXG5pbXBvcnQgTWVzc2FnZVVJIGZyb20gXCIuL21lc3NhZ2UvTWVzc2FnZVVJXCI7XHJcbmltcG9ydCBSYW5rVUkgZnJvbSBcIi4vcmFuay9SYW5rVUlcIjtcclxuaW1wb3J0IEFjY291bnRVSSBmcm9tIFwiLi9tYWluL0FjY291bnRVSVwiO1xyXG5pbXBvcnQgTWF0Y2hpbmdVSSBmcm9tIFwiLi9tYWluL01hdGNoaW5nVUlcIjtcclxuaW1wb3J0IFdYU2RrIGZyb20gXCIuLi93eC9XWFNka1wiO1xyXG5pbXBvcnQgV1hPcGVuRGF0YVVJIGZyb20gXCIuL21haW4vV1hPcGVuRGF0YVVJXCI7XHJcbmltcG9ydCBVcGdyYWRlVUkgZnJvbSBcIi4vbWFpbi9VcGdyYWRlVUlcIjtcclxuaW1wb3J0IExldmVsTWVzc2FnZVVJIGZyb20gXCIuL21haW4vTGV2ZWxNZXNzYWdlVUlcIjtcclxuaW1wb3J0IFRyeU91dFVJIGZyb20gXCIuL21haW4vVHJ5T3V0VUlcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog5pGK5byA566h55CG57G7XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVUlNYW5hZ2VyO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBVSU1hbmFnZXIge1xyXG4gICAgICAgIC8qaWYodGhpcy5faW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFVJTWFuYWdlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIFVJTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgdmlld0xheWVyczpBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgdmlld0RpYzp7W2tleTpzdHJpbmddOlZpZXd9ID0ge307XHJcblxyXG4gICAgQHByb3BlcnR5KE1haW5VSSlcclxuICAgIHB1YmxpYyBtYWluVUk6TWFpblVJID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoU3VjY2Vzc1BhbmVsKVxyXG4gICAgcHVibGljIHJlc3VsdFVJOlN1Y2Nlc3NQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1lc3NhZ2VVSSlcclxuICAgIHB1YmxpYyBtZXNzYWdlVUk6TWVzc2FnZVVJID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUmFua1VJKVxyXG4gICAgcHVibGljIHJhbmtVSTpSYW5rVUkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShBY2NvdW50VUkpXHJcbiAgICBwdWJsaWMgYWNjb3VudFVJOkFjY291bnRVSSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1hdGNoaW5nVUkpXHJcbiAgICBwdWJsaWMgbWF0Y2hpbmdVSTpNYXRjaGluZ1VJID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoV1hPcGVuRGF0YVVJKVxyXG4gICAgcHVibGljIHd4T3BlbkRhdGFVSTpXWE9wZW5EYXRhVUkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShVcGdyYWRlVUkpXHJcbiAgICBwdWJsaWMgdXBncmFkZVVJOlVwZ3JhZGVVSSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExldmVsTWVzc2FnZVVJKVxyXG4gICAgcHVibGljIGxldmVsTWVzc2FnZVVJOkxldmVsTWVzc2FnZVVJID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVHJ5T3V0VUkpXHJcbiAgICBwdWJsaWMgdHJ5T3V0VUk6VHJ5T3V0VUkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGV4OmNjLlRleHR1cmUyRCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuXHJcbiAgICBwcml2YXRlIHNob3dPcGVuRGF0YTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgVUlNYW5hZ2VyLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KClcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gIFxyXG4gICAgfSovXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOS4gOS4queVjOmdolxyXG4gICAgICogQHBhcmFtIHZpZXdOYW1lIFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFxyXG4gICAgICogQHBhcmFtIGxheWVyVHlwZSBcclxuICAgICAqIEBwYXJhbSByb290IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlblZpZXcodmlld05hbWU6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbCxsYXllclR5cGU6TGF5ZXJUeXBlID0gTGF5ZXJUeXBlLnBvcHVwLHJvb3Q6c3RyaW5nID0gXCJwcmVmYWIvdmlldy9cIilcclxuICAgIHtcclxuICAgICAgICB2YXIgcGF0aCA9IHJvb3QgKyB2aWV3TmFtZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52aWV3RGljW3ZpZXdOYW1lXSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlldzpWaWV3ID0gdGhpcy52aWV3RGljW3ZpZXdOYW1lXTtcclxuICAgICAgICAgICAgdmlldy5ub2RlLnNldFBhcmVudChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3TGF5ZXJzW2xheWVyVHlwZV0uYWRkQ2hpbGQodmlldy5ub2RlKTtcclxuICAgICAgICAgICAgdmlldy5ub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICB2aWV3Lm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLFt0aGlzLnZpZXdEaWNbdmlld05hbWVdXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCxjYy5QcmVmYWIsKGVycixwcmVmYWIpPT57XHJcblxyXG4gICAgICAgICAgICBpZighZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHZhciB2aWV3OlZpZXcgPSBub2RlLmdldENvbXBvbmVudChWaWV3KTtcclxuICAgICAgICAgICAgICAgIC8vdmlldy5ub2RlLnNldFBhcmVudCh0aGlzLnZpZXdMYXllcnNbbGF5ZXJUeXBlXSk7XHJcbiAgICAgICAgICAgICAgICB2aWV3Lm5vZGUuc2V0UGFyZW50KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGF5ZXJzW2xheWVyVHlwZV0uYWRkQ2hpbGQodmlldy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHZpZXcubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIHZpZXcub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L295Yiw55qE6LWE5rqQXCIscHJlZmFiLHZpZXcubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdEaWNbdmlld05hbWVdID0gdmlldztcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcyxbdmlld10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIui3r+W+hFwiICsgcGF0aCArIFwi5om+5LiN5Yiw6LWE5rqQXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63kuIDkuKrnlYzpnaJcclxuICAgICAqIEBwYXJhbSB2aWV3TmFtZSBcclxuICAgICAqIEBwYXJhbSBpc0RlbGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZVZpZXcodmlld05hbWU6c3RyaW5nLGlzRGVsZTpib29sZWFuID0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnZpZXdEaWNbdmlld05hbWVdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3RGljW3ZpZXdOYW1lXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdEaWNbdmlld05hbWVdLm5vZGUuc2V0UGFyZW50KG51bGwpO1xyXG4gICAgICAgICAgICBpZihpc0RlbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0RpY1t2aWV3TmFtZV0uZGVzdHJveVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0RpY1t2aWV3TmFtZV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudmlld0RpY1t2aWV3TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExheWVyKGxheWVyVHlwZTpMYXllclR5cGUpOmNjLk5vZGVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3TGF5ZXJzW2xheWVyVHlwZV07XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdOYW1lXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgU3VjY2Vzc1BhbmVsID0gXCJTdWNjZXNzUGFuZWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRmFpbFBhbmVsID0gXCJGYWlsUGFuZWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRW1wbG95ZWVzVmlldyA9IFwiRW1wbG95ZWVzVmlld1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFbXBsb3llZXNSZWN1aXRWaWV3ID0gXCJFbXBsb3llZXNSZWN1aXRWaWV3XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmtWaWV3ID0gXCJSYW5rVmlld1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBHaWZ0VmlldyA9IFwiR2lmdFZpZXdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgREdWaWV3ID0gXCJER1ZpZXdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVZWaWV3ID0gXCJJVlZpZXdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRmFybUxldmVsVmlldyA9IFwiRmFybUxldmVsVmlld1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBCb251c0VmZmVjdFZpZXcgPSBcIkJvbnVzRWZmZWN0Vmlld1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFbXBsb3llZVVwVmlldyA9IFwiRW1wbG95ZWVVcFZpZXdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT2ZmbGluZVZpZXcgPSBcIk9mZmxpbmVWaWV3XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZhcm1BcmVhVXBWaWV3ID0gXCJGYXJtQXJlYVVwVmlld1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTcGVlZFVwVmlldyA9IFwiU3BlZWRVcFZpZXdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUmV3YXJkRWNvbm9taWNWaWV3ID0gXCJSZXdhcmRFY29ub21pY1ZpZXdcIjtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMYXllclR5cGVcclxue1xyXG4gICAgYmFjayA9IDAsXHJcbiAgICBwb3B1cCxcclxufVxyXG5cclxuXHJcbiJdfQ==