
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/DataStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxEYXRhU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRzs7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFBO0lBd0ZBLENBQUM7SUFyRkcsc0JBQWtCLGlCQUFFO2FBQXBCO1lBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ1o7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFHYSxtQkFBTyxHQUFyQixVQUFzQixHQUFVLEVBQUMsWUFBdUI7UUFBdkIsNkJBQUEsRUFBQSxtQkFBdUI7UUFFcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQyxJQUFHLENBQUMsS0FBSztZQUNMLE9BQU8sWUFBWSxDQUFDO1FBRXhCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHYSxzQkFBVSxHQUF4QixVQUF5QixHQUFVLEVBQUMsWUFBbUI7UUFFbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFHLENBQUMsS0FBSztZQUNMLE9BQU8sWUFBWSxDQUFDO1FBRXhCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFYSx3QkFBWSxHQUExQixVQUEyQixHQUFVLEVBQUMsWUFBbUI7UUFFckQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QyxJQUFHLENBQUMsS0FBSztZQUNMLE9BQU8sWUFBWSxDQUFDO1FBRXhCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFYSxtQkFBTyxHQUFyQixVQUFzQixHQUFVLEVBQUMsS0FBUztRQUd0Qyw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBRW5CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFYSxzQkFBVSxHQUF4QixVQUF5QixHQUFVO1FBRy9CLElBQUcsSUFBSSxDQUFDLEVBQUUsRUFDVjtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFFRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsc0JBQVUsR0FBeEIsVUFBeUIsR0FBVSxFQUFDLEtBQVM7UUFFekMsSUFBRyxJQUFJLENBQUMsRUFBRSxFQUNWO1lBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQy9DO2FBQ0Q7WUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUVhLHNCQUFVLEdBQXhCLFVBQXlCLEdBQVU7UUFFL0IsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVhLHdCQUFZLEdBQTFCO1FBRUksSUFBRyxJQUFJLENBQUMsRUFBRSxFQUNWO1lBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFwRmMsZUFBRyxHQUFRLElBQUksQ0FBQztJQUZkLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3Ri9CO0lBQUQsa0JBQUM7Q0F4RkQsQUF3RkMsSUFBQTtrQkF4Rm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVN0b3JhZ2UgIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd3g6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3eCgpOiBhbnkge1xyXG4gICAgICAgIGlmKCF0aGlzLl93eClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3d4ID0gd2luZG93W1wid3hcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl93eDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJdGVtKGtleTpzdHJpbmcsZGVmYXVsdFZhbHVlOmFueSA9IG51bGwpOmFueVxyXG4gICAge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0U3RvcmFnZShrZXkpO1xyXG5cclxuICAgICAgICBpZighdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRJdGVtKGtleTpzdHJpbmcsZGVmYXVsdFZhbHVlOm51bWJlcik6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQodGhpcy5nZXRTdG9yYWdlKGtleSkpO1xyXG5cclxuICAgICAgICBpZighdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEZsb2F0SXRlbShrZXk6c3RyaW5nLGRlZmF1bHRWYWx1ZTpudW1iZXIpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5nZXRTdG9yYWdlKGtleSkpO1xyXG5cclxuICAgICAgICBpZighdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEl0ZW0oa2V5OnN0cmluZyx2YWx1ZTphbnkpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vd3guc2V0U3RvcmFnZShPYmplY3Qgb2JqZWN0KVxyXG4gICAgICAgIC8vd3guc2V0U3RvcmFnZVN5bmNcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKGtleSx2YWx1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RvcmFnZShrZXk6c3RyaW5nKTphbnlcclxuICAgIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy53eClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnd4LmdldFN0b3JhZ2VTeW5jKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdG9yYWdlKGtleTpzdHJpbmcsdmFsdWU6YW55KTphbnlcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnd4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy53eC5zZXRTdG9yYWdlKHtrZXk6IGtleSwgZGF0YTogdmFsdWV9KTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlSXRlbShrZXk6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyU3RvcmFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy53eClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMud3guY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=