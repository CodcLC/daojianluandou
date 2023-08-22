
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TestPhysics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d501n6Sg5LyL+2wQch5LeV', 'TestPhysics');
// script/TestPhysics.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.rigibody = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
        //cc.director.getPhysicsManager().gravity = cc.Vec2.ZERO;
    };
    NewClass.prototype.start = function () {
        //this.rigibody.applyTorque(1000,true);
        var _this = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            switch (event.keyCode) {
                case cc.macro.KEY.a:
                    _this.rigibody.node.position = cc.Vec2.ZERO;
                    _this.rigibody.linearVelocity = cc.Vec2.ZERO;
                    break;
                case cc.macro.KEY.s:
                    _this.rigibody.applyForce(cc.v2(0, -1).mul(100000), cc.v2(0, 25), true);
                    break;
                case cc.macro.KEY.d:
                    break;
            }
        });
    };
    NewClass.prototype.update = function (dt) {
        //var fp:cc.Vec2 = cc.v2(10,10).sub(this.rigibody.node.position);//向心力矢量，但此时向量模不正确
        //fp = fp.normalize().mul(this.rigibody.getMass() * 1.0);//纠正向量的模
        //this.rigibody.applyForce(cc.v2(-1,0).mul(100),cc.v2(0,500),true);
        //this.rigibody.node.x += dt * 10;
        //this.rigibody.node.rotation += dt * 5;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.RigidBody)
    ], NewClass.prototype, "rigibody", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXN0UGh5c2ljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQThEQztRQTFERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHaEIsY0FBUSxHQUFnQixJQUFJLENBQUM7O0lBb0R4QyxDQUFDO0lBbERHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkQseURBQXlEO0lBQzdELENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBRUksdUNBQXVDO1FBRjNDLGlCQTZCQztRQXpCRyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsVUFBQyxLQUFLO1lBRXBELFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFDcEI7Z0JBQ0ksS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUduQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM1QyxNQUFNO2dCQUVOLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBRW5FLE1BQU07Z0JBRU4sS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUluQixNQUFNO2FBQ1Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFQSx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVQLGtGQUFrRjtRQUN4RixpRUFBaUU7UUFDakUsbUVBQW1FO1FBRTdELGtDQUFrQztRQUNsQyx3Q0FBd0M7SUFFM0MsQ0FBQztJQXpERjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNhO0lBVG5CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RDVCO0lBQUQsZUFBQztDQTdERCxBQTZEQyxDQTdEcUMsRUFBRSxDQUFDLFNBQVMsR0E2RGpEO2tCQTdEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcclxuICAgIHB1YmxpYyByaWdpYm9keTpjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgLy90aGlzLnJpZ2lib2R5LmFwcGx5VG9ycXVlKDEwMDAsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWJvZHkubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWJvZHkuYXBwbHlGb3JjZShjYy52MigwLC0xKS5tdWwoMTAwMDAwKSxjYy52MigwLDI1KSx0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAgIHtcclxuICAgICAgICAvL3ZhciBmcDpjYy5WZWMyID0gY2MudjIoMTAsMTApLnN1Yih0aGlzLnJpZ2lib2R5Lm5vZGUucG9zaXRpb24pOy8v5ZCR5b+D5Yqb55+i6YeP77yM5L2G5q2k5pe25ZCR6YeP5qih5LiN5q2j56GuXHJcblx0XHQvL2ZwID0gZnAubm9ybWFsaXplKCkubXVsKHRoaXMucmlnaWJvZHkuZ2V0TWFzcygpICogMS4wKTsvL+e6oOato+WQkemHj+eahOaooVxyXG5cdFx0Ly90aGlzLnJpZ2lib2R5LmFwcGx5Rm9yY2UoY2MudjIoLTEsMCkubXVsKDEwMCksY2MudjIoMCw1MDApLHRydWUpO1xyXG5cclxuICAgICAgICAvL3RoaXMucmlnaWJvZHkubm9kZS54ICs9IGR0ICogMTA7XHJcbiAgICAgICAgLy90aGlzLnJpZ2lib2R5Lm5vZGUucm90YXRpb24gKz0gZHQgKiA1O1xyXG5cclxuICAgICB9XHJcbn1cclxuIl19