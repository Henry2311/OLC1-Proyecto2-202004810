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
exports.Value = void 0;
var Expression_1 = require("../Abstract/Expression");
var type_1 = require("../Symbol/type");
var Value = /** @class */ (function (_super) {
    __extends(Value, _super);
    function Value(value, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.value = value;
        _this.type = type;
        return _this;
    }
    Value.prototype.run = function () {
        console.log("valor: " + this.value);
        if (this.type == type_1.Type.INT) {
            return { value: Number(this.value), type: type_1.Type.INT };
        }
        else if (this.type == type_1.Type.DOUBLE) {
            return { value: Number(this.value), type: type_1.Type.DOUBLE };
        }
        else if (this.type == type_1.Type.STRING) {
            this.value = (this.value).replaceAll("\"", "");
            return { value: this.value, type: type_1.Type.STRING };
        }
        else if (this.type == type_1.Type.CHAR) {
            console.log("caracter " + this.value);
            this.value = (this.value).replaceAll("\'", "");
            return { value: this.value, type: type_1.Type.CHAR };
        }
        else if (this.type == type_1.Type.BOOLEAN) {
            if (this.value == "true")
                return { value: Boolean(true), type: type_1.Type.BOOLEAN };
            else
                return { value: Boolean(false), type: type_1.Type.BOOLEAN };
        }
        else
            return { value: this.value, type: type_1.Type.error };
    };
    Value.prototype.save = function (env) {
    };
    return Value;
}(Expression_1.Expression));
exports.Value = Value;
