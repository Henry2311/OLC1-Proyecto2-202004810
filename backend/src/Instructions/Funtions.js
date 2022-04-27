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
exports.Functions = void 0;
var Function_1 = require("../Abstract/Function");
var TrRet_1 = require("./TrRet");
var Functions = /** @class */ (function (_super) {
    __extends(Functions, _super);
    function Functions(id, type, instructions, params, returnF, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        _this.instructions = instructions;
        _this.params = params;
        _this.returnF = returnF;
        return _this;
    }
    Functions.prototype.run = function (env) {
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
    Functions.prototype.save = function (env) {
        var _a;
        if (this.returnF != null) {
            (_a = this.instructions) === null || _a === void 0 ? void 0 : _a.push(new TrRet_1.TrRet(this.returnF, this.line, this.column));
            env.saveVar(this.id, null, this.type, this.instructions, this.params);
        }
    };
    return Functions;
}(Function_1.Funcion));
exports.Functions = Functions;
