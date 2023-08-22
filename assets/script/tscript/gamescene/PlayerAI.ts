import Player, { PlayerStatus } from "./Player";
import Random from "../util/Random";
import GameManager, { GameStatus } from "../core/GameManager";
import GameScene from "./GameScene";
import Vector2 from "../util/Vector2";
import Mathf from "../util/Mathf";
import Knife from "./Knife";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export enum PlayerAILevel
{
    none = 0,
    level1 = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
}

@ccclass
export default class PlayerAI extends cc.Component {


    public aiLevel:PlayerAILevel = PlayerAILevel.level1;

    /**
     * AI指令
     */
    public cmd:Command = new Command();

    public player:Player = null;


    private timer:number = 0.01;

    /**
     * 警戒范围
     */
    public alertRange:number = 1250;

    public gameScene:GameScene = null;

    onLoad () {
        this.gameScene = this.node.parent.getComponent(GameScene);
    }

    start () {

        this.player = this.getComponent(Player);

        /*this.node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{

            if(this.player.isAI)
            {
                this.node.active = !this.node.active;
            }
            
        },this);*/

        this.cmd.Reset();

    }

    public onGameStart()
    {

        this.player = this.getComponent(Player);

        if(this.aiLevel == PlayerAILevel.level1)
        {
            this.player.knifePool.initKnife(3);
        }else if(this.aiLevel == PlayerAILevel.level2)
        {
            this.player.knifePool.initKnife(4);
        }else if(this.aiLevel == PlayerAILevel.level3)
        {
            this.player.knifePool.initKnife(6);
        }else if(this.aiLevel == PlayerAILevel.level4)
        {
            this.player.knifePool.initKnife(8);
        }else
        {
            this.player.knifePool.initKnife(3);
        }

    }


    update2 (dt) 
    {
        if(GameManager.instance.gameStatus != GameStatus.start)
        {
            this.player.moveDir = cc.Vec2.ZERO;
            return;
        }

        if(!this.player.isAI)
        {
            return;
        }

        this.timer -= dt;
        
        if(this.timer <= 0)
        {
            if(Random.Range(0,1) < 0.25)
            {
                if(this.player.status != PlayerStatus.defence)
                {
                    this.player.changeDefenceState();
                }

                this.player.moveDir = cc.Vec2.ZERO;

            }else
            {
    
                if(this.player.status != PlayerStatus.attack)
                {
                    this.player.changeAttackState();
                }

                this.player.moveDir = cc.v2(Random.Range(-1,1),Random.Range(-1,1));
                
            }

            this.timer = Random.Range(1.0,2.0);
        }
    }


    update(dt):void
    {

        if(GameManager.instance.gameStatus != GameStatus.start)
        {
            this.player.stopMove();
            return;
        }

        if(!this.player.isAI)
        {
            return;
        }

 
        if (this.player.status == PlayerStatus.die)
        {
            this.player.stopMove();
            return;
        }
            
        this.cmd.Update(dt);

        switch (this.cmd.type)
        {
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
    }
    
    /// <summary>
    /// 下一步做什么
    /// </summary>
    public OnWhatToDoNext(dt)
    {
        this.AnalysisEnvironment(dt);
    }

    /// <summary>
    /// 捡刀命令的处理
    /// </summary>
    public OnPickKnifeHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Vector2.distance(this.player.node.position,this.cmd.targetPos) / this.player.getMoveSpeed();
            this.player.moveToTarget(this.cmd.targetPos);
        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }

    }

    //巡逻时处理
    public OnPatrolHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            
            //this.cmd.timer = Vector2.distance(this.player.node.position,this.cmd.targetPos) / this.player.getMoveSpeed();
            //this.player.moveToTarget(this.cmd.targetPos);

            this.cmd.timer = Random.Range(1, 2);
            this.player.moveDir = cc.v2(Random.Range(-1,1),Random.Range(-1,1)).normalize();

            this.player.changeAttackState();

        }

        if (this.cmd.process == CommandProcess.execute)
        {
            if (Vector2.distance(this.player.node.position,this.cmd.targetPos) <= this.player.getMoveSpeed() * dt)
            {
                this.cmd.process = CommandProcess.complete;
            }
        }
    }

    //惊吓时处理
    public OnScareHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(5.25, 6.75);
        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }
    }

    /// <summary>
    /// 逃跑时处理
    /// </summary>
    public OnRunHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(3.25, 5.0);
            this.player.changeAttackState();
        }

        if (this.cmd.process == CommandProcess.execute)
        {
            this.player.moveDir = this.player.node.position.sub(this.cmd.targetPlayer.node.position).normalize();
        }
        
    }

    /// <summary>
    /// 防御状态
    /// </summary>
    public OnDefencedHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(2, 4);

            this.player.changeDefenceState();

            this.player.stopMove();

        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }
        
    }


    /// <summary>
    /// 迂回战术
    /// </summary>
    public OnOutflankHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(5.25, 6.75);
        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }
    }

    /// <summary>
    /// 跟踪目标
    /// </summary>
    public  OnTrackHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(5.25, 6.75);
        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }
    }

    //移动到目标处理
    public OnMoveToTargetHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(5.25, 6.75);

            this.player.changeAttackState();
        }

        if (this.cmd.process == CommandProcess.execute)
        {
           
        }
    }

    /// <summary>
    /// 移动到目标完成
    /// </summary>
    public OnMoveToTargetComplete(target:Player)
    {

    }

    /// <summary>
    /// 目标进入攻击范围时
    /// </summary>
    /// <param name="target"></param>
    public OnTargetInAttackRange(target:Player)
    {
        
    }

    /// <summary>
    /// 攻击处理
    /// </summary>
    public OnAttackHandler(dt:number)
    {
        if (this.cmd.process == CommandProcess.none)
        {
            this.cmd.process = CommandProcess.execute;
            this.cmd.timer = Random.Range(2.25, 3.5);
            this.player.changeAttackState();
        }

        if (this.cmd.process == CommandProcess.execute)
        {
            this.player.moveToTarget(this.cmd.targetPlayer.node.position)

            if (Vector2.distance(this.player.node.position,this.cmd.targetPos) <= this.player.getMoveSpeed() * dt)
            {
                this.cmd.process = CommandProcess.complete;
            }
        }
    }

    /// <summary>
    /// 分析环境
    /// </summary>
    protected AnalysisEnvironment(dt:number)
    {
        this.cmd.Reset(); //重置指令
        this.cmd.timer = Random.Range(2.0,3.6);

        switch(this.aiLevel)
        {
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
       
    }

    protected AnalysisEnvironment_Level1(dt:number)
    {
        if(Mathf.probability(0.25))
        {
            this.UseDefenseCmd();

        }else
        {
            this.UsePatrolCmd();
        }
    }

    protected AnalysisEnvironment_Level2(dt:number)
    {

        if(Mathf.probability(0.5))
        {
            var lastPlayer:Player = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家
            var myKfLen:number = this.player.knifePool.knifes.length;

            if (lastPlayer != null)
            {
                var otherKflen:number = lastPlayer.knifePool.knifes.length;

                if(myKfLen - otherKflen > 0)
                {
                    if(myKfLen < 8)
                    {
                        this.UsePickKnifeCmd();
                    }else
                    {
                        this.UseAttackCmd(lastPlayer);
                    }
                }else
                {
                    if(Mathf.probability(0.4))
                    {
                        this.UseDefenseCmd();
                    }else
                    {
                        this.UseRunCmd(lastPlayer);
                    }
                }

            }else
            {
                this.UsePickKnifeCmd();
            }

        }else
        {
            this.UsePatrolCmd();
        }
    }

    protected AnalysisEnvironment_Level3(dt:number)
    {
        if(Mathf.probability(0.7))
        {
            var lastPlayer:Player = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家
            var myKfLen:number = this.player.knifePool.knifes.length;

            if (lastPlayer != null)
            {
                var otherKflen:number = lastPlayer.knifePool.knifes.length;

                if(myKfLen - otherKflen > 0)
                {
                    if(myKfLen < 8)
                    {
                        this.UsePickKnifeCmd();
                    }else
                    {
                        this.UseAttackCmd(lastPlayer);
                    }
                }else
                {
                    if(Mathf.probability(0.4))
                    {
                        this.UseDefenseCmd();
                    }else
                    {
                        this.UseRunCmd(lastPlayer);
                    }
                }

            }else
            {
                this.UsePickKnifeCmd();
            }

        }else
        {
            this.UsePatrolCmd();
        }
        
    }

    protected AnalysisEnvironment_Level4(dt:number)
    {
        var lastPlayer:Player = this.GetLastestPlayerInAlert(); //警戒范围距离最近的玩家

        var myKfLen:number = this.player.knifePool.knifes.length;

        if (lastPlayer != null)
        {
            var otherKflen:number = lastPlayer.knifePool.knifes.length;

            if(myKfLen - otherKflen > 2)
            {
                if(myKfLen < 10)
                {
                    this.UsePickKnifeCmd();
                }else
                {
                    this.UseAttackCmd(lastPlayer);
                }
            }else
            {
                if(Mathf.probability(0.4))
                {
                    this.UseDefenseCmd();
                }else
                {
                    this.UseRunCmd(lastPlayer);
                }
            }

        }else
        {
            this.UsePickKnifeCmd();
        }
    }


    /// <summary>
    /// 获得距离最近的玩家
    /// </summary>
    public GetLastestPlayer():Player
    {
        var playerArr:Array<Player> = this.gameScene.playerArr;

        var lastPlayer:Player = null; //距离最近的玩家

        var dis:number = 0;

        playerArr.forEach((otherPlayer:Player)=>{

            if (!otherPlayer)
                return;

            if (otherPlayer.status == PlayerStatus.die)
                return;
            
            if(otherPlayer == this.player)
                return;

            var dis2:number = Vector2.distance(this.player.node.position,otherPlayer.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            
            if (dis == 0)
            {
                dis = dis2;
                lastPlayer = otherPlayer;
            }
            else
            {
                if (dis2 < dis)
                {
                    dis = dis2;
                    lastPlayer = otherPlayer;
                }
            }

        });

        return lastPlayer;

    }

    /// <summary>
    /// 获得警戒范围内距离最近的玩家
    /// </summary>
    public GetLastestPlayerInAlert():Player
    {
        var playerArr:Array<Player> = this.gameScene.playerArr;

        var lastPlayer:Player = null; //距离最近的玩家

        var dis:number = 0;

        playerArr.forEach((otherPlayer:Player)=>{

            if (!otherPlayer)
                return;

            if (otherPlayer.status == PlayerStatus.die)
                return;
            
            if(otherPlayer == this.player)
                return;
            

            var dis2:number = Vector2.distance(this.player.node.position,otherPlayer.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            
            if (dis2 < this.alertRange)
            {
                if (dis == 0)
                {
                    dis = dis2;
                    lastPlayer = otherPlayer;
                }
                else
                {
                    if (dis2 < dis)
                    {
                        dis = dis2;
                        lastPlayer = otherPlayer;
                    }
                }
            }

        });

        return lastPlayer;

    }

    /// <summary>
    /// 获得随机一个玩家
    /// </summary>
    public GetRandomPlayer():Player
    {
        var playerArr:Array<Player> = this.gameScene.playerArr;

        var tempPlayer:Player  = null;

        var playerList:Array<Player> = [];

        playerArr.forEach((otherPlayer:Player)=>{
        
            if (!otherPlayer)
                return;

            if (otherPlayer.status == PlayerStatus.die)
                return;

            if(otherPlayer == this.player)
                return;

            playerList.push(otherPlayer);
        });

        if (playerList.length != 0)
            tempPlayer = playerList[Random.RangeInteger(0, playerList.length)];

        return tempPlayer;

    }

    /// <summary>
    /// 获得摄像机视野范围内随机一个点
    /// </summary>
    /// <returns></returns>
    public GetRandomPointInScene():cc.Vec2
    {

        var halfWidth:number = this.gameScene.sceneSize.width / 2;
        var halfHeight:number = this.gameScene.sceneSize.height / 2;

        return cc.v2(Random.Range(-halfWidth,halfWidth),Random.Range(-halfHeight,halfHeight));

    }

    /// <summary>
    /// 获得场景内距离玩家最近的一把飞刀
    /// </summary>
    public GetLastestKnife():Knife
    {
        var knifeArr:Array<Knife> = this.gameScene.knifeArr;

        var lastKnife:Knife = null;

        var dis:number = 0;

        var halfWidth:number = this.gameScene.sceneSize.width / 2;
        var halfHeight:number = this.gameScene.sceneSize.height / 2;

        knifeArr.forEach((knife:Knife)=>{
        

            if(knife.node.x < -halfWidth || knife.node.x > halfWidth || knife.node.x < -halfHeight || knife.node.y > halfHeight)
            {
                return;
            }

            var dis2:number = Vector2.distance(this.player.node.position,knife.node.position); //Vector3.Distance(m_transform.position, player.node.position);
            
            if (dis2 < this.alertRange)
            {
                if (dis == 0)
                {
                    dis = dis2;
                    lastKnife = knife;
                }
                else
                {
                    if (dis2 < dis)
                    {
                        dis = dis2;
                        lastKnife = knife;
                    }
                }
            }
        });

        return lastKnife;

    }


    /// <summary>
    /// 使用待机指令
    /// </summary>
    public  UsePickKnifeCmd()
    {
        this.cmd.type = CommandType.pickKnife;

        var lastestKnife:Knife = this.GetLastestKnife();

        if(lastestKnife)
        {
            this.cmd.targetPos = lastestKnife.node.position;
        }else
        {
            this.cmd.targetPos = this.GetRandomPointInScene();
        }

    }

    /// <summary>
    /// 使用巡逻指令
    /// </summary>
    protected  UsePatrolCmd()
    {
        this.cmd.type = CommandType.patrol;
        this.cmd.targetPos = this.GetRandomPointInScene();
    }

    /// <summary>
    /// 使用防御指令
    /// </summary>
    protected  UseDefenseCmd()
    {
        this.cmd.type = CommandType.defenced;
        //this.cmd.targetPlayer = player;
        //this.cmd.targetPos = player.node.position;
    }

    /// <summary>
    /// 使用攻击指令
    /// </summary>
    protected  UseAttackCmd(player:Player)
    {

        this.cmd.type = CommandType.attack;

        if (player != null)
        {
            //enemy.FaceToPosition(player.node.position);
            this.cmd.targetPlayer = player;
            this.cmd.targetPos = player.node.position;
        }
    }

    /// <summary>
    /// 使用攻击指令
    /// </summary>
    protected  UseRunCmd(player:Player)
    {

        this.cmd.type = CommandType.run;

        if (player != null)
        {
            //enemy.FaceToPosition(player.node.position);
            this.cmd.targetPlayer = player;
            this.cmd.targetPos = player.node.position;
        }
    }

    /// <summary>
    /// 使用移动到目标指令
    /// </summary>
    protected  UseMoveToTargetCmd(player:Player)
    {
        this.cmd.type = CommandType.moveToTarget;
        this.cmd.targetPlayer = player;
        this.cmd.targetPos = player.node.position;
    }

    /// <summary>
    /// 使用跟踪目标指令
    /// </summary>
    protected  UseTrackCmd(player:Player)
    {
        this.cmd.type = CommandType.track;
        this.cmd.targetPlayer = player;
        this.cmd.targetPos = player.node.position;
    }



}

/// <summary>
/// 指令数据
/// </summary>

class  Command
{

    /// <summary>
    /// 指令类型
    /// </summary>
    public type:CommandType;

    /// <summary>
    /// 目标玩家对象
    /// </summary>
    public targetPlayer:Player;

    /// <summary>
    /// 目标点
    /// </summary>
    public targetPos:cc.Vec2;

    /// <summary>
    /// 
    /// </summary>
    public roadPath:cc.Vec2[] = [];

    /// <summary>
    /// 指令执行时间
    /// </summary>
    public timer:number = 0;

    public cd:number = 0;

    /// <summary>
    /// 执行进程
    /// </summary>
    public process:CommandProcess;

    public Reset()
    {
        this.type = CommandType.none;
        this.targetPlayer = null;
        this.targetPos = cc.Vec2.ZERO;
        this.roadPath.length = 0;
        this.timer = 0;
        this.cd = 0;
        this.process = CommandProcess.none;
    }

    public Update(dt:number)
    {
        if(this.type == CommandType.moveToTarget || this.type == CommandType.outflank || this.type == CommandType.track)
        {
            if(!this.targetPlayer || this.targetPlayer.status == PlayerStatus.die) //玩家已经不存在
                this.Reset();
        }

        if (this.process == CommandProcess.complete)
        {
            this.Reset();
        }
        else
        {
            if (this.timer > 0)
            {
                this.timer -= dt;

                if (this.timer <= 0)
                {
                    this.Reset();
                }
            }
        }
    }
}

/// <summary>
/// 指令类型
/// </summary>
enum CommandType
{
    /// <summary>
    /// 不做任何事
    /// </summary>
    none = 0,

    /// <summary>
    /// 待机
    /// </summary>
    pickKnife = 1,

    /// <summary>
    /// 巡逻
    /// </summary>
    patrol = 2,

    /// <summary>
    /// 被惊吓
    /// </summary>
    scared = 3,

    /// <summary>
    /// 移动到目标
    /// </summary>
    moveToTarget = 4,

    /// <summary>
    /// 绕着走
    /// </summary>
    run = 5,

    /// <summary>
    /// 防御
    /// </summary>
    defenced = 6,

    /// <summary>
    /// 迂回
    /// </summary>
    outflank = 7,

    /// <summary>
    /// 跟踪
    /// </summary>
    track = 8,

    /// <summary>
    /// 组合攻击
    /// </summary>
    comboAttack = 100,

    /// <summary>
    /// 攻击1
    /// </summary>
    attack = 101,

    /// <summary>
    /// 攻击2
    /// </summary>
    attack2 = 102,

    /// <summary>
    /// 攻击3
    /// </summary>
    attack3 = 103,

}

/// <summary>
/// 指令进程
/// </summary>
enum CommandProcess
{
    /// <summary>
    /// 未执行
    /// </summary>
    none = 0,

    /// <summary>
    /// 执行中
    /// </summary>
    execute = 1,

    /// <summary>
    /// 执行完成
    /// </summary>
    complete = 2
}

