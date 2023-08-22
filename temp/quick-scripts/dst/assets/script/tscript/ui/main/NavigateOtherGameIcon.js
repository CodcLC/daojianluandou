
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/main/NavigateOtherGameIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fd23EnIfpJR4hWqNwgO2hQ', 'NavigateOtherGameIcon');
// script/tscript/ui/main/NavigateOtherGameIcon.ts

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
var NavigateOtherGameIcon = /** @class */ (function (_super) {
    __extends(NavigateOtherGameIcon, _super);
    function NavigateOtherGameIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameIcon = null;
        _this.gameIconImgArr = [];
        _this.iconIndex = 0;
        _this.appIdArr = ["wx1b0de075c16e0e29"];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NavigateOtherGameIcon.prototype.start = function () {
        //"navigateToMiniProgramAppIdList": ["wx1b0de075c16e0e29"]
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (!WXSdk_1.default.instance.isWXPlatform())
                return;
            WXSdk_1.default.instance.wx.navigateToMiniProgram({
                appId: _this.appIdArr[_this.iconIndex],
                //path: 'page/index/index?from=xqfd',
                extraData: {
                    from: 'xqfd_dzz'
                },
                //envVersion: 'release',//release develop trial
                success: function (res) {
                    // 打开成功
                }
            });
        }, this);
        this.schedule(function () {
            _this.iconIndex++;
            _this.iconIndex %= _this.gameIconImgArr.length;
            _this.gameIcon.spriteFrame = _this.gameIconImgArr[_this.iconIndex];
            //this.addknifeBtn.node.position = cc.v2(-200,0);
            //this.addknifeBtn.node.runAction(cc.moveTo(0.25,0,0));
        }, 3.2);
    };
    __decorate([
        property(cc.Sprite)
    ], NavigateOtherGameIcon.prototype, "gameIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NavigateOtherGameIcon.prototype, "gameIconImgArr", void 0);
    NavigateOtherGameIcon = __decorate([
        ccclass
    ], NavigateOtherGameIcon);
    return NavigateOtherGameIcon;
}(cc.Component));
exports.default = NavigateOtherGameIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcbWFpblxcTmF2aWdhdGVPdGhlckdhbWVJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFFbkMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBWTtJQUQvRDtRQUFBLHFFQXVEQztRQW5ERyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUUvQixlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRXJCLGNBQVEsR0FBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O1FBMkNsRCxpQkFBaUI7SUFDckIsQ0FBQztJQTFDRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFDQUFLLEdBQUw7UUFFSSwwREFBMEQ7UUFGOUQsaUJBbUNDO1FBL0JHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxVQUFDLEtBQUs7WUFFN0MsSUFBRyxDQUFDLGVBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM3QixPQUFPO1lBRVgsZUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BDLEtBQUssRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BDLHFDQUFxQztnQkFDckMsU0FBUyxFQUFFO29CQUNQLElBQUksRUFBRSxVQUFVO2lCQUNuQjtnQkFDRCwrQ0FBK0M7Z0JBQy9DLE9BQU8sWUFBQyxHQUFHO29CQUNQLE9BQU87Z0JBQ1gsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUVQLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUdSLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFVixLQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUU3QyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRSxpREFBaUQ7WUFDakQsdURBQXVEO1FBQzNELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUVYLENBQUM7SUFoREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lFQUNhO0lBTnJCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBc0R6QztJQUFELDRCQUFDO0NBdERELEFBc0RDLENBdERrRCxFQUFFLENBQUMsU0FBUyxHQXNEOUQ7a0JBdERvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV1hTZGsgZnJvbSBcIi4uLy4uL3d4L1dYU2RrXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGVPdGhlckdhbWVJY29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgZ2FtZUljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZ2FtZUljb25JbWdBcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgaWNvbkluZGV4Om51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGFwcElkQXJyOnN0cmluZ1tdID0gW1wid3gxYjBkZTA3NWMxNmUwZTI5XCJdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgLy9cIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbUFwcElkTGlzdFwiOiBbXCJ3eDFiMGRlMDc1YzE2ZTBlMjlcIl1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIVdYU2RrLmluc3RhbmNlLmlzV1hQbGF0Zm9ybSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uud3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiB0aGlzLmFwcElkQXJyW3RoaXMuaWNvbkluZGV4XSxcclxuICAgICAgICAgICAgICAgIC8vcGF0aDogJ3BhZ2UvaW5kZXgvaW5kZXg/ZnJvbT14cWZkJyxcclxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICd4cWZkX2R6eidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvL2VudlZlcnNpb246ICdyZWxlYXNlJywvL3JlbGVhc2UgZGV2ZWxvcCB0cmlhbFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcblxyXG4gICAgICAgICAgICB0aGlzLmljb25JbmRleCArKztcclxuICAgICAgICAgICAgdGhpcy5pY29uSW5kZXggJT0gdGhpcy5nYW1lSWNvbkltZ0Fyci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5nYW1lSWNvbkltZ0Fyclt0aGlzLmljb25JbmRleF07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vdGhpcy5hZGRrbmlmZUJ0bi5ub2RlLnBvc2l0aW9uID0gY2MudjIoLTIwMCwwKTtcclxuICAgICAgICAgICAgLy90aGlzLmFkZGtuaWZlQnRuLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjI1LDAsMCkpO1xyXG4gICAgICAgIH0sMy4yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=