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
exports.DeclaracionV = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var type_1 = require("../Symbol/type");
var DeclaracionV = /** @class */ (function (_super) {
    __extends(DeclaracionV, _super);
    function DeclaracionV(id, type, expression1, expression2, list, fun, sw, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        _this.expression1 = expression1;
        _this.expression2 = expression2;
        _this.list = list;
        _this.fun = fun;
        _this.sw = sw;
        return _this;
    }
    DeclaracionV.prototype.run = function (env) {
        var _a, _b, _c;
        var exp1 = (_a = this.expression1) === null || _a === void 0 ? void 0 : _a.run(env);
        var exp2 = (_b = this.expression2) === null || _b === void 0 ? void 0 : _b.run(env);
        if (exp1 != null && exp2 == null && this.list == null) {
            if (exp1.type == type_1.Type.INT) {
                var valueA = [];
                if (this.type == type_1.Type.INT) {
                    for (var i = 0; i < exp1.value; i++) {
                        valueA.push(0);
                    }
                }
                else if (this.type == type_1.Type.DOUBLE) {
                    for (var i = 0; i < exp1.value; i++) {
                        valueA.push(0.0);
                    }
                }
                else if (this.type == type_1.Type.BOOLEAN) {
                    for (var i = 0; i < exp1.value; i++) {
                        valueA.push(true);
                    }
                }
                else if (this.type == type_1.Type.CHAR) {
                    for (var i = 0; i < exp1.value; i++) {
                        valueA.push('0');
                    }
                }
                else if (this.type == type_1.Type.STRING) {
                    for (var i = 0; i < exp1.value; i++) {
                        valueA.push("");
                    }
                }
                console.log(valueA);
                var aux = env.saveVar(this.id, valueA, this.type, null, null);
                if (aux) {
                    console.log("vector [" + this.id + "] ingresada...");
                }
                else {
                    console.log("vector [" + this.id + "] no ingresada...");
                }
            }
            else {
                console.log("No es el tipo de dato correcto");
            }
        }
        else if (exp1 != null && exp2 != null && this.list == null) {
            if (exp1.type == type_1.Type.INT && exp2.type == type_1.Type.INT) {
                var valueA = [];
                var valueB = [];
                if (this.type == type_1.Type.INT) {
                    for (var i = 0; i < exp1.value; i++) {
                        for (var j = 0; j < exp2.value; j++) {
                            valueB.push(0);
                        }
                        valueA.push(valueB);
                        valueB = [];
                    }
                }
                else if (this.type == type_1.Type.DOUBLE) {
                    for (var i = 0; i < exp1.value; i++) {
                        for (var j = 0; j < exp2.value; j++) {
                            valueB.push(0.0);
                        }
                        valueA.push(valueB);
                        valueB = [];
                    }
                }
                else if (this.type == type_1.Type.BOOLEAN) {
                    for (var i = 0; i < exp1.value; i++) {
                        for (var j = 0; j < exp2.value; j++) {
                            valueB.push(true);
                        }
                        valueA.push(valueB);
                        valueB = [];
                    }
                }
                else if (this.type == type_1.Type.CHAR) {
                    for (var i = 0; i < exp1.value; i++) {
                        for (var j = 0; j < exp2.value; j++) {
                            valueB.push('0');
                        }
                        valueA.push(valueB);
                        valueB = [];
                    }
                }
                else if (this.type == type_1.Type.STRING) {
                    for (var i = 0; i < exp1.value; i++) {
                        for (var j = 0; j < exp2.value; j++) {
                            valueB.push("");
                        }
                        valueA.push(valueB);
                        valueB = [];
                    }
                }
                console.log(valueA);
                var aux = env.saveVar(this.id, valueA, this.type, null, null);
                if (aux) {
                    console.log("vector 2D [" + this.id + "] ingresada...");
                }
                else {
                    console.log("vector 2D [" + this.id + "] no ingresada...");
                }
            }
            else {
                console.log("No es el tipo de dato correcto");
            }
        }
        else if (exp1 == null && exp2 == null && this.list != null) {
            if (this.sw == 0) {
                //vector
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i] = this.list[i].run();
                }
                var aux = false;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].type == this.type) {
                        aux = true;
                        this.list[i] = this.list[i].value;
                    }
                    else
                        aux = false;
                    if (!aux)
                        break;
                }
                if (aux) {
                    var aux_1 = env.saveVar(this.id, this.list, this.type, null, null);
                    if (aux_1) {
                        console.log("vector [" + this.id + "] ingresada... ");
                    }
                    else {
                        console.log("vector [" + this.id + "] no ingresada...");
                    }
                }
            }
            else if (this.sw == 1) {
                //matriz
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].length; j++) {
                        this.list[i][j] = this.list[i][j].run();
                    }
                }
                var aux = false;
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].length; j++) {
                        if (this.list[i][j].type == this.type) {
                            aux = true;
                            this.list[i][j] = this.list[i][j].value;
                        }
                        else
                            aux = false;
                        if (!aux)
                            break;
                    }
                }
                if (aux) {
                    var aux_2 = env.saveVar(this.id, this.list, this.type, null, null);
                    if (aux_2) {
                        console.log("vector 2D [" + this.id + "] ingresada... ");
                    }
                    else {
                        console.log("vector 2D [" + this.id + "] no ingresada...");
                    }
                }
            }
        }
        else if (exp1 == null && exp2 == null && this.list == null && this.fun != null) {
            var arr = (_c = this.fun) === null || _c === void 0 ? void 0 : _c.run(env);
            if (arr != null) {
                var valor = [];
                for (var _i = 0, _d = arr.value; _i < _d.length; _i++) {
                    var i = _d[_i];
                    valor.push(i);
                }
                console.log(arr.value);
                var aux = env.saveVar(this.id, valor, type_1.Type.CHAR, null, null);
                if (aux) {
                    console.log("vector 2D [" + this.id + "] ingresada... ");
                }
                else {
                    console.log("vector 2D [" + this.id + "] no ingresada...");
                }
            }
        }
    };
    DeclaracionV.prototype.save = function (env) {
    };
    return DeclaracionV;
}(Instruction_1.Instruction));
exports.DeclaracionV = DeclaracionV;
