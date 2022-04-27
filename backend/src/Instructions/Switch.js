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
exports.Switch = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Env_1 = require("../Symbol/Env");
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(expresion, cases, def, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expresion = expresion;
        _this.cases = cases;
        _this.def = def;
        return _this;
    }
    Switch.prototype.run = function (env) {
        var exp = this.expresion.run(env);
        var brk;
        if (this.cases != null) {
            var newEnv = new Env_1.ENV(env);
            newEnv.saveVar("__compare__", exp.value, exp.type, null, null);
            for (var _i = 0, _a = this.cases; _i < _a.length; _i++) {
                var csc = _a[_i];
                if (csc != null)
                    brk = csc.run(newEnv);
                if (brk == 1)
                    break;
            }
        }
        if (this.def != null && brk == 0) {
            var newEnv = new Env_1.ENV(env);
            for (var _b = 0, _c = this.def; _b < _c.length; _b++) {
                var ins = _c[_b];
                if (ins != null)
                    ins.run(newEnv);
            }
        }
    };
    Switch.prototype.save = function (env) { };
    return Switch;
}(Instruction_1.Instruction));
exports.Switch = Switch;
