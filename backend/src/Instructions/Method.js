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
exports.Metodo = void 0;
var Function_1 = require("../Abstract/Function");
var type_1 = require("../Symbol/type");
var Metodo = /** @class */ (function (_super) {
    __extends(Metodo, _super);
    function Metodo(id, type, instructions, params, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        _this.instructions = instructions;
        _this.params = params;
        return _this;
    }
    Metodo.prototype.run = function (env) {
        if (this.params != null) {
            for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                var der = _a[_i];
                der.run(env);
            }
        }
        if (this.instructions != null) {
            for (var _b = 0, _c = this.instructions; _b < _c.length; _b++) {
                var ins = _c[_b];
                ins.run(env);
            }
        }
    };
    Metodo.prototype.save = function (env) {
        if (this.type == type_1.Type.VOID) {
            env.saveVar(this.id, null, this.type, this.instructions, this.params);
        }
    };
    return Metodo;
}(Function_1.Funcion));
exports.Metodo = Metodo;
