"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.cicloWhile = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Env_1 = require("../Symbol/Env");
var type_1 = require("../Symbol/type");
var cicloWhile = /** @class */ (function (_super) {
    __extends(cicloWhile, _super);
    function cicloWhile(logic, instruction, transfer, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.logic = logic;
        _this.instruction = instruction;
        _this.transfer = transfer;
        return _this;
    }
    cicloWhile.prototype.run = function (env) {
        var logica = this.logic.run(env);
        var newEnv = new Env_1.ENV(env);
        var aux;
        while (logica.value) {
            if (this.instruction != null)
                for (var _i = 0, _a = this.instruction; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    var t = void 0;
                    if (inst != null)
                        t = inst.run(newEnv);
                    if (t == type_1.Type.BREAK) {
                        aux = type_1.Type.BREAK;
                        break;
                    }
                    else if (t == type_1.Type.CONTINUE) {
                        aux = type_1.Type.CONTINUE;
                        continue;
                    }
                }
            logica = this.logic.run(env);
            if (this.transfer != null || aux != null) {
                if (this.transfer == type_1.Type.BREAK || aux == type_1.Type.BREAK) {
                    break;
                }
                else if (this.transfer == type_1.Type.CONTINUE || aux == type_1.Type.CONTINUE) {
                    continue;
                }
            }
        }
    };
    cicloWhile.prototype.save = function (env) {
    };
    return cicloWhile;
}(Instruction_1.Instruction));
exports.cicloWhile = cicloWhile;
