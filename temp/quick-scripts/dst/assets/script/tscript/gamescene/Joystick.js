
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a090NbeXdJc6B23POj/ba4', 'Joystick');
// script/tscript/gamescene/Joystick.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameScene_1 = require("./GameScene");
var GameManager_1 = require("../core/GameManager");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Joystick = /** @class */ (function (_super) {
    __extends(Joystick, _super);
    function Joystick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cursor = null;
        _this.gameScene = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Joystick.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.node.scale = 2.5;
    };
    Joystick.prototype.cursorTo = function (dir) {
        /*var angle:number = Math.atan2(dir.y,dir.x);
        this.cursor.x = 20 * Math.cos(angle);
        this.cursor.y = 20 * Math.sin(angle);*/
        this.cursor.position = dir.mul(20);
    };
    Joystick.prototype.show = function () {
        this.node.active = true;
    };
    Joystick.prototype.hidden = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Joystick.prototype, "cursor", void 0);
    Joystick = __decorate([
        ccclass
    ], Joystick);
    return Joystick;
}(cc.Component));
exports.default = Joystick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEpveXN0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFzQ0M7UUFsQ1csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQWEsSUFBSSxDQUFDOztRQThCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUE3Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFFMUIsQ0FBQztJQUVNLDJCQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUV2Qjs7K0NBRXVDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLHlCQUFNLEdBQWI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNhO0lBSGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFDNUI7SUFBRCxlQUFDO0NBckNELEFBcUNDLENBckNxQyxFQUFFLENBQUMsU0FBUyxHQXFDakQ7a0JBckNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL0dhbWVNYW5hZ2VyXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm95c3RpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBjdXJzb3I6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2FtZVNjZW5lOkdhbWVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDIuNTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGN1cnNvclRvKGRpcjpjYy5WZWMyKVxyXG4gICAge1xyXG4gICAgICAgIC8qdmFyIGFuZ2xlOm51bWJlciA9IE1hdGguYXRhbjIoZGlyLnksZGlyLngpO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSAyMCAqIE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICB0aGlzLmN1cnNvci55ID0gMjAgKiBNYXRoLnNpbihhbmdsZSk7Ki9cclxuICAgICAgICB0aGlzLmN1cnNvci5wb3NpdGlvbiA9IGRpci5tdWwoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZGVuKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=