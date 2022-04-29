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
var Singleton_1 = require("../Pattern/Singleton");
var Env_1 = require("../Symbol/Env");
var type_1 = require("../Symbol/type");
var TrRet_1 = require("./TrRet");
var Ifsentencia = /** @class */ (function (_super) {
    __extends(Ifsentencia, _super);
    function Ifsentencia(logic, instruction, next, transfer, returnF, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.logic = logic;
        _this.instruction = instruction;
        _this.next = next;
        _this.transfer = transfer;
        _this.returnF = returnF;
        return _this;
    }
    Ifsentencia.prototype.run = function (env) {
        var _a, _b;
        var logica = (_a = this.logic) === null || _a === void 0 ? void 0 : _a.run(env);
        var aux;
        if (this.returnF != null) {
            (_b = this.instruction) === null || _b === void 0 ? void 0 : _b.push(new TrRet_1.TrRet(this.returnF, this.line, this.column));
        }
        if (logica != null && this.next == null) {
            var newEnv = new Env_1.ENV(env);
            if (logica.value) {
                if (this.instruction != null)
                    for (var _i = 0, _c = this.instruction; _i < _c.length; _i++) {
                        var inst = _c[_i];
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
                        else if (t != undefined) {
                            var auxR = t;
                            return auxR;
                        }
                    }
                if (this.transfer != null || aux != null) {
                    if (this.transfer == type_1.Type.BREAK || aux == type_1.Type.BREAK) {
                        return type_1.Type.BREAK;
                    }
                    else if (this.transfer == type_1.Type.CONTINUE || aux == type_1.Type.CONTINUE) {
                        return type_1.Type.CONTINUE;
                    }
                }
            }
        }
        if (logica != null && this.next != null) {
            var newEnv = new Env_1.ENV(env);
            if (logica.value) {
                if (this.instruction != null)
                    for (var _d = 0, _e = this.instruction; _d < _e.length; _d++) {
                        var inst = _e[_d];
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
                        else if (t != undefined) {
                            var auxR = t;
                            return auxR;
                        }
                    }
                if (this.transfer != null || aux != null) {
                    if (this.transfer == type_1.Type.BREAK || aux == type_1.Type.BREAK) {
                        return type_1.Type.BREAK;
                    }
                    else if (this.transfer == type_1.Type.CONTINUE || aux == type_1.Type.CONTINUE) {
                        return type_1.Type.CONTINUE;
                    }
                }
            }
            else {
                var t = this.next.run(env);
                if (t == type_1.Type.BREAK) {
                    return type_1.Type.BREAK;
                }
                else if (t == type_1.Type.CONTINUE) {
                    return type_1.Type.CONTINUE;
                }
                else if (t != undefined) {
                    var auxR = t;
                    return auxR;
                }
            }
        }
        if (logica == null && this.next == null) {
            var newEnv = new Env_1.ENV(env);
            if (this.instruction != null)
                for (var _f = 0, _g = this.instruction; _f < _g.length; _f++) {
                    var inst = _g[_f];
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
                    else if (t != undefined) {
                        var auxR = t;
                        return auxR;
                    }
                }
            if (this.transfer != null || aux != null) {
                if (this.transfer == type_1.Type.BREAK || aux == type_1.Type.BREAK) {
                    return type_1.Type.BREAK;
                }
                else if (this.transfer == type_1.Type.CONTINUE || aux == type_1.Type.CONTINUE) {
                    return type_1.Type.CONTINUE;
                }
            }
        }
    };
    Ifsentencia.prototype.save = function (env) { };
    Ifsentencia.prototype.ast = function () {
        //if logic lista else if logic lista else lista
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Sentencia IF\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        if (this.logic != null && this.next == null) {
            arb += "nodo2" + this.line + this.column + "[label = \"IF\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
            arb += "nodo1" + this.line + this.column + " -> " + this.logic.ast(this.line + 2, this.column + 2) + "\n";
            arb += "nodo33" + this.line + this.column + "[label = \"Lista Instrucciones\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo33" + this.line + this.column + ";\n";
            if (this.instruction != null) {
                for (var _i = 0, _a = this.instruction; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    if (inst != null) {
                        inst.ast();
                        s.addAST("nodo33".concat(this.line).concat(this.column, " -> nodo").concat(inst.line).concat(inst.column, ";\n"));
                    }
                }
            }
        }
        if (this.logic != null && this.next != null) {
            arb += "nodo2" + this.line + this.column + "[label = \"IF\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
            arb += "nodo1" + this.line + this.column + " -> " + this.logic.ast(this.line + 2, this.column + 2) + "\n";
            arb += "nodo33" + this.line + this.column + "[label = \"Lista Instrucciones\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo33" + this.line + this.column + ";\n";
            if (this.instruction != null) {
                for (var _b = 0, _c = this.instruction; _b < _c.length; _b++) {
                    var inst = _c[_b];
                    if (inst != null) {
                        inst.ast();
                        s.addAST("nodo33".concat(this.line).concat(this.column, " -> nodo").concat(inst.line).concat(inst.column, ";\n"));
                    }
                }
            }
            arb += "nodo3" + this.line + this.column + "[label = \"ELSE\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
            this.next.ast();
            s.addAST("nodo3".concat(this.line).concat(this.column, " -> nodo").concat(this.next.line).concat(this.next.column, ";\n"));
        }
        if (this.logic == null && this.next == null) {
            arb += "nodo33" + this.line + this.column + "[label = \"Lista Instrucciones\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo33" + this.line + this.column + ";\n";
            if (this.instruction != null) {
                for (var _d = 0, _e = this.instruction; _d < _e.length; _d++) {
                    var inst = _e[_d];
                    if (inst != null) {
                        inst.ast();
                        s.addAST("nodo33".concat(this.line).concat(this.column, " -> nodo").concat(inst.line).concat(inst.column, ";\n"));
                    }
                }
            }
        }
        if (this.returnF != null) {
            arb += "nodo4" + this.line + this.column + "[label = \"return\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo4" + this.line + this.column + ";\n";
            arb += "nodo4" + this.line + this.column + " -> " + this.returnF.ast(this.line + 2, this.column + 2) + "\n";
        }
        s.addAST(arb);
    };
    return Ifsentencia;
}(Instruction_1.Instruction));
exports.Ifsentencia = Ifsentencia;
