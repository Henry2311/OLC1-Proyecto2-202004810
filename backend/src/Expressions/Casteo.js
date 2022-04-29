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
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
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
        var s = Singleton_1.Singleton.getInstance();
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
            s.addError(new error_1.Errores("Semantico", "Tipos de datos incompatibles", this.line, this.column));
        }
        return { value: null, type: type_1.Type.error };
    };
    Casteo.prototype.save = function (env) {
    };
    Casteo.prototype.ast = function () {
        var arb = "nodo" + this.line + this.column + ";\n";
        arb += "nodo" + this.line + this.column + "[label =\"(" + this.getTipo(this.type) + ")\"];\n";
        arb += "nodo" + this.line + this.column + " -> " + this.expression.ast(this.line + 4, this.column + 4) + "\n";
        return arb;
    };
    Casteo.prototype.getTipo = function (t) {
        var op = "";
        if (t == type_1.Type.INT) {
            op = "int";
        }
        else if (t == type_1.Type.DOUBLE) {
            op = "double";
        }
        else if (t == type_1.Type.STRING) {
            op = "string";
        }
        else if (t == type_1.Type.BOOLEAN) {
            op = "boolean";
        }
        else if (t == type_1.Type.CHAR) {
            op = "char";
        }
        return op;
    };
    return Casteo;
}(Expression_1.Expression));
exports.Casteo = Casteo;
