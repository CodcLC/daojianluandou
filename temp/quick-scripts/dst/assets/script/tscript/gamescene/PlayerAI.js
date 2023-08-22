
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/PlayerAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXFBsYXllckFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0Q7QUFDaEQseUNBQW9DO0FBQ3BDLG1EQUE4RDtBQUM5RCx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUdsQyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRTFDLElBQVksYUFPWDtBQVBELFdBQVksYUFBYTtJQUVyQixpREFBUSxDQUFBO0lBQ1IscURBQVUsQ0FBQTtJQUNWLHFEQUFVLENBQUE7SUFDVixxREFBVSxDQUFBO0lBQ1YscURBQVUsQ0FBQTtBQUNkLENBQUMsRUFQVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU94QjtBQUdEO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBdXpCQztRQW56QlUsYUFBTyxHQUFpQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBRXBEOztXQUVHO1FBQ0ksU0FBRyxHQUFXLElBQUksT0FBTyxFQUFFLENBQUM7UUFFNUIsWUFBTSxHQUFVLElBQUksQ0FBQztRQUdwQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBRTVCOztXQUVHO1FBQ0ksZ0JBQVUsR0FBVSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUFreUJ0QyxDQUFDO0lBaHlCRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBRUksSUFB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QUNiLE9BQU87SUFDUCxjQUFjO0lBQ2QsbURBQVksQ0FBQTtJQUVaLGFBQWE7SUFDYixPQUFPO0lBQ1AsY0FBYztJQUNkLHFEQUFhLENBQUE7SUFFYixhQUFhO0lBQ2IsT0FBTztJQUNQLGNBQWM7SUFDZCxxREFBYSxDQUFBO0FBRWpCLENBQUMsRUFuRUksV0FBVyxLQUFYLFdBQVcsUUFtRWY7QUFFRCxhQUFhO0FBQ2IsUUFBUTtBQUNSLGNBQWM7QUFDZCxJQUFLLGNBZ0JKO0FBaEJELFdBQUssY0FBYztJQUVmLGFBQWE7SUFDYixPQUFPO0lBQ1AsY0FBYztJQUNkLG1EQUFRLENBQUE7SUFFUixhQUFhO0lBQ2IsT0FBTztJQUNQLGNBQWM7SUFDZCx5REFBVyxDQUFBO0lBRVgsYUFBYTtJQUNiLFFBQVE7SUFDUixjQUFjO0lBQ2QsMkRBQVksQ0FBQTtBQUNoQixDQUFDLEVBaEJJLGNBQWMsS0FBZCxjQUFjLFFBZ0JsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIsIHsgUGxheWVyU3RhdHVzIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvUmFuZG9tXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4uL3V0aWwvVmVjdG9yMlwiO1xyXG5pbXBvcnQgTWF0aGYgZnJvbSBcIi4uL3V0aWwvTWF0aGZcIjtcclxuaW1wb3J0IEtuaWZlIGZyb20gXCIuL0tuaWZlXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gUGxheWVyQUlMZXZlbFxyXG57XHJcbiAgICBub25lID0gMCxcclxuICAgIGxldmVsMSA9IDEsXHJcbiAgICBsZXZlbDIgPSAyLFxyXG4gICAgbGV2ZWwzID0gMyxcclxuICAgIGxldmVsNCA9IDQsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgcHVibGljIGFpTGV2ZWw6UGxheWVyQUlMZXZlbCA9IFBsYXllckFJTGV2ZWwubGV2ZWwxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQUnmjIfku6RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNtZDpDb21tYW5kID0gbmV3IENvbW1hbmQoKTtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOlBsYXllciA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdGltZXI6bnVtYmVyID0gMC4wMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOitpuaIkuiMg+WbtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWxlcnRSYW5nZTpudW1iZXIgPSAxMjUwO1xyXG5cclxuICAgIHB1YmxpYyBnYW1lU2NlbmU6R2FtZVNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoR2FtZVNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuXHJcbiAgICAgICAgLyp0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpPT57XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllci5pc0FJKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gIXRoaXMubm9kZS5hY3RpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSx0aGlzKTsqL1xyXG5cclxuICAgICAgICB0aGlzLmNtZC5SZXNldCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25HYW1lU3RhcnQoKVxyXG4gICAge1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMuZ2V0Q29tcG9uZW50KFBsYXllcik7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWlMZXZlbCA9PSBQbGF5ZXJBSUxldmVsLmxldmVsMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtuaWZlUG9vbC5pbml0S25pZmUoMyk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5haUxldmVsID09IFBsYXllckFJTGV2ZWwubGV2ZWwyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua25pZmVQb29sLmluaXRLbmlmZSg0KTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFpTGV2ZWwgPT0gUGxheWVyQUlMZXZlbC5sZXZlbDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5rbmlmZVBvb2wuaW5pdEtuaWZlKDYpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWlMZXZlbCA9PSBQbGF5ZXJBSUxldmVsLmxldmVsNClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtuaWZlUG9vbC5pbml0S25pZmUoOCk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtuaWZlUG9vbC5pbml0S25pZmUoMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlMiAoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIGlmKEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgIT0gR2FtZVN0YXR1cy5zdGFydClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllci5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnRpbWVyIDw9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihSYW5kb20uUmFuZ2UoMCwxKSA8IDAuMjUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLnN0YXR1cyAhPSBQbGF5ZXJTdGF0dXMuZGVmZW5jZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jaGFuZ2VEZWZlbmNlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXllci5zdGF0dXMgIT0gUGxheWVyU3RhdHVzLmF0dGFjaylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVEaXIgPSBjYy52MihSYW5kb20uUmFuZ2UoLTEsMSksUmFuZG9tLlJhbmdlKC0xLDEpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gUmFuZG9tLlJhbmdlKDEuMCwyLjApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmKEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0dXMgIT0gR2FtZVN0YXR1cy5zdGFydClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnN0b3BNb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllci5pc0FJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiBcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zdG9wTW92ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmNtZC5VcGRhdGUoZHQpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY21kLnR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmRUeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uV2hhdFRvRG9OZXh0KGR0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb21tYW5kVHlwZS5waWNrS25pZmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uUGlja0tuaWZlSGFuZGxlcihkdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZFR5cGUucGF0cm9sOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5PblBhdHJvbEhhbmRsZXIoZHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmRUeXBlLnNjYXJlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuT25TY2FyZUhhbmRsZXIoZHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmRUeXBlLm1vdmVUb1RhcmdldDpcclxuICAgICAgICAgICAgICAgIHRoaXMuT25Nb3ZlVG9UYXJnZXRIYW5kbGVyKGR0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb21tYW5kVHlwZS5ydW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uUnVuSGFuZGxlcihkdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZFR5cGUuZGVmZW5jZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uRGVmZW5jZWRIYW5kbGVyKGR0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb21tYW5kVHlwZS5vdXRmbGFuazpcclxuICAgICAgICAgICAgICAgIHRoaXMuT25PdXRmbGFua0hhbmRsZXIoZHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmRUeXBlLnRyYWNrOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5PblRyYWNrSGFuZGxlcihkdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZFR5cGUuYXR0YWNrOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5PbkF0dGFja0hhbmRsZXIoZHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS4i+S4gOatpeWBmuS7gOS5iFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBPbldoYXRUb0RvTmV4dChkdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLkFuYWx5c2lzRW52aXJvbm1lbnQoZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmjaHliIDlkb3ku6TnmoTlpITnkIZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgT25QaWNrS25pZmVIYW5kbGVyKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5ub25lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbWQucHJvY2VzcyA9IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGU7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnRpbWVyID0gVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLHRoaXMuY21kLnRhcmdldFBvcykgLyB0aGlzLnBsYXllci5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvVGFyZ2V0KHRoaXMuY21kLnRhcmdldFBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5beh6YC75pe25aSE55CGXHJcbiAgICBwdWJsaWMgT25QYXRyb2xIYW5kbGVyKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5ub25lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbWQucHJvY2VzcyA9IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3RoaXMuY21kLnRpbWVyID0gVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLHRoaXMuY21kLnRhcmdldFBvcykgLyB0aGlzLnBsYXllci5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICAgICAgLy90aGlzLnBsYXllci5tb3ZlVG9UYXJnZXQodGhpcy5jbWQudGFyZ2V0UG9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY21kLnRpbWVyID0gUmFuZG9tLlJhbmdlKDEsIDIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRGlyID0gY2MudjIoUmFuZG9tLlJhbmdlKC0xLDEpLFJhbmRvbS5SYW5nZSgtMSwxKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jaGFuZ2VBdHRhY2tTdGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoVmVjdG9yMi5kaXN0YW5jZSh0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLHRoaXMuY21kLnRhcmdldFBvcykgPD0gdGhpcy5wbGF5ZXIuZ2V0TW92ZVNwZWVkKCkgKiBkdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbWQucHJvY2VzcyA9IENvbW1hbmRQcm9jZXNzLmNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5oOK5ZCT5pe25aSE55CGXHJcbiAgICBwdWJsaWMgT25TY2FyZUhhbmRsZXIoZHQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLm5vbmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNtZC5wcm9jZXNzID0gQ29tbWFuZFByb2Nlc3MuZXhlY3V0ZTtcclxuICAgICAgICAgICAgdGhpcy5jbWQudGltZXIgPSBSYW5kb20uUmFuZ2UoNS4yNSwgNi43NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOmAg+i3keaXtuWkhOeQhlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBPblJ1bkhhbmRsZXIoZHQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLm5vbmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNtZC5wcm9jZXNzID0gQ29tbWFuZFByb2Nlc3MuZXhlY3V0ZTtcclxuICAgICAgICAgICAgdGhpcy5jbWQudGltZXIgPSBSYW5kb20uUmFuZ2UoMy4yNSwgNS4wKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2hhbmdlQXR0YWNrU3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRGlyID0gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5jbWQudGFyZ2V0UGxheWVyLm5vZGUucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6Ziy5b6h54q25oCBXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIE9uRGVmZW5jZWRIYW5kbGVyKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5ub25lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbWQucHJvY2VzcyA9IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGU7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnRpbWVyID0gUmFuZG9tLlJhbmdlKDIsIDQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY2hhbmdlRGVmZW5jZVN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zdG9wTW92ZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOi/guWbnuaImOacr1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBPbk91dGZsYW5rSGFuZGxlcihkdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21kLnByb2Nlc3MgPT0gQ29tbWFuZFByb2Nlc3Mubm9uZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnByb2Nlc3MgPSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlO1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50aW1lciA9IFJhbmRvbS5SYW5nZSg1LjI1LCA2Ljc1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6Lef6Liq55uu5qCHXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljICBPblRyYWNrSGFuZGxlcihkdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21kLnByb2Nlc3MgPT0gQ29tbWFuZFByb2Nlc3Mubm9uZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnByb2Nlc3MgPSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlO1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50aW1lciA9IFJhbmRvbS5SYW5nZSg1LjI1LCA2Ljc1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNtZC5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+enu+WKqOWIsOebruagh+WkhOeQhlxyXG4gICAgcHVibGljIE9uTW92ZVRvVGFyZ2V0SGFuZGxlcihkdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21kLnByb2Nlc3MgPT0gQ29tbWFuZFByb2Nlc3Mubm9uZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnByb2Nlc3MgPSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlO1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50aW1lciA9IFJhbmRvbS5SYW5nZSg1LjI1LCA2Ljc1KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNoYW5nZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOenu+WKqOWIsOebruagh+WujOaIkFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBPbk1vdmVUb1RhcmdldENvbXBsZXRlKHRhcmdldDpQbGF5ZXIpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnm67moIfov5vlhaXmlLvlh7vojIPlm7Tml7ZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0YXJnZXRcIj48L3BhcmFtPlxyXG4gICAgcHVibGljIE9uVGFyZ2V0SW5BdHRhY2tSYW5nZSh0YXJnZXQ6UGxheWVyKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmlLvlh7vlpITnkIZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgT25BdHRhY2tIYW5kbGVyKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5ub25lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbWQucHJvY2VzcyA9IENvbW1hbmRQcm9jZXNzLmV4ZWN1dGU7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnRpbWVyID0gUmFuZG9tLlJhbmdlKDIuMjUsIDMuNSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNoYW5nZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbWQucHJvY2VzcyA9PSBDb21tYW5kUHJvY2Vzcy5leGVjdXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvVGFyZ2V0KHRoaXMuY21kLnRhcmdldFBsYXllci5ub2RlLnBvc2l0aW9uKVxyXG5cclxuICAgICAgICAgICAgaWYgKFZlY3RvcjIuZGlzdGFuY2UodGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbix0aGlzLmNtZC50YXJnZXRQb3MpIDw9IHRoaXMucGxheWVyLmdldE1vdmVTcGVlZCgpICogZHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY21kLnByb2Nlc3MgPSBDb21tYW5kUHJvY2Vzcy5jb21wbGV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5YiG5p6Q546v5aKDXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJvdGVjdGVkIEFuYWx5c2lzRW52aXJvbm1lbnQoZHQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY21kLlJlc2V0KCk7IC8v6YeN572u5oyH5LukXHJcbiAgICAgICAgdGhpcy5jbWQudGltZXIgPSBSYW5kb20uUmFuZ2UoMi4wLDMuNik7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLmFpTGV2ZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFBsYXllckFJTGV2ZWwubGV2ZWwxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5BbmFseXNpc0Vudmlyb25tZW50X0xldmVsMShkdCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQbGF5ZXJBSUxldmVsLmxldmVsMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQW5hbHlzaXNFbnZpcm9ubWVudF9MZXZlbDIoZHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUGxheWVyQUlMZXZlbC5sZXZlbDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFuYWx5c2lzRW52aXJvbm1lbnRfTGV2ZWwzKGR0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBsYXllckFJTGV2ZWwubGV2ZWw0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5BbmFseXNpc0Vudmlyb25tZW50X0xldmVsNChkdCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBBbmFseXNpc0Vudmlyb25tZW50X0xldmVsMShkdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTWF0aGYucHJvYmFiaWxpdHkoMC4yNSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlVzZURlZmVuc2VDbWQoKTtcclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVXNlUGF0cm9sQ21kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBBbmFseXNpc0Vudmlyb25tZW50X0xldmVsMihkdDpudW1iZXIpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmKE1hdGhmLnByb2JhYmlsaXR5KDAuNSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbGFzdFBsYXllcjpQbGF5ZXIgPSB0aGlzLkdldExhc3Rlc3RQbGF5ZXJJbkFsZXJ0KCk7IC8v6K2m5oiS6IyD5Zu06Led56a75pyA6L+R55qE546p5a62XHJcbiAgICAgICAgICAgIHZhciBteUtmTGVuOm51bWJlciA9IHRoaXMucGxheWVyLmtuaWZlUG9vbC5rbmlmZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxhc3RQbGF5ZXIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG90aGVyS2ZsZW46bnVtYmVyID0gbGFzdFBsYXllci5rbmlmZVBvb2wua25pZmVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihteUtmTGVuIC0gb3RoZXJLZmxlbiA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobXlLZkxlbiA8IDgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZVBpY2tLbmlmZUNtZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZUF0dGFja0NtZChsYXN0UGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGhmLnByb2JhYmlsaXR5KDAuNCkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZURlZmVuc2VDbWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VSdW5DbWQobGFzdFBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Vc2VQaWNrS25pZmVDbWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Vc2VQYXRyb2xDbWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEFuYWx5c2lzRW52aXJvbm1lbnRfTGV2ZWwzKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZihNYXRoZi5wcm9iYWJpbGl0eSgwLjcpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxhc3RQbGF5ZXI6UGxheWVyID0gdGhpcy5HZXRMYXN0ZXN0UGxheWVySW5BbGVydCgpOyAvL+itpuaIkuiMg+WbtOi3neemu+acgOi/keeahOeOqeWutlxyXG4gICAgICAgICAgICB2YXIgbXlLZkxlbjpudW1iZXIgPSB0aGlzLnBsYXllci5rbmlmZVBvb2wua25pZmVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmIChsYXN0UGxheWVyICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdGhlcktmbGVuOm51bWJlciA9IGxhc3RQbGF5ZXIua25pZmVQb29sLmtuaWZlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobXlLZkxlbiAtIG90aGVyS2ZsZW4gPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG15S2ZMZW4gPCA4KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VQaWNrS25pZmVDbWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VBdHRhY2tDbWQobGFzdFBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihNYXRoZi5wcm9iYWJpbGl0eSgwLjQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VEZWZlbnNlQ21kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXNlUnVuQ21kKGxhc3RQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVXNlUGlja0tuaWZlQ21kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVXNlUGF0cm9sQ21kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBBbmFseXNpc0Vudmlyb25tZW50X0xldmVsNChkdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxhc3RQbGF5ZXI6UGxheWVyID0gdGhpcy5HZXRMYXN0ZXN0UGxheWVySW5BbGVydCgpOyAvL+itpuaIkuiMg+WbtOi3neemu+acgOi/keeahOeOqeWutlxyXG5cclxuICAgICAgICB2YXIgbXlLZkxlbjpudW1iZXIgPSB0aGlzLnBsYXllci5rbmlmZVBvb2wua25pZmVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RQbGF5ZXIgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBvdGhlcktmbGVuOm51bWJlciA9IGxhc3RQbGF5ZXIua25pZmVQb29sLmtuaWZlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZihteUtmTGVuIC0gb3RoZXJLZmxlbiA+IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKG15S2ZMZW4gPCAxMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZVBpY2tLbmlmZUNtZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZUF0dGFja0NtZChsYXN0UGxheWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoTWF0aGYucHJvYmFiaWxpdHkoMC40KSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVzZURlZmVuc2VDbWQoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VSdW5DbWQobGFzdFBsYXllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVXNlUGlja0tuaWZlQ21kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6I635b6X6Led56a75pyA6L+R55qE546p5a62XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIEdldExhc3Rlc3RQbGF5ZXIoKTpQbGF5ZXJcclxuICAgIHtcclxuICAgICAgICB2YXIgcGxheWVyQXJyOkFycmF5PFBsYXllcj4gPSB0aGlzLmdhbWVTY2VuZS5wbGF5ZXJBcnI7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGxheWVyOlBsYXllciA9IG51bGw7IC8v6Led56a75pyA6L+R55qE546p5a62XHJcblxyXG4gICAgICAgIHZhciBkaXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcGxheWVyQXJyLmZvckVhY2goKG90aGVyUGxheWVyOlBsYXllcik9PntcclxuXHJcbiAgICAgICAgICAgIGlmICghb3RoZXJQbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAob3RoZXJQbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihvdGhlclBsYXllciA9PSB0aGlzLnBsYXllcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXMyOm51bWJlciA9IFZlY3RvcjIuZGlzdGFuY2UodGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbixvdGhlclBsYXllci5ub2RlLnBvc2l0aW9uKTsgLy9WZWN0b3IzLkRpc3RhbmNlKG1fdHJhbnNmb3JtLnBvc2l0aW9uLCBwbGF5ZXIubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGlzID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpczI7XHJcbiAgICAgICAgICAgICAgICBsYXN0UGxheWVyID0gb3RoZXJQbGF5ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzMiA8IGRpcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXMgPSBkaXMyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQbGF5ZXIgPSBvdGhlclBsYXllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhc3RQbGF5ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDojrflvpforabmiJLojIPlm7TlhoXot53nprvmnIDov5HnmoTnjqnlrrZcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgR2V0TGFzdGVzdFBsYXllckluQWxlcnQoKTpQbGF5ZXJcclxuICAgIHtcclxuICAgICAgICB2YXIgcGxheWVyQXJyOkFycmF5PFBsYXllcj4gPSB0aGlzLmdhbWVTY2VuZS5wbGF5ZXJBcnI7XHJcblxyXG4gICAgICAgIHZhciBsYXN0UGxheWVyOlBsYXllciA9IG51bGw7IC8v6Led56a75pyA6L+R55qE546p5a62XHJcblxyXG4gICAgICAgIHZhciBkaXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcGxheWVyQXJyLmZvckVhY2goKG90aGVyUGxheWVyOlBsYXllcik9PntcclxuXHJcbiAgICAgICAgICAgIGlmICghb3RoZXJQbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAob3RoZXJQbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihvdGhlclBsYXllciA9PSB0aGlzLnBsYXllcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB2YXIgZGlzMjpudW1iZXIgPSBWZWN0b3IyLmRpc3RhbmNlKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24sb3RoZXJQbGF5ZXIubm9kZS5wb3NpdGlvbik7IC8vVmVjdG9yMy5EaXN0YW5jZShtX3RyYW5zZm9ybS5wb3NpdGlvbiwgcGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRpczIgPCB0aGlzLmFsZXJ0UmFuZ2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXMgPSBkaXMyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQbGF5ZXIgPSBvdGhlclBsYXllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzMiA8IGRpcylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcyA9IGRpczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQbGF5ZXIgPSBvdGhlclBsYXllcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXN0UGxheWVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6I635b6X6ZqP5py65LiA5Liq546p5a62XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIEdldFJhbmRvbVBsYXllcigpOlBsYXllclxyXG4gICAge1xyXG4gICAgICAgIHZhciBwbGF5ZXJBcnI6QXJyYXk8UGxheWVyPiA9IHRoaXMuZ2FtZVNjZW5lLnBsYXllckFycjtcclxuXHJcbiAgICAgICAgdmFyIHRlbXBQbGF5ZXI6UGxheWVyICA9IG51bGw7XHJcblxyXG4gICAgICAgIHZhciBwbGF5ZXJMaXN0OkFycmF5PFBsYXllcj4gPSBbXTtcclxuXHJcbiAgICAgICAgcGxheWVyQXJyLmZvckVhY2goKG90aGVyUGxheWVyOlBsYXllcik9PntcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFvdGhlclBsYXllcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChvdGhlclBsYXllci5zdGF0dXMgPT0gUGxheWVyU3RhdHVzLmRpZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmKG90aGVyUGxheWVyID09IHRoaXMucGxheWVyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyTGlzdC5wdXNoKG90aGVyUGxheWVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllckxpc3QubGVuZ3RoICE9IDApXHJcbiAgICAgICAgICAgIHRlbXBQbGF5ZXIgPSBwbGF5ZXJMaXN0W1JhbmRvbS5SYW5nZUludGVnZXIoMCwgcGxheWVyTGlzdC5sZW5ndGgpXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXBQbGF5ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDojrflvpfmkYTlg4/mnLrop4bph47ojIPlm7TlhoXpmo/mnLrkuIDkuKrngrlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgcHVibGljIEdldFJhbmRvbVBvaW50SW5TY2VuZSgpOmNjLlZlYzJcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIGhhbGZXaWR0aDpudW1iZXIgPSB0aGlzLmdhbWVTY2VuZS5zY2VuZVNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0Om51bWJlciA9IHRoaXMuZ2FtZVNjZW5lLnNjZW5lU2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICByZXR1cm4gY2MudjIoUmFuZG9tLlJhbmdlKC1oYWxmV2lkdGgsaGFsZldpZHRoKSxSYW5kb20uUmFuZ2UoLWhhbGZIZWlnaHQsaGFsZkhlaWdodCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6I635b6X5Zy65pmv5YaF6Led56a7546p5a625pyA6L+R55qE5LiA5oqK6aOe5YiAXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIEdldExhc3Rlc3RLbmlmZSgpOktuaWZlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGtuaWZlQXJyOkFycmF5PEtuaWZlPiA9IHRoaXMuZ2FtZVNjZW5lLmtuaWZlQXJyO1xyXG5cclxuICAgICAgICB2YXIgbGFzdEtuaWZlOktuaWZlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGRpczpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICB2YXIgaGFsZldpZHRoOm51bWJlciA9IHRoaXMuZ2FtZVNjZW5lLnNjZW5lU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdmFyIGhhbGZIZWlnaHQ6bnVtYmVyID0gdGhpcy5nYW1lU2NlbmUuc2NlbmVTaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGtuaWZlQXJyLmZvckVhY2goKGtuaWZlOktuaWZlKT0+e1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYoa25pZmUubm9kZS54IDwgLWhhbGZXaWR0aCB8fCBrbmlmZS5ub2RlLnggPiBoYWxmV2lkdGggfHwga25pZmUubm9kZS54IDwgLWhhbGZIZWlnaHQgfHwga25pZmUubm9kZS55ID4gaGFsZkhlaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZGlzMjpudW1iZXIgPSBWZWN0b3IyLmRpc3RhbmNlKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24sa25pZmUubm9kZS5wb3NpdGlvbik7IC8vVmVjdG9yMy5EaXN0YW5jZShtX3RyYW5zZm9ybS5wb3NpdGlvbiwgcGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRpczIgPCB0aGlzLmFsZXJ0UmFuZ2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXMgPSBkaXMyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RLbmlmZSA9IGtuaWZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXMyIDwgZGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzID0gZGlzMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEtuaWZlID0ga25pZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXN0S25pZmU7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5L2/55So5b6F5py65oyH5LukXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljICBVc2VQaWNrS25pZmVDbWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY21kLnR5cGUgPSBDb21tYW5kVHlwZS5waWNrS25pZmU7XHJcblxyXG4gICAgICAgIHZhciBsYXN0ZXN0S25pZmU6S25pZmUgPSB0aGlzLkdldExhc3Rlc3RLbmlmZSgpO1xyXG5cclxuICAgICAgICBpZihsYXN0ZXN0S25pZmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50YXJnZXRQb3MgPSBsYXN0ZXN0S25pZmUubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbWQudGFyZ2V0UG9zID0gdGhpcy5HZXRSYW5kb21Qb2ludEluU2NlbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkvb/nlKjlt6HpgLvmjIfku6RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcm90ZWN0ZWQgIFVzZVBhdHJvbENtZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbWQudHlwZSA9IENvbW1hbmRUeXBlLnBhdHJvbDtcclxuICAgICAgICB0aGlzLmNtZC50YXJnZXRQb3MgPSB0aGlzLkdldFJhbmRvbVBvaW50SW5TY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkvb/nlKjpmLLlvqHmjIfku6RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcm90ZWN0ZWQgIFVzZURlZmVuc2VDbWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY21kLnR5cGUgPSBDb21tYW5kVHlwZS5kZWZlbmNlZDtcclxuICAgICAgICAvL3RoaXMuY21kLnRhcmdldFBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAvL3RoaXMuY21kLnRhcmdldFBvcyA9IHBsYXllci5ub2RlLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkvb/nlKjmlLvlh7vmjIfku6RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcm90ZWN0ZWQgIFVzZUF0dGFja0NtZChwbGF5ZXI6UGxheWVyKVxyXG4gICAge1xyXG5cclxuICAgICAgICB0aGlzLmNtZC50eXBlID0gQ29tbWFuZFR5cGUuYXR0YWNrO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2VuZW15LkZhY2VUb1Bvc2l0aW9uKHBsYXllci5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5jbWQudGFyZ2V0UGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50YXJnZXRQb3MgPSBwbGF5ZXIubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS9v+eUqOaUu+WHu+aMh+S7pFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCAgVXNlUnVuQ21kKHBsYXllcjpQbGF5ZXIpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHRoaXMuY21kLnR5cGUgPSBDb21tYW5kVHlwZS5ydW47XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZW5lbXkuRmFjZVRvUG9zaXRpb24ocGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmNtZC50YXJnZXRQbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuY21kLnRhcmdldFBvcyA9IHBsYXllci5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5L2/55So56e75Yqo5Yiw55uu5qCH5oyH5LukXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJvdGVjdGVkICBVc2VNb3ZlVG9UYXJnZXRDbWQocGxheWVyOlBsYXllcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNtZC50eXBlID0gQ29tbWFuZFR5cGUubW92ZVRvVGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuY21kLnRhcmdldFBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNtZC50YXJnZXRQb3MgPSBwbGF5ZXIubm9kZS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5L2/55So6Lef6Liq55uu5qCH5oyH5LukXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJvdGVjdGVkICBVc2VUcmFja0NtZChwbGF5ZXI6UGxheWVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY21kLnR5cGUgPSBDb21tYW5kVHlwZS50cmFjaztcclxuICAgICAgICB0aGlzLmNtZC50YXJnZXRQbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jbWQudGFyZ2V0UG9zID0gcGxheWVyLm5vZGUucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOaMh+S7pOaVsOaNrlxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5cclxuY2xhc3MgIENvbW1hbmRcclxue1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmjIfku6TnsbvlnotcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdHlwZTpDb21tYW5kVHlwZTtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g55uu5qCH546p5a625a+56LGhXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHRhcmdldFBsYXllcjpQbGF5ZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOebruagh+eCuVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0YXJnZXRQb3M6Y2MuVmVjMjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHJvYWRQYXRoOmNjLlZlYzJbXSA9IFtdO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmjIfku6TmiafooYzml7bpl7RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdGltZXI6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgY2Q6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5omn6KGM6L+b56iLXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHByb2Nlc3M6Q29tbWFuZFByb2Nlc3M7XHJcblxyXG4gICAgcHVibGljIFJlc2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBDb21tYW5kVHlwZS5ub25lO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRhcmdldFBvcyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLnJvYWRQYXRoLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5jZCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gQ29tbWFuZFByb2Nlc3Mubm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlKGR0Om51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gQ29tbWFuZFR5cGUubW92ZVRvVGFyZ2V0IHx8IHRoaXMudHlwZSA9PSBDb21tYW5kVHlwZS5vdXRmbGFuayB8fCB0aGlzLnR5cGUgPT0gQ29tbWFuZFR5cGUudHJhY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighdGhpcy50YXJnZXRQbGF5ZXIgfHwgdGhpcy50YXJnZXRQbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpIC8v546p5a625bey57uP5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzID09IENvbW1hbmRQcm9jZXNzLmNvbXBsZXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPD0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOaMh+S7pOexu+Wei1xyXG4vLy8gPC9zdW1tYXJ5PlxyXG5lbnVtIENvbW1hbmRUeXBlXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuI3lgZrku7vkvZXkuotcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBub25lID0gMCxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5b6F5py6XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcGlja0tuaWZlID0gMSxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5beh6YC7XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcGF0cm9sID0gMixcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6KKr5oOK5ZCTXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgc2NhcmVkID0gMyxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g56e75Yqo5Yiw55uu5qCHXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgbW92ZVRvVGFyZ2V0ID0gNCxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g57uV552A6LWwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcnVuID0gNSxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6Ziy5b6hXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgZGVmZW5jZWQgPSA2LFxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDov4Llm55cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBvdXRmbGFuayA9IDcsXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOi3n+i4qlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHRyYWNrID0gOCxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g57uE5ZCI5pS75Ye7XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgY29tYm9BdHRhY2sgPSAxMDAsXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaUu+WHuzFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBhdHRhY2sgPSAxMDEsXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaUu+WHuzJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBhdHRhY2syID0gMTAyLFxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmlLvlh7szXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgYXR0YWNrMyA9IDEwMyxcclxuXHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOaMh+S7pOi/m+eoi1xyXG4vLy8gPC9zdW1tYXJ5PlxyXG5lbnVtIENvbW1hbmRQcm9jZXNzXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmnKrmiafooYxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBub25lID0gMCxcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5omn6KGM5LitXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgZXhlY3V0ZSA9IDEsXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaJp+ihjOWujOaIkFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIGNvbXBsZXRlID0gMlxyXG59XHJcblxyXG4iXX0=