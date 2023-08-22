// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CommonUils {


     private static chNumArr:string[] = ["零","一","二","三","四","五","六","七","八","九"];

   /**
    * 获得相对于某个节点的位置
    * @param relaNode 
    * @param targetNode 
    */
   public static transRelativePos(relaNode:cc.Node,targetNode:cc.Node):cc.Vec2
   {
        var worldPos:cc.Vec2 = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
        var relaPos:cc.Vec2 = relaNode.parent.convertToNodeSpaceAR(worldPos);
        return relaPos;
   }

   

   public static transRelativeFromPos(relaNode:cc.Node,position:cc.Vec2):cc.Vec2
   {
        var worldPos = relaNode.convertToWorldSpaceAR(position);
        var pos = cc.v2(worldPos.x - cc.winSize.width * 0.5,worldPos.y - cc.winSize.height * 0.5);
        return pos;
   }

   public static converCHNumber(num:number):string
   {
     num = Math.floor(num);
     if(num < 0)
          num = 0;
     
     if(num > 9)
          num = 9;

     return this.chNumArr[num];
   }
   
}
