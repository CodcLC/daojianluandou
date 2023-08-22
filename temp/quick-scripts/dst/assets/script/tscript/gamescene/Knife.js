
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Knife.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42a9bdmWaRJLKhRV5/o+TYs', 'Knife');
// script/tscript/gamescene/Knife.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesPool_1 = require("../core/ResourcesPool");
var Player_1 = require("./Player");
var Random_1 = require("../util/Random");
var KnifePool_1 = require("./KnifePool");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var WXSdk_1 = require("../wx/WXSdk");
var BlackHole_1 = require("./BlackHole");
var CameraFollow_1 = require("./CameraFollow");
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
var KnifeType;
(function (KnifeType) {
    KnifeType[KnifeType["normal"] = 0] = "normal";
    KnifeType[KnifeType["red"] = 1] = "red";
    KnifeType[KnifeType["green"] = 2] = "green";
})(KnifeType = exports.KnifeType || (exports.KnifeType = {}));
var KnifeStatus;
(function (KnifeStatus) {
    KnifeStatus[KnifeStatus["normal"] = 0] = "normal";
    KnifeStatus[KnifeStatus["capture"] = 1] = "capture";
    KnifeStatus[KnifeStatus["fly"] = 2] = "fly";
    KnifeStatus[KnifeStatus["absorb"] = 3] = "absorb";
})(KnifeStatus = exports.KnifeStatus || (exports.KnifeStatus = {}));
var Knife = /** @class */ (function (_super) {
    __extends(Knife, _super);
    function Knife() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = KnifeType.normal;
        _this.skin = null;
        _this.status = KnifeStatus.normal;
        _this.player = null;
        _this.damage = 30;
        _this.rotaSpeed = 90;
        _this.rotaAngle = 0;
        _this.targetAngle = 0;
        _this.targetPos = cc.Vec2.ZERO;
        _this.halfSize = cc.Size.ZERO;
        return _this;
    }
    Knife_1 = Knife;
    // LIFE-CYCLE CALLBACKS:
    Knife.prototype.onLoad = function () {
        this.baseScale = this.node.scale;
        //this.setSkin(2,5);
    };
    Knife.prototype.start = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
        this.skin.node.width = this.skin.spriteFrame.getRect().width;
        this.skin.node.height = this.skin.spriteFrame.getRect().height;
        /*this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
this.schedule(()=>{
    
    this.setPos(cc.v2(Random.Range(-250,250),Random.Range(-250,250)));
},2.5);*/
    };
    Knife.prototype.setSkin = function (id) {
        /*ResourcesManager.instance.load(`knife/dao_${id - 1}`,(spriteFrame:cc.SpriteFrame)=>{

            if(spriteFrame)
            {
                this.skin.spriteFrame = spriteFrame;
                
                this.skin.node.width = spriteFrame.getRect().width;
                this.skin.node.height = spriteFrame.getRect().height;
                //this.skin.node.width = 500

            }

        },cc.SpriteFrame,true,false)*/
        var spriteFrame = GameManager_1.default.instance.daoImgs[id - 1];
        this.skin.spriteFrame = spriteFrame;
        this.skin.node.width = spriteFrame.getRect().width;
        this.skin.node.height = spriteFrame.getRect().height;
    };
    Knife.prototype.update = function (dt) {
        /*var speed = dt * this.rotaSpeed;

        var dir = this.targetAngle - this.node.rotation;

        if(speed > Math.abs(dir))
        {
            this.node.rotation = this.targetAngle;
            //cc.log("dddd");
        }else
        {
            if(dir > 0)
            {
                this.node.rotation += speed;
            }else
            {
                this.node.rotation -= speed;
            }
            
        }*/
        if (this.node.parent == GameManager_1.default.instance.gameScene) {
            this.halfSize.width = (this.gameScene.sceneSize.width - this.node.width) / 2;
            this.halfSize.height = (this.gameScene.sceneSize.height - this.node.height) / 2;
            var pos = this.node.position;
            if (pos.x < -this.halfSize.width) {
                pos.x = -this.halfSize.width;
            }
            else if (pos.x > this.halfSize.width) {
                pos.x = this.halfSize.width;
            }
            if (pos.y < -this.halfSize.height) {
                pos.y = -this.halfSize.height;
            }
            else if (pos.y > this.halfSize.height) {
                pos.y = this.halfSize.height;
            }
            this.node.position = pos;
        }
    };
    Knife.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
        }
        else if (other.tag == 1) {
            if (this.status == KnifeStatus.capture) {
                var knife = other.getComponent(Knife_1);
                //cc.log("碰撞到了 other ",knife,this,knife.status,knife.status == KnifeStatus.capture,KnifeStatus.fly);
                if (knife && knife.status == KnifeStatus.capture && knife.player && knife.player != this.player) {
                    if (!this.player.isAI || !knife.player.isAI) {
                        WXSdk_1.default.instance.vibrateShort();
                        CameraFollow_1.default.instance.shake();
                        SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.kfhit);
                    }
                    //cc.log("hit other ",knife,knife.status);
                    var dir = this.node.position.sub(knife.node.position).normalize();
                    if (knife.player.status == Player_1.PlayerStatus.attack) {
                        knife.fly(dir.mul(-1));
                    }
                    if (this.player.status == Player_1.PlayerStatus.attack) {
                        this.fly(dir);
                    }
                }
            }
        }
        else if (other.tag == 2) //碰到了障碍物
         {
            if (this.status == KnifeStatus.capture || this.status == KnifeStatus.fly) {
                if (this.player && !this.player.isAI) {
                    WXSdk_1.default.instance.vibrateShort();
                    CameraFollow_1.default.instance.shake();
                    SoundManager_1.default.instance.playAudioClip(SoundClip_1.SoundClipType.kfhit);
                }
                var dir = this.node.position.sub(other.node.position).normalize();
                this.fly(dir);
            }
        }
        else if (other.tag == 5) //碰撞刀了黑洞
         {
            this.absorbed(other.node.parent.getComponent(BlackHole_1.default));
        }
    };
    Knife.prototype.fly = function (dir) {
        var _this = this;
        if (dir === void 0) { dir = cc.Vec2.ONE; }
        if (this.status == KnifeStatus.capture) {
            this.status = KnifeStatus.fly;
            var pool = this.node.parent.getComponent(KnifePool_1.default);
            if (pool) {
                pool.removeKnife(this);
            }
        }
        if (this.node.parent != GameManager_1.default.instance.gameScene) {
            var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos = GameManager_1.default.instance.gameScene.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }
        this.node.parent = GameManager_1.default.instance.gameScene;
        this.player = null;
        this.node.stopAllActions();
        this.node.scale = 1;
        var t = Random_1.default.Range(0.65, 1.0);
        var spawn = cc.spawn(cc.moveBy(t, dir.mul(Random_1.default.Range(360, 540))).easing(cc.easeCubicActionOut()), cc.rotateBy(t, 1080).easing(cc.easeCubicActionOut()));
        var seq = cc.sequence(spawn, cc.callFunc(function () {
            _this.status = KnifeStatus.normal;
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).addKnife(_this);
        }, this));
        this.node.runAction(seq);
    };
    Knife.prototype.absorbed = function (blackhole) {
        var _this = this;
        if (!blackhole.appear)
            return;
        if (this.status == KnifeStatus.absorb)
            return;
        if (this.status == KnifeStatus.capture) {
            var pool = this.node.parent.getComponent(KnifePool_1.default);
            if (pool) {
                pool.removeKnife(this);
            }
        }
        this.status = KnifeStatus.absorb;
        if (this.node.parent != blackhole.node) {
            var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var relaPos = blackhole.node.convertToNodeSpaceAR(worldPos);
            this.node.position = relaPos;
        }
        this.node.parent = blackhole.node;
        this.player = null;
        this.node.stopAllActions();
        this.node.scale = 1;
        //var dir:cc.Vec2 = cc.Vec2.ZERO.sub(cc.v2(1,0)).normalize();
        var dir = cc.Vec2.ZERO.sub(this.node.position).normalize();
        var eulerAngle = 90 - Math.atan2(dir.y, dir.x) * 180 / Math.PI;
        this.node.runAction(cc.rotateTo(0.15, eulerAngle));
        //this.node.rotation = eulerAngle;
        var t = Random_1.default.Range(0.65, 1.0);
        var spawnAction = cc.spawn(cc.moveTo(0.45, cc.Vec2.ZERO), cc.fadeTo(0.45, 25), cc.scaleTo(0.45, 0.25));
        var seq = cc.sequence(spawnAction, cc.callFunc(function () {
            blackhole.eat(_this);
            _this.status = KnifeStatus.normal;
            GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default).removeKnife(_this);
            _this.destroySelf();
        }, this));
        this.node.runAction(seq);
    };
    Knife.prototype.setRota = function (eulerAngle) {
        //this.targetAngle = eulerAngle;
        //this.node.stopAllActions();
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.start) {
            this.node.runAction(cc.rotateTo(0.1, eulerAngle));
        }
        else {
            //this.node.rotation = eulerAngle;
            //this.node.runAction(cc.rotateTo(0.05,eulerAngle));
            this.node.runAction(cc.rotateTo(0.1, eulerAngle));
        }
        //this.node.rotation = eulerAngle;
    };
    Knife.prototype.setPos = function (pos) {
        //this.targetPos = pos;
        var t = this.node.position.sub(pos).mag() / 1000;
        //t = 0.3;
        this.node.runAction(cc.moveTo(t, pos));
        //this.node.position = pos;
    };
    Knife.prototype.rotateTowards = function () {
    };
    Knife.prototype.setScale = function (size) {
        //this.node.scale = size;
        this.node.scale = this.baseScale * size;
    };
    Knife.prototype.getKey = function () {
        //return PopupText.name;
        return "Knife";
    };
    Knife.prototype.awake = function () {
        this.node.position = cc.Vec2.ZERO;
        this.node.active = true;
        this.node.color = cc.Color.WHITE;
        this.node.opacity = 255;
        this.node.scale = 1;
        this.status = KnifeStatus.normal;
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
    };
    Knife.prototype.sleep = function () {
        this.node.stopAllActions();
        this.node.parent = null;
        this.node.active = false;
        this.status = KnifeStatus.normal;
    };
    Knife.prototype.destroySelf = function () {
        ResourcesPool_1.default.instance.put(this, 50);
    };
    var Knife_1;
    __decorate([
        property({ type: cc.Enum(KnifeType) })
    ], Knife.prototype, "type", void 0);
    __decorate([
        property(cc.Sprite)
    ], Knife.prototype, "skin", void 0);
    Knife = Knife_1 = __decorate([
        ccclass
    ], Knife);
    return Knife;
}(cc.Component));
exports.default = Knife;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEtuaWZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBK0Q7QUFDL0QsbUNBQWdEO0FBQ2hELHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFDcEMsbURBQThEO0FBQzlELHlDQUFvQztBQUVwQyxxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFDaEQsZ0RBQW1EO0FBRW5ELG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFFMUMsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBRWpCLDZDQUFVLENBQUE7SUFDVix1Q0FBTyxDQUFBO0lBQ1AsMkNBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUVELElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUVuQixpREFBVSxDQUFBO0lBQ1YsbURBQVcsQ0FBQTtJQUNYLDJDQUFPLENBQUE7SUFDUCxpREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBR0Q7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFnWEM7UUE1V0csVUFBSSxHQUFhLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFHbEMsVUFBSSxHQUFhLElBQUksQ0FBQztRQUVmLFlBQU0sR0FBZSxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXhDLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFVLEVBQUUsQ0FBQztRQUlsQixlQUFTLEdBQUcsRUFBRSxDQUFDO1FB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LENBQUMsU0FBUyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDTSxxQkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRU0sMkJBQVcsR0FBbEI7UUFFSSx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0lBMVdEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQzt1Q0FDRjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNFO0lBTkwsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQStXekI7SUFBRCxZQUFDO0NBL1dELEFBK1dDLENBL1drQyxFQUFFLENBQUMsU0FBUyxHQStXOUM7a0JBL1dvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGhmIGZyb20gXCIuLi91dGlsL01hdGhmXCI7XHJcbmltcG9ydCBSZXNvdXJjZXNQb29sLCB7IFJlY3ljbGUgfSBmcm9tIFwiLi4vY29yZS9SZXNvdXJjZXNQb29sXCI7XHJcbmltcG9ydCBQbGF5ZXIsIHsgUGxheWVyU3RhdHVzIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBLbmlmZVBvb2wgZnJvbSBcIi4vS25pZmVQb29sXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IFJlc291cmNlc01hbmFnZXIgZnJvbSBcIi4uL2NvcmUvUmVzb3VyY2VzTWFuYWdlclwiO1xyXG5pbXBvcnQgV1hTZGsgZnJvbSBcIi4uL3d4L1dYU2RrXCI7XHJcbmltcG9ydCBCbGFja0hvbGUgZnJvbSBcIi4vQmxhY2tIb2xlXCI7XHJcbmltcG9ydCBDYW1lcmFGb2xsb3cgZnJvbSBcIi4vQ2FtZXJhRm9sbG93XCI7XHJcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL2NvcmUvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ2xpcFR5cGUgfSBmcm9tIFwiLi4vYXVkaW8vU291bmRDbGlwXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gS25pZmVUeXBlXHJcbntcclxuICAgIG5vcm1hbCA9IDAsXHJcbiAgICByZWQgPSAxLFxyXG4gICAgZ3JlZW4gPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBLbmlmZVN0YXR1c1xyXG57XHJcbiAgICBub3JtYWwgPSAwLFxyXG4gICAgY2FwdHVyZSA9IDEsXHJcbiAgICBmbHkgPSAyLFxyXG4gICAgYWJzb3JiID0gMyxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZmUgZXh0ZW5kcyBjYy5Db21wb25lbnQgaW1wbGVtZW50cyBSZWN5Y2xlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuRW51bShLbmlmZVR5cGUpfSlcclxuICAgIHR5cGU6S25pZmVUeXBlID0gS25pZmVUeXBlLm5vcm1hbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc2tpbjpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0dXM6S25pZmVTdGF0dXMgPSBLbmlmZVN0YXR1cy5ub3JtYWw7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjpQbGF5ZXIgPSBudWxsOyBcclxuXHJcbiAgICBwdWJsaWMgZGFtYWdlOm51bWJlciA9IDMwO1xyXG5cclxuICAgIHByaXZhdGUgYmFzZVNjYWxlOm51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHJvdGFTcGVlZCA9IDkwO1xyXG4gICAgcHJpdmF0ZSByb3RhQW5nbGU6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldEFuZ2xlOm51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRQb3M6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICBwcml2YXRlIGhhbGZTaXplOmNjLlNpemUgPSBjYy5TaXplLlpFUk87XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU2NlbmU6R2FtZVNjZW5lO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkgXHJcbiAgICAge1xyXG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTa2luKDIsNSk7XHJcbiAgICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2tpbi5ub2RlLndpZHRoID0gdGhpcy5za2luLnNwcml0ZUZyYW1lLmdldFJlY3QoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnNraW4ubm9kZS5oZWlnaHQgPSB0aGlzLnNraW4uc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLmhlaWdodDtcclxuXHJcbiAgICAgICAgLyp0aGlzLnNldFBvcyhjYy52MihSYW5kb20uUmFuZ2UoLTI1MCwyNTApLFJhbmRvbS5SYW5nZSgtMjUwLDI1MCkpKTtcclxudGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFBvcyhjYy52MihSYW5kb20uUmFuZ2UoLTI1MCwyNTApLFJhbmRvbS5SYW5nZSgtMjUwLDI1MCkpKTtcclxufSwyLjUpOyovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNraW4oaWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIC8qUmVzb3VyY2VzTWFuYWdlci5pbnN0YW5jZS5sb2FkKGBrbmlmZS9kYW9fJHtpZCAtIDF9YCwoc3ByaXRlRnJhbWU6Y2MuU3ByaXRlRnJhbWUpPT57XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGVGcmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2luLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbi5ub2RlLndpZHRoID0gc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2luLm5vZGUuaGVpZ2h0ID0gc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5za2luLm5vZGUud2lkdGggPSA1MDBcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxjYy5TcHJpdGVGcmFtZSx0cnVlLGZhbHNlKSovXHJcblxyXG4gICAgICAgIHZhciBzcHJpdGVGcmFtZTpjYy5TcHJpdGVGcmFtZSA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmRhb0ltZ3NbaWQtMV07XHJcblxyXG4gICAgICAgIHRoaXMuc2tpbi5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5za2luLm5vZGUud2lkdGggPSBzcHJpdGVGcmFtZS5nZXRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5za2luLm5vZGUuaGVpZ2h0ID0gc3ByaXRlRnJhbWUuZ2V0UmVjdCgpLmhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgLyp2YXIgc3BlZWQgPSBkdCAqIHRoaXMucm90YVNwZWVkO1xyXG5cclxuICAgICAgICB2YXIgZGlyID0gdGhpcy50YXJnZXRBbmdsZSAtIHRoaXMubm9kZS5yb3RhdGlvbjtcclxuXHJcbiAgICAgICAgaWYoc3BlZWQgPiBNYXRoLmFicyhkaXIpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gdGhpcy50YXJnZXRBbmdsZTtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCJkZGRkXCIpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihkaXIgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiAtPSBzcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnBhcmVudCA9PSBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYWxmU2l6ZS53aWR0aCA9ICh0aGlzLmdhbWVTY2VuZS5zY2VuZVNpemUud2lkdGggLSB0aGlzLm5vZGUud2lkdGgpIC8gMiA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFsZlNpemUuaGVpZ2h0ID0gKHRoaXMuZ2FtZVNjZW5lLnNjZW5lU2l6ZS5oZWlnaHQgLSB0aGlzLm5vZGUuaGVpZ2h0KSAvIDIgO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvczpjYy5WZWMyID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYocG9zLnggPCAtdGhpcy5oYWxmU2l6ZS53aWR0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zLnggPSAtdGhpcy5oYWxmU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zLnggPiB0aGlzLmhhbGZTaXplLndpZHRoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuaGFsZlNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBvcy55IDwgLXRoaXMuaGFsZlNpemUuaGVpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3MueSA9IC10aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zLnkgPiB0aGlzLmhhbGZTaXplLmhlaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmhhbGZTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlcjpjYy5Db2xsaWRlcixzZWxmOmNjLkNvbGxpZGVyKVxyXG4gICAge1xyXG5cclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXR1cyA9PSBLbmlmZVN0YXR1cy5jYXB0dXJlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIga25pZmU6S25pZmUgPSBvdGhlci5nZXRDb21wb25lbnQoS25pZmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwi56Kw5pKe5Yiw5LqGIG90aGVyIFwiLGtuaWZlLHRoaXMsa25pZmUuc3RhdHVzLGtuaWZlLnN0YXR1cyA9PSBLbmlmZVN0YXR1cy5jYXB0dXJlLEtuaWZlU3RhdHVzLmZseSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoa25pZmUgJiYga25pZmUuc3RhdHVzID09IEtuaWZlU3RhdHVzLmNhcHR1cmUgJiYga25pZmUucGxheWVyICYmIGtuaWZlLnBsYXllciAhPSB0aGlzLnBsYXllcilcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzQUkgfHwgIWtuaWZlLnBsYXllci5pc0FJKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2UudmlicmF0ZVNob3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbWVyYUZvbGxvdy5pbnN0YW5jZS5zaGFrZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheUF1ZGlvQ2xpcChTb3VuZENsaXBUeXBlLmtmaGl0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiaGl0IG90aGVyIFwiLGtuaWZlLGtuaWZlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcjpjYy5WZWMyID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihrbmlmZS5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoa25pZmUucGxheWVyLnN0YXR1cyA9PSBQbGF5ZXJTdGF0dXMuYXR0YWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga25pZmUuZmx5KGRpci5tdWwoLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLnN0YXR1cyA9PSBQbGF5ZXJTdGF0dXMuYXR0YWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbHkoZGlyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDIpLy/norDliLDkuobpmpznoo3nialcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09IEtuaWZlU3RhdHVzLmNhcHR1cmUgfHwgdGhpcy5zdGF0dXMgPT0gS25pZmVTdGF0dXMuZmx5KVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIgJiYgIXRoaXMucGxheWVyLmlzQUkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2UudmlicmF0ZVNob3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhRm9sbG93Lmluc3RhbmNlLnNoYWtlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlBdWRpb0NsaXAoU291bmRDbGlwVHlwZS5rZmhpdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpcjpjYy5WZWMyID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihvdGhlci5ub2RlLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5KGRpcik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSA1KSAvL+eisOaSnuWIgOS6hum7kea0nlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hYnNvcmJlZChvdGhlci5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoQmxhY2tIb2xlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmbHkoZGlyOmNjLlZlYzIgPSBjYy5WZWMyLk9ORSlcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnN0YXR1cyA9PSBLbmlmZVN0YXR1cy5jYXB0dXJlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBLbmlmZVN0YXR1cy5mbHk7XHJcbiAgICAgICAgICAgIHZhciBwb29sOktuaWZlUG9vbCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KEtuaWZlUG9vbCk7XHJcblxyXG4gICAgICAgICAgICBpZihwb29sKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb29sLnJlbW92ZUtuaWZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLm5vZGUucGFyZW50ICE9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTY2VuZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB3b3JsZFBvczpjYy5WZWMyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHJlbGFQb3M6Y2MuVmVjMiA9IEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTY2VuZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHJlbGFQb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHZhciB0ID0gUmFuZG9tLlJhbmdlKDAuNjUsMS4wKVxyXG4gICAgICAgIHZhciBzcGF3biA9IGNjLnNwYXduKGNjLm1vdmVCeSh0LGRpci5tdWwoUmFuZG9tLlJhbmdlKDM2MCw1NDApKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSxjYy5yb3RhdGVCeSh0LDEwODApLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSkpO1xyXG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShzcGF3bixjYy5jYWxsRnVuYygoKT0+e1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBLbmlmZVN0YXR1cy5ub3JtYWw7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTY2VuZS5nZXRDb21wb25lbnQoR2FtZVNjZW5lKS5hZGRLbmlmZSh0aGlzKTtcclxuXHJcbiAgICAgICAgfSx0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhYnNvcmJlZChibGFja2hvbGU6QmxhY2tIb2xlKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCFibGFja2hvbGUuYXBwZWFyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdHVzID09IEtuaWZlU3RhdHVzLmFic29yYilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXR1cyA9PSBLbmlmZVN0YXR1cy5jYXB0dXJlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBvb2w6S25pZmVQb29sID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoS25pZmVQb29sKTtcclxuICAgICAgICAgICAgaWYocG9vbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9vbC5yZW1vdmVLbmlmZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBLbmlmZVN0YXR1cy5hYnNvcmI7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5wYXJlbnQgIT0gYmxhY2tob2xlLm5vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgd29ybGRQb3M6Y2MuVmVjMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHZhciByZWxhUG9zOmNjLlZlYzIgPSBibGFja2hvbGUubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHJlbGFQb3M7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IGJsYWNraG9sZS5ub2RlO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIC8vdmFyIGRpcjpjYy5WZWMyID0gY2MuVmVjMi5aRVJPLnN1YihjYy52MigxLDApKS5ub3JtYWxpemUoKTtcclxuICAgICAgICB2YXIgZGlyOmNjLlZlYzIgPSBjYy5WZWMyLlpFUk8uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHZhciBldWxlckFuZ2xlOm51bWJlciA9IDkwIC0gTWF0aC5hdGFuMihkaXIueSxkaXIueCkgKiAxODAvTWF0aC5QSSA7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Mucm90YXRlVG8oMC4xNSxldWxlckFuZ2xlKSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUucm90YXRpb24gPSBldWxlckFuZ2xlO1xyXG5cclxuICAgICAgICB2YXIgdCA9IFJhbmRvbS5SYW5nZSgwLjY1LDEuMClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc3Bhd25BY3Rpb24gPSBjYy5zcGF3bihjYy5tb3ZlVG8oMC40NSxjYy5WZWMyLlpFUk8pLGNjLmZhZGVUbygwLjQ1LDI1KSxjYy5zY2FsZVRvKDAuNDUsMC4yNSkpO1xyXG5cclxuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2Uoc3Bhd25BY3Rpb24sY2MuY2FsbEZ1bmMoKCk9PntcclxuXHJcbiAgICAgICAgICAgIGJsYWNraG9sZS5lYXQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gS25pZmVTdGF0dXMubm9ybWFsO1xyXG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU2NlbmUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSkucmVtb3ZlS25pZmUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVNlbGYoKTtcclxuXHJcbiAgICAgICAgfSx0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0Um90YShldWxlckFuZ2xlOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMudGFyZ2V0QW5nbGUgPSBldWxlckFuZ2xlO1xyXG5cclxuICAgICAgICAvL3RoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICBpZihHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdHVzID09IEdhbWVTdGF0dXMuc3RhcnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZVRvKDAuMSxldWxlckFuZ2xlKSk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnJvdGF0aW9uID0gZXVsZXJBbmdsZTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZVRvKDAuMDUsZXVsZXJBbmdsZSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZVRvKDAuMSxldWxlckFuZ2xlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMubm9kZS5yb3RhdGlvbiA9IGV1bGVyQW5nbGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3MocG9zOmNjLlZlYzIpXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLnRhcmdldFBvcyA9IHBvcztcclxuXHJcbiAgICAgICAgdmFyIHQgPSAgdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgLy90ID0gMC4zO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKHQscG9zKSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZVRvd2FyZHMoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2NhbGUoc2l6ZTpudW1iZXIpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlID0gc2l6ZTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLmJhc2VTY2FsZSAqIHNpemU7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0S2V5KCk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9yZXR1cm4gUG9wdXBUZXh0Lm5hbWU7XHJcbiAgICAgICAgcmV0dXJuIFwiS25pZmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXdha2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gS25pZmVTdGF0dXMubm9ybWFsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVNjZW5lLmdldENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNsZWVwKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBLbmlmZVN0YXR1cy5ub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3lTZWxmKClcclxuICAgIHtcclxuICAgICAgICBSZXNvdXJjZXNQb29sLmluc3RhbmNlLnB1dCh0aGlzLDUwKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19