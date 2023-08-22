"use strict";
cc._RF.push(module, '80113nWi9FNLaCAbUWEg+lL', 'Item');
// script/tscript/item/Item.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["none"] = 0] = "none";
    ItemType[ItemType["fhl"] = 1] = "fhl";
    ItemType[ItemType["rocket"] = 2] = "rocket";
    ItemType[ItemType["magnet"] = 3] = "magnet";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ItemType.none;
        return _this;
        // update (dt) {}
    }
    //@property
    //public value:number = 0;
    // LIFE-CYCLE CALLBACKS:
    Item.prototype.onLoad = function () { };
    Item.prototype.start = function () {
        //this.node.
    };
    Item.prototype.destroySelf = function () {
        this.node.destroy();
    };
    __decorate([
        property({ type: cc.Enum(ItemType) })
    ], Item.prototype, "type", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

cc._RF.pop();