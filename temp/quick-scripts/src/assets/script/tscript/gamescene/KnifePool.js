"use strict";
cc._RF.push(module, 'c4bdd116CZJqJdKFHYxqqqR', 'KnifePool');
// script/tscript/gamescene/KnifePool.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Knife_1 = require("./Knife");
var Random_1 = require("../util/Random");
var GameManager_1 = require("../core/GameManager");
var DataManager_1 = require("../core/DataManager");
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
var KnifePool = /** @class */ (function (_super) {
    __extends(KnifePool, _super);
    function KnifePool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.radius = 125;
        _this.rotaSpeed = 180;
        _this.rotaAngle = 0;
        _this.knifes = [];
        _this.limitNum = 25;
        _this.baseNum = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    KnifePool.prototype.start = function () {
        this.knifes = this.getComponentsInChildren(Knife_1.default);
        //this.initKnife(this.initCount);
        this.changeDefenceState();
        /*cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{

            switch(event.keyCode)
            {
                case cc.macro.KEY.a:

                this.refresh();

                break;

                case cc.macro.KEY.s:

                this.refresh2();

                break;

                case cc.macro.KEY.d:


                cc.log("场景飞刀数",this.player.gameScene.knifeArr.length);

                
                break;
            }
        })*/
    };
    KnifePool.prototype.update = function (dt) {
        this.rotaAngle -= dt * this.rotaSpeed * this.player.rotaSpeedUp;
        this.rotaAngle %= 360;
        this.node.angle = this.rotaAngle;
    };
    KnifePool.prototype.initKnife = function (count) {
        var tempKnife = this.knifes.slice();
        for (var i = 0; i < tempKnife.length; i++) {
            this.removeKnife(tempKnife[i]);
            tempKnife[i].destroySelf();
        }
        for (var i = 0; i < count; i++) {
            var knife = GameManager_1.default.instance.getKnife(Knife_1.KnifeType.normal);
            this.addKnife(knife);
        }
    };
    KnifePool.prototype.addKnife = function (knife) {
        if (this.knifes.indexOf(knife) != -1) {
            return;
        }
        if (knife.node.parent != null) {
            var worldPos = knife.node.parent.convertToWorldSpaceAR(knife.node.position);
            var relaPos = this.node.convertToNodeSpaceAR(worldPos);
            knife.node.position = relaPos;
        }
        knife.node.parent = this.node;
        knife.player = this.player;
        knife.status = Knife_1.KnifeStatus.capture;
        knife.setSkin(this.player.knifeId);
        this.knifes.push(knife);
        if (!this.player.isAI) {
            if (this.knifes.length > DataManager_1.default.instance.getPlayerData().knives) {
                DataManager_1.default.instance.getPlayerData().knives = this.knifes.length;
                DataManager_1.default.instance.saveLevelData();
            }
        }
        if (this.player.status == Player_1.PlayerStatus.defence) {
            this.changeDefenceState();
        }
        else if (this.player.status == Player_1.PlayerStatus.attack) {
            this.changeAttackState();
        }
    };
    KnifePool.prototype.updateKnifesSkin = function (knifeId) {
        var len = this.knifes.length;
        for (var i = 0; i < len; i++) {
            this.knifes[i].setSkin(knifeId);
        }
    };
    KnifePool.prototype.removeKnife = function (knife) {
        var index = this.knifes.indexOf(knife);
        if (index != -1) {
            this.knifes.splice(index, 1);
            if (this.player.status == Player_1.PlayerStatus.defence) {
                this.changeDefenceState();
            }
            else if (this.player.status == Player_1.PlayerStatus.attack) {
                this.changeAttackState();
            }
        }
    };
    KnifePool.prototype.disposeAllKnifes = function () {
        var arr = this.knifes.slice();
        for (var i = 0; i < arr.length; i++) {
            var dir = cc.v2(Random_1.default.Range(-1, 1), Random_1.default.Range(-1, 1)).normalize();
            arr[i].fly(dir);
        }
    };
    /**
     * 切换防御状态
     */
    KnifePool.prototype.changeDefenceState = function () {
        var len = this.knifes.length;
        var angle = 2 * Math.PI / len;
        var eulerAngle = 360 / len;
        //var t = 1 / len;
        /*if(t > 0.1)
        {
            t > 0.1
        }

        if(t <= 0.001)
        {
            t = 0.001;
        }

        this.schedule(()=>{

            var knife:Knife = this.knifes[i];
            if(!knife)
                return;

            knife.node.stopAllActions();

            var pos:cc.Vec2 = cc.v2(this.radius * Math.cos(i * angle),this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(90 - i * eulerAngle);
            //knife.setScale(Random.Range(1,4));

            i++;
        },t,len - 1)*/
        //this.radius = 160 + Math.floor(len/10) * 30;
        var rd = len < 10 ? 10 : len;
        var radiusScale = len / this.baseNum + (1 - this.limitNum / this.baseNum);
        this.radius = (133.9308 * radiusScale + rd * 5.3564);
        this.rotaSpeed = 144;
        this.player.size = (115 + len * 1.94) / 115;
        this.player.pickRadius = this.radius;
        for (var i = 0; i < len; i++) {
            var knife = this.knifes[i];
            knife.node.stopAllActions();
            if (len >= this.limitNum) {
                knife.node.scale = ((i % 5 + 1) / 5 * 0.6 + 0.75);
            }
            else {
                //knife.node.scale = 1;
                knife.node.scale = radiusScale;
            }
            var pos = cc.v2(this.radius * Math.cos(i * angle), this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(90 - i * eulerAngle);
            //knife.setScale(Random.Range(1,4));
        }
    };
    /**
     * 切换进攻状态
     */
    KnifePool.prototype.changeAttackState = function () {
        var len = this.knifes.length;
        var angle = 2 * Math.PI / len;
        var eulerAngle = 360 / len;
        //this.radius = 160 + Math.floor(len/10) * 30;
        var rd = len < 10 ? 10 : len;
        var radiusScale = len / this.baseNum + (1 - this.limitNum / this.baseNum);
        this.radius = 133.9308 * radiusScale + rd * 5.3564 + 90 * radiusScale;
        this.rotaSpeed = 160;
        this.player.size = (115 + len * 1.94) / 115;
        this.player.pickRadius = this.radius;
        for (var i = 0; i < len; i++) {
            var knife = this.knifes[i];
            knife.node.stopAllActions();
            if (len >= this.limitNum) {
                knife.node.scale = ((i % 5 + 1) / 5 * 0.6 + 0.75);
            }
            else {
                //knife.node.scale = 1;
                knife.node.scale = radiusScale;
            }
            var pos = cc.v2(this.radius * Math.cos(i * angle), this.radius * Math.sin(i * angle));
            knife.setPos(pos);
            knife.setRota(180 - i * eulerAngle);
        }
    };
    __decorate([
        property(Player_1.default)
    ], KnifePool.prototype, "player", void 0);
    KnifePool = __decorate([
        ccclass
    ], KnifePool);
    return KnifePool;
}(cc.Component));
exports.default = KnifePool;

cc._RF.pop();