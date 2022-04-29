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
exports.Asignacion = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var Asignacion = /** @class */ (function (_super) {
    __extends(Asignacion, _super);
    function Asignacion(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    Asignacion.prototype.run = function (env) {
        var exp = this.expresion.run(env);
        var s = Singleton_1.Singleton.getInstance();
        if (env.search(this.nombre)) {
            if (env.getType(this.nombre) == exp.type) {
                env.setVar(this.nombre, exp.value);
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible, no se puede asignar el valor a " + this.nombre, this.line, this.column));
            }
        }
        else {
            s.addError(new error_1.Errores("Semantico", "La variable no ha sido creada", this.line, this.column));
        }
    };
    Asignacion.prototype.save = function (env) { };
    Asignacion.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + ";\n";
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Asignacion\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"" + this.nombre + "\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> " + this.expresion.ast(this.line + 2, this.column + 2);
        s.addAST(arb);
    };
    return Asignacion;
}(Instruction_1.Instruction));
exports.Asignacion = Asignacion;
