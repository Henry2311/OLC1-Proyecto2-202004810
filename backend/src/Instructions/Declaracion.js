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
exports.Declaracion = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Singleton_1 = require("../Pattern/Singleton");
var error_1 = require("../Symbol/error");
var type_1 = require("../Symbol/type");
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    function Declaracion(id, type, expression, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        _this.expression = expression;
        return _this;
    }
    Declaracion.prototype.run = function (env) {
        var _a;
        var exp = (_a = this.expression) === null || _a === void 0 ? void 0 : _a.run(env);
        var id_list = this.id.split(',');
        var s = Singleton_1.Singleton.getInstance();
        for (var _i = 0, id_list_1 = id_list; _i < id_list_1.length; _i++) {
            var names = id_list_1[_i];
            if (exp != null) {
                if (exp.type == this.type) {
                    var aux = env.saveVar(names, exp.value, this.type, null, null);
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible, no se puede asignar el valor a " + names, this.line, this.column));
                }
            }
            else {
                var aux = void 0;
                if (this.type == type_1.Type.INT) {
                    aux = env.saveVar(names, 0, this.type, null, null);
                }
                else if (this.type == type_1.Type.DOUBLE) {
                    aux = env.saveVar(names, 0.0, this.type, null, null);
                }
                else if (this.type == type_1.Type.STRING) {
                    aux = env.saveVar(names, "", this.type, null, null);
                }
                else if (this.type == type_1.Type.CHAR) {
                    aux = env.saveVar(names, '', this.type, null, null);
                }
                else if (this.type == type_1.Type.BOOLEAN) {
                    aux = env.saveVar(names, true, this.type, null, null);
                }
                else {
                    s.addError(new error_1.Errores("Semantico", "Tipo de dato incompatible, no se puede asignar el valor a " + names, this.line, this.column));
                }
            }
        }
    };
    Declaracion.prototype.save = function (env) { };
    Declaracion.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Declaracion\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"" + this.id + "\"];\n";
        arb += "nodo3" + this.line + this.column + "[label = \"" + this.getTipo(this.type) + "\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        if (this.expression != null) {
            arb += "nodo1" + this.line + this.column + " -> " + this.expression.ast(this.line + 2, this.column + 2);
        }
        s.addAST(arb);
    };
    Declaracion.prototype.getTipo = function (t) {
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
    return Declaracion;
}(Instruction_1.Instruction));
exports.Declaracion = Declaracion;
