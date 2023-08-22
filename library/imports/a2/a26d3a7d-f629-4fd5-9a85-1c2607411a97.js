"use strict";
cc._RF.push(module, 'a26d3p99ilP1ZqFHCYHQRqX', 'SystemTools');
// script/tscript/wx/SystemTools.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SystemTools = /** @class */ (function () {
    function SystemTools() {
    }
    SystemTools.format = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = str;
        if (args.length > 0) {
            var value = void 0;
            for (var key in args) {
                value = args[key];
                if (value != null && value.length != 0) {
                    var reg = new RegExp("\\{" + key + "\\}", "g");
                    result = result.replace(reg, value);
                }
            }
        }
        return result;
    };
    SystemTools = __decorate([
        ccclass
    ], SystemTools);
    return SystemTools;
}());
exports.default = SystemTools;

cc._RF.pop();