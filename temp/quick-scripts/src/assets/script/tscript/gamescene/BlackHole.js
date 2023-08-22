"use strict";
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