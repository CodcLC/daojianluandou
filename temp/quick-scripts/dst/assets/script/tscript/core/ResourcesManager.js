
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/ResourcesManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxSZXNvdXJjZXNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBRDFEO1FBQUEscUVBNEZDO1FBL0VXLGNBQVEsR0FBRyxjQUFjLENBQUM7UUFFMUIsZUFBUyxHQUE0QixFQUFFLENBQUM7O0lBNkVwRCxDQUFDO3lCQTNGb0IsZ0JBQWdCO0lBR2pDLHNCQUFrQiw0QkFBUTthQUExQjtZQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQ3pCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxrQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFNTywrQkFBSSxHQUFaO0lBR0EsQ0FBQztJQUdNLG1DQUFRLEdBQWYsVUFBZ0IsUUFBZSxFQUFDLFFBQWlCO1FBQzdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFDLFVBQUMsS0FBSyxFQUFDLElBQUk7WUFDbEQsSUFBRyxDQUFDLEtBQUssRUFDVDtnQkFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsQ0FBQzthQUNoQztpQkFDRDtnQkFDSSxFQUFFLENBQUMsR0FBRyxDQUFFLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQUksR0FBWCxVQUFZLFVBQWlCLEVBQUMsUUFBaUIsRUFBQyxJQUFnQyxFQUFDLE9BQXNCLEVBQUMsU0FBd0IsRUFBQyxJQUF1QjtRQUF4SixpQkF1REM7UUF2RCtDLHFCQUFBLEVBQUEsT0FBdUIsRUFBRSxDQUFDLE1BQU07UUFBQyx3QkFBQSxFQUFBLGNBQXNCO1FBQUMsMEJBQUEsRUFBQSxnQkFBd0I7UUFBQyxxQkFBQSxFQUFBLGdCQUF1QjtRQUdwSixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQzdCO1lBQ0ksSUFBRyxTQUFTLEVBQ1o7Z0JBQ0ksSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUcsUUFBUSxFQUNYO29CQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEI7YUFDSjtpQkFDRDtnQkFDSSxJQUFHLFFBQVEsRUFDWDtvQkFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUNKO1lBRUQsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLEdBQVcsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFVBQUMsS0FBSyxFQUFDLE1BQU07WUFFckMsSUFBRyxDQUFDLEtBQUssRUFDVDtnQkFDSSxJQUFHLE9BQU8sRUFDVjtvQkFDSSxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztpQkFDdkM7Z0JBRUQsSUFBRyxTQUFTLEVBQ1o7b0JBQ0ksSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUMsSUFBRyxRQUFRLEVBQ1g7d0JBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNsQjtpQkFDSjtxQkFDRDtvQkFDSSxJQUFHLFFBQVEsRUFDWDt3QkFDSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2FBRUo7aUJBQ0Q7Z0JBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQy9DO1FBRUwsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQXpGZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EyRnBDO0lBQUQsdUJBQUM7Q0EzRkQsQUEyRkMsQ0EzRjZDLEVBQUUsQ0FBQyxTQUFTLEdBMkZ6RDtrQkEzRm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvdXJjZXNNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJlc291cmNlc01hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBSZXNvdXJjZXNNYW5hZ2VyIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVzb3VyY2VzTWFuYWdlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNvdXJjZXNNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGpzb25Sb290ID0gXCJjb25maWd0YWJsZS9cIjtcclxuXHJcbiAgICBwcml2YXRlIHByZWZhYkRpYzp7W2tleTpzdHJpbmddOmNjLlByZWZhYn0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbG9hZEpzb24oanNvbk5hbWU6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModGhpcy5qc29uUm9vdCArIGpzb25OYW1lLChlcnJvcixkYXRhKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuanNvbixqc29uTmFtZSk7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyggXCJqc29uXCIgKyBqc29uTmFtZSArIFwi5Yqg6L295aSx6LSlIFwiLGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKHByZWZhYk5hbWU6c3RyaW5nLGNhbGxiYWNrOkZ1bmN0aW9uLHR5cGU6dHlwZW9mIGNjLkFzc2V0ID0gY2MuUHJlZmFiLGlzQ2FjaGU6Ym9vbGVhbiA9IHRydWUsaXNJbnN0YW50OmJvb2xlYW4gPSB0cnVlLHJvb3Q6c3RyaW5nID0gXCJwcmVmYWIvXCIpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJlZmFiRGljW3ByZWZhYk5hbWVdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXNJbnN0YW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJEaWNbcHJlZmFiTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMucHJlZmFiRGljW3ByZWZhYk5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhdGg6c3RyaW5nID0gIHJvb3QgKyBwcmVmYWJOYW1lO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsdHlwZSwoZXJyb3IscHJlZmFiKT0+e1xyXG5cclxuICAgICAgICAgICAgaWYoIWVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0NhY2hlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmFiRGljW3ByZWZhYk5hbWVdID0gcHJlZmFiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc0luc3RhbnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGU6Y2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3otYTmupDlpLHotKUgcGF0aFwiLHBhdGgsZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19