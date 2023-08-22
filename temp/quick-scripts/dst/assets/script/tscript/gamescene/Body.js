
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/gamescene/Body.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68f37xrkmpGcZut7SNLEz2/', 'Body');
// script/tscript/gamescene/Body.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Knife_1 = require("./Knife");
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
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skin = null;
        _this.face = null;
        _this.player = null;
        _this.faceSFArr = [];
        _this.timer = 0;
        return _this;
    }
    // onLoad () {}
    Body.prototype.start = function () {
        this.player = this.node.parent.getComponent(Player_1.default);
        //this.face.node.active = false;
        //this.face.node.active = this.player.showface;
    };
    Body.prototype.update = function (dt) {
        if (this.player.showface) {
            if (this.timer > 0) {
                this.timer -= dt;
                if (this.timer <= 0) {
                    //this.face.spriteFrame = this.faceSFArr[Random.RangeInteger(0,this.faceSFArr.length)];
                    //this.timer = Random.Range(1.5,2.5);
                    this.face.spriteFrame = this.faceSFArr[1];
                }
            }
        }
    };
    Body.prototype.onCollisionEnter = function (other, self) {
        if (this.player.status == Player_1.PlayerStatus.die) {
            return;
        }
        if (other.tag == 0) {
        }
        else if (other.tag == 1) {
            var knife = other.getComponent(Knife_1.default);
            if (knife && knife.status == Knife_1.KnifeStatus.capture && knife.player && knife.player != this.player) {
                this.player.setDamage(knife.damage, knife.player);
                /*var pos1 = knife.node.parent.convertToWorldSpaceAR(knife.node.position);
                var pos2 = this.node.parent.convertToWorldSpaceAR(this.node.position);

                var dir:cc.Vec2 = pos1.sub(pos2).normalize();
                knife.fly(dir);*/
            }
        }
        else if (other.tag == 8) {
            /*var item:Item = other.getComponent(Item);
            switch(item.type)
            {
                case ItemType.fhl:
                this.player.fhlItemEffect();
                break;
                case ItemType.rocket:

                this.player.rocketItemEffect();
                
                break;
                case ItemType.magnet:

                this.player.magnetItemEffect();
                
                break;
            }

            item.destroySelf();*/
        }
        else {
        }
    };
    Body.prototype.updateState = function () {
        if (!this.player) {
            this.player = this.node.parent.getComponent(Player_1.default);
        }
        this.face.node.active = this.player.showface;
    };
    Body.prototype.changeFace = function (index, timer) {
        if (timer === void 0) { timer = 0; }
        this.timer = timer;
        this.face.spriteFrame = this.faceSFArr[index];
    };
    __decorate([
        property(cc.Sprite)
    ], Body.prototype, "skin", void 0);
    __decorate([
        property(cc.Sprite)
    ], Body.prototype, "face", void 0);
    __decorate([
        property(Player_1.default)
    ], Body.prototype, "player", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Body.prototype, "faceSFArr", void 0);
    Body = __decorate([
        ccclass
    ], Body);
    return Body;
}(cc.Component));
exports.default = Body;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxnYW1lc2NlbmVcXEJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFnRDtBQUNoRCxpQ0FBNkM7QUFJN0Msb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQWlIQztRQTVHVSxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFVLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUUvQixXQUFLLEdBQVUsQ0FBQyxDQUFDOztJQWlHN0IsQ0FBQztJQS9GRyxlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQztRQUNwRCxnQ0FBZ0M7UUFDaEMsK0NBQStDO0lBQ25ELENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQ3ZCO1lBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDakI7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBRWpCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQ2xCO29CQUNJLHVGQUF1RjtvQkFDdkYscUNBQXFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU0sK0JBQWdCLEdBQXZCLFVBQXdCLEtBQWlCLEVBQUMsSUFBZ0I7UUFFdEQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxxQkFBWSxDQUFDLEdBQUcsRUFDekM7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUNqQjtTQUNDO2FBQUssSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDdkI7WUFDSSxJQUFJLEtBQUssR0FBUyxLQUFLLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDO1lBRTVDLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksbUJBQVcsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQzlGO2dCQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVqRDs7OztpQ0FJaUI7YUFDcEI7U0FFSjthQUFLLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3ZCO1lBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FrQnFCO1NBRXhCO2FBQ0Q7U0FFQztJQUVMLENBQUM7SUFFTSwwQkFBVyxHQUFsQjtRQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNmO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2pELENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixLQUFZLEVBQUMsS0FBZ0I7UUFBaEIsc0JBQUEsRUFBQSxTQUFnQjtRQUUzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUExR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NDQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7d0NBQ1c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDYztJQWJ0QixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0h4QjtJQUFELFdBQUM7Q0FoSEQsQUFnSEMsQ0FoSGlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0g3QztrQkFoSG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyLCB7IFBsYXllclN0YXR1cyB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgS25pZmUsIHsgS25pZmVTdGF0dXMgfSBmcm9tIFwiLi9LbmlmZVwiO1xyXG5pbXBvcnQgSXRlbSwgeyBJdGVtVHlwZSB9IGZyb20gXCIuLi9pdGVtL0l0ZW1cIjtcclxuaW1wb3J0IFJhbmRvbSBmcm9tIFwiLi4vdXRpbC9SYW5kb21cIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwdWJsaWMgc2tpbjpjYy5TcHJpdGUgID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHVibGljIGZhY2U6Y2MuU3ByaXRlICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHB1YmxpYyBwbGF5ZXI6UGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgZmFjZVNGQXJyOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAvL3RoaXMuZmFjZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vdGhpcy5mYWNlLm5vZGUuYWN0aXZlID0gdGhpcy5wbGF5ZXIuc2hvd2ZhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuc2hvd2ZhY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVyIDw9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZhY2Uuc3ByaXRlRnJhbWUgPSB0aGlzLmZhY2VTRkFycltSYW5kb20uUmFuZ2VJbnRlZ2VyKDAsdGhpcy5mYWNlU0ZBcnIubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRpbWVyID0gUmFuZG9tLlJhbmdlKDEuNSwyLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjZS5zcHJpdGVGcmFtZSA9IHRoaXMuZmFjZVNGQXJyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKG90aGVyOmNjLkNvbGxpZGVyLHNlbGY6Y2MuQ29sbGlkZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuc3RhdHVzID09IFBsYXllclN0YXR1cy5kaWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci50YWcgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBrbmlmZTpLbmlmZSA9IG90aGVyLmdldENvbXBvbmVudChLbmlmZSk7XHJcblxyXG4gICAgICAgICAgICBpZihrbmlmZSAmJiBrbmlmZS5zdGF0dXMgPT0gS25pZmVTdGF0dXMuY2FwdHVyZSAmJiBrbmlmZS5wbGF5ZXIgJiYga25pZmUucGxheWVyICE9IHRoaXMucGxheWVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXREYW1hZ2Uoa25pZmUuZGFtYWdlLGtuaWZlLnBsYXllcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLyp2YXIgcG9zMSA9IGtuaWZlLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihrbmlmZS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGlyOmNjLlZlYzIgPSBwb3MxLnN1Yihwb3MyKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGtuaWZlLmZseShkaXIpOyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKnZhciBpdGVtOkl0ZW0gPSBvdGhlci5nZXRDb21wb25lbnQoSXRlbSk7XHJcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLnR5cGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVR5cGUuZmhsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZmhsSXRlbUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1UeXBlLnJvY2tldDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yb2NrZXRJdGVtRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtVHlwZS5tYWduZXQ6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWFnbmV0SXRlbUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95U2VsZigpOyovXHJcblxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTdGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mYWNlLm5vZGUuYWN0aXZlID0gdGhpcy5wbGF5ZXIuc2hvd2ZhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUZhY2UoaW5kZXg6bnVtYmVyLHRpbWVyOm51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRpbWVyO1xyXG4gICAgICAgIHRoaXMuZmFjZS5zcHJpdGVGcmFtZSA9IHRoaXMuZmFjZVNGQXJyW2luZGV4XTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19