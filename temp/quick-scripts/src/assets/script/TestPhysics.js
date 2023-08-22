"use strict";
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