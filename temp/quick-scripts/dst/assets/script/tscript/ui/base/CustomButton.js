
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/ui/base/CustomButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35c71Atp/VMlITzkEr/Shad', 'CustomButton');
// script/tscript/ui/base/CustomButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SoundClip_1 = require("../../audio/SoundClip");
var SoundManager_1 = require("../../core/SoundManager");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CBState;
(function (CBState) {
    CBState[CBState["normal"] = 0] = "normal";
    CBState[CBState["pressed"] = 1] = "pressed";
    CBState[CBState["hover"] = 2] = "hover";
    CBState[CBState["disabled"] = 3] = "disabled";
})(CBState = exports.CBState || (exports.CBState = {}));
var CustomButton = /** @class */ (function (_super) {
    __extends(CustomButton, _super);
    function CustomButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 点击时的播放声音
         */
        _this.clickSound = SoundClip_1.SoundClipType.none;
        /**
         * 正常状态
         */
        _this.normal = null;
        /**
         *  按下状态
         */
        _this.pressed = null;
        /**
         * 划过状态
         */
        _this.hover = null;
        /**
         * 无效状态
         */
        _this.disabled = null;
        _this._state = CBState.normal;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(CustomButton.prototype, "sprite", {
        get: function () {
            if (!this._sprite) {
                this._sprite = this.getComponent(cc.Sprite);
            }
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this.sprite && this[CBState[value]]) {
                this.sprite.spriteFrame = this[CBState[value]];
            }
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomButton.prototype.onLoad = function () {
        this.init();
    };
    /*start () {

    }*/
    CustomButton.prototype.init = function () {
        var _this = this;
        this.state = CBState.normal;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.state == CBState.disabled)
                return;
            SoundManager_1.default.instance.playAudioClip(_this.clickSound);
            _this.state = CBState.pressed;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.hover;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.hover;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            if (_this.state == CBState.disabled)
                return;
            _this.state = CBState.normal;
        }, this);
    };
    __decorate([
        property({ type: cc.Enum(SoundClip_1.SoundClipType) })
    ], CustomButton.prototype, "clickSound", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "normal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "pressed", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "hover", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CustomButton.prototype, "disabled", void 0);
    CustomButton = __decorate([
        ccclass
    ], CustomButton);
    return CustomButton;
}(cc.Component));
exports.default = CustomButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx1aVxcYmFzZVxcQ3VzdG9tQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsd0RBQW1EO0FBRW5ELG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFFMUMsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBRWYseUNBQVUsQ0FBQTtJQUNWLDJDQUFPLENBQUE7SUFDUCx1Q0FBSyxDQUFBO0lBQ0wsNkNBQVEsQ0FBQTtBQUNaLENBQUMsRUFOVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFNbEI7QUFHRDtJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQXNIQztRQW5IRzs7V0FFRztRQUVJLGdCQUFVLEdBQWlCLHlCQUFhLENBQUMsSUFBSSxDQUFDO1FBRXJEOztXQUVHO1FBRUksWUFBTSxHQUFrQixJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFFSSxhQUFPLEdBQWtCLElBQUksQ0FBQztRQUVyQzs7V0FFRztRQUVJLFdBQUssR0FBa0IsSUFBSSxDQUFDO1FBRW5DOztXQUVHO1FBRUksY0FBUSxHQUFrQixJQUFJLENBQUM7UUFjOUIsWUFBTSxHQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1FBd0V6QyxpQkFBaUI7SUFDckIsQ0FBQztJQW5GRyxzQkFBVyxnQ0FBTTthQUFqQjtZQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUNoQjtnQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9DO1lBRUQsT0FBTyxJQUFJLENB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QyxNQUFNLENBQUM7UUFDaEMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRVosQ0FBQztJQTVHRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUFhLENBQUMsRUFBQyxDQUFDO29EQUNhO0lBTXJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ1c7SUFNcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDWTtJQU1yQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNVO0lBTW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ2E7SUE5QnJCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxSGhDO0lBQUQsbUJBQUM7Q0FySEQsQUFxSEMsQ0FySHlDLEVBQUUsQ0FBQyxTQUFTLEdBcUhyRDtrQkFySG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3VuZENsaXBUeXBlIH0gZnJvbSBcIi4uLy4uL2F1ZGlvL1NvdW5kQ2xpcFwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb3JlL1NvdW5kTWFuYWdlclwiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIENCU3RhdGVcclxue1xyXG4gICAgbm9ybWFsID0gMCxcclxuICAgIHByZXNzZWQsXHJcbiAgICBob3ZlcixcclxuICAgIGRpc2FibGVkLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21CdXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog54K55Ye75pe255qE5pKt5pS+5aOw6Z+zXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5FbnVtKFNvdW5kQ2xpcFR5cGUpfSlcclxuICAgIHB1YmxpYyBjbGlja1NvdW5kOlNvdW5kQ2xpcFR5cGUgPSBTb3VuZENsaXBUeXBlLm5vbmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraPluLjnirbmgIFcclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHVibGljIG5vcm1hbDpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5oyJ5LiL54q25oCBXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBwcmVzc2VkOmNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIkui/h+eKtuaAgVxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwdWJsaWMgaG92ZXI6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5peg5pWI54q25oCBXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHB1YmxpYyBkaXNhYmxlZDpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIFxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlOiBjYy5TcHJpdGU7XHJcbiAgICBwdWJsaWMgZ2V0IHNwcml0ZSgpOiBjYy5TcHJpdGUge1xyXG5cclxuICAgICAgICBpZighdGhpcy5fc3ByaXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IENCU3RhdGUgPSBDQlN0YXRlLm5vcm1hbDtcclxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogQ0JTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzdGF0ZSh2YWx1ZTogQ0JTdGF0ZSkge1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwcml0ZSAmJiB0aGlzW0NCU3RhdGVbdmFsdWVdXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1tDQlN0YXRlW3ZhbHVlXV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKnN0YXJ0ICgpIHtcclxuXHJcbiAgICB9Ki9cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDQlN0YXRlLm5vcm1hbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09IENCU3RhdGUuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5QXVkaW9DbGlwKHRoaXMuY2xpY2tTb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDQlN0YXRlLnByZXNzZWQ7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBDQlN0YXRlLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENCU3RhdGUubm9ybWFsO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gQ0JTdGF0ZS5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDQlN0YXRlLm5vcm1hbDtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gQ0JTdGF0ZS5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDQlN0YXRlLmhvdmVyO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBDQlN0YXRlLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENCU3RhdGUuaG92ZXI7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09IENCU3RhdGUuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ0JTdGF0ZS5ub3JtYWw7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=