import RankItem from "./RankItem";
import GameScene from "../../gamescene/GameScene";
import GameManager, { GameStatus } from "../../core/GameManager";
import Player, { PlayerStatus } from "../../gamescene/Player";

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

@ccclass
export default class RankUI extends cc.Component {

    @property(RankItem)
    rankItemArr: RankItem[] = [];

    //@property(cc.Prefab)
    //public knifePrefab:cc.Prefab = null;


    private gameScene:GameScene = null;


    private playerColor:cc.Color = new cc.Color(200,141,51);

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.gameScene = GameManager.instance.gameScene.getComponent(GameScene);

    }

    start () {


        this.gameScene.node.on("knifesChange",this.onKnifesChange,this);

    }

    private onKnifesChange()
    {
        if(GameManager.instance.gameStatus == GameStatus.over)
        {
            return;
        }

        this.gameScene.playerArr.sort((player1:Player,player2:Player):number=>
        {
            var kfLen1:number = player1.knifePool.knifes.length;
            var kfLen2:number = player2.knifePool.knifes.length;

            if(kfLen1 > kfLen2)
            {
                return -1;
            }
            
            if(kfLen1 < kfLen2)
            {
                return 1;
            }

            return  0;
        });

        for(var i = 0 ; i < this.rankItemArr.length ; i++)
        {
            var player:Player = this.gameScene.playerArr[i];
            
            if(player != null)
            {
                this.rankItemArr[i].mark.spriteFrame = player.body.skin.spriteFrame;
                this.rankItemArr[i].nameTxt.string = player.getName();

                if(player.status != PlayerStatus.die)
                {
                    this.rankItemArr[i].rankTxt.string = "" + player.knifePool.knifes.length;
                }else
                {
                    this.rankItemArr[i].rankTxt.string = "0";
                }

                if(player == this.gameScene.player)
                {
                    this.rankItemArr[i].nameTxt.node.color = this.playerColor;
                }else
                {
                    this.rankItemArr[i].nameTxt.node.color = cc.Color.WHITE;
                }
                
            }
            
        }


    }

    // update (dt) {}
}
