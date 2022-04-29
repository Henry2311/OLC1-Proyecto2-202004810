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
exports.Call = void 0;
var Function_1 = require("../Abstract/Function");
var Env_1 = require("../Symbol/Env");
var error_1 = require("../Symbol/error");
var Singleton_1 = require("../Pattern/Singleton");
var type_1 = require("../Symbol/type");
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    function Call(id, params, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.params = params;
        return _this;
    }
    Call.prototype.run = function (env) {
        var fun = env.getFunction(this.id);
        var retn;
        var s = Singleton_1.Singleton.getInstance();
        var newEnv = new Env_1.ENV(env);
        if (fun.type == type_1.Type.error) {
            s.addError(new error_1.Errores("Semantico", "La funcion " + this.id + " no ha sido declarada", this.line, this.column));
        }
        else {
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
                        der.run(newEnv);
                    }
                    for (var i = 0; i < aux.length; i++) {
                        newEnv.setVar(arr[i].id, aux[i].value);
                    }
                }
                if (fun.instruction != null) {
                    for (var _c = 0, _d = fun.instruction; _c < _d.length; _c++) {
                        var ins = _d[_c];
                        if (ins != null)
                            retn = ins.run(newEnv);
                        if (retn != undefined) {
                            var auxR = retn;
                            if (fun.type == auxR.type) {
                                return auxR;
                            }
                            else {
                                s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible para return de " + fun.id, this.line, this.column));
                            }
                        }
                    }
                }
            }
            else {
                if (fun.instruction != null) {
                    for (var _e = 0, _f = fun.instruction; _e < _f.length; _e++) {
                        var ins = _f[_e];
                        if (ins != null)
                            retn = ins.run(newEnv);
                        if (retn != undefined) {
                            var auxR = retn;
                            if (fun.type == auxR.type) {
                                return auxR;
                            }
                            else {
                                s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible para return de " + fun.id, this.line, this.column));
                            }
                        }
                    }
                }
            }
        }
    };
    Call.prototype.save = function (env) { };
    Call.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + ";\n"; //switch expresion cases def
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Call\"];\n";
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
        return arb;
    };
    return Call;
}(Function_1.Funcion));
exports.Call = Call;
