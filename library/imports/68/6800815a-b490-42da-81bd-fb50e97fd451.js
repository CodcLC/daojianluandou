"use strict";
cc._RF.push(module, '68008FatJBC2oG9+1Dpf9RR', 'DataStorage');
// script/tscript/core/DataStorage.ts

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
var DataStorage = /** @class */ (function () {
    function DataStorage() {
    }
    Object.defineProperty(DataStorage, "wx", {
        get: function () {
            if (!this._wx) {
                this._wx = window["wx"];
            }
            return this._wx;
        },
        enumerable: true,
        configurable: true
    });
    DataStorage.getItem = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var value = this.getStorage(key);
        if (!value)
            return defaultValue;
        return value;
    };
    DataStorage.getIntItem = function (key, defaultValue) {
        var value = parseInt(this.getStorage(key));
        if (!value)
            return defaultValue;
        return value;
    };
    DataStorage.getFloatItem = function (key, defaultValue) {
        var value = parseFloat(this.getStorage(key));
        if (!value)
            return defaultValue;
        return value;
    };
    DataStorage.setItem = function (key, value) {
        //wx.setStorage(Object object)
        //wx.setStorageSync
        this.setStorage(key, value);
    };
    DataStorage.getStorage = function (key) {
        if (this.wx) {
            return this.wx.getStorageSync(key);
        }
        return cc.sys.localStorage.getItem(key);
    };
    DataStorage.setStorage = function (key, value) {
        if (this.wx) {
            this.wx.setStorage({ key: key, data: value });
        }
        else {
            cc.sys.localStorage.setItem(key, value);
        }
    };
    DataStorage.removeItem = function (key) {
        return cc.sys.localStorage.removeItem(key);
    };
    DataStorage.clearStorage = function () {
        if (this.wx) {
            this.wx.clearStorage();
        }
    };
    DataStorage._wx = null;
    DataStorage = __decorate([
        ccclass
    ], DataStorage);
    return DataStorage;
}());
exports.default = DataStorage;

cc._RF.pop();