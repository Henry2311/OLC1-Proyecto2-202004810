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
exports.Println = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Singleton_1 = require("../Pattern/Singleton");
var Println = /** @class */ (function (_super) {
    __extends(Println, _super);
    function Println(expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expresion = expresion;
        return _this;
    }
    Println.prototype.run = function (env) {
        var s = Singleton_1.Singleton.getInstance();
        var exp = this.expresion.run(env);
        s.addConsola(exp.value + "\n");
    };
    Println.prototype.save = function (env) { };
    Println.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var arb = "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n";
        arb += "nodo1" + this.line + this.column + "[label = \"Println\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> " + this.expresion.ast(this.line + 2, this.column + 2);
        s.addAST(arb);
    };
    return Println;
}(Instruction_1.Instruction));
exports.Println = Println;
