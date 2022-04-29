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
exports.TrRet = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var TrRet = /** @class */ (function (_super) {
    __extends(TrRet, _super);
    function TrRet(expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expresion = expresion;
        return _this;
    }
    TrRet.prototype.run = function (env) {
        var exp = this.expresion.run(env);
        return { value: exp.value, type: exp.type };
    };
    TrRet.prototype.save = function (env) {
    };
    TrRet.prototype.ast = function () {
    };
    return TrRet;
}(Instruction_1.Instruction));
exports.TrRet = TrRet;
