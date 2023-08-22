
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/configdata/LevelConfigData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ba317HCg9Gor8PkV4RXy62', 'LevelConfigData');
// script/tscript/configdata/LevelConfigData.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var LevelConfigData = /** @class */ (function () {
    function LevelConfigData() {
        this.id = 1;
        this.name = "";
        this.level = 0;
        this.uplevel = 0;
        this.stars = 0;
        this.meteor = "";
        this.movMeteor = "";
        this.blackHole = 0;
        this.speedUp = "";
        this.hotWheels = "";
        this.magnet = "";
        this.newContent = "";
        this.contentType = 0;
        this.ailv1 = 0;
        this.ailv2 = 0;
        this.ailv3 = 0;
        this.ailv4 = 0;
    }
    return LevelConfigData;
}());
exports.default = LevelConfigData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFxjb25maWdkYXRhXFxMZXZlbENvbmZpZ0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBR25HO0lBQUE7UUFFVyxPQUFFLEdBQVUsQ0FBQyxDQUFDO1FBRWQsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUVqQixVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBRWpCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFFbkIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUVqQixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFVLENBQUMsQ0FBQztRQUVyQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFdEIsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUVuQixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBRXZCLFVBQUssR0FBVSxDQUFDLENBQUM7UUFFakIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUVqQixVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBRWpCLFVBQUssR0FBVSxDQUFDLENBQUM7SUFHNUIsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsQ29uZmlnRGF0YSB7XHJcblxyXG4gICAgcHVibGljIGlkOm51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgbGV2ZWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgdXBsZXZlbDpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzdGFyczpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBtZXRlb3I6c3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgbW92TWV0ZW9yOnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGJsYWNrSG9sZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzcGVlZFVwOnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGhvdFdoZWVsczpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBtYWduZXQ6c3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgbmV3Q29udGVudDpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBjb250ZW50VHlwZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBhaWx2MTpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBhaWx2MjpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBhaWx2MzpudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBhaWx2NDpudW1iZXIgPSAwO1xyXG5cclxuXHJcbn1cclxuIl19