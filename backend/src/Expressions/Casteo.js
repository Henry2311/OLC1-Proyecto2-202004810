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
exports.Casteo = void 0;
var Expression_1 = require("../Abstract/Expression");
var type_1 = require("../Symbol/type");
var Casteo = /** @class */ (function (_super) {
    __extends(Casteo, _super);
    function Casteo(type, expression, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.type = type;
        _this.expression = expression;
        return _this;
    }
    Casteo.prototype.run = function (env) {
        var exp = this.expression.run(env);
        var value;
        if (this.type == type_1.Type.DOUBLE && exp.type == type_1.Type.INT) {
            value = Number.parseFloat(exp.value).toFixed(1);
            return { value: value, type: type_1.Type.DOUBLE };
        }
        else if (this.type == type_1.Type.INT && exp.type == type_1.Type.DOUBLE) {
            value = Math.trunc(exp.value);
            return { value: value, type: type_1.Type.INT };
        }
        else if (this.type == type_1.Type.STRING && exp.type == type_1.Type.INT) {
            value = String(exp.value);
            return { value: value, type: type_1.Type.STRING };
        }
        else if (this.type == type_1.Type.CHAR && exp.type == type_1.Type.INT) {
            value = String.fromCharCode(exp.value);
            return { value: value, type: type_1.Type.CHAR };
        }
        else if (this.type == type_1.Type.STRING && exp.type == type_1.Type.DOUBLE) {
            value = String(exp.value);
            return { value: value, type: type_1.Type.STRING };
        }
        else if (this.type == type_1.Type.INT && exp.type == type_1.Type.CHAR) {
            value = exp.value.charCodeAt(0);
            return { value: value, type: type_1.Type.INT };
        }
        else if (this.type == type_1.Type.DOUBLE && exp.type == type_1.Type.CHAR) {
            value = exp.value.charCodeAt(0);
            return { value: value, type: type_1.Type.BOOLEAN };
        }
        else {
            console.log("Incompatibilidad de Tipo de Dato");
        }
        return { value: null, type: type_1.Type.error };
    };
    return Casteo;
}(Expression_1.Expression));
exports.Casteo = Casteo;
