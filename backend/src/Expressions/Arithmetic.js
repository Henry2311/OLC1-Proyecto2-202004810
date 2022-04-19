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
            }
            else if (this.type == ArithmeticOption.DIV) {
                if (der.value == 0) {
                    console.log("Math error");
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
            }
        }
        return { value: null, type: type_1.Type.error };
    };
    return Arithmetic;
}(Expression_1.Expression));
exports.Arithmetic = Arithmetic;
var ArithmeticOption;
(function (ArithmeticOption) {
    /*0*/ ArithmeticOption[ArithmeticOption["MAS"] = 0] = "MAS";
    /*1*/ ArithmeticOption[ArithmeticOption["MENOS"] = 1] = "MENOS";
    /*2*/ ArithmeticOption[ArithmeticOption["POR"] = 2] = "POR";
    /*3*/ ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
    /*4*/ ArithmeticOption[ArithmeticOption["MOD"] = 4] = "MOD";
    /*5*/ ArithmeticOption[ArithmeticOption["POW"] = 5] = "POW";
    /*6*/ ArithmeticOption[ArithmeticOption["NEGACION"] = 6] = "NEGACION";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
