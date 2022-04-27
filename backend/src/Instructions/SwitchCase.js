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
exports.SwitchCase = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Env_1 = require("../Symbol/Env");
var SwitchCase = /** @class */ (function (_super) {
    __extends(SwitchCase, _super);
    function SwitchCase(expression, instructions, brk, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expression = expression;
        _this.instructions = instructions;
        _this.brk = brk;
        return _this;
    }
    SwitchCase.prototype.run = function (env) {
        var exp = this.expression.run(env);
        if (exp != null) {
            if (this.brk == 1) {
                if (exp.value == env.getValue("__compare__")) {
                    if (this.instructions != null) {
                        var newEnv = new Env_1.ENV(env);
                        for (var _i = 0, _a = this.instructions; _i < _a.length; _i++) {
                            var ins = _a[_i];
                            if (ins != null)
                                ins.run(newEnv);
                        }
                        return 1;
                    }
                }
            }
            else {
                if (exp.value == env.getValue("__compare__")) {
                    if (this.instructions != null) {
                        var newEnv = new Env_1.ENV(env);
                        for (var _b = 0, _c = this.instructions; _b < _c.length; _b++) {
                            var ins = _c[_b];
                            if (ins != null)
                                ins.run(newEnv);
                        }
                        return 0;
                    }
                }
            }
        }
        return 0;
    };
    SwitchCase.prototype.save = function (env) { };
    return SwitchCase;
}(Instruction_1.Instruction));
exports.SwitchCase = SwitchCase;
