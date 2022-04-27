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
exports.FunctionOptions = exports.Nativas = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var type_1 = require("../Symbol/type");
var Nativas = /** @class */ (function (_super) {
    __extends(Nativas, _super);
    function Nativas(valor, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.valor = valor;
        _this.type = type;
        return _this;
    }
    Nativas.prototype.run = function (env) {
        var exp = this.valor.run(env);
        console.log("TIPO DE FUNCION: " + this.type);
        if (this.type == FunctionOptions.LOWER) {
            if (exp.type == type_1.Type.STRING) {
                return { value: exp.value.toLowerCase(), type: type_1.Type.STRING };
            }
        }
        else if (this.type == FunctionOptions.UPPER) {
            if (exp.type == type_1.Type.STRING) {
                return { value: exp.value.toUpperCase(), type: type_1.Type.STRING };
            }
        }
        else if (this.type == FunctionOptions.ROUND) {
            if (exp.type == type_1.Type.DOUBLE) {
                return { value: Math.round(exp.value), type: type_1.Type.DOUBLE };
            }
        }
        else if (this.type == FunctionOptions.LENGTH) {
            console.log("SE SUPONE ESTO ES UN ARRAY: " + exp.value);
            var arr = Array.from(exp.value);
            return { value: arr.length, type: type_1.Type.INT };
        }
        else if (this.type == FunctionOptions.TYPEOF) {
            console.log(exp.type + " " + exp.value);
            if (exp.type == type_1.Type.INT) {
                return { value: "int", type: type_1.Type.STRING };
            }
            else if (exp.type == type_1.Type.DOUBLE) {
                return { value: "double", type: type_1.Type.STRING };
            }
            else if (exp.type == type_1.Type.BOOLEAN) {
                return { value: "boolean", type: type_1.Type.STRING };
            }
            else if (exp.type == type_1.Type.CHAR) {
                return { value: "char", type: type_1.Type.STRING };
            }
            else if (exp.type == type_1.Type.STRING) {
                return { value: "string", type: type_1.Type.STRING };
            }
        }
        else if (this.type == FunctionOptions.TOSTRING) {
            return { value: exp.value.toString(), type: type_1.Type.STRING };
        }
        else if (this.type == FunctionOptions.TOCHAR) {
            console.log("TOCHARARRAY " + exp.value + ", " + exp.type);
            if (exp.type == type_1.Type.STRING) {
                var valor = exp.value.split('');
                return { value: valor, type: type_1.Type.CHAR };
            }
        }
        return { value: null, type: type_1.Type.error };
    };
    Nativas.prototype.save = function (env) {
    };
    return Nativas;
}(Instruction_1.Instruction));
exports.Nativas = Nativas;
var FunctionOptions;
(function (FunctionOptions) {
    FunctionOptions[FunctionOptions["LOWER"] = 0] = "LOWER";
    FunctionOptions[FunctionOptions["UPPER"] = 1] = "UPPER";
    FunctionOptions[FunctionOptions["ROUND"] = 2] = "ROUND";
    FunctionOptions[FunctionOptions["LENGTH"] = 3] = "LENGTH";
    FunctionOptions[FunctionOptions["TYPEOF"] = 4] = "TYPEOF";
    FunctionOptions[FunctionOptions["TOSTRING"] = 5] = "TOSTRING";
    FunctionOptions[FunctionOptions["TOCHAR"] = 6] = "TOCHAR";
})(FunctionOptions = exports.FunctionOptions || (exports.FunctionOptions = {}));
