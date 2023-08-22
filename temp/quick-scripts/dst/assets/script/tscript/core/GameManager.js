
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/core/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3027iHD85Hg43cxeD7A4Ly', 'GameManager');
// script/tscript/core/GameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var PopupText_1 = require("../ui/common/PopupText");
var ResourcesPool_1 = require("./ResourcesPool");
var ResourcesManager_1 = require("./ResourcesManager");
var Knife_1 = require("../gamescene/Knife");
var Mark_1 = require("../gamescene/Mark");
var Player_1 = require("../gamescene/Player");
var Joystick_1 = require("../gamescene/Joystick");
var Guide_1 = require("../gamescene/Guide");
var MovieClip_1 = require("../util/MovieClip");
var Random_1 = require("../util/Random");
var BlackHole_1 = require("../gamescene/BlackHole");
var Item_1 = require("../item/Item");
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
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["none"] = 0] = "none";
    GameStatus[GameStatus["start"] = 1] = "start";
    GameStatus[GameStatus["over"] = 2] = "over";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.gameScene = null;
        _this.touchPlane = null;
        _this.playerPrefab = null;
        _this.knifePrefab = null;
        _this.markPrefab = null;
        _this.killEffectPrefab = null;
        _this.blackHolePrefab = null;
        _this.joystick = null;
        _this.guide = null;
        _this.bgImgs = [];
        _this.daoImgs = [];
        _this.levelImgs = [];
        _this.barrierPrefabArr = [];
        _this.itemPrefabArr = [];
        _this.gameStatus = GameStatus.none;
        return _this;
        /*start () {
    
        }*/
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    Object.defineProperty(GameManager, "instance", {
        get: function () {
            /*if(this._instance == null)
            {
                this._instance = new GameManager();
                this._instance.init();
            }*/
            return GameManager_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    /*@property(Product)
    private productList:Product[] = [];
    private productDic:{[key:number]:Product} = {};*/
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        GameManager_1._instance = this;
        //GameManager._instance.init();
    };
    GameManager.prototype.init = function () {
        //this.canvas = cc.find("Canvas");
    };
    GameManager.prototype.showPopupText = function (position, msg, size, color) {
        var _this = this;
        if (size === void 0) { size = 32; }
        if (color === void 0) { color = cc.Color.YELLOW; }
        var popupText = ResourcesPool_1.default.instance.get(PopupText_1.default);
        if (popupText) {
            popupText.node.setParent(this.canvas);
            popupText.node.position = position;
            popupText.showText(msg, size, color);
        }
        else {
            ResourcesManager_1.default.instance.load("PopupText", function (node) {
                popupText = node.getComponent(PopupText_1.default);
                popupText.node.setParent(_this.canvas);
                popupText.node.position = position;
                popupText.showText(msg, size, color);
            });
        }
    };
    GameManager.prototype.showPopupMsg = function (position, msg, size, color) {
        if (size === void 0) { size = 32; }
        if (color === void 0) { color = cc.Color.YELLOW; }
    };
    /**
     * 获得玩家
     */
    GameManager.prototype.getPlayer = function () {
        var node = cc.instantiate(this.playerPrefab);
        var player = node.getComponent(Player_1.default);
        player.node.position = cc.Vec2.ZERO;
        player.node.active = true;
        return player;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getKnife = function (type) {
        var knife = ResourcesPool_1.default.instance.get(Knife_1.default);
        if (knife) {
            return knife;
        }
        var node = cc.instantiate(this.knifePrefab);
        knife = node.getComponent(Knife_1.default);
        knife.node.position = cc.Vec2.ZERO;
        knife.type = type;
        knife.node.active = true;
        return knife;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getMark = function () {
        var node = cc.instantiate(this.markPrefab);
        var mark = node.getComponent(Mark_1.default);
        mark.node.position = cc.Vec2.ZERO;
        mark.node.active = true;
        return mark;
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getKillEffect = function () {
        var node = cc.instantiate(this.killEffectPrefab);
        var mc = node.getComponent(MovieClip_1.default);
        mc.node.position = cc.Vec2.ZERO;
        mc.node.active = true;
        return mc;
    };
    GameManager.prototype.getRandomBarrier = function (type) {
        var node = null;
        if (type == 0) {
            node = cc.instantiate(this.barrierPrefabArr[Random_1.default.RangeInteger(0, 4)]);
        }
        else {
            node = cc.instantiate(this.barrierPrefabArr[Random_1.default.RangeInteger(4, this.barrierPrefabArr.length)]);
        }
        node.position = cc.Vec2.ZERO;
        node.rotation = Random_1.default.RangeInteger(0, 360);
        node.active = true;
        return node;
    };
    GameManager.prototype.getBlackHole = function () {
        var node = cc.instantiate(this.blackHolePrefab);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(BlackHole_1.default);
    };
    /**
     * 获得飞刀
     */
    GameManager.prototype.getItemByType = function (type) {
        var node = cc.instantiate(this.itemPrefabArr[type - 1]);
        node.position = cc.Vec2.ZERO;
        node.active = true;
        return node.getComponent(Item_1.default);
    };
    var GameManager_1;
    /**
     * 玩家打开游戏后，玩了多少次游戏
     */
    GameManager.gameTimes = 0; //
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameScene", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "touchPlane", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "playerPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "knifePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "markPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "killEffectPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "blackHolePrefab", void 0);
    __decorate([
        property(Joystick_1.default)
    ], GameManager.prototype, "joystick", void 0);
    __decorate([
        property(Guide_1.default)
    ], GameManager.prototype, "guide", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "bgImgs", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "daoImgs", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "levelImgs", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "barrierPrefabArr", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "itemPrefabArr", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb3JlXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsNENBQXNEO0FBRXRELDBDQUFxQztBQUNyQyw4Q0FBeUM7QUFFekMsa0RBQTZDO0FBQzdDLDRDQUF1QztBQUN2QywrQ0FBMEM7QUFFMUMseUNBQW9DO0FBQ3BDLG9EQUErQztBQUMvQyxxQ0FBOEM7QUFHOUMsb0JBQW9CO0FBQ3BCLGlGQUFpRjtBQUNqRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDJGQUEyRjtBQUMzRixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUUxQyxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFFbEIsMkNBQVEsQ0FBQTtJQUNSLDZDQUFTLENBQUE7SUFDVCwyQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBR0Q7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUFvTkM7UUFyTVUsWUFBTSxHQUFXLElBQUksQ0FBQztRQUd0QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBSTlCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUdqQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBUyxJQUFJLENBQUM7UUFHbkIsWUFBTSxHQUFvQixFQUFFLENBQUM7UUFHN0IsYUFBTyxH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LEdBbU5wRDtrQkFuTm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9wdXBUZXh0IGZyb20gXCIuLi91aS9jb21tb24vUG9wdXBUZXh0XCI7XHJcbmltcG9ydCBSZXNvdXJjZXNQb29sIGZyb20gXCIuL1Jlc291cmNlc1Bvb2xcIjtcclxuaW1wb3J0IFJlc291cmNlc01hbmFnZXIgZnJvbSBcIi4vUmVzb3VyY2VzTWFuYWdlclwiO1xyXG5pbXBvcnQgS25pZmUsIHsgS25pZmVUeXBlIH0gZnJvbSBcIi4uL2dhbWVzY2VuZS9LbmlmZVwiO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuLi9nYW1lc2NlbmUvR2FtZVNjZW5lXCI7XHJcbmltcG9ydCBNYXJrIGZyb20gXCIuLi9nYW1lc2NlbmUvTWFya1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9nYW1lc2NlbmUvUGxheWVyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgSm95c3RpY2sgZnJvbSBcIi4uL2dhbWVzY2VuZS9Kb3lzdGlja1wiO1xyXG5pbXBvcnQgR3VpZGUgZnJvbSBcIi4uL2dhbWVzY2VuZS9HdWlkZVwiO1xyXG5pbXBvcnQgTW92aWVDbGlwIGZyb20gXCIuLi91dGlsL01vdmllQ2xpcFwiO1xyXG5pbXBvcnQgQmFycmllciBmcm9tIFwiLi4vZ2FtZXNjZW5lL0JhcnJpZXJcIjtcclxuaW1wb3J0IFJhbmRvbSBmcm9tIFwiLi4vdXRpbC9SYW5kb21cIjtcclxuaW1wb3J0IEJsYWNrSG9sZSBmcm9tIFwiLi4vZ2FtZXNjZW5lL0JsYWNrSG9sZVwiO1xyXG5pbXBvcnQgSXRlbSwgeyBJdGVtVHlwZSB9IGZyb20gXCIuLi9pdGVtL0l0ZW1cIjtcclxuXHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gR2FtZVN0YXR1c1xyXG57XHJcbiAgICBub25lID0gMCxcclxuICAgIHN0YXJ0ID0gMSxcclxuICAgIG92ZXIgPSAyLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEdhbWVNYW5hZ2VyIHtcclxuICAgICAgICAvKmlmKHRoaXMuX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lTWFuYWdlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIEdhbWVNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgY2FudmFzOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGdhbWVTY2VuZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyB0b3VjaFBsYW5lOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwdWJsaWMgcGxheWVyUHJlZmFiOmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwdWJsaWMga25pZmVQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIG1hcmtQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIGtpbGxFZmZlY3RQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIGJsYWNrSG9sZVByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShKb3lzdGljaylcclxuICAgIHB1YmxpYyBqb3lzdGljazpKb3lzdGljayA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShHdWlkZSlcclxuICAgIHB1YmxpYyBndWlkZTpHdWlkZSA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBiZ0ltZ3M6Y2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBkYW9JbWdzOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgbGV2ZWxJbWdzOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIGJhcnJpZXJQcmVmYWJBcnI6Y2MuUHJlZmFiW10gPSBbXTsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHB1YmxpYyBpdGVtUHJlZmFiQXJyOmNjLlByZWZhYltdID0gW107IFxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIGdhbWVTdGF0dXM6R2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMubm9uZTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnjqnlrrbmiZPlvIDmuLjmiI/lkI7vvIznjqnkuoblpJrlsJHmrKHmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lVGltZXM6bnVtYmVyID0gMDsvL1xyXG5cclxuICAgIC8qQHByb3BlcnR5KFByb2R1Y3QpXHJcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OlByb2R1Y3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0RGljOntba2V5Om51bWJlcl06UHJvZHVjdH0gPSB7fTsqL1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICBHYW1lTWFuYWdlci5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIC8vR2FtZU1hbmFnZXIuX2luc3RhbmNlLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dQb3B1cFRleHQocG9zaXRpb246Y2MuVmVjMixtc2c6c3RyaW5nLHNpemU6bnVtYmVyID0gMzIsY29sb3I6Y2MuQ29sb3IgPSBjYy5Db2xvci5ZRUxMT1cpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHBvcHVwVGV4dDpQb3B1cFRleHQgPSBSZXNvdXJjZXNQb29sLmluc3RhbmNlLmdldDxQb3B1cFRleHQ+KFBvcHVwVGV4dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocG9wdXBUZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9wdXBUZXh0Lm5vZGUuc2V0UGFyZW50KHRoaXMuY2FudmFzKTtcclxuICAgICAgICAgICAgcG9wdXBUZXh0Lm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgcG9wdXBUZXh0LnNob3dUZXh0KG1zZyxzaXplLGNvbG9yKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzb3VyY2VzTWFuYWdlci5pbnN0YW5jZS5sb2FkKFwiUG9wdXBUZXh0XCIsKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgICAgIHBvcHVwVGV4dCA9IG5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cFRleHQubm9kZS5zZXRQYXJlbnQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBUZXh0Lm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHBvcHVwVGV4dC5zaG93VGV4dChtc2csc2l6ZSxjb2xvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1BvcHVwTXNnKHBvc2l0aW9uOmNjLlZlYzIsbXNnOnN0cmluZyxzaXplOm51bWJlciA9IDMyLGNvbG9yOmNjLkNvbG9yID0gY2MuQ29sb3IuWUVMTE9XKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X546p5a62XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQbGF5ZXIoKTpQbGF5ZXJcclxuICAgIHtcclxuICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpO1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBub2RlLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgIHBsYXllci5ub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHBsYXllci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+mjnuWIgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0S25pZmUodHlwZTpLbmlmZVR5cGUpOktuaWZlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGtuaWZlOktuaWZlID0gUmVzb3VyY2VzUG9vbC5pbnN0YW5jZS5nZXQ8S25pZmU+KEtuaWZlKTtcclxuXHJcbiAgICAgICAgaWYoa25pZmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ga25pZmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5rbmlmZVByZWZhYik7XHJcbiAgICAgICAga25pZmUgPSBub2RlLmdldENvbXBvbmVudChLbmlmZSk7XHJcbiAgICAgICAga25pZmUubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBrbmlmZS50eXBlID0gdHlwZTtcclxuICAgICAgICBrbmlmZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBrbmlmZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+mjnuWIgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TWFyaygpOk1hcmtcclxuICAgIHtcclxuICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5tYXJrUHJlZmFiKTtcclxuICAgICAgICB2YXIgbWFyayA9IG5vZGUuZ2V0Q29tcG9uZW50KE1hcmspO1xyXG4gICAgICAgIG1hcmsubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBtYXJrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gbWFyaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+mjnuWIgFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0S2lsbEVmZmVjdCgpOk1vdmllQ2xpcFxyXG4gICAge1xyXG4gICAgICAgIHZhciBub2RlOmNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmtpbGxFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgIHZhciBtYyA9IG5vZGUuZ2V0Q29tcG9uZW50KE1vdmllQ2xpcCk7XHJcbiAgICAgICAgbWMubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBtYy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG1jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYW5kb21CYXJyaWVyKHR5cGU6bnVtYmVyKTpjYy5Ob2RlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5vZGU6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhcnJpZXJQcmVmYWJBcnJbUmFuZG9tLlJhbmdlSW50ZWdlcigwLDQpXSk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhcnJpZXJQcmVmYWJBcnJbUmFuZG9tLlJhbmdlSW50ZWdlcig0LHRoaXMuYmFycmllclByZWZhYkFyci5sZW5ndGgpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIG5vZGUucm90YXRpb24gPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKDAsMzYwKTtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJsYWNrSG9sZSgpOkJsYWNrSG9sZVxyXG4gICAge1xyXG4gICAgICAgIHZhciBub2RlOmNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsYWNrSG9sZVByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KEJsYWNrSG9sZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X6aOe5YiAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJdGVtQnlUeXBlKHR5cGU6SXRlbVR5cGUpOkl0ZW1cclxuICAgIHtcclxuICAgICAgICB2YXIgbm9kZTpjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiQXJyW3R5cGUgLSAxXSk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qc3RhcnQgKCkge1xyXG5cclxuICAgIH0qL1xyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19