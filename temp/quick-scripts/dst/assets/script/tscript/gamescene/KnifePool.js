
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/KnifePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEtuaWZlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdEO0FBQ2hELGlDQUF3RDtBQUN4RCx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLG1EQUE4QztBQUU5QyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBNFJDO1FBdlJVLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFVLEdBQUcsQ0FBQztRQUVwQixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUV0QixZQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUd4QixjQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGFBQU8sR0FBVSxHQUFHLENBQUM7O0lBMlFqQyxDQUFDO0lBeFFHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQUssQ0FBQyxDQUFDO1FBRWxELGlDQUFpQztRQUdqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JJO0lBR1IsQ0FBQztJQUVBLDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRVAsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxJ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QU8sQ0FBQyxHQUFHLEdBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBRXhDO0lBQ0osQ0FBQztJQXRSRjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDOzZDQUNXO0lBSlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJSN0I7SUFBRCxnQkFBQztDQTNSRCxBQTJSQyxDQTNSc0MsRUFBRSxDQUFDLFNBQVMsR0EyUmxEO2tCQTNSb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIsIHsgUGxheWVyU3RhdHVzIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBLbmlmZSwgeyBLbmlmZVR5cGUsIEtuaWZlU3RhdHVzIH0gZnJvbSBcIi4vS25pZmVcIjtcclxuaW1wb3J0IFJhbmRvbSBmcm9tIFwiLi4vdXRpbC9SYW5kb21cIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBDb21tb25VaWxzIGZyb20gXCIuLi91dGlsL0NvbW1vblVpbHNcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9jb3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZmVQb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwdWJsaWMgcGxheWVyOlBsYXllciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHJhZGl1czpudW1iZXIgPSAxMjU7XHJcblxyXG4gICAgcHVibGljIHJvdGFTcGVlZCA9IDE4MDtcclxuXHJcbiAgICBwcml2YXRlIHJvdGFBbmdsZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBrbmlmZXM6QXJyYXk8S25pZmU+ID0gW107IFxyXG5cclxuXHJcbiAgICBwcml2YXRlIGxpbWl0TnVtOm51bWJlciA9IDI1O1xyXG4gICAgcHJpdmF0ZSBiYXNlTnVtOm51bWJlciA9IDEwMDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmtuaWZlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oS25pZmUpO1xyXG5cclxuICAgICAgICAvL3RoaXMuaW5pdEtuaWZlKHRoaXMuaW5pdENvdW50KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZWZlbmNlU3RhdGUoKTtcclxuXHJcbiAgICAgICAgLypjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoMigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWcuuaZr+mjnuWIgOaVsFwiLHRoaXMucGxheWVyLmdhbWVTY2VuZS5rbmlmZUFyci5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSovXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAgdXBkYXRlIChkdCkgXHJcbiAgICAge1xyXG4gICAgICAgIHRoaXMucm90YUFuZ2xlIC09IGR0ICogdGhpcy5yb3RhU3BlZWQgKiB0aGlzLnBsYXllci5yb3RhU3BlZWRVcDtcclxuICAgICAgICB0aGlzLnJvdGFBbmdsZSAlPSAzNjA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5yb3RhQW5nbGU7XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgaW5pdEtuaWZlKGNvdW50Om51bWJlcilcclxuICAgICB7XHJcblxyXG4gICAgICAgIHZhciB0ZW1wS25pZmU6QXJyYXk8S25pZmU+ID0gdGhpcy5rbmlmZXMuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCB0ZW1wS25pZmUubGVuZ3RoIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVLbmlmZSh0ZW1wS25pZmVbaV0pO1xyXG4gICAgICAgICAgICB0ZW1wS25pZmVbaV0uZGVzdHJveVNlbGYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgY291bnQgOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIga25pZmU6S25pZmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRLbmlmZShLbmlmZVR5cGUubm9ybWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRLbmlmZShrbmlmZSk7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHVibGljIGFkZEtuaWZlKGtuaWZlOktuaWZlKVxyXG4gICAgIHtcclxuICAgICAgICAgaWYodGhpcy5rbmlmZXMuaW5kZXhPZihrbmlmZSkgIT0gLTEpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYoa25pZmUubm9kZS5wYXJlbnQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB3b3JsZFBvczpjYy5WZWMyID0ga25pZmUubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGtuaWZlLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgcmVsYVBvczpjYy5WZWMyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAga25pZmUubm9kZS5wb3NpdGlvbiA9IHJlbGFQb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrbmlmZS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBrbmlmZS5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgICAgICBrbmlmZS5zdGF0dXMgPSBLbmlmZVN0YXR1cy5jYXB0dXJlO1xyXG4gICAgICAgIGtuaWZlLnNldFNraW4odGhpcy5wbGF5ZXIua25pZmVJZCk7XHJcbiAgICAgICAgdGhpcy5rbmlmZXMucHVzaChrbmlmZSk7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllci5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5rbmlmZXMubGVuZ3RoID4gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmtuaXZlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2V0UGxheWVyRGF0YSgpLmtuaXZlcyA9IHRoaXMua25pZmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmVMZXZlbERhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnN0YXR1cyA9PSBQbGF5ZXJTdGF0dXMuZGVmZW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5hdHRhY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyB1cGRhdGVLbmlmZXNTa2luKGtuaWZlSWQ6bnVtYmVyKVxyXG4gICAgIHtcclxuICAgICAgICAgdmFyIGxlbjpudW1iZXIgPSB0aGlzLmtuaWZlcy5sZW5ndGg7XHJcbiAgICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgbGVuIDsgaSsrKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGlzLmtuaWZlc1tpXS5zZXRTa2luKGtuaWZlSWQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgcmVtb3ZlS25pZmUoa25pZmU6S25pZmUpXHJcbiAgICAge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLmtuaWZlcy5pbmRleE9mKGtuaWZlKTtcclxuXHJcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmtuaWZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRlZmVuY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmF0dGFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBkaXNwb3NlQWxsS25pZmVzKClcclxuICAgICB7XHJcbiAgICAgICAgIHZhciBhcnI6QXJyYXk8S25pZmU+ID0gdGhpcy5rbmlmZXMuc2xpY2UoKTtcclxuICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBhcnIubGVuZ3RoIDsgaSsrKVxyXG4gICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGlyOmNjLlZlYzIgPSBjYy52MihSYW5kb20uUmFuZ2UoLTEsMSksUmFuZG9tLlJhbmdlKC0xLDEpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgIGFycltpXS5mbHkoZGlyKTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICog5YiH5o2i6Ziy5b6h54q25oCBXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIGNoYW5nZURlZmVuY2VTdGF0ZSgpXHJcbiAgICAge1xyXG4gICAgICAgIHZhciBsZW46bnVtYmVyID0gdGhpcy5rbmlmZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB2YXIgYW5nbGU6bnVtYmVyID0gMiAqIE1hdGguUEkgLyBsZW47XHJcbiAgICAgICAgdmFyIGV1bGVyQW5nbGUgPSAzNjAgLyBsZW47XHJcblxyXG5cclxuICAgICAgICAvL3ZhciB0ID0gMSAvIGxlbjtcclxuXHJcbiAgICAgICAgLyppZih0ID4gMC4xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdCA+IDAuMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodCA8PSAwLjAwMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHQgPSAwLjAwMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuXHJcbiAgICAgICAgICAgIHZhciBrbmlmZTpLbmlmZSA9IHRoaXMua25pZmVzW2ldO1xyXG4gICAgICAgICAgICBpZigha25pZmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBrbmlmZS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zOmNjLlZlYzIgPSBjYy52Mih0aGlzLnJhZGl1cyAqIE1hdGguY29zKGkgKiBhbmdsZSksdGhpcy5yYWRpdXMgKiBNYXRoLnNpbihpICogYW5nbGUpKTtcclxuICAgICAgICAgICAga25pZmUuc2V0UG9zKHBvcyk7XHJcbiAgICAgICAgICAgIGtuaWZlLnNldFJvdGEoOTAgLSBpICogZXVsZXJBbmdsZSk7XHJcbiAgICAgICAgICAgIC8va25pZmUuc2V0U2NhbGUoUmFuZG9tLlJhbmdlKDEsNCkpO1xyXG5cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0sdCxsZW4gLSAxKSovXHJcblxyXG4gICAgICAgIC8vdGhpcy5yYWRpdXMgPSAxNjAgKyBNYXRoLmZsb29yKGxlbi8xMCkgKiAzMDtcclxuXHJcbiAgICAgICAgdmFyIHJkOm51bWJlciA9IGxlbiA8IDEwID8gMTAgOiBsZW47XHJcblxyXG4gICAgICAgIHZhciByYWRpdXNTY2FsZSA9IGxlbiAvIHRoaXMuYmFzZU51bSArICgxIC0gdGhpcy5saW1pdE51bSAvdGhpcy5iYXNlTnVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAoMTMzLjkzMDggKiByYWRpdXNTY2FsZSArIHJkICogNS4zNTY0KTtcclxuICAgICAgICB0aGlzLnJvdGFTcGVlZCA9IDE0NDtcclxuICAgICAgICB0aGlzLnBsYXllci5zaXplID0gKDExNSArIGxlbiAqIDEuOTQpIC8gMTE1O1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBpY2tSYWRpdXMgPSB0aGlzLnJhZGl1cztcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZW4gOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIga25pZmU6S25pZmUgPSB0aGlzLmtuaWZlc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGtuaWZlLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGxlbiA+PSB0aGlzLmxpbWl0TnVtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrbmlmZS5ub2RlLnNjYWxlID0gKChpICUgNSArIDEpIC8gNSAqIDAuNiArIDAuNzUpOyAgXHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8va25pZmUubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBrbmlmZS5ub2RlLnNjYWxlID0gcmFkaXVzU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwb3M6Y2MuVmVjMiA9IGNjLnYyKHRoaXMucmFkaXVzICogTWF0aC5jb3MoaSAqIGFuZ2xlKSx0aGlzLnJhZGl1cyAqIE1hdGguc2luKGkgKiBhbmdsZSkpO1xyXG4gICAgICAgICAgICBrbmlmZS5zZXRQb3MocG9zKTtcclxuICAgICAgICAgICAga25pZmUuc2V0Um90YSg5MCAtIGkgKiBldWxlckFuZ2xlKTtcclxuICAgICAgICAgICAgLy9rbmlmZS5zZXRTY2FsZShSYW5kb20uUmFuZ2UoMSw0KSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICAqIOWIh+aNoui/m+aUu+eKtuaAgVxyXG4gICAgICAqL1xyXG4gICAgIHB1YmxpYyBjaGFuZ2VBdHRhY2tTdGF0ZSgpXHJcbiAgICAge1xyXG4gICAgICAgIHZhciBsZW46bnVtYmVyID0gdGhpcy5rbmlmZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB2YXIgYW5nbGU6bnVtYmVyID0gMiAqIE1hdGguUEkgLyBsZW47XHJcbiAgICAgICAgdmFyIGV1bGVyQW5nbGUgPSAzNjAgLyBsZW47XHJcblxyXG4gICAgICAgIC8vdGhpcy5yYWRpdXMgPSAxNjAgKyBNYXRoLmZsb29yKGxlbi8xMCkgKiAzMDtcclxuXHJcbiAgICAgICAgdmFyIHJkOm51bWJlciA9IGxlbiA8IDEwID8gMTAgOiBsZW47XHJcblxyXG4gICAgICAgIHZhciByYWRpdXNTY2FsZSA9IGxlbiAvIHRoaXMuYmFzZU51bSArICgxIC0gdGhpcy5saW1pdE51bSAvdGhpcy5iYXNlTnVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMzMuOTMwOCAqIHJhZGl1c1NjYWxlICsgcmQgKiA1LjM1NjQgKyA5MCAgKiByYWRpdXNTY2FsZTtcclxuICAgICAgICB0aGlzLnJvdGFTcGVlZCA9IDE2MDtcclxuICAgICAgICB0aGlzLnBsYXllci5zaXplID0gKDExNSArIGxlbiAqIDEuOTQpIC8gMTE1O1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBpY2tSYWRpdXMgPSB0aGlzLnJhZGl1cztcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBsZW4gOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIga25pZmU6S25pZmUgPSB0aGlzLmtuaWZlc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGtuaWZlLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGxlbiA+PSB0aGlzLmxpbWl0TnVtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrbmlmZS5ub2RlLnNjYWxlID0gKChpICUgNSArIDEpIC8gNSAqIDAuNiArIDAuNzUpO1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2tuaWZlLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAga25pZmUubm9kZS5zY2FsZSA9IHJhZGl1c1NjYWxlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zOmNjLlZlYzIgPSBjYy52Mih0aGlzLnJhZGl1cyAqIE1hdGguY29zKGkgKiBhbmdsZSksdGhpcy5yYWRpdXMgKiBNYXRoLnNpbihpICogYW5nbGUpKTtcclxuICAgICAgICAgICAga25pZmUuc2V0UG9zKHBvcyk7XHJcbiAgICAgICAgICAgIGtuaWZlLnNldFJvdGEoMTgwICAtIGkgKiBldWxlckFuZ2xlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxufVxyXG4iXX0=