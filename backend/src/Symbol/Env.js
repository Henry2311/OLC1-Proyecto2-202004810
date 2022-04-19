"use strict";
exports.__esModule = true;
exports.ENV = void 0;
var Symbol_1 = require("./Symbol");
var type_1 = require("./type");
var ENV = /** @class */ (function () {
    function ENV(anterior) {
        this.anterior = anterior;
        this.tablaSimbolos = new Map();
    }
    ENV.prototype.getEnv = function () {
        return this.tablaSimbolos;
    };
    ENV.prototype.saveVar = function (nombre, valor, type) {
        if (!this.search(nombre)) {
            this.tablaSimbolos.set(nombre, new Symbol_1.Symbol(valor, nombre, type));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    };
    ENV.prototype.search = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return true;
        }
        return false;
    };
    ENV.prototype.getType = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return entry[1].type;
        }
        return type_1.Type.error;
    };
    ENV.prototype.setVar = function (nombre, valor) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                entry[1].value = valor;
            }
        }
    };
    ENV.prototype.getValue = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                return entry[1].value;
            }
        }
    };
    return ENV;
}());
exports.ENV = ENV;
