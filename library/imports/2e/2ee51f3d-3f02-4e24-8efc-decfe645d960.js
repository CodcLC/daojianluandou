"use strict";
cc._RF.push(module, '2ee5189PwJOJI783s/mRdlg', 'ResourcesManager');
// script/tscript/core/ResourcesManager.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResourcesManager = /** @class */ (function (_super) {
    __extends(ResourcesManager, _super);
    function ResourcesManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jsonRoot = "configtable/";
        _this.prefabDic = {};
        return _this;
    }
    ResourcesManager_1 = ResourcesManager;
    Object.defineProperty(ResourcesManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ResourcesManager_1();
                this._instance.init();
            }
            return ResourcesManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    ResourcesManager.prototype.init = function () {
    };
    ResourcesManager.prototype.loadJson = function (jsonName, callback) {
        cc.loader.loadRes(this.jsonRoot + jsonName, function (error, data) {
            if (!error) {
                callback(data.json, jsonName);
            }
            else {
                cc.log("json" + jsonName + "加载失败 ", error);
            }
        });
    };
    ResourcesManager.prototype.load = function (prefabName, callback, type, isCache, isInstant, root) {
        var _this = this;
        if (type === void 0) { type = cc.Prefab; }
        if (isCache === void 0) { isCache = true; }
        if (isInstant === void 0) { isInstant = true; }
        if (root === void 0) { root = "prefab/"; }
        if (this.prefabDic[prefabName]) {
            if (isInstant) {
                var node = cc.instantiate(this.prefabDic[prefabName]);
                if (callback) {
                    callback(node);
                }
            }
            else {
                if (callback) {
                    callback(this.prefabDic[prefabName]);
                }
            }
            return;
        }
        var path = root + prefabName;
        cc.loader.loadRes(path, type, function (error, prefab) {
            if (!error) {
                if (isCache) {
                    _this.prefabDic[prefabName] = prefab;
                }
                if (isInstant) {
                    var node = cc.instantiate(prefab);
                    if (callback) {
                        callback(node);
                    }
                }
                else {
                    if (callback) {
                        callback(prefab);
                    }
                }
            }
            else {
                cc.log("加载资源失败 path", path, error.toString());
            }
        });
    };
    var ResourcesManager_1;
    ResourcesManager = ResourcesManager_1 = __decorate([
        ccclass
    ], ResourcesManager);
    return ResourcesManager;
}(cc.Component));
exports.default = ResourcesManager;

cc._RF.pop();