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
var Singleton_1 = require("../Pattern/Singleton");
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
        var s = Singleton_1.Singleton.getInstance();
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
            s.addSymbols(newEnv.getEnv());
        }
        if (this.def != null && brk == 0) {
            var newEnv = new Env_1.ENV(env);
            for (var _b = 0, _c = this.def; _b < _c.length; _b++) {
                var ins = _c[_b];
                if (ins != null)
                    ins.run(newEnv);
            }
            s.addSymbols(newEnv.getEnv());
        }
    };
    Switch.prototype.save = function (env) { };
    Switch.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + ";\n"; //switch expresion cases def
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Switch\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"Lista Cases\"];\n";
        arb += "nodo3" + this.line + this.column + "[label = \"Parametro\"];\n";
        arb += "nodo4" + this.line + this.column + "[label = \"Default\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo4" + this.line + this.column + ";\n";
        arb += "nodo3" + this.line + this.column + " -> " + this.expresion.ast(this.line + 2, this.column + 2) + "\n";
        for (var _i = 0, _a = this.cases; _i < _a.length; _i++) {
            var csc = _a[_i];
            if (csc != null) {
                csc.ast();
                s.addAST("nodo2".concat(this.line).concat(this.column, " -> nodo").concat(csc.line).concat(csc.column, ";\n"));
            }
        }
        for (var _b = 0, _c = this.def; _b < _c.length; _b++) {
            var ins = _c[_b];
            if (ins != null) {
                ins.ast();
                s.addAST("nodo4".concat(this.line).concat(this.column, " -> nodo").concat(ins.line).concat(ins.column, ";\n"));
            }
        }
        s.addAST(arb);
    };
    return Switch;
}(Instruction_1.Instruction));
exports.Switch = Switch;
