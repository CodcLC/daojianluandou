"use strict";
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