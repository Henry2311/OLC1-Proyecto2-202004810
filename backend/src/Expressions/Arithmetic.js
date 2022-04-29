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
exports.ArithmeticOption = exports.Arithmetic = void 0;
var Expression_1 = require("../Abstract/Expression");
var type_1 = require("../Symbol/type");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var Arithmetic = /** @class */ (function (_super) {
    __extends(Arithmetic, _super);
    function Arithmetic(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Arithmetic.prototype.run = function (env) {
        var _a;
        var izq = (_a = this.left) === null || _a === void 0 ? void 0 : _a.run(env);
        var der = this.right.run(env);
        var s = Singleton_1.Singleton.getInstance();
        if (izq != null) {
            if (this.type == ArithmeticOption.MAS) {
                if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                    return { value: der.value + izq.value, type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                    return { value: der.value + izq.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                    var tmp = (izq.value) ? 1 : 0;
                    return { value: der.value + tmp, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                    var tmp = (der.value) ? 1 : 0;
                    return { value: izq.value + tmp, type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: der.value + tmp, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value + tmp, type: type_1.Type.INT };
                }
                else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                    return { value: der.value + izq.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                    var tmp = (izq.value) ? 1 : 0;
                    return { value: der.value + tmp, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                    var tmp = (der.value) ? 1 : 0;
                    return { value: izq.value + tmp, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: der.value + tmp, type: type_1.Type.DOUBLE };
                }
                else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value + tmp, type: type_1.Type.DOUBLE };
                }
                else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                    return { value: izq.value + der.value, type: type_1.Type.STRING };
                }
                else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                    return { value: izq.value + der.value, type: type_1.Type.STRING };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.STRING) || (der.type == type_1.Type.STRING && izq.type == type_1.Type.INT)) {
                    return { value: izq.value + "" + der.value, type: type_1.Type.STRING };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.STRING) || (der.type == type_1.Type.STRING && izq.type == type_1.Type.DOUBLE)) {
                    return { value: izq.value + "" + der.value, type: type_1.Type.STRING };
                }
                else if ((der.type == type_1.Type.BOOLEAN && izq.type == type_1.Type.STRING) || (der.type == type_1.Type.STRING && izq.type == type_1.Type.BOOLEAN)) {
                    return { value: izq.value + "" + der.value, type: type_1.Type.STRING };
                }
                else if ((der.type == type_1.Type.CHAR && izq.type == type_1.Type.STRING) || (der.type == type_1.Type.STRING && izq.type == type_1.Type.CHAR)) {
                    return { value: izq.value + "" + der.value, type: type_1.Type.STRING };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
            else if (this.type == ArithmeticOption.MENOS) {
                if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                    return { value: izq.value - der.value, type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                    return { value: izq.value - der.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                    var tmp = (izq.value) ? 1 : 0;
                    return { value: tmp - der.value, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                    var tmp = (der.value) ? 1 : 0;
                    return { value: izq.value - tmp, type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: tmp - der.value, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value - tmp, type: type_1.Type.INT };
                }
                else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                    return { value: izq.value - der.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                    var tmp = (izq.value) ? 1 : 0;
                    return { value: tmp - der.value, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                    var tmp = (der.value) ? 1 : 0;
                    return { value: izq.value - tmp, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: tmp - der.value, type: type_1.Type.DOUBLE };
                }
                else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value - tmp, type: type_1.Type.DOUBLE };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
            else if (this.type == ArithmeticOption.POR) {
                if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                    return { value: izq.value * der.value, type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                    return { value: izq.value * der.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: der.value * tmp, type: type_1.Type.INT };
                }
                else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value * tmp, type: type_1.Type.INT };
                }
                else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                    return { value: izq.value * der.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                    var tmp = (izq.value).charCodeAt(0);
                    return { value: tmp * der.value, type: type_1.Type.DOUBLE };
                }
                else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                    var tmp = (der.value).charCodeAt(0);
                    return { value: izq.value * tmp, type: type_1.Type.DOUBLE };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
            else if (this.type == ArithmeticOption.DIV) {
                if (der.value == 0) {
                    s.addError(new error_1.Errores("Semantico", "Error matematico division por 0", this.line, this.column));
                }
                else {
                    if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                        return { value: izq.value / der.value, type: type_1.Type.DOUBLE };
                    }
                    else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                        return { value: izq.value / der.value, type: type_1.Type.DOUBLE };
                    }
                    else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                        var tmp = (izq.value).charCodeAt(0);
                        return { value: der.value / tmp, type: type_1.Type.DOUBLE };
                    }
                    else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                        var tmp = (der.value).charCodeAt(0);
                        return { value: izq.value / tmp, type: type_1.Type.DOUBLE };
                    }
                    else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                        return { value: izq.value / der.value, type: type_1.Type.DOUBLE };
                    }
                    else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                        var tmp = (izq.value).charCodeAt(0);
                        return { value: tmp / der.value, type: type_1.Type.DOUBLE };
                    }
                    else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                        var tmp = (der.value).charCodeAt(0);
                        return { value: izq.value / tmp, type: type_1.Type.DOUBLE };
                    }
                    else {
                        s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                    }
                }
            }
            else if (this.type == ArithmeticOption.POW) {
                if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                    return { value: Math.pow(izq.value, der.value), type: type_1.Type.INT };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                    return { value: Math.pow(izq.value, der.value), type: type_1.Type.DOUBLE };
                }
                else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                    return { value: Math.pow(izq.value, der.value), type: type_1.Type.DOUBLE };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
            else if (this.type == ArithmeticOption.MOD) {
                if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                    return { value: izq.value % der.value, type: type_1.Type.DOUBLE };
                }
                else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                    return { value: izq.value % der.value, type: type_1.Type.DOUBLE };
                }
                else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                    return { value: izq.value % der.value, type: type_1.Type.DOUBLE };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
        }
        else {
            if (this.type == ArithmeticOption.NEGACION) {
                if (der.type == type_1.Type.INT) {
                    return { value: -der.value, type: type_1.Type.INT };
                }
                else if (der.type == type_1.Type.DOUBLE) {
                    return { value: -der.value, type: type_1.Type.DOUBLE };
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
                }
            }
        }
        return { value: null, type: type_1.Type.error };
    };
    Arithmetic.prototype.save = function (env) { };
    Arithmetic.prototype.ast = function (n1, n2) {
        var arb = "nodo" + (this.line + n1) + "_" + (this.column + n2) + ";\n";
        arb += "nodo" + (this.line + n1) + "_" + (this.column + n2) + "[label =\"" + this.getOp(this.type) + "\"];\n";
        if (this.left != null) {
            arb += "nodo" + (this.line + n1) + "_" + (this.column + n2) + " -> " + this.left.ast(this.line + 3, this.column + 3) + "\n";
            arb += "nodo" + (this.line + n1) + "_" + (this.column + n2) + " -> " + this.right.ast(this.line + 4, this.column + 4) + "\n";
        }
        else {
            arb += "nodo" + (this.line + n1) + "_" + (this.column + n2) + " -> " + this.right.ast(this.line + 4, this.column + 4) + "\n";
        }
        return arb;
    };
    Arithmetic.prototype.getOp = function (t) {
        var op = "";
        if (t == ArithmeticOption.MAS) {
            op = "+";
        }
        else if (t == ArithmeticOption.MENOS) {
            op = "-";
        }
        else if (t == ArithmeticOption.POR) {
            op = "*";
        }
        else if (t == ArithmeticOption.DIV) {
            op = "/";
        }
        else if (t == ArithmeticOption.MOD) {
            op = "%";
        }
        else if (t == ArithmeticOption.POW) {
            op = "^";
        }
        else if (t == ArithmeticOption.NEGACION) {
            op = "-";
        }
        return op;
    };
    return Arithmetic;
}(Expression_1.Expression));
exports.Arithmetic = Arithmetic;
var ArithmeticOption;
(function (ArithmeticOption) {
    ArithmeticOption[ArithmeticOption["MAS"] = 0] = "MAS";
    ArithmeticOption[ArithmeticOption["MENOS"] = 1] = "MENOS";
    ArithmeticOption[ArithmeticOption["POR"] = 2] = "POR";
    ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
    ArithmeticOption[ArithmeticOption["MOD"] = 4] = "MOD";
    ArithmeticOption[ArithmeticOption["POW"] = 5] = "POW";
    ArithmeticOption[ArithmeticOption["NEGACION"] = 6] = "NEGACION";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
