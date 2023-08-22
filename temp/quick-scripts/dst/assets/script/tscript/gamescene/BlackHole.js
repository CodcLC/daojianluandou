
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/BlackHole.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01a155n941N4KWBmaZ+N+j1', 'BlackHole');
// script/tscript/gamescene/BlackHole.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Barrier_1 = require("./Barrier");
var Random_1 = require("../util/Random");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var Player_1 = require("./Player");
var UIManager_1 = require("../ui/UIManager");
var SoundManager_1 = require("../core/SoundManager");
var SoundClip_1 = require("../audio/SoundClip");
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
var BlackHole = /** @class */ (function (_super) {
    __extends(BlackHole, _super);
    function BlackHole() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.skin = null;
        _this.body = null;
        _this.cdTimer = 0;
        _this.liveTimer = 5;
        _this.appear = true;
        _this.moveSpeed = 300;
        _this.moveDir = cc.Vec2.ZERO;
        _this.endPos = cc.Vec2.ZERO;
        _this.eatCount = 0;
        _this.knifecount = 0;
        _this.circleCollider = null;
        _this.physicsCircleCollider = null;
        _this._size = 1;
        return _this;
        /*update (dt)
        {
   
           if(this.cdTimer > 0)
           {
               this.cdTimer -= dt;
   
               if(this.cdTimer <= 0)
               {
                   this.liveTimer = Random.Range(3.5,10);
   
                   var sceneSize:cc.Node = this.gameScene.sceneSize;
                   this.node.position = cc.v2(Random.Range(-(sceneSize.width - 300)/2,(sceneSize.width - 300)/2),Random.Range(-(sceneSize.height - 300)/2,(sceneSize.height - 300)/2));
   
                   var seq = cc.sequence(cc.fadeIn(2),cc.callFunc(()=>{
                       this.appear = true;
                   },this));
   
                   this.node.runAction(seq);
   
               }
           }
   
   
           if(this.liveTimer > 0)
           {
               this.liveTimer -= dt;
   
               if(this.liveTimer <= 0)
               {
                   
                   this.appear = false;
                   var seq = cc.sequence(cc.fadeOut(2),cc.callFunc(()=>{
                       //this.appear = false;
                   },this));
   
                   this.node.runAction(seq);
                   this.cdTimer = Random.Range(13,20);
   
               }
           }
   
        }*/
    }
    Object.defineProperty(BlackHole.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.skin.node.scale = this._size;
            if (!this.circleCollider) {
                this.circleCollider = this.body.getComponent(cc.CircleCollider);
            }
            this.circleCollider.radius = 100 * this._size;
            if (!this.physicsCircleCollider) {
                this.physicsCircleCollider = this.getComponent(cc.PhysicsCircleCollider);
            }
            this.physicsCircleCollider.radius = 100 * this._size;
            //this.physicsCircleCollider.radius = 350;
            //cc.log("this.physicsCircleCollider.radius ",this.physicsCircleCollider.radius);
        },
        enumerable: true,
        configurable: true
    });
    BlackHole.prototype.start = function () {
        var roAction = cc.rotateBy(1, 360);
        this.skin.node.runAction(roAction.repeatForever());
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        var sceneSize = this.gameScene.sceneSize;
        this.endPos = cc.v2(Random_1.default.Range(-sceneSize.width / 2, sceneSize.width / 2), Random_1.default.Range(-sceneSize.height / 2, sceneSize.height / 2));
        this.moveDir = this.endPos.sub(this.node.position).normalize();
        var mark = GameManager_1.default.instance.getMark();
        mark.node.parent = UIManager_1.default.instance.getLayer(UIManager_1.LayerType.back);
        mark.player = this.gameScene.player;
        mark.isPlayer = false;
        mark.blackHole = this;
        this.gameScene.blackHole = this;
    };
    BlackHole.prototype.update = function (dt) {
        if (GameManager_1.default.instance.gameStatus != GameManager_1.GameStatus.start)
            return;
        /*this.cdTimer -= dt;

        if(this.cdTimer <= 0)
        {
            this.cdTimer = Random.Range(3.5,7);

            this.endPos = this.getRandomPlayer().node.position;
            this.moveDir = this.endPos.sub(this.node.position).normalize();
        }*/
        var speed = this.moveSpeed * dt;
        var pos = this.node.position.add(this.moveDir.mul(speed));
        this.node.position = pos;
        if (this.endPos.sub(this.node.position).mag() < speed) {
            this.endPos = this.getRandomPlayer().node.position;
            this.moveDir = this.endPos.sub(this.node.position).normalize();
        }
    };
    BlackHole.prototype.getRandomPlayer = function () {
        var playerArr = this.gameScene.playerArr;
        var arr = [];
        for (var i = 0; i < playerArr.length; i++) {
            if (playerArr[i].status != Player_1.PlayerStatus.die) {
                arr.push(playerArr[i]);
            }
        }
        if (arr.length == 0) {
            return this.gameScene.player;
        }
        return arr[Random_1.default.RangeInteger(0, arr.length)];
    };
    BlackHole.prototype.eat = function (knife) {
        this.eatCount++;
        this.size = 1 + Math.floor(this.eatCount / 6) * 0.25;
        this.knifecount++;
        SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.blackhole);
    };
    __decorate([
        property(cc.Sprite)
    ], BlackHole.prototype, "skin", void 0);
    __decorate([
        property(cc.Node)
    ], BlackHole.prototype, "body", void 0);
    BlackHole = __decorate([
        ccclass
    ], BlackHole);
    return BlackHole;
}(Barrier_1.default));
exports.default = BlackHole;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEJsYWNrSG9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUNwQyxtREFBOEQ7QUFDOUQseUNBQW9DO0FBQ3BDLG1DQUFnRDtBQUNoRCw2Q0FBdUQ7QUFFdkQscURBQWdEO0FBQ2hELGdEQUFtRDtBQUVuRCxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFPO0lBRDlDO1FBSUksd0JBQXdCO1FBSjVCLHFFQWdNQztRQTFMRyxlQUFlO1FBR1IsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBVSxDQUFDLENBQUM7UUFFbkIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUV0QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBVSxHQUFHLENBQUM7UUFFdkIsYUFBTyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVUsQ0FBQyxDQUFDO1FBRXBCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRXJCLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUV4QywyQkFBcUIsR0FBcUIsSUFBSSxDQUFDO1FBRS9DLFdBQUssR0FBVyxDQUFDLENBQUM7O1FBbUh6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBMENHO0lBQ1IsQ0FBQztJQTVKRyxzQkFB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QUksQ0FBQyxRQUFRLEVBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztRQUNuQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBMUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUztJQVhWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0ErTDdCO0lBQUQsZ0JBQUM7Q0EvTEQsQUErTEMsQ0EvTHNDLGlCQUFPLEdBK0w3QztrQkEvTG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFycmllciBmcm9tIFwiLi9CYXJyaWVyXCI7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IFBsYXllciwgeyBQbGF5ZXJTdGF0dXMgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IFVJTWFuYWdlciwgeyBMYXllclR5cGUgfSBmcm9tIFwiLi4vdWkvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCBLbmlmZSwgeyBLbmlmZVN0YXR1cyB9IGZyb20gXCIuL0tuaWZlXCI7XHJcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL2NvcmUvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ2xpcFR5cGUgfSBmcm9tIFwiLi4vYXVkaW8vU291bmRDbGlwXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tIb2xlIGV4dGVuZHMgQmFycmllciB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwdWJsaWMgc2tpbjpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJvZHk6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjZFRpbWVyOm51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXZlVGltZXI6bnVtYmVyID0gNTtcclxuXHJcbiAgICBwdWJsaWMgYXBwZWFyOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBtb3ZlU3BlZWQ6bnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHB1YmxpYyBtb3ZlRGlyOmNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgcHVibGljIGVuZFBvczpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHB1YmxpYyBlYXRDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBrbmlmZWNvdW50Om51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjaXJjbGVDb2xsaWRlcjpjYy5DaXJjbGVDb2xsaWRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwaHlzaWNzQ2lyY2xlQ29sbGlkZXI6Y2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNraW4ubm9kZS5zY2FsZSA9IHRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmNpcmNsZUNvbGxpZGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVDb2xsaWRlciA9IHRoaXMuYm9keS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHRoaXMuY2lyY2xlQ29sbGlkZXIucmFkaXVzID0gMTAwICogdGhpcy5fc2l6ZTtcclxuXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnBoeXNpY3NDaXJjbGVDb2xsaWRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljc0NpcmNsZUNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3NDaXJjbGVDb2xsaWRlci5yYWRpdXMgPSAxMDAgKiB0aGlzLl9zaXplO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL3RoaXMucGh5c2ljc0NpcmNsZUNvbGxpZGVyLnJhZGl1cyA9IDM1MDtcclxuICAgICAgICAvL2NjLmxvZyhcInRoaXMucGh5c2ljc0NpcmNsZUNvbGxpZGVyLnJhZGl1cyBcIix0aGlzLnBoeXNpY3NDaXJjbGVDb2xsaWRlci5yYWRpdXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHJvQWN0aW9uID0gY2Mucm90YXRlQnkoMSwzNjApO1xyXG4gICAgICAgIHRoaXMuc2tpbi5ub2RlLnJ1bkFjdGlvbihyb0FjdGlvbi5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cclxuICAgICAgICB2YXIgc2NlbmVTaXplOmNjLk5vZGUgPSB0aGlzLmdhbWVTY2VuZS5zY2VuZVNpemU7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBjYy52MihSYW5kb20uUmFuZ2UoLXNjZW5lU2l6ZS53aWR0aC8yLHNjZW5lU2l6ZS53aWR0aC8yKSxSYW5kb20uUmFuZ2UoLXNjZW5lU2l6ZS5oZWlnaHQvMixzY2VuZVNpemUuaGVpZ2h0LzIpKTtcclxuICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLmVuZFBvcy5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmsgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nZXRNYXJrKCk7XHJcbiAgICAgICAgbWFyay5ub2RlLnBhcmVudCA9IFVJTWFuYWdlci5pbnN0YW5jZS5nZXRMYXllcihMYXllclR5cGUuYmFjayk7XHJcbiAgICAgICAgbWFyay5wbGF5ZXIgPSB0aGlzLmdhbWVTY2VuZS5wbGF5ZXI7XHJcbiAgICAgICAgbWFyay5pc1BsYXllciA9IGZhbHNlO1xyXG4gICAgICAgIG1hcmsuYmxhY2tIb2xlID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUuYmxhY2tIb2xlID0gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgaWYoR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXR1cyAhPSBHYW1lU3RhdHVzLnN0YXJ0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLyp0aGlzLmNkVGltZXIgLT0gZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2RUaW1lciA8PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jZFRpbWVyID0gUmFuZG9tLlJhbmdlKDMuNSw3KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kUG9zID0gdGhpcy5nZXRSYW5kb21QbGF5ZXIoKS5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLmVuZFBvcy5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHZhciBzcGVlZCA9IHRoaXMubW92ZVNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwoc3BlZWQpKTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5kUG9zLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pLm1hZygpIDwgc3BlZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmVuZFBvcyA9IHRoaXMuZ2V0UmFuZG9tUGxheWVyKCkubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5lbmRQb3Muc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldFJhbmRvbVBsYXllcigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHBsYXllckFycjpBcnJheTxQbGF5ZXI+ID0gdGhpcy5nYW1lU2NlbmUucGxheWVyQXJyO1xyXG5cclxuICAgICAgICB2YXIgYXJyOkFycmF5PFBsYXllcj4gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJBcnIubGVuZ3RoIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocGxheWVyQXJyW2ldLnN0YXR1cyAhPSBQbGF5ZXJTdGF0dXMuZGllKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChwbGF5ZXJBcnJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihhcnIubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYW1lU2NlbmUucGxheWVyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBhcnJbUmFuZG9tLlJhbmdlSW50ZWdlcigwLGFyci5sZW5ndGgpXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVhdChrbmlmZTpLbmlmZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVhdENvdW50ICsrO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEgKyBNYXRoLmZsb29yKHRoaXMuZWF0Q291bnQgLyA2KSAqIDAuMjU7XHJcbiAgICAgICAgdGhpcy5rbmlmZWNvdW50ICsrO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5QXVkaW9DbGlwKFNvdW5kQ2xpcFR5cGUuYmxhY2tob2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAgLyp1cGRhdGUgKGR0KSBcclxuICAgICB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2RUaW1lciA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNkVGltZXIgLT0gZHQ7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNkVGltZXIgPD0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXZlVGltZXIgPSBSYW5kb20uUmFuZ2UoMy41LDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmVTaXplOmNjLk5vZGUgPSB0aGlzLmdhbWVTY2VuZS5zY2VuZVNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MihSYW5kb20uUmFuZ2UoLShzY2VuZVNpemUud2lkdGggLSAzMDApLzIsKHNjZW5lU2l6ZS53aWR0aCAtIDMwMCkvMiksUmFuZG9tLlJhbmdlKC0oc2NlbmVTaXplLmhlaWdodCAtIDMwMCkvMiwoc2NlbmVTaXplLmhlaWdodCAtIDMwMCkvMikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMiksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5saXZlVGltZXIgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5saXZlVGltZXIgLT0gZHQ7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxpdmVUaW1lciA8PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UoY2MuZmFkZU91dCgyKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5hcHBlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RUaW1lciA9IFJhbmRvbS5SYW5nZSgxMywyMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9Ki9cclxufVxyXG4iXX0=