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
        console.log(id_list);
        console.log(exp);
        for (var _i = 0, id_list_1 = id_list; _i < id_list_1.length; _i++) {
            var names = id_list_1[_i];
            if (exp != null) {
                if (exp.type == this.type) {
                    var aux = env.saveVar(names, exp.value, this.type, null, null);
                    if (aux) {
                        console.log("variable [" + names + "] ingresada...");
                    }
                    else {
                        console.log("variable [" + names + "] no ingresada...");
                    }
                }
                else {
                    console.log("No es el tipo de dato correcto");
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
                if (aux) {
                    console.log("variable [" + names + "] ingresada...");
                }
                else {
                    console.log("variable [" + names + "] no ingresada...");
                }
            }
        }
    };
    Declaracion.prototype.save = function (env) {
    };
    return Declaracion;
}(Instruction_1.Instruction));
exports.Declaracion = Declaracion;
