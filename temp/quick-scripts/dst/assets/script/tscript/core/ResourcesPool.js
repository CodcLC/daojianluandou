
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/ResourcesPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91bbdEQF+VFFaxnBCp51Gzy', 'ResourcesPool');
// script/tscript/core/ResourcesPool.ts

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
var ResourcesPool = /** @class */ (function (_super) {
    __extends(ResourcesPool, _super);
    function ResourcesPool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trash = {};
        return _this;
    }
    ResourcesPool_1 = ResourcesPool;
    Object.defineProperty(ResourcesPool, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ResourcesPool_1();
                this._instance.init();
                typeof (this);
            }
            return ResourcesPool_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    ResourcesPool.prototype.init = function () {
    };
    ResourcesPool.prototype.put = function (recycle, len) {
        if (len === void 0) { len = 100; }
        var key = recycle.getKey();
        if (!this.trash[key]) {
            this.trash[key] = [];
        }
        if (this.trash[key].length < len) {
            recycle.sleep();
            this.trash[key].push(recycle);
        }
        else {
            if (recycle instanceof cc.Component) {
                recycle.node.destroy();
            }
            else if (recycle instanceof cc.Object) {
                recycle.destroy();
            }
            else {
            }
            //销毁
        }
    };
    ResourcesPool.prototype.get = function (type) {
        var key;
        if (typeof type === 'function') {
            //key = (<Function>type).name;
            key = type.name;
        }
        else {
            key = type;
        }
        if (!this.trash[key] || this.trash[key].length == 0)
            return null;
        var obj = this.trash[key].shift();
        obj.awake();
        return obj;
    };
    var ResourcesPool_1;
    ResourcesPool = ResourcesPool_1 = __decorate([
        ccclass
    ], ResourcesPool);
    return ResourcesPool;
}(cc.Component));
exports.default = ResourcesPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxSZXNvdXJjZXNQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBMkVDO1FBckVXLFdBQUssR0FBc0IsRUFBRSxDQUFDOztJQXFFMUMsQ0FBQztzQkExRW9CLGFBQWE7SUFPOUIsc0JBQWtCLHlCQUFRO2FBQTFCO1lBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDekI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWEsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV0QixPQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFaEI7WUFDRCxPQUFPLGVBQWEsQ0FBQyxTQUFTLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTyw0QkFBSSxHQUFaO0lBR0EsQ0FBQztJQUVNLDJCQUFHLEdBQVYsVUFBVyxPQUFlLEVBQUMsR0FBZ0I7UUFBaEIsb0JBQUEsRUFBQSxTQUFnQjtRQUV2QyxJQUFJLEdBQUcsR0FBVSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ25CO1lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDL0I7WUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FFakM7YUFDRDtZQUNJLElBQUcsT0FBTyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQ2xDO2dCQUNtQixPQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzFDO2lCQUFLLElBQUcsT0FBTyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQ3JDO2dCQUNnQixPQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEM7aUJBQ0Q7YUFDQztZQUNELElBQUk7U0FDUDtJQUNMLENBQUM7SUFFTSwyQkFBRyxHQUFWLFVBQThCLElBQXNCO1FBRWhELElBQUksR0FBRyxDQUFDO1FBRVIsSUFBRyxPQUFPLElBQUksS0FBSyxVQUFVLEVBQzdCO1lBQ0ksOEJBQThCO1lBQzlCLEdBQUcsR0FBUyxJQUFLLENBQUMsSUFBSSxDQUFDO1NBQzFCO2FBQ0Q7WUFDSSxHQUFHLEdBQVcsSUFBSSxDQUFDO1NBQ3RCO1FBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVaLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7SUF6RWdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwRWpDO0lBQUQsb0JBQUM7Q0ExRUQsQUEwRUMsQ0ExRTBDLEVBQUUsQ0FBQyxTQUFTLEdBMEV0RDtrQkExRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc291cmNlc1Bvb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVzb3VyY2VzUG9vbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0cmFzaDp7W2tleTpzdHJpbmddOmFueVtdfT17fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBSZXNvdXJjZXNQb29sIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVzb3VyY2VzUG9vbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0eXBlb2YodGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzb3VyY2VzUG9vbC5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KClcclxuICAgIHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KHJlY3ljbGU6UmVjeWNsZSxsZW46bnVtYmVyID0gMTAwKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBrZXk6c3RyaW5nID0gcmVjeWNsZS5nZXRLZXkoKTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMudHJhc2hba2V5XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhc2hba2V5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnRyYXNoW2tleV0ubGVuZ3RoIDwgbGVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVjeWNsZS5zbGVlcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYXNoW2tleV0ucHVzaChyZWN5Y2xlKTtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHJlY3ljbGUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICg8Y2MuQ29tcG9uZW50PnJlY3ljbGUpLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZWN5Y2xlIGluc3RhbmNlb2YgY2MuT2JqZWN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoPGNjLk9iamVjdD5yZWN5Y2xlKS5kZXN0cm95KCk7IFxyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/plIDmr4FcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldDxUIGV4dGVuZHMgUmVjeWNsZT4odHlwZTpGdW5jdGlvbiB8IHN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2tleSA9ICg8RnVuY3Rpb24+dHlwZSkubmFtZTtcclxuICAgICAgICAgICAga2V5ID0gKDxhbnk+dHlwZSkubmFtZTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5ID0gPHN0cmluZz50eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMudHJhc2hba2V5XSB8fCB0aGlzLnRyYXNoW2tleV0ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB2YXIgb2JqOlQgPSB0aGlzLnRyYXNoW2tleV0uc2hpZnQoKTtcclxuICAgICAgICBvYmouYXdha2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWN5Y2xlIHtcclxuXHJcbiAgICBnZXRLZXkoKTpzdHJpbmc7XHJcbiAgICBhd2FrZSgpO1xyXG4gICAgc2xlZXAoKTtcclxuICAgIGRlc3Ryb3lTZWxmKCk7XHJcbn0iXX0=