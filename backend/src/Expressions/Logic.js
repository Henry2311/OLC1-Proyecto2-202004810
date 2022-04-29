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
exports.LogicOption = exports.Logic = void 0;
var Expression_1 = require("../Abstract/Expression");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var type_1 = require("../Symbol/type");
var Logic = /** @class */ (function (_super) {
    __extends(Logic, _super);
    function Logic(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Logic.prototype.run = function (env) {
        var _a;
        var izq = (_a = this.left) === null || _a === void 0 ? void 0 : _a.run(env);
        var der = this.right.run(env);
        var s = Singleton_1.Singleton.getInstance();
        if (izq != null) {
            if (this.type == LogicOption.AND) {
                if (izq.value == true && der.value == true) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else {
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
                }
            }
            else if (this.type == LogicOption.OR) {
                if (izq.value == true || der.value == true) {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
                else {
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
                }
            }
            else {
                s.addError(new error_1.Errores("Semantico", "No es un dato boolean", this.line, this.column));
            }
        }
        else if (izq == null) {
            if (this.type == LogicOption.NOT) {
                if (der.value == true) {
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
                }
                else {
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                }
            }
            else {
                s.addError(new error_1.Errores("Semantico", "No es un dato boolean", this.line, this.column));
            }
        }
        return { value: Boolean(false), type: type_1.Type.BOOLEAN };
    };
    Logic.prototype.save = function (env) { };
    Logic.prototype.ast = function (n1, n2) {
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
    Logic.prototype.getOp = function (t) {
        var op = "";
        if (t == LogicOption.AND) {
            op = "&&";
        }
        else if (t == LogicOption.NOT) {
            op = "!";
        }
        else if (t == LogicOption.OR) {
            op = "||";
        }
        return op;
    };
    return Logic;
}(Expression_1.Expression));
exports.Logic = Logic;
var LogicOption;
(function (LogicOption) {
    LogicOption[LogicOption["NOT"] = 0] = "NOT";
    LogicOption[LogicOption["AND"] = 1] = "AND";
    LogicOption[LogicOption["OR"] = 2] = "OR";
})(LogicOption = exports.LogicOption || (exports.LogicOption = {}));
