"use strict";
cc._RF.push(module, 'cbb8an4cWJIy7jTE63ZIcvD', 'PlayerAI');
// script/tscript/gamescene/PlayerAI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Random_1 = require("../util/Random");
var GameManager_1 = require("../core/GameManager");
var GameScene_1 = require("./GameScene");
var Vector2_1 = require("../util/Vector2");
var Mathf_1 = require("../util/Mathf");
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
var PlayerAILevel;
(function (PlayerAILevel) {
    PlayerAILevel[PlayerAILevel["none"] = 0] = "none";
    PlayerAILevel[PlayerAILevel["level1"] = 1] = "level1";
    PlayerAILevel[PlayerAILevel["level2"] = 2] = "level2";
    PlayerAILevel[PlayerAILevel["level3"] = 3] = "level3";
    PlayerAILevel[PlayerAILevel["level4"] = 4] = "level4";
})(PlayerAILevel = exports.PlayerAILevel || (exports.PlayerAILevel = {}));
var PlayerAI = /** @class */ (function (_super) {
    __extends(PlayerAI, _super);
    function PlayerAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aiLevel = PlayerAILevel.level1;
        /**
         * AI指令
         */
        _this.cmd = new Command();
        _this.player = null;
        _this.timer = 0.01;
        /**
         * 警戒范围
         */
        _this.alertRange = 1250;
        _this.gameScene = null;
        return _this;
    }
    PlayerAI.prototype.onLoad = function () {
        this.gameScene = this.node.parent.getComponent(GameScene_1.default);
    };
    PlayerAI.prototype.start = function () {
        this.player = this.getComponent(Player_1.default);
        /*this.node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{

            if(this.player.isAI)
            {
                this.node.active = !this.node.active;
            }
            
        },this);*/
        this.cmd.Reset();
    };
    PlayerAI.prototype.onGameStart = function () {
        this.player = this.getComponent(Player_1.default);
        if (this.aiLevel == PlayerAILevel.level1) {
            this.player.knifePool.initKnife(3);
        }
        else if (this.aiLevel == PlayerAILevel.level2) {
            this.player.knifePool.initKnife(4);
        }
        else if (this.aiLevel == PlayerAILevel.level3) {
            this.player.knifePool.initKnife(6);
        }
        else if (this.aiLevel == PlayerAILevel.level4) {
            this.player.knifePool.initKnife(8);
        }
        else {
            this.player.knifePool.initKnife(3);
        }
    };
    PlayerAI.prototype.update2 = function (dt) {
        if (GameManager_1.default.instance.gameStatus != GameManager_1.GameStatus.start) {
            this.player.moveDir = cc.Vec2.ZERO;
            return;
        }
        if (!this.player.isAI) {
            return;
        }
        this.timer -= dt;
        if (this.timer <= 0) {
            if (Random_1.default.Range(0, 1) < 0.25) {
                if (this.player.status != Player_1.PlayerStatus.defence) {
                    this.player.changeDefenceState();
                }
                this.player.moveDir = cc.Vec2.ZERO;
            }
            else {
                if (this.player.status != Player_1.PlayerStatus.attack) {
                    this.player.changeAttackState();
                }
                this.player.moveDir = cc.v2(Random_1.default.Range(-1, 1), Random_1.default.Range(-1, 1));
            }
            this.timer = Random_1.default.Range(1.0, 2.0);
        }
    };
    PlayerAI.prototype.update = function (dt) {
        if (GameManager_1.default.instance.gameStatus != GameManager_1.GameStatus.start) {
            this.player.stopMove();
            return;
        }
        if (!this.player.isAI) {
            return;
        }
        if (this.player.status == Player_1.PlayerStatus.die) {
            this.player.stopMove();
            return;
        }
        this.cmd.Update(dt);
        switch (this.cmd.type) {
            case CommandType.none:
                this.OnWhatToDoNext(dt);
                break;
            case CommandType.pickKnife:
                this.OnPickKnifeHandler(dt);
                break;
            case CommandType.patrol:
                this.OnPatrolHandler(dt);
                break;
            case CommandType.scared:
                this.OnScareHandler(dt);
                break;
            case CommandType.moveToTarget:
                this.OnMoveToTargetHandler(dt);
                break;
            case CommandType.run:
                this.OnRunHandler(dt);
                break;
            case CommandType.defenced:
                this.OnDefencedHandler(dt);
                break;
            case CommandType.outflank:
                this.OnOutflankHandler(dt);
                break;
            case CommandType.track:
                this.OnTrackHandler(dt);
                break;
            case CommandType.attack:
                this.OnAttackHandler(dt);
                break;
        }
    };
    /// <summary>
    /// 下一步做什么
    /// </summary>
    PlayerAI.prototype.OnWhatToDoNext = function (dt) {
        this.AnalysisEnvironment(dt);
    };
    /// <summary>
    /// 捡刀命令的处理
    /// </summary>
    PlayerAI.prototype.OnPickKnifeHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Vector2_1.default.distance(this.player.node.position, this.cmd.targetPos) / this.player.getMoveSpeed();
            this.player.moveToTarget(this.cmd.targetPos);
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    //巡逻时处理
    PlayerAI.prototype.OnPatrolHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            //this.cmd.timer = Vector2.distance(this.player.node.position,this.cmd.targetPos) / this.player.getMoveSpeed();
            //this.player.moveToTarget(this.cmd.targetPos);
            this.cmd.timer = Random_1.default.Range(1, 2);
            this.player.moveDir = cc.v2(Random_1.default.Range(-1, 1), Random_1.default.Range(-1, 1)).normalize();
            this.player.changeAttackState();
        }
        if (this.cmd.process == CommandProcess.execute) {
            if (Vector2_1.default.distance(this.player.node.position, this.cmd.targetPos) <= this.player.getMoveSpeed() * dt) {
                this.cmd.process = CommandProcess.complete;
            }
        }
    };
    //惊吓时处理
    PlayerAI.prototype.OnScareHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(5.25, 6.75);
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    /// <summary>
    /// 逃跑时处理
    /// </summary>
    PlayerAI.prototype.OnRunHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(3.25, 5.0);
            this.player.changeAttackState();
        }
        if (this.cmd.process == CommandProcess.execute) {
            this.player.moveDir = this.player.node.position.sub(this.cmd.targetPlayer.node.position).normalize();
        }
    };
    /// <summary>
    /// 防御状态
    /// </summary>
    PlayerAI.prototype.OnDefencedHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(2, 4);
            this.player.changeDefenceState();
            this.player.stopMove();
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    /// <summary>
    /// 迂回战术
    /// </summary>
    PlayerAI.prototype.OnOutflankHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(5.25, 6.75);
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    /// <summary>
    /// 跟踪目标
    /// </summary>
    PlayerAI.prototype.OnTrackHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(5.25, 6.75);
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    //移动到目标处理
    PlayerAI.prototype.OnMoveToTargetHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(5.25, 6.75);
            this.player.changeAttackState();
        }
        if (this.cmd.process == CommandProcess.execute) {
        }
    };
    /// <summary>
    /// 移动到目标完成
    /// </summary>
    PlayerAI.prototype.OnMoveToTargetComplete = function (target) {
    };
    /// <summary>
    /// 目标进入攻击范围时
    /// </summary>
    /// <param name="target"></param>
    PlayerAI.prototype.OnTargetInAttackRange = function (target) {
    };
    /// <summary>
    /// 攻击处理
    /// </summary>
    PlayerAI.prototype.OnAttackHandler = function (dt) {
        if (this.cmd.process == CommandProcess.none) {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random_1.default.Range(2.25, 3.5);
            this.player.changeAttackState();
        }
        if (this.cmd.process == CommandProcess.execute) {
            this.player.moveToTarget(this.cmd.targetPlayer.node.position);
            if (Vector2_1.default.distance(this.player.node.position, this.cmd.targetPos) <= this.player.getMoveSpeed() * dt) {
                this.cmd.process = CommandProcess.complete;
            }
        }
    };
    /// <summary>
    /// 分析环境
    /// </summary>
    PlayerAI.prototype.AnalysisEnvironment = function (dt) {
        this.cmd.Reset(); //重置指令
        this.cmd.timer = Random_1.default.Range(2.0, 3.6);
        switch (this.aiLevel) {
            case PlayerAILevel.level1:
                this.AnalysisEnvironment_Level1(dt);
                break;
            case PlayerAILevel.level2:
                this.AnalysisEnvironment_Level2(dt);
                break;
            case PlayerAILevel.level3:
                this.AnalysisEnvironment_Level3(dt);
                break;
            case PlayerAILevel.level4:
                this.AnalysisEnvironment_Level4(dt);
                break;
        }
    };
    PlayerAI.prototype.AnalysisEnvironment_Level1 = function (dt) {
        if (Mathf_1.default.probability(0.25)) {
            this.UseDefenseCmd();
        }
        else {
            this.UsePatrolCmd();
        }
    };
    PlayerAI.prototype.AnalysisEnvironment_Level2 = function (dt) {
        if (Mathf_1.default.probability(0.5)) {
            var lastPlayer = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家
            var myKfLen = this.player.knifePool.knifes.length;
            if (lastPlayer != null) {
                var otherKflen = lastPlayer.knifePool.knifes.length;
                if (myKfLen - otherKflen > 0) {
                    if (myKfLen < 8) {
                        this.UsePickKnifeCmd();
                    }
                    else {
                        this.UseAttackCmd(lastPlayer);
                    }
                }
                else {
                    if (Mathf_1.default.probability(0.4)) {
                        this.UseDefenseCmd();
                    }
                    else {
                        this.UseRunCmd(lastPlayer);
                    }
                }
            }
            else {
                this.UsePickKnifeCmd();
            }
        }
        else {
            this.UsePatrolCmd();
        }
    };
    PlayerAI.prototype.AnalysisEnvironment_Level3 = function (dt) {
        if (Mathf_1.default.probability(0.7)) {
            var lastPlayer = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家
            var myKfLen = this.player.knifePool.knifes.length;
            if (lastPlayer != null) {
                var otherKflen = lastPlayer.knifePool.knifes.length;
                if (myKfLen - otherKflen > 0) {
                    if (myKfLen < 8) {
                        this.UsePickKnifeCmd();
                    }
                    else {
                        this.UseAttackCmd(lastPlayer);
                    }
                }
                else {
                    if (Mathf_1.default.probability(0.4)) {
                        this.UseDefenseCmd();
                    }
                    else {
                        this.UseRunCmd(lastPlayer);
                    }
                }
            }
            else {
                this.UsePickKnifeCmd();
            }
        }
        else {
            this.UsePatrolCmd();
        }
    };
    PlayerAI.prototype.AnalysisEnvironment_Level4 = function (dt) {
        var lastPlayer = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家
        var myKfLen = this.player.knifePool.knifes.length;
        if (lastPlayer != null) {
            var otherKflen = lastPlayer.knifePool.knifes.length;
            if (myKfLen - otherKflen > 2) {
                if (myKfLen < 10) {
                    this.UsePickKnifeCmd();
                }
                else {
                    this.UseAttackCmd(lastPlayer);
                }
            }
            else {
                if (Mathf_1.default.probability(0.4)) {
                    this.UseDefenseCmd();
                }
                else {
                    this.UseRunCmd(lastPlayer);
                }
            }
        }
        else {
            this.UsePickKnifeCmd();
        }
    };
    /// <summary>
    /// 获得距离最近的玩家
    /// </summary>
    PlayerAI.prototype.GetLastestPlayer = function () {
        var _this = this;
        var playerArr = this.gameScene.playerArr;
        var lastPlayer = null; //距离最近的玩家
        var dis = 0;
        playerArr.forEach(function (otherPlayer) {
            if (!otherPlayer)
                return;
            if (otherPlayer.status == Player_1.PlayerStatus.die)
                return;
            if (otherPlayer == _this.player)
                return;
            var dis2 = Vector2_1.default.distance(_this.player.node.position, otherPlayer.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            if (dis == 0) {
                dis = dis2;
                lastPlayer = otherPlayer;
            }
            else {
                if (dis2 < dis) {
                    dis = dis2;
                    lastPlayer = otherPlayer;
                }
            }
        });
        return lastPlayer;
    };
    /// <summary>
    /// 获得警戒范围内距离最近的玩家
    /// </summary>
    PlayerAI.prototype.GetLastestPlayerInAlert = function () {
        var _this = this;
        var playerArr = this.gameScene.playerArr;
        var lastPlayer = null; //距离最近的玩家
        var dis = 0;
        playerArr.forEach(function (otherPlayer) {
            if (!otherPlayer)
                return;
            if (otherPlayer.status == Player_1.PlayerStatus.die)
                return;
            if (otherPlayer == _this.player)
                return;
            var dis2 = Vector2_1.default.distance(_this.player.node.position, otherPlayer.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            if (dis2 < _this.alertRange) {
                if (dis == 0) {
                    dis = dis2;
                    lastPlayer = otherPlayer;
                }
                else {
                    if (dis2 < dis) {
                        dis = dis2;
                        lastPlayer = otherPlayer;
                    }
                }
            }
        });
        return lastPlayer;
    };
    /// <summary>
    /// 获得随机一个玩家
    /// </summary>
    PlayerAI.prototype.GetRandomPlayer = function () {
        var _this = this;
        var playerArr = this.gameScene.playerArr;
        var tempPlayer = null;
        var playerList = [];
        playerArr.forEach(function (otherPlayer) {
            if (!otherPlayer)
                return;
            if (otherPlayer.status == Player_1.PlayerStatus.die)
                return;
            if (otherPlayer == _this.player)
                return;
            playerList.push(otherPlayer);
        });
        if (playerList.length != 0)
            tempPlayer = playerList[Random_1.default.RangeInteger(0, playerList.length)];
        return tempPlayer;
    };
    /// <summary>
    /// 获得摄像机视野范围内随机一个点
    /// </summary>
    /// <returns></returns>
    PlayerAI.prototype.GetRandomPointInScene = function () {
        var halfWidth = this.gameScene.sceneSize.width / 2;
        var halfHeight = this.gameScene.sceneSize.height / 2;
        return cc.v2(Random_1.default.Range(-halfWidth, halfWidth), Random_1.default.Range(-halfHeight, halfHeight));
    };
    /// <summary>
    /// 获得场景内距离玩家最近的一把飞刀
    /// </summary>
    PlayerAI.prototype.GetLastestKnife = function () {
        var _this = this;
        var knifeArr = this.gameScene.knifeArr;
        var lastKnife = null;
        var dis = 0;
        var halfWidth = this.gameScene.sceneSize.width / 2;
        var halfHeight = this.gameScene.sceneSize.height / 2;
        knifeArr.forEach(function (knife) {
            if (knife.node.x < -halfWidth || knife.node.x > halfWidth || knife.node.x < -halfHeight || knife.node.y > halfHeight) {
                return;
            }
            var dis2 = Vector2_1.default.distance(_this.player.node.position, knife.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            if (dis2 < _this.alertRange) {
                if (dis == 0) {
                    dis = dis2;
                    lastKnife = knife;
                }
                else {
                    if (dis2 < dis) {
                        dis = dis2;
                        lastKnife = knife;
                    }
                }
            }
        });
        return lastKnife;
    };
    /// <summary>
    /// 使用待机指令
    /// </summary>
    PlayerAI.prototype.UsePickKnifeCmd = function () {
        this.cmd.type = CommandType.pickKnife;
        var lastestKnife = this.GetLastestKnife();
        if (lastestKnife) {
            this.cmd.targetPos = lastestKnife.node.position;
        }
        else {
            this.cmd.targetPos = this.GetRandomPointInScene();
        }
    };
    /// <summary>
    /// 使用巡逻指令
    /// </summary>
    PlayerAI.prototype.UsePatrolCmd = function () {
        this.cmd.type = CommandType.patrol;
        this.cmd.targetPos = this.GetRandomPointInScene();
    };
    /// <summary>
    /// 使用防御指令
    /// </summary>
    PlayerAI.prototype.UseDefenseCmd = function () {
        this.cmd.type = CommandType.defenced;
        //this.cmd.targetPlayer = player;
        //this.cmd.targetPos = player.node.position;
    };
    /// <summary>
    /// 使用攻击指令
    /// </summary>
    PlayerAI.prototype.UseAttackCmd = function (player) {
        this.cmd.type = CommandType.attack;
        if (player != null) {
            //enemy.FaceToPosition(player.node.position);
            this.cmd.targetPlayer = player;
            this.cmd.targetPos = player.node.position;
        }
    };
    /// <summary>
    /// 使用攻击指令
    /// </summary>
    PlayerAI.prototype.UseRunCmd = function (player) {
        this.cmd.type = CommandType.run;
        if (player != null) {
            //enemy.FaceToPosition(player.node.position);
            this.cmd.targetPlayer = player;
            this.cmd.targetPos = player.node.position;
        }
    };
    /// <summary>
    /// 使用移动到目标指令
    /// </summary>
    PlayerAI.prototype.UseMoveToTargetCmd = function (player) {
        this.cmd.type = CommandType.moveToTarget;
        this.cmd.targetPlayer = player;
        this.cmd.targetPos = player.node.position;
    };
    /// <summary>
    /// 使用跟踪目标指令
    /// </summary>
    PlayerAI.prototype.UseTrackCmd = function (player) {
        this.cmd.type = CommandType.track;
        this.cmd.targetPlayer = player;
        this.cmd.targetPos = player.node.position;
    };
    PlayerAI = __decorate([
        ccclass
    ], PlayerAI);
    return PlayerAI;
}(cc.Component));
exports.default = PlayerAI;
/// <summary>
/// 指令数据
/// </summary>
var Command = /** @class */ (function () {
    function Command() {
        /// <summary>
        /// 
        /// </summary>
        this.roadPath = [];
        /// <summary>
        /// 指令执行时间
        /// </summary>
        this.timer = 0;
        this.cd = 0;
    }
    Command.prototype.Reset = function () {
        this.type = CommandType.none;
        this.targetPlayer = null;
        this.targetPos = cc.Vec2.ZERO;
        this.roadPath.length = 0;
        this.timer = 0;
        this.cd = 0;
        this.process = CommandProcess.none;
    };
    Command.prototype.Update = function (dt) {
        if (this.type == CommandType.moveToTarget || this.type == CommandType.outflank || this.type == CommandType.track) {
            if (!this.targetPlayer || this.targetPlayer.status == Player_1.PlayerStatus.die) //玩家已经不存在
                this.Reset();
        }
        if (this.process == CommandProcess.complete) {
            this.Reset();
        }
        else {
            if (this.timer > 0) {
                this.timer -= dt;
                if (this.timer <= 0) {
                    this.Reset();
                }
            }
        }
    };
    return Command;
}());
/// <summary>
/// 指令类型
/// </summary>
var CommandType;
(function (CommandType) {
    /// <summary>
    /// 不做任何事
    /// </summary>
    CommandType[CommandType["none"] = 0] = "none";
    /// <summary>
    /// 待机
    /// </summary>
    CommandType[CommandType["pickKnife"] = 1] = "pickKnife";
    /// <summary>
    /// 巡逻
    /// </summary>
    CommandType[CommandType["patrol"] = 2] = "patrol";
    /// <summary>
    /// 被惊吓
    /// </summary>
    CommandType[CommandType["scared"] = 3] = "scared";
    /// <summary>
    /// 移动到目标
    /// </summary>
    CommandType[CommandType["moveToTarget"] = 4] = "moveToTarget";
    /// <summary>
    /// 绕着走
    /// </summary>
    CommandType[CommandType["run"] = 5] = "run";
    /// <summary>
    /// 防御
    /// </summary>
    CommandType[CommandType["defenced"] = 6] = "defenced";
    /// <summary>
    /// 迂回
    /// </summary>
    CommandType[CommandType["outflank"] = 7] = "outflank";
    /// <summary>
    /// 跟踪
    /// </summary>
    CommandType[CommandType["track"] = 8] = "track";
    /// <summary>
    /// 组合攻击
    /// </summary>
    CommandType[CommandType["comboAttack"] = 100] = "comboAttack";
    /// <summary>
    /// 攻击1
    /// </summary>
    CommandType[CommandType["attack"] = 101] = "attack";
    /// <summary>
    /// 攻击2
    /// </summary>
    CommandType[CommandType["attack2"] = 102] = "attack2";
    /// <summary>
    /// 攻击3
    /// </summary>
    CommandType[CommandType["attack3"] = 103] = "attack3";
})(CommandType || (CommandType = {}));
/// <summary>
/// 指令进程
/// </summary>
var CommandProcess;
(function (CommandProcess) {
    /// <summary>
    /// 未执行
    /// </summary>
    CommandProcess[CommandProcess["none"] = 0] = "none";
    /// <summary>
    /// 执行中
    /// </summary>
    CommandProcess[CommandProcess["execute"] = 1] = "execute";
    /// <summary>
    /// 执行完成
    /// </summary>
    CommandProcess[CommandProcess["complete"] = 2] = "complete";
})(CommandProcess || (CommandProcess = {}));

cc._RF.pop();