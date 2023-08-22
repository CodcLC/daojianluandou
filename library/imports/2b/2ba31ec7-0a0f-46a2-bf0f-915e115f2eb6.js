"use strict";
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