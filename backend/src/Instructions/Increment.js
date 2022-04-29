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
exports.Increment = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var type_1 = require("../Symbol/type");
var Increment = /** @class */ (function (_super) {
    __extends(Increment, _super);
    function Increment(nombre, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.type = type;
        return _this;
    }
    Increment.prototype.run = function (env) {
        var s = Singleton_1.Singleton.getInstance();
        if (env.search(this.nombre)) {
            if (env.getType(this.nombre) == type_1.Type.INT) {
                if (this.type == 0) {
                    var value = env.getValue(this.nombre) + 1;
                    env.setVar(this.nombre, value);
                    return { value: Number(value), type: type_1.Type.INT };
                }
                else if (this.type == 1) {
                    var value = env.getValue(this.nombre) - 1;
                    env.setVar(this.nombre, value);
                    return { value: Number(value), type: type_1.Type.INT };
                }
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible " + this.nombre + " debe ser INT", this.line, this.column));
            }
        }
        else {
            s.addError(new error_1.Errores("Semantico", "La variable no ha sido declarada", this.line, this.column));
        }
        return { value: 0, type: type_1.Type.error };
    };
    Increment.prototype.save = function (env) { };
    Increment.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Incremento\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"" + this.nombre + "\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        if (this.type == 0) {
            arb += "nodo3" + this.line + this.column + "[label = \"++\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        }
        else if (this.type == 1) {
            arb += "nodo3" + this.line + this.column + "[label = \"--\"];\n";
            arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        }
        s.addAST(arb);
        return arb;
    };
    return Increment;
}(Instruction_1.Instruction));
exports.Increment = Increment;
