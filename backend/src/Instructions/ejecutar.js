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
exports.RUN = void 0;
var Function_1 = require("../Abstract/Function");
var Singleton_1 = require("../Pattern/Singleton");
var RUN = /** @class */ (function (_super) {
    __extends(RUN, _super);
    function RUN(id, params, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.params = params;
        return _this;
    }
    RUN.prototype.run = function (env) {
        var fun = env.getFunction(this.id);
        if (this.params != null) {
            var aux = [];
            for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                var exp = _a[_i];
                aux.push(exp.run(env));
            }
            if (fun.parameter != null) {
                var arr = fun.parameter;
                for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
                    var der = arr_1[_b];
                    der.run(env);
                }
                for (var i = 0; i < aux.length; i++) {
                    env.setVar(arr[i].id, aux[i].value);
                }
            }
            if (fun.instruction != null) {
                for (var _c = 0, _d = fun.instruction; _c < _d.length; _c++) {
                    var ins = _d[_c];
                    if (ins != null)
                        ins.run(env);
                }
            }
        }
        else {
            if (fun.instruction != null) {
                for (var _e = 0, _f = fun.instruction; _e < _f.length; _e++) {
                    var ins = _f[_e];
                    if (ins != null)
                        ins.run(env);
                }
            }
        }
    };
    RUN.prototype.save = function (env) {
        return true;
    };
    RUN.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + ";\n"; //switch expresion cases def
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"RUN\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"" + this.id + "\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        if (this.params != null) {
            arb += "nodo3" + this.line + this.column + "[label = \"Parametros\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
            var f = 2;
            for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p != null) {
                    arb += "nodo3" + this.line + this.column + " -> " + p.ast(this.line + f, this.column + f) + "\n";
                    f += 2;
                }
            }
        }
        s.addAST(arb);
    };
    return RUN;
}(Function_1.Funcion));
exports.RUN = RUN;
