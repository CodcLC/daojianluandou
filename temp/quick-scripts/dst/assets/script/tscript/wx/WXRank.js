
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/wx/WXRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fec21c2Ce1BMaGT8QgDMifw', 'WXRank');
// script/tscript/wx/WXRank.ts

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
var WXRank = /** @class */ (function (_super) {
    __extends(WXRank, _super);
    function WXRank() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.label = null;
        _this_1.text = 'hello';
        _this_1.shareTime = 0;
        _this_1.shareCnt = 0;
        return _this_1;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    WXRank.prototype.start = function () {
    };
    WXRank.prototype.onBtnShareTest = function () {
        var date = new Date();
        this.shareTime = Date.now() / 1000;
        var _this = this;
        var callfunc = function () {
            var curTime = Date.now() / 1000;
            if (curTime - _this.shareTime <= 3) {
                if (_this.shareCnt >= 1)
                    _this.onShowTip("短时间内,不要分享同一个群");
                else
                    _this.onShowTip("请换个群试试哦~~");
                _this.shareCnt++;
            }
            else {
                _this.onShowTip("恭喜,获得xxx奖励");
                _this.shareCnt = 0;
            }
        };
        window["wx"].shareAppMessage({ title: "世界唯一被猪统治的岛，被遗忘却幸福", imageUrl: "https://pigwander-1258819150.file.myqcloud.com/share/share_2.png", query: "" });
        this.scheduleOnce(callfunc, 0.1);
    };
    //系统提示
    WXRank.prototype.onShowTip = function (msg) {
        /*this.sysMessage.active = true;
        this.sysMessage.width = String(msg).length * 40
        let labMsg = this.sysMessage.getChildByName("lab_msg")
        labMsg.getComponent(cc.Label).string = msg
        let _this = this;
        let callfunc = function(){

            _this.sysMessage.active = false;
        }
        this.scheduleOnce(callfunc,1);*/
    };
    __decorate([
        property(cc.Label)
    ], WXRank.prototype, "label", void 0);
    __decorate([
        property
    ], WXRank.prototype, "text", void 0);
    WXRank = __decorate([
        ccclass
    ], WXRank);
    return WXRank;
}(cc.Component));
exports.default = WXRank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx3eFxcV1hSYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEsdUVBNERDO1FBeERHLGFBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsWUFBSSxHQUFXLE9BQU8sQ0FBQztRQWNYLGlCQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRXJCLGdCQUFRLEdBQVUsQ0FBQyxDQUFDOztJQXFDcEMsQ0FBQztJQW5ERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBVUcsK0JBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFBO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRztZQUNYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUM7Z0JBQzlCLElBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDO29CQUNsQixLQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztvQkFFakMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFakMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BCO2lCQUFJO2dCQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDLEtBQUssRUFBQyxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsa0VBQWtFLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDOUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELE1BQU07SUFDTiwwQkFBUyxHQUFULFVBQVUsR0FBRztRQUNUOzs7Ozs7Ozs7d0NBU2dDO0lBQ3BDLENBQUM7SUF0REw7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDSTtJQUd2QjtRQURDLFFBQVE7d0NBQ2M7SUFOTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkQxQjtJQUFELGFBQUM7Q0EzREQsQUEyREMsQ0EzRG1DLEVBQUUsQ0FBQyxTQUFTLEdBMkQvQztrQkEzRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1hSYW5rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZVRpbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZUNudDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBvbkJ0blNoYXJlVGVzdCgpe1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVUaW1lID0gRGF0ZS5ub3coKS8xMDAwXHJcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBjYWxsZnVuYyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyVGltZSA9IERhdGUubm93KCkvMTAwMDtcclxuICAgICAgICAgICAgICAgIGlmKGN1clRpbWUgLSBfdGhpcy5zaGFyZVRpbWUgPD0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX3RoaXMuc2hhcmVDbnQgPj0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25TaG93VGlwKFwi55+t5pe26Ze05YaFLOS4jeimgeWIhuS6q+WQjOS4gOS4que+pFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uU2hvd1RpcChcIuivt+aNouS4que+pOivleivleWTpn5+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNoYXJlQ250Kys7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblNob3dUaXAoXCLmga3llpws6I635b6XeHh45aWW5YqxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNoYXJlQ250ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zaGFyZUFwcE1lc3NhZ2Uoe3RpdGxlOlwi5LiW55WM5ZSv5LiA6KKr54yq57uf5rK755qE5bKb77yM6KKr6YGX5b+Y5Y205bm456aPXCIsaW1hZ2VVcmw6XCJodHRwczovL3BpZ3dhbmRlci0xMjU4ODE5MTUwLmZpbGUubXlxY2xvdWQuY29tL3NoYXJlL3NoYXJlXzIucG5nXCIscXVlcnk6XCJcIn0pXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGNhbGxmdW5jLDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v57O757uf5o+Q56S6XHJcbiAgICAgICAgb25TaG93VGlwKG1zZyl7XHJcbiAgICAgICAgICAgIC8qdGhpcy5zeXNNZXNzYWdlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3lzTWVzc2FnZS53aWR0aCA9IFN0cmluZyhtc2cpLmxlbmd0aCAqIDQwXHJcbiAgICAgICAgICAgIGxldCBsYWJNc2cgPSB0aGlzLnN5c01lc3NhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJfbXNnXCIpXHJcbiAgICAgICAgICAgIGxhYk1zZy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1zZ1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgY2FsbGZ1bmMgPSBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zeXNNZXNzYWdlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGNhbGxmdW5jLDEpOyovXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG4iXX0=