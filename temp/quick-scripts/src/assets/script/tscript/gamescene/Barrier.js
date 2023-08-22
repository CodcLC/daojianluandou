"use strict";
cc._RF.push(module, 'e4c4cYS2FtI6p+AI35rs0jE', 'Barrier');
// script/tscript/gamescene/Barrier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Random_1 = require("../util/Random");
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
var BarrierType;
(function (BarrierType) {
    BarrierType[BarrierType["static"] = 0] = "static";
    BarrierType[BarrierType["dynamic"] = 1] = "dynamic";
    BarrierType[BarrierType["blackhole"] = 2] = "blackhole";
})(BarrierType = exports.BarrierType || (exports.BarrierType = {}));
var Barrier = /** @class */ (function (_super) {
    __extends(Barrier, _super);
    function Barrier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarrierType.static;
        // LIFE-CYCLE CALLBACKS:
        _this.gameScene = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Barrier.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.node.scale = 0.7;
        if (this.type == BarrierType.dynamic) {
            //return;
            var sceneSize = this.gameScene.sceneSize;
            var starPos = cc.v2(Random_1.default.Range(-sceneSize.width / 2, sceneSize.width / 2), Random_1.default.Range(-sceneSize.height / 2, sceneSize.height / 2));
            var endPos = cc.v2(Random_1.default.Range(-sceneSize.width / 2, sceneSize.width / 2), Random_1.default.Range(-sceneSize.height / 2, sceneSize.height / 2));
            var dis = endPos.sub(starPos).mag();
            var baseSpeed = Random_1.default.Range(0.5, 2.5) * 60;
            var baseTimer = dis / baseSpeed;
            this.node.position = starPos;
            //baseTimer = 2.5;
            var seq = cc.sequence(cc.moveTo(baseTimer, endPos).easing(cc.easeCubicActionInOut()), cc.moveTo(baseTimer, starPos).easing(cc.easeCubicActionInOut()));
            this.node.runAction(seq.repeatForever());
        }
    };
    __decorate([
        property({ type: cc.Enum(BarrierType) })
    ], Barrier.prototype, "type", void 0);
    Barrier = __decorate([
        ccclass
    ], Barrier);
    return Barrier;
}(cc.Component));
exports.default = Barrier;

cc._RF.pop();