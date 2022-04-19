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
        if (this.type == RationalOption.IGUALQ) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value == der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        else if (this.type == RationalOption.MAYORQ) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value > der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        else if (this.type == RationalOption.MENORQ) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value < der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        else if (this.type == RationalOption.MAYORIGQ) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value >= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        else if (this.type == RationalOption.MENORIGQ) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value <= der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        else if (this.type == RationalOption.NOIGUAL) {
            if (izq.type == type_1.Type.INT && der.type == type_1.Type.INT) {
                if (izq.value != der.value) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
        }
        return { value: Boolean(false), type: type_1.Type.BOOLEAN };
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
