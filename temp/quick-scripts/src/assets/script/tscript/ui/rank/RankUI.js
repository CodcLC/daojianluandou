"use strict";
cc._RF.push(module, 'd73ce+gRgVNxoqR1GSxYKDv', 'RankUI');
// script/tscript/ui/rank/RankUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RankItem_1 = require("./RankItem");
var GameScene_1 = require("../../gamescene/GameScene");
var GameManager_1 = require("../../core/GameManager");
var Player_1 = require("../../gamescene/Player");
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
var RankUI = /** @class */ (function (_super) {
    __extends(RankUI, _super);
    function RankUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankItemArr = [];
        //@property(cc.Prefab)
        //public knifePrefab:cc.Prefab = null;
        _this.gameScene = null;
        _this.playerColor = new cc.Color(200, 141, 51);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    RankUI.prototype.onLoad = function () {
        this.gameScene = GameManager_1.default.instance.gameScene.getComponent(GameScene_1.default);
    };
    RankUI.prototype.start = function () {
        this.gameScene.node.on("knifesChange", this.onKnifesChange, this);
    };
    RankUI.prototype.onKnifesChange = function () {
        if (GameManager_1.default.instance.gameStatus == GameManager_1.GameStatus.over) {
            return;
        }
        this.gameScene.playerArr.sort(function (player1, player2) {
            var kfLen1 = player1.knifePool.knifes.length;
            var kfLen2 = player2.knifePool.knifes.length;
            if (kfLen1 > kfLen2) {
                return -1;
            }
            if (kfLen1 < kfLen2) {
                return 1;
            }
            return 0;
        });
        for (var i = 0; i < this.rankItemArr.length; i++) {
            var player = this.gameScene.playerArr[i];
            if (player != null) {
                this.rankItemArr[i].mark.spriteFrame = player.body.skin.spriteFrame;
                this.rankItemArr[i].nameTxt.string = player.getName();
                if (player.status != Player_1.PlayerStatus.die) {
                    this.rankItemArr[i].rankTxt.string = "" + player.knifePool.knifes.length;
                }
                else {
                    this.rankItemArr[i].rankTxt.string = "0";
                }
                if (player == this.gameScene.player) {
                    this.rankItemArr[i].nameTxt.node.color = this.playerColor;
                }
                else {
                    this.rankItemArr[i].nameTxt.node.color = cc.Color.WHITE;
                }
            }
        }
    };
    __decorate([
        property(RankItem_1.default)
    ], RankUI.prototype, "rankItemArr", void 0);
    RankUI = __decorate([
        ccclass
    ], RankUI);
    return RankUI;
}(cc.Component));
exports.default = RankUI;

cc._RF.pop();