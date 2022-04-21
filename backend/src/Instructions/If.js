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
exports.Ifsentencia = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Env_1 = require("../Symbol/Env");
var Ifsentencia = /** @class */ (function (_super) {
    __extends(Ifsentencia, _super);
    function Ifsentencia(logic, instruction, next, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.logic = logic;
        _this.instruction = instruction;
        _this.next = next;
        return _this;
    }
    Ifsentencia.prototype.run = function (env) {
        var _a;
        var logica = (_a = this.logic) === null || _a === void 0 ? void 0 : _a.run(env);
        if (logica != null && this.next == null) {
            var newEnv = new Env_1.ENV(env);
            if (logica.value) {
                if (this.instruction != null)
                    for (var _i = 0, _b = this.instruction; _i < _b.length; _i++) {
                        var inst = _b[_i];
                        inst.run(newEnv);
                    }
            }
        }
        if (logica != null && this.next != null) {
            var newEnv = new Env_1.ENV(env);
            if (logica.value) {
                if (this.instruction != null)
                    for (var _c = 0, _d = this.instruction; _c < _d.length; _c++) {
                        var inst = _d[_c];
                        inst.run(newEnv);
                    }
            }
            else {
                this.next.run(env);
            }
        }
        if (logica == null && this.next == null) {
            var newEnv = new Env_1.ENV(env);
            if (this.instruction != null)
                for (var _e = 0, _f = this.instruction; _e < _f.length; _e++) {
                    var inst = _f[_e];
                    inst.run(newEnv);
                }
        }
    };
    return Ifsentencia;
}(Instruction_1.Instruction));
exports.Ifsentencia = Ifsentencia;
