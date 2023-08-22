
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/WXOpenDataUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f875l8bp1FkZCgHxoXXVzS', 'WXOpenDataUI');
// script/tscript/ui/main/WXOpenDataUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
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
var WXOpenDataUI = /** @class */ (function (_super) {
    __extends(WXOpenDataUI, _super);
    function WXOpenDataUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnbackBtn = null;
        _this.shareBtn = null;
        _this.openDataCanvasDisPlay = null;
        _this.shareBtnSkinArr = [];
        _this.shareIndex = 1;
        _this.showOpenData = false;
        _this.tex = new cc.Texture2D();
        _this.wxSubContext = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    WXOpenDataUI.prototype.start = function () {
        var _this = this;
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            this.node.active = false;
            return;
        }
        this.turnbackBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.closeOpenDataField();
        }, this);
        this.shareBtn.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            WXSdk_1.default.instance.shareToAnyOne(function () { }, function () { });
        }, this);
        this.wxSubContext = this.getComponent(cc.WXSubContextView);
        this.openDataCanvasDisPlay = this.getComponent(cc.Sprite);
        //this.wxSubContext.enabled = false;
        //this.wxSubContext.updateSubContextViewport();
        this.updateOpenDataCanvas();
        if (!this.showOpenData) {
            this.node.active = false;
        }
        cc.systemEvent.on("shareTicketUpdate", this.onShareTicketUpdate, this);
    };
    WXOpenDataUI.prototype.onShareTicketUpdate = function () {
        if (!this.showOpenData)
            return;
        if (WXSdk_1.default.instance.shareTicket != "") {
            this.openGroupRankUI();
        }
    };
    WXOpenDataUI.prototype.onDestroy = function () {
        cc.systemEvent.off("shareTicketUpdate", this.onShareTicketUpdate, this);
    };
    // update (dt) {}
    WXOpenDataUI.prototype.update = function (dt) {
        if (this.showOpenData) {
            this.updateOpenDataCanvas();
        }
    };
    WXOpenDataUI.prototype.updateOpenDataCanvas = function () {
        this.tex.initWithElement(WXSdk_1.default.instance.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.openDataCanvasDisPlay.spriteFrame.setTexture(this.tex);
        //this.openDataCanvasDisPlay.spriteFrame = new cc.SpriteFrame(this.tex);
    };
    /**
     * 显示开发数据域
     */
    WXOpenDataUI.prototype.showOpenDataField = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        this.showOpenData = true;
        this.node.active = true;
        //this.wxSubContext.enabled = true;
        //(this.wxSubContext["update"] as Function)();
    };
    WXOpenDataUI.prototype.openRankUI = function () {
        var _this = this;
        if (WXSdk_1.default.instance.shareTicket != "") {
            this.openGroupRankUI();
        }
        else {
            WXSdk_1.default.instance.getUserScoreWorldRank(function (data) {
                _this.openWorldRankUI(data);
            }, function () { });
            //this.openFriendRankUI();
        }
    };
    /**
     * 打开好友排行榜
     */
    WXOpenDataUI.prototype.openFriendRankUI = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 1;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "friend" });
    };
    /**
     * 打开群排行榜
     */
    WXOpenDataUI.prototype.openGroupRankUI = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 2;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "group", shareTicket: WXSdk_1.default.instance.shareTicket });
    };
    /**
     * 打开世界排行榜
     */
    WXOpenDataUI.prototype.openWorldRankUI = function (rankData) {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.shareIndex = 3;
        this.shareBtn.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.shareBtnSkinArr[this.shareIndex - 1];
        this.showOpenDataField();
        WXSdk_1.default.instance.wx.postMessage({ name: "world", rankData: rankData });
    };
    /**
     * 关闭开放数据域
     */
    WXOpenDataUI.prototype.closeOpenDataField = function () {
        if (!WXSdk_1.default.instance.isWXPlatform()) {
            return;
        }
        this.showOpenData = false;
        this.node.active = false;
        WXSdk_1.default.instance.wx.postMessage({ name: "close" });
        //this.wxSubContext = this.getComponent(cc.WXSubContextView);
        //this.wxSubContext.enabled = false;
        //(this.wxSubContext["update"] as Function)();
    };
    __decorate([
        property(cc.Button)
    ], WXOpenDataUI.prototype, "turnbackBtn", void 0);
    __decorate([
        property(cc.Button)
    ], WXOpenDataUI.prototype, "shareBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], WXOpenDataUI.prototype, "openDataCanvasDisPlay", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], WXOpenDataUI.prototype, "shareBtnSkinArr", void 0);
    WXOpenDataUI = __decorate([
        ccclass
    ], WXOpenDataUI);
    return WXOpenDataUI;
}(cc.Component));
exports.default = WXOpenDataUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcV1hPcGVuRGF0YVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFFbkMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQTJNQztRQXZNVSxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLDJCQUFxQixHQUFhLElBQUksQ0FBQztRQUd2QyxxQkFBZSxHQUFvQixFQUFFLENBQUE7UUFHcEMsZ0JBQVUsR0FBVSxDQUFDLENBQUM7UUFFdEIsa0JBQVksR0FBVyxLQUFLLENBQUM7UUFFN0IsU0FBRyxHQUFnQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QyxrQkFBWSxHQUF1QixJQUFJLENBQUM7O0lBcUxwRCxDQUFDO0lBbkxHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUFBLGlCQWlDQztRQS9CRyxJQUFHLENBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFDakM7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxVQUFDLEtBQXlCO1lBRTNFLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBQyxJQUFJLENBQUMs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UyxHQTBNckQ7a0JBMU1vQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdYU2RrIGZyb20gXCIuLi8uLi93eC9XWFNka1wiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdYT3BlbkRhdGFVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHB1YmxpYyB0dXJuYmFja0J0bjpjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwdWJsaWMgc2hhcmVCdG46Y2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHVibGljIG9wZW5EYXRhQ2FudmFzRGlzUGxheTpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBzaGFyZUJ0blNraW5BcnI6Y2MuU3ByaXRlRnJhbWVbXSA9IFtdXHJcblxyXG5cclxuICAgIHByaXZhdGUgc2hhcmVJbmRleDpudW1iZXIgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgc2hvd09wZW5EYXRhOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHRleDpjYy5UZXh0dXJlMkQgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcblxyXG4gICAgcHJpdmF0ZSB3eFN1YkNvbnRleHQ6Y2MuV1hTdWJDb250ZXh0VmlldyA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBpZighV1hTZGsuaW5zdGFuY2UuaXNXWFBsYXRmb3JtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHVybmJhY2tCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPcGVuRGF0YUZpZWxkKCk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFyZUJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uuc2hhcmVUb0FueU9uZSgoKT0+e30sKCk9Pnt9KTtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnd4U3ViQ29udGV4dCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLldYU3ViQ29udGV4dFZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLm9wZW5EYXRhQ2FudmFzRGlzUGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vdGhpcy53eFN1YkNvbnRleHQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vdGhpcy53eFN1YkNvbnRleHQudXBkYXRlU3ViQ29udGV4dFZpZXdwb3J0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcGVuRGF0YUNhbnZhcygpO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zaG93T3BlbkRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihcInNoYXJlVGlja2V0VXBkYXRlXCIsdGhpcy5vblNoYXJlVGlja2V0VXBkYXRlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TaGFyZVRpY2tldFVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuc2hvd09wZW5EYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKFdYU2RrLmluc3RhbmNlLnNoYXJlVGlja2V0ICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Hcm91cFJhbmtVSSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAgeyBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXCJzaGFyZVRpY2tldFVwZGF0ZVwiLHRoaXMub25TaGFyZVRpY2tldFVwZGF0ZSx0aGlzKTsgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnNob3dPcGVuRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BlbkRhdGFDYW52YXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3BlbkRhdGFDYW52YXMoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGV4LmluaXRXaXRoRWxlbWVudChXWFNkay5pbnN0YW5jZS5zaGFyZWRDYW52YXMpO1xyXG4gICAgICAgIHRoaXMudGV4LmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICB0aGlzLm9wZW5EYXRhQ2FudmFzRGlzUGxheS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4KTtcclxuICAgICAgICAvL3RoaXMub3BlbkRhdGFDYW52YXNEaXNQbGF5LnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRoaXMudGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuW8gOWPkeaVsOaNruWfn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd09wZW5EYXRhRmllbGQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCFXWFNkay5pbnN0YW5jZS5pc1dYUGxhdGZvcm0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy53eFN1YkNvbnRleHQgPSB0aGlzLmdldENvbXBvbmVudChjYy5XWFN1YkNvbnRleHRWaWV3KTtcclxuICAgICAgICB0aGlzLnNob3dPcGVuRGF0YSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuXHJcbiAgICAgICAgLy90aGlzLnd4U3ViQ29udGV4dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyh0aGlzLnd4U3ViQ29udGV4dFtcInVwZGF0ZVwiXSBhcyBGdW5jdGlvbikoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9wZW5SYW5rVUkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKFdYU2RrLmluc3RhbmNlLnNoYXJlVGlja2V0ICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Hcm91cFJhbmtVSSgpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2UuZ2V0VXNlclNjb3JlV29ybGRSYW5rKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuV29ybGRSYW5rVUkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sKCk9Pnt9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcy5vcGVuRnJpZW5kUmFua1VJKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOWlveWPi+aOkuihjOamnFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlbkZyaWVuZFJhbmtVSSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIVdYU2RrLmluc3RhbmNlLmlzV1hQbGF0Zm9ybSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaGFyZUluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLnNoYXJlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZUJ0blNraW5BcnJbdGhpcy5zaGFyZUluZGV4IC0gMV07XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd09wZW5EYXRhRmllbGQoKTtcclxuICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5wb3N0TWVzc2FnZSh7bmFtZTpcImZyaWVuZFwifSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDnvqTmjpLooYzmppxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW5Hcm91cFJhbmtVSSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIVdYU2RrLmluc3RhbmNlLmlzV1hQbGF0Zm9ybSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaGFyZUluZGV4ID0gMjtcclxuICAgICAgICB0aGlzLnNoYXJlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZUJ0blNraW5BcnJbdGhpcy5zaGFyZUluZGV4IC0gMV07XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNob3dPcGVuRGF0YUZpZWxkKCk7XHJcbiAgICAgICAgV1hTZGsuaW5zdGFuY2Uud3gucG9zdE1lc3NhZ2Uoe25hbWU6XCJncm91cFwiLHNoYXJlVGlja2V0OldYU2RrLmluc3RhbmNlLnNoYXJlVGlja2V0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDkuJbnlYzmjpLooYzmppxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW5Xb3JsZFJhbmtVSShyYW5rRGF0YTphbnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIVdYU2RrLmluc3RhbmNlLmlzV1hQbGF0Zm9ybSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaGFyZUluZGV4ID0gMztcclxuICAgICAgICB0aGlzLnNoYXJlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zaGFyZUJ0blNraW5BcnJbdGhpcy5zaGFyZUluZGV4IC0gMV07XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd09wZW5EYXRhRmllbGQoKTtcclxuICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5wb3N0TWVzc2FnZSh7bmFtZTpcIndvcmxkXCIscmFua0RhdGE6cmFua0RhdGF9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreW8gOaUvuaVsOaNruWfn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VPcGVuRGF0YUZpZWxkKClcclxuICAgIHtcclxuICAgICAgICBpZighV1hTZGsuaW5zdGFuY2UuaXNXWFBsYXRmb3JtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd09wZW5EYXRhID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBXWFNkay5pbnN0YW5jZS53eC5wb3N0TWVzc2FnZSh7bmFtZTpcImNsb3NlXCJ9KTtcclxuICAgICAgICAvL3RoaXMud3hTdWJDb250ZXh0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0Vmlldyk7XHJcbiAgICAgICAgLy90aGlzLnd4U3ViQ29udGV4dC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8odGhpcy53eFN1YkNvbnRleHRbXCJ1cGRhdGVcIl0gYXMgRnVuY3Rpb24pKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==