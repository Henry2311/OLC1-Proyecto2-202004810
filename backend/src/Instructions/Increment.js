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
        }
        else {
            console.log("la variable [" + this.nombre + "] no fue encontrada...");
        }
        return { value: 0, type: type_1.Type.error };
    };
    return Increment;
}(Instruction_1.Instruction));
exports.Increment = Increment;
