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
exports.Ternary = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Ternary = /** @class */ (function (_super) {
    __extends(Ternary, _super);
    function Ternary(logic, caseT, caseF, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.logic = logic;
        _this.caseT = caseT;
        _this.caseF = caseF;
        return _this;
    }
    Ternary.prototype.run = function (env) {
        var expLogic = this.logic.run(env);
        var expTrue = this.caseT.run(env);
        var expFalse = this.caseF.run(env);
        if (expLogic.value) {
            return { value: expTrue.value, type: expTrue.type };
        }
        else {
            return { value: expFalse.value, type: expFalse.type };
        }
    };
    Ternary.prototype.save = function (env) { };
    Ternary.prototype.ast = function () {
        var arb = "nodo" + this.line + this.column + ";\n";
        arb += "nodo" + this.line + this.column + "[label = \"Instruccion\"];\n"; //Logica ? true : false
        arb += "nodo1" + this.line + this.column + "[label = \"Op Ternario\"];\n";
        arb += "nodo2" + this.line + this.column + "[label = \"Validacion\"];\n";
        arb += "nodo3" + this.line + this.column + "[label = \"?\"];\n";
        arb += "nodo4" + this.line + this.column + "[label = \"true\"];\n";
        arb += "nodo5" + this.line + this.column + "[label = \"false\"];\n";
        arb += "nodo" + this.line + this.column + " -> nodo1" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo2" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo3" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo4" + this.line + this.column + ";\n";
        arb += "nodo1" + this.line + this.column + " -> nodo5" + this.line + this.column + ";\n";
        arb += "nodo2" + this.line + this.column + " -> " + this.logic.ast(this.line + 2, this.column + 2) + "\n";
        arb += "nodo4" + this.line + this.column + " -> " + this.caseT.ast(this.line + 2, this.column + 2) + "\n";
        arb += "nodo5" + this.line + this.column + " -> " + this.caseF.ast(this.line + 2, this.column + 2) + "\n";
        return arb;
    };
    return Ternary;
}(Instruction_1.Instruction));
exports.Ternary = Ternary;
