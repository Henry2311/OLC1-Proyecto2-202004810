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
exports.Functions = void 0;
var Function_1 = require("../Abstract/Function");
var Singleton_1 = require("../Pattern/Singleton");
var TrRet_1 = require("./TrRet");
var Functions = /** @class */ (function (_super) {
    __extends(Functions, _super);
    function Functions(id, type, instructions, params, returnF, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        _this.instructions = instructions;
        _this.params = params;
        _this.returnF = returnF;
        return _this;
    }
    Functions.prototype.run = function (env) {
        if (this.params != null) {
            for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                var der = _a[_i];
                der.run(env);
            }
        }
        if (this.instructions != null) {
            for (var _b = 0, _c = this.instructions; _b < _c.length; _b++) {
                var ins = _c[_b];
                ins.run(env);
            }
        }
    };
    Functions.prototype.save = function (env) {
        var _a;
        if (this.returnF != null) {
            (_a = this.instructions) === null || _a === void 0 ? void 0 : _a.push(new TrRet_1.TrRet(this.returnF, this.line, this.column));
            env.saveVar(this.id, null, this.type, this.instructions, this.params);
        }
    };
    Functions.prototype.ast = function () {
        var _a;
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + ";\n"; //switch expresion cases def
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Funcion\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"" + this.id + "\"];\n";
        arb += "nodo3" + this.line + this.column + "[label = \"Parametros\"];\n";
        arb += "nodo4" + this.line + this.column + "[label = \"Instrucciones\"];\n";
        arb += "nodo5" + this.line + this.column + "[label = \"return\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo4" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo5" + this.line + this.column + ";\n";
        if (this.params != null) {
            for (var _i = 0, _b = this.params; _i < _b.length; _i++) {
                var p = _b[_i];
                if (p != null) {
                    p.ast();
                    s.addAST("nodo3".concat(this.line).concat(this.column, " -> nodo").concat(p.line).concat(p.column, ";\n"));
                }
            }
        }
        if (this.instructions != null) {
            for (var _c = 0, _d = this.instructions; _c < _d.length; _c++) {
                var ins = _d[_c];
                if (ins != null) {
                    ins.ast();
                    s.addAST("nodo4".concat(this.line).concat(this.column, " -> nodo").concat(ins.line).concat(ins.column, ";\n"));
                }
            }
        }
        arb += "nodo5" + this.line + this.column + " -> " + ((_a = this.returnF) === null || _a === void 0 ? void 0 : _a.ast(this.line + 2, this.column + 2)) + "\n";
        s.addAST(arb);
    };
    return Functions;
}(Function_1.Funcion));
exports.Functions = Functions;
