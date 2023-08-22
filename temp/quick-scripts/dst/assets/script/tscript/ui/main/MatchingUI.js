
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/MatchingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd1b5wmfrVFRaC+JmCerd3a', 'MatchingUI');
// script/tscript/ui/main/MatchingUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../base/BaseUI");
var Random_1 = require("../../util/Random");
var GameManager_1 = require("../../core/GameManager");
var GameScene_1 = require("../../gamescene/GameScene");
var ResourcesManager_1 = require("../../core/ResourcesManager");
var DataManager_1 = require("../../core/DataManager");
var WXSdk_1 = require("../../wx/WXSdk");
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
var MatchingUI = /** @class */ (function (_super) {
    __extends(MatchingUI, _super);
    function MatchingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherUsers = [];
        _this.dotArr = [];
        _this.radius = 220;
        _this.gameSceme = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MatchingUI.prototype.start = function () {
        var _this = this;
        this.gameSceme = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        var angle = 2 * Math.PI / this.otherUsers.length;
        var idArr = [];
        for (var i = 1; i < this.otherUsers.length; i++) {
            var node = this.otherUsers[i];
            node.active = false;
        }
        for (var i = 1; i <= 50; i++) {
            idArr.push(i);
        }
        this.scheduleOnce(function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                if (WXSdk_1.default.instance.isLogin) {
                    _this.onWxLogin();
                }
                else {
                    cc.systemEvent.on("wxLogin", _this.onWxLogin, _this);
                }
            }
            var _loop_1 = function () {
                var node = _this.otherUsers[i];
                node.active = false;
                var id = _this.gameSceme.aiNameIndexArr[i - 1];
                ResourcesManager_1.default.instance.load("headIcon/" + id, function (spriteFrame) {
                    if (spriteFrame) {
                        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                    node.getChildByName("NameTxt").getComponent(cc.Label).string = DataManager_1.default.instance.nameConfigDatas[id].name;
                }, cc.SpriteFrame, false, false);
            };
            for (var i = 1; i < _this.otherUsers.length; i++) {
                _loop_1();
            }
        }, 0.1);
    };
    MatchingUI.prototype.open = function () {
        var _this = this;
        _super.prototype.open.call(this);
        var t = Random_1.default.Range(2.5, 4.8);
        this.scheduleOnce(function () {
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).startGame();
            _this.close();
        }, t + 1.5);
        var n = this.otherUsers.length + Random_1.default.RangeInteger(2, 8);
        var idArr = [];
        for (var i = 0; i < n; i++) {
            idArr.push(i);
        }
        this.schedule(function () {
            var index = Random_1.default.RangeInteger(0, idArr.length);
            var id = idArr[index];
            if (_this.otherUsers[id]) {
                _this.otherUsers[id].active = true;
            }
            idArr.splice(index, 1);
        }, t / n, n - 1);
        for (var j = 0; j < this.dotArr.length; j++) {
            this.dotArr[j].active = false;
        }
        var i = 0;
        this.schedule(function () {
            for (var j = 0; j < _this.dotArr.length; j++) {
                _this.dotArr[j].active = (j < i);
            }
            i++;
            i %= _this.dotArr.length + 1;
        }, 0.25, 20);
    };
    MatchingUI.prototype.onWxLogin = function () {
        var _this = this;
        this.otherUsers[0].active = false;
        WXSdk_1.default.instance.getUserIcon(function (texture) {
            _this.otherUsers[0].active = true;
            var headIcon = _this.otherUsers[0].getChildByName("Mask").getChildByName("HeadIcon").getComponent(cc.Sprite);
            headIcon.spriteFrame = new cc.SpriteFrame(texture);
            _this.otherUsers[0].getChildByName("NameTxt").getComponent(cc.Label).string = WXSdk_1.default.instance.nickname;
        }, 64);
    };
    MatchingUI.prototype.onDestroy = function () {
        cc.systemEvent.off("wxLogin", this.onWxLogin, this);
    };
    __decorate([
        property(cc.Node)
    ], MatchingUI.prototype, "otherUsers", void 0);
    __decorate([
        property(cc.Node)
    ], MatchingUI.prototype, "dotArr", void 0);
    __decorate([
        property
    ], MatchingUI.prototype, "radius", void 0);
    MatchingUI = __decorate([
        ccclass
    ], MatchingUI);
    return MatchingUI;
}(BaseUI_1.default));
exports.default = MatchingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcTWF0Y2hpbmdVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLDRDQUF1QztBQUN2QyxzREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGdFQUEyRDtBQUMzRCxzREFBaUQ7QUFDakQsd0NBQW1DO0FBRW5DLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQU07SUFEOUM7UUFBQSxxRUE4SkM7UUExSkcsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUdoQixZQUFNLEdBQVUsR0FBRyxDQUFDO1FBR25CLGVBQVMsR0FBYSxJQUFJLENBQUM7O1FBZ0puQyxpQkFBaUI7SUFDckIsQ0FBQztJQS9JRyx3QkFBd0I7SUFHeEIsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFBQSxpQkEwREM7UUF4REcsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQztRQUV4RSxJQUFJLEtBQUssR0FBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUV4RCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQ2hEO1lBQ0ksSUFBSSxJQUFJLEdBQVcsSUFBSSxD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Q0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksUUFBUSxHQUFhLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RILFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXpHLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXZKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFHdkI7UUFEQyxRQUFROzhDQUNrQjtJQVRWLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2SjlCO0lBQUQsaUJBQUM7Q0E3SkQsQUE2SkMsQ0E3SnVDLGdCQUFNLEdBNko3QztrQkE3Sm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gXCIuLi9iYXNlL0Jhc2VVSVwiO1xyXG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi8uLi91dGlsL1JhbmRvbVwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi4vLi4vZ2FtZXNjZW5lL0dhbWVTY2VuZVwiO1xyXG5pbXBvcnQgUmVzb3VyY2VzTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9SZXNvdXJjZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vY29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgV1hTZGsgZnJvbSBcIi4uLy4uL3d4L1dYU2RrXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hpbmdVSSBleHRlbmRzIEJhc2VVSSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdGhlclVzZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvdEFycjogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwdWJsaWMgcmFkaXVzOm51bWJlciA9IDIyMDtcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2FtZVNjZW1lOkdhbWVTY2VuZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW1lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cclxuICAgICAgICB2YXIgYW5nbGU6bnVtYmVyID0gMiAqIE1hdGguUEkgLyB0aGlzLm90aGVyVXNlcnMubGVuZ3RoO1xyXG5cclxuICAgICAgICB2YXIgaWRBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMSA7IGkgPCB0aGlzLm90aGVyVXNlcnMubGVuZ3RoIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6Y2MuTm9kZSA9IHRoaXMub3RoZXJVc2Vyc1tpXTtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDEgOyBpIDw9IDUwIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRBcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaWYoV1hTZGsuaW5zdGFuY2UuaXNXWFBsYXRmb3JtKCkpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihXWFNkay5pbnN0YW5jZS5pc0xvZ2luKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25XeExvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFwid3hMb2dpblwiLHRoaXMub25XeExvZ2luLHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxIDsgaSA8IHRoaXMub3RoZXJVc2Vycy5sZW5ndGggOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOmNjLk5vZGUgPSB0aGlzLm90aGVyVXNlcnNbaV07XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZDpudW1iZXIgPSB0aGlzLmdhbWVTY2VtZS5haU5hbWVJbmRleEFycltpIC0gMV07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFJlc291cmNlc01hbmFnZXIuaW5zdGFuY2UubG9hZChgaGVhZEljb24vJHtpZH1gLChzcHJpdGVGcmFtZTpjYy5TcHJpdGVGcmFtZSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiTmFtZVR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLm5hbWVDb25maWdEYXRhc1tpZF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sY2MuU3ByaXRlRnJhbWUsZmFsc2UsZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LDAuMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb3BlbigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG5cclxuICAgICAgICB2YXIgdDpudW1iZXIgPSBSYW5kb20uUmFuZ2UoMi41LDQuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcblxyXG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSkuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgfSx0ICsgMS41KTtcclxuXHJcblxyXG4gICAgICAgIHZhciBuID0gdGhpcy5vdGhlclVzZXJzLmxlbmd0aCArIFJhbmRvbS5SYW5nZUludGVnZXIoMiw4KTtcclxuXHJcbiAgICAgICAgdmFyIGlkQXJyOm51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBuIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRBcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBSYW5kb20uUmFuZ2VJbnRlZ2VyKDAsaWRBcnIubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIGlkOm51bWJlciA9IGlkQXJyW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMub3RoZXJVc2Vyc1tpZF0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJVc2Vyc1tpZF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWRBcnIuc3BsaWNlKGluZGV4LDEpO1xyXG5cclxuXHJcbiAgICAgICAgfSx0L24sbiAtIDEpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGogPSAwIDsgaiA8IHRoaXMuZG90QXJyLmxlbmd0aDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kb3RBcnJbal0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGk6bnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgXHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDAgOyBqIDwgdGhpcy5kb3RBcnIubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG90QXJyW2pdLmFjdGl2ZSA9IChqIDwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaSAlPSB0aGlzLmRvdEFyci5sZW5ndGggKyAxO1xyXG5cclxuICAgICAgICB9LDAuMjUsMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25XeExvZ2luKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm90aGVyVXNlcnNbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgV1hTZGsuaW5zdGFuY2UuZ2V0VXNlckljb24oKHRleHR1cmU6Y2MuVGV4dHVyZTJEKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm90aGVyVXNlcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGhlYWRJY29uOmNjLlNwcml0ZSA9IHRoaXMub3RoZXJVc2Vyc1swXS5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaGVhZEljb24uc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3RoZXJVc2Vyc1swXS5nZXRDaGlsZEJ5TmFtZShcIk5hbWVUeHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBXWFNkay5pbnN0YW5jZS5uaWNrbmFtZTtcclxuXHJcbiAgICAgICAgfSw2NCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHsgXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKFwid3hMb2dpblwiLHRoaXMub25XeExvZ2luLHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19