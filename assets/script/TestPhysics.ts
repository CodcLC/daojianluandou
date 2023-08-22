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
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.RigidBody)
    public rigibody:cc.RigidBody = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
        //cc.director.getPhysicsManager().gravity = cc.Vec2.ZERO;
    }

    start () {

        //this.rigibody.applyTorque(1000,true);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{

            switch(event.keyCode)
            {
                case cc.macro.KEY.a:


                this.rigibody.node.position = cc.Vec2.ZERO;
                this.rigibody.linearVelocity = cc.Vec2.ZERO;
                break;

                case cc.macro.KEY.s:

                this.rigibody.applyForce(cc.v2(0,-1).mul(100000),cc.v2(0,25),true);

                break;

                case cc.macro.KEY.d:

                

                break;
            }
        })

    }

     update (dt) 
     {
        //var fp:cc.Vec2 = cc.v2(10,10).sub(this.rigibody.node.position);//向心力矢量，但此时向量模不正确
		//fp = fp.normalize().mul(this.rigibody.getMass() * 1.0);//纠正向量的模
		//this.rigibody.applyForce(cc.v2(-1,0).mul(100),cc.v2(0,500),true);

        //this.rigibody.node.x += dt * 10;
        //this.rigibody.node.rotation += dt * 5;

     }
}
