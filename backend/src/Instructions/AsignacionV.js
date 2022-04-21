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
exports.AsignacionV = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var type_1 = require("../Symbol/type");
var AsignacionV = /** @class */ (function (_super) {
    __extends(AsignacionV, _super);
    function AsignacionV(nombre, x, y, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.x = x;
        _this.y = y;
        _this.valor = valor;
        return _this;
    }
    AsignacionV.prototype.run = function (env) {
        var _a;
        var indice1 = this.x.run(env);
        var indice2 = (_a = this.y) === null || _a === void 0 ? void 0 : _a.run(env);
        var exp = this.valor.run(env);
        if (env.search(this.nombre)) {
            if (indice2 == null) {
                var arr = env.getValue(this.nombre);
                if (indice1.type == type_1.Type.INT) {
                    if (exp.type == env.getType(this.nombre)) {
                        arr[indice1.value] = exp.value;
                        env.setVar(this.nombre, arr);
                        console.log("vector [" + this.nombre + "] actualizado con exito...");
                    }
                }
            }
            else {
                var arr = env.getValue(this.nombre);
                if (indice1.type == type_1.Type.INT && indice2.type == type_1.Type.INT) {
                    if (exp.type == env.getType(this.nombre)) {
                        arr[indice1.value][indice2.value] = exp.value;
                        env.setVar(this.nombre, arr);
                        console.log("Matriz [" + this.nombre + "] actualizado con exito...");
                    }
                }
            }
        }
    };
    return AsignacionV;
}(Instruction_1.Instruction));
exports.AsignacionV = AsignacionV;
