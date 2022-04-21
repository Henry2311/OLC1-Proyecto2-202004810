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
exports.IDE = void 0;
var Expression_1 = require("../Abstract/Expression");
var type_1 = require("../Symbol/type");
var IDE = /** @class */ (function (_super) {
    __extends(IDE, _super);
    function IDE(id, sw, expression1, expression2, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.sw = sw;
        _this.expression1 = expression1;
        _this.expression2 = expression2;
        return _this;
    }
    IDE.prototype.run = function (env) {
        var _a, _b;
        if (this.sw == 0) {
            if (env.getType(this.id) == type_1.Type.INT) {
                return { value: Number(env.getValue(this.id)), type: type_1.Type.INT };
            }
            else if (env.getType(this.id) == type_1.Type.DOUBLE) {
                return { value: Number(env.getValue(this.id)), type: type_1.Type.DOUBLE };
            }
            else if (env.getType(this.id) == type_1.Type.STRING) {
                var value = env.getValue(this.id).replaceAll("\"", "");
                return { value: value, type: type_1.Type.STRING };
            }
            else if (env.getType(this.id) == type_1.Type.CHAR) {
                var value = env.getValue(this.id).replaceAll("\"", "");
                return { value: value, type: type_1.Type.CHAR };
            }
            else if (env.getType(this.id) == type_1.Type.BOOLEAN) {
                console.log("VALOR EN VARIABLE" + env.getValue(this.id));
                if (env.getValue(this.id) == "true" || env.getValue(this.id))
                    return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                else
                    return { value: Boolean(false), type: type_1.Type.BOOLEAN };
            }
            else
                return { value: env.getValue(this.id), type: type_1.Type.error };
        }
        else {
            var exp1 = (_a = this.expression1) === null || _a === void 0 ? void 0 : _a.run(env);
            var exp2 = (_b = this.expression2) === null || _b === void 0 ? void 0 : _b.run(env);
            if (exp1 != null && exp2 == null) {
                if (exp1.type == type_1.Type.INT) {
                    var tmp = Array.from(env.getValue(this.id));
                    console.log("VECTOR: " + tmp);
                    var value = tmp[exp1.value];
                    console.log("VALOR DEL VECTOR: " + value);
                    if (env.getType(this.id) == type_1.Type.INT) {
                        return { value: Number(value), type: type_1.Type.INT };
                    }
                    else if (env.getType(this.id) == type_1.Type.DOUBLE) {
                        return { value: Number(value), type: type_1.Type.DOUBLE };
                    }
                    else if (env.getType(this.id) == type_1.Type.STRING) {
                        value = value.replaceAll("\"", "");
                        return { value: value, type: type_1.Type.STRING };
                    }
                    else if (env.getType(this.id) == type_1.Type.CHAR) {
                        value = value.replaceAll("\'", "");
                        return { value: value, type: type_1.Type.CHAR };
                    }
                    else if (env.getType(this.id) == type_1.Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true" || env.getValue(this.id))
                            return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                        else
                            return { value: Boolean(false), type: type_1.Type.BOOLEAN };
                    }
                    else
                        return { value: env.getValue(this.id), type: type_1.Type.error };
                }
                else {
                    console.log("No es el tipo de dato correcto");
                }
            }
            else if (exp1 != null && exp2 != null) {
                if (exp1.type == type_1.Type.INT && exp2.type == type_1.Type.INT) {
                    var tmp = Array.from(env.getValue(this.id));
                    console.log("Matriz: " + tmp);
                    var value = tmp[exp1.value][exp2.value];
                    console.log("VALOR DEL MATRIZ: " + value);
                    if (env.getType(this.id) == type_1.Type.INT) {
                        return { value: Number(value), type: type_1.Type.INT };
                    }
                    else if (env.getType(this.id) == type_1.Type.DOUBLE) {
                        return { value: Number(value), type: type_1.Type.DOUBLE };
                    }
                    else if (env.getType(this.id) == type_1.Type.STRING) {
                        value = value.replaceAll("\"", "");
                        return { value: value, type: type_1.Type.STRING };
                    }
                    else if (env.getType(this.id) == type_1.Type.CHAR) {
                        value = value.replaceAll("\'", "");
                        return { value: value, type: type_1.Type.CHAR };
                    }
                    else if (env.getType(this.id) == type_1.Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true" || env.getValue(this.id))
                            return { value: Boolean(true), type: type_1.Type.BOOLEAN };
                        else
                            return { value: Boolean(false), type: type_1.Type.BOOLEAN };
                    }
                    else
                        return { value: env.getValue(this.id), type: type_1.Type.error };
                }
                else {
                    console.log("No es el tipo de dato correcto");
                }
            }
        }
        return { value: env.getValue(this.id), type: type_1.Type.error };
    };
    return IDE;
}(Expression_1.Expression));
exports.IDE = IDE;
