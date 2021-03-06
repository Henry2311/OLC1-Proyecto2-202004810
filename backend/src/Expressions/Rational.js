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
exports.RationalOption = exports.Rational = void 0;
var Expression_1 = require("../Abstract/Expression");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var type_1 = require("../Symbol/type");
var Rational = /** @class */ (function (_super) {
    __extends(Rational, _super);
    function Rational(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Rational.prototype.run = function (env) {
        var izq = this.left.run(env);
        var der = this.right.run(env);
        var s = Singleton_1.Singleton.getInstance();
        if (this.type == RationalOption.IGUALQ) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value == tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value == tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value == tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value == tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        else if (this.type == RationalOption.MAYORQ) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value > tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value > tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value > tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value > tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        else if (this.type == RationalOption.MENORQ) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value < tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value < tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value < tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value < tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        else if (this.type == RationalOption.MAYORIGQ) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value >= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value >= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value >= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value >= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        else if (this.type == RationalOption.MENORIGQ) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value <= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value <= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value <= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value <= tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        else if (this.type == RationalOption.NOIGUAL) {
            if (der.type == type_1.Type.INT && izq.type == type_1.Type.INT) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.DOUBLE) || (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.INT)) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value != tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.INT && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.INT && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value != tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.DOUBLE) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.BOOLEAN)) {
                var tmp = (izq.value) ? 1 : 0;
                if (tmp != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.BOOLEAN)) {
                var tmp = (der.value) ? 1 : 0;
                if (izq.value != tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((der.type == type_1.Type.DOUBLE && izq.type == type_1.Type.CHAR)) {
                var tmp = (izq.value).charCodeAt(0);
                if (tmp != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if ((izq.type == type_1.Type.DOUBLE && der.type == type_1.Type.CHAR)) {
                var tmp = (der.value).charCodeAt(0);
                if (izq.value != tmp) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.CHAR && der.type == type_1.Type.CHAR) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else if (izq.type == type_1.Type.STRING && der.type == type_1.Type.STRING) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else {
                s.addError(new error_1.Errores("Semantico", "Tipo de Dato incompatible", this.line, this.column));
            }
        }
        return { value: Boolean(false), type: type_1.Type.BOOLEAN };
    };
    Rational.prototype.save = function (env) { };
    Rational.prototype.ast = function (n1, n2) {
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
    Rational.prototype.getOp = function (t) {
        var op = "";
        if (t == RationalOption.IGUALQ) {
            op = "==";
        }
        else if (t == RationalOption.MAYORQ) {
            op = ">";
        }
        else if (t == RationalOption.MENORQ) {
            op = "<";
        }
        else if (t == RationalOption.MAYORIGQ) {
            op = ">=";
        }
        else if (t == RationalOption.MENORIGQ) {
            op = "<=";
        }
        else if (t == RationalOption.NOIGUAL) {
            op = "!=";
        }
        return op;
    };
    return Rational;
}(Expression_1.Expression));
exports.Rational = Rational;
var RationalOption;
(function (RationalOption) {
    RationalOption[RationalOption["IGUALQ"] = 0] = "IGUALQ";
    RationalOption[RationalOption["MAYORQ"] = 1] = "MAYORQ";
    RationalOption[RationalOption["MENORQ"] = 2] = "MENORQ";
    RationalOption[RationalOption["MAYORIGQ"] = 3] = "MAYORIGQ";
    RationalOption[RationalOption["MENORIGQ"] = 4] = "MENORIGQ";
    RationalOption[RationalOption["NOIGUAL"] = 5] = "NOIGUAL";
})(RationalOption = exports.RationalOption || (exports.RationalOption = {}));
