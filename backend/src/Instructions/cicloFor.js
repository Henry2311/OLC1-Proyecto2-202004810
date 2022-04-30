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
exports.cicloFor = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Singleton_1 = require("../Pattern/Singleton");
var Env_1 = require("../Symbol/Env");
var type_1 = require("../Symbol/type");
var cicloFor = /** @class */ (function (_super) {
    __extends(cicloFor, _super);
    function cicloFor(declaraccion, condicon, incremento, bloque, transfer, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.declaraccion = declaraccion;
        _this.condicon = condicon;
        _this.incremento = incremento;
        _this.bloque = bloque;
        _this.transfer = transfer;
        return _this;
    }
    cicloFor.prototype.run = function (env) {
        var newEnv = new Env_1.ENV(env);
        this.declaraccion.run(newEnv);
        var aux;
        while (this.condicon.run(newEnv).value) {
            if (this.bloque != null)
                for (var _i = 0, _a = this.bloque; _i < _a.length; _i++) {
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
            this.incremento.run(newEnv);
            var s = Singleton_1.Singleton.getInstance();
            s.addSymbols(newEnv.getEnv());
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
    cicloFor.prototype.save = function (env) { };
    cicloFor.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Ciclo For\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"For\"];\n"; //For declaracion logica incremento Lista
        arb += "nodo3" + this.line + this.column + "[label = \"Lista Instrucciones\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        if (this.declaraccion != null) {
            this.declaraccion.ast();
            s.addAST("nodo1" + this.line + this.column + " -> nodo" + this.declaraccion.line + this.declaraccion.column + ";\n");
        }
        arb += "nodo1" + this.line + this.column + " -> " + this.condicon.ast(this.line + 2, this.column + 2) + "\n";
        if (this.incremento != null) {
            this.incremento.ast();
            s.addAST("nodo1" + this.line + this.column + " -> nodo" + this.incremento.line + this.incremento.column + ";\n");
        }
        if (this.bloque != null) {
            for (var _i = 0, _a = this.bloque; _i < _a.length; _i++) {
                var inst = _a[_i];
                if (inst != null) {
                    inst.ast();
                    s.addAST("nodo3".concat(this.line).concat(this.column, " -> nodo").concat(inst.line).concat(inst.column, ";\n"));
                }
            }
        }
        s.addAST(arb);
    };
    return cicloFor;
}(Instruction_1.Instruction));
exports.cicloFor = cicloFor;
