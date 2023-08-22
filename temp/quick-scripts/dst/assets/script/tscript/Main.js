
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffa54D2yqNEcZ2pIBowdJyx', 'Main');
// script/tscript/Main.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("./core/DataManager");
var GameManager_1 = require("./core/GameManager");
var WXSdk_1 = require("./wx/WXSdk");
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
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.bgcion = null;
        _this.bg1 = null;
        _this.bg2 = null;
        _this.onloadConfigDatas = function () {
            this.gameMagr.init();
            this.canvas.active = true;
            //SoundManager.instance.PlayBGSound(BgSoundClipType.main);
            this.loginWx();
        }.bind(_this);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Main.prototype.onLoad = function () {
        window.main = this;
        cc.game.setFrameRate(60);
        this.gameMagr = this.canvas.getComponent(GameManager_1.default);
        this.canvas.active = false;
        DataManager_1.default.instance.loadConfigDatas(this.onloadConfigDatas);
        this.randombg();
    };
    Main.prototype.loginWx = function () {
        var _this = this;
        WXSdk_1.default.instance.login("ss", "ss", function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                cc.log("微信登录成功");
                console.log("发送微信事件");
                var baseData = {
                    name: "init",
                    levelConfigDatas: DataManager_1.default.instance.levelConfigDatas
                };
                WXSdk_1.default.instance.wx.postMessage(baseData); //向开发数据域发送初始数据
                cc.systemEvent.emit("wxLogin");
                WXSdk_1.default.instance.wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        }, function () {
            if (WXSdk_1.default.instance.isWXPlatform()) {
                cc.log("微信登录失败");
                _this.showModal();
            }
        });
    };
    Main.prototype.showModal = function () {
        var _this = this;
        WXSdk_1.default.instance.wx.showModal({
            title: '异常',
            showCancel: false,
            confirmText: "重试",
            content: '游戏登录失败，请重试',
            success: function (res) {
                if (res.confirm) {
                    _this.loginWx();
                }
                else {
                    _this.loginWx();
                }
            }
        });
    };
    Main.prototype.start = function () {
    };
    Main.prototype.randombg = function () {
        if (Math.random() > 0.5) {
            this.bgcion.spriteFrame = this.bg2;
        }
        else {
            this.bgcion.spriteFrame = this.bg1;
        }
    };
    __decorate([
        property(cc.Node)
    ], Main.prototype, "canvas", void 0);
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "bgcion", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "bg1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "bg2", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBNkM7QUFFN0Msa0RBQTZDO0FBQzdDLG9DQUErQjtBQUUvQixvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBdUhDO1FBbkhVLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixTQUFHLEdBQWtCLElBQUksQ0FBQztRQUcxQixTQUFHLEdBQWtCLElBQUksQ0FBQztRQW9CekIsdUJBQWlCLEdBQUc7WUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUIsMERBQTBEO1lBQzFELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztRQTZFYixpQkFBaUI7SUFHckIsQ0FBQztJQXZHRyx3QkFBd0I7SUFFdkIscUJBQU0sR0FBTjtRQUVILE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBYyxxQkFBVyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTNCLHFCQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFJaEIsQ0FBQztJQVdPLHNCQUFPLEdBQWY7UUFBQSxpQkFvQ0M7UUFsQ0csZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ2hCLElBQUksRUFDSixJQUFJLEVBQ1A7WUFFSSxJQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQ2hDO2dCQUNHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksUUFBUSxHQUNaO29CQUNJLElBQUksRUFBQyxNQUFNO29CQUNYLGdCQUFnQixFQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQjtpQkFDekQsQ0FBQTtnQkFFRCxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjO2dCQUV2RCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN4QixLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO2FBRUo7UUFFTCxDQUFDLEVBQUM7WUFFQyxJQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQ2hDO2dCQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVPLHdCQUFTLEdBQWpCO1FBQUEsaUJBa0JDO1FBaEJHLGVBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBQyxLQUFLO1lBQ2hCLFdBQVcsRUFBQyxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLE9BQU8sRUFBQyxVQUFDLEdBQUc7Z0JBRVAsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUNoQjtvQkFDSSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2xCO3FCQUNEO29CQUNJLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbEI7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0osdUJBQVEsR0FBUjtRQUVFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsRUFDcEI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3BDO2FBQ0Q7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3BDO0lBQ0osQ0FBQztJQTlHRTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNXO0lBRzdCO1FBREQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ2E7SUFHL0I7UUFERCxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxQ0FDVTtJQUdqQztRQURELFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FDQUNVO0lBWmhCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzSHhCO0lBQUQsV0FBQztDQXRIRCxBQXNIQyxDQXRIaUMsRUFBRSxDQUFDLFNBQVMsR0FzSDdDO2tCQXRIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJEYXRhIGZyb20gXCIuL2RhdGEvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vY29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuL2dhbWVzY2VuZS9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IFdYU2RrIGZyb20gXCIuL3d4L1dYU2RrXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgY2FudmFzOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHQgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHB1YmxpYyBiZ2Npb246Y2MuU3ByaXRlID0gbnVsbDtcclxuXHRcclxuXHQgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHVibGljIGJnMTpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblx0XHJcblx0IEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBiZzI6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdFxyXG4gICAgcHJpdmF0ZSBnYW1lTWFncjpHYW1lTWFuYWdlcjtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkgXHJcbiAgICAge1xyXG5cdFx0d2luZG93Lm1haW4gPSB0aGlzO1xyXG4gICAgICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xyXG4gICAgICAgdGhpcy5nYW1lTWFnciA9IHRoaXMuY2FudmFzLmdldENvbXBvbmVudDxHYW1lTWFuYWdlcj4oR2FtZU1hbmFnZXIpO1xyXG4gICAgICAgdGhpcy5jYW52YXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubG9hZENvbmZpZ0RhdGFzKHRoaXMub25sb2FkQ29uZmlnRGF0YXMpO1xyXG5cclxuXHQgICB0aGlzLnJhbmRvbWJnKCk7XHJcblx0ICAgXHJcblx0ICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9ubG9hZENvbmZpZ0RhdGFzID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZU1hZ3IuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy9Tb3VuZE1hbmFnZXIuaW5zdGFuY2UuUGxheUJHU291bmQoQmdTb3VuZENsaXBUeXBlLm1haW4pO1xyXG4gICAgICAgIHRoaXMubG9naW5XeCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGxvZ2luV3goKVxyXG4gICAge1xyXG4gICAgICAgIFdYU2RrLmluc3RhbmNlLmxvZ2luKFxyXG4gICAgICAgICAgICBcInNzXCIsXHJcbiAgICAgICAgICAgIFwic3NcIixcclxuICAgICAgICAgKCk9PntcclxuXHJcbiAgICAgICAgICAgICBpZihXWFNkay5pbnN0YW5jZS5pc1dYUGxhdGZvcm0oKSlcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuW+ruS/oeeZu+W9leaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+R6YCB5b6u5L+h5LqL5Lu2XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2VEYXRhID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpcImluaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbENvbmZpZ0RhdGFzOkRhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsQ29uZmlnRGF0YXNcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5wb3N0TWVzc2FnZShiYXNlRGF0YSk7IC8v5ZCR5byA5Y+R5pWw5o2u5Z+f5Y+R6YCB5Yid5aeL5pWw5o2uXHJcblxyXG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChcInd4TG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH0sKCk9PntcclxuXHJcbiAgICAgICAgICAgIGlmKFdYU2RrLmluc3RhbmNlLmlzV1hQbGF0Zm9ybSgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLlvq7kv6HnmbvlvZXlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd01vZGFsKClcclxuICAgIHtcclxuICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+W8guW4uCcsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi6YeN6K+VXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmuLjmiI/nmbvlvZXlpLHotKXvvIzor7fph43or5UnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOihyZXMpPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luV3goKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbld4KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHRcclxuXHRyYW5kb21iZygpXHJcblx0e1xyXG5cdFx0IGlmKCBNYXRoLnJhbmRvbSgpPjAuNSApXHJcblx0ICAge1xyXG5cdFx0ICAgIHRoaXMuYmdjaW9uLnNwcml0ZUZyYW1lID0gdGhpcy5iZzI7XHJcblx0ICAgfWVsc2VcclxuXHQgICB7XHJcblx0XHQgICAgdGhpcy5iZ2Npb24uc3ByaXRlRnJhbWUgPSB0aGlzLmJnMTtcclxuXHQgICB9XHJcblx0fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgXHJcbn1cclxuIl19