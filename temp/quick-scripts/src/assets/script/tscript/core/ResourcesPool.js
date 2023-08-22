"use strict";
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