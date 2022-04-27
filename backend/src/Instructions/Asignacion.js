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
        if (env.search(this.nombre)) {
            //ahora toca ver que sean del mismo tipo
            if (env.getType(this.nombre) == exp.type) {
                env.setVar(this.nombre, exp.value);
                console.log("variable [" + this.nombre + "] actualizada con exito...");
            }
            else {
                console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
            }
        }
        else {
            console.log("la variable [" + this.nombre + "] no fue encontrada...");
        }
    };
    Asignacion.prototype.save = function (env) {
    };
    return Asignacion;
}(Instruction_1.Instruction));
exports.Asignacion = Asignacion;
