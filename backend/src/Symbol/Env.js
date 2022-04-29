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
    ENV.prototype.saveVar = function (nombre, valor, type, ins, param) {
        if (!this.search(nombre)) {
            this.tablaSimbolos.set(nombre, new Symbol_1.Symbol(valor, nombre, type, ins, param));
            return true;
        }
        return false;
    };
    ENV.prototype.search = function (nombre) {
        var env = this;
        while (env != null) {
            for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry[0] == nombre) {
                    return true;
                }
            }
            env = env.anterior;
        }
        return false;
    };
    ENV.prototype.getType = function (nombre) {
        var env = this;
        while (env != null) {
            for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry[0] == nombre) {
                    return entry[1].type;
                }
            }
            env = env.anterior;
        }
        return type_1.Type.error;
    };
    ENV.prototype.setVar = function (nombre, valor) {
        var env = this;
        while (env != null) {
            for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry[0] == nombre) {
                    entry[1].value = valor;
                }
            }
            env = env.anterior;
        }
    };
    ENV.prototype.getValue = function (nombre) {
        var env = this;
        while (env != null) {
            for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry[0] == nombre) {
                    return entry[1].value;
                }
            }
            env = env.anterior;
        }
        return null;
    };
    ENV.prototype.getFunction = function (nombre) {
        var env = this;
        while (env != null) {
            for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry[0] == nombre) {
                    if (entry[1].value == null) {
                        return entry[1];
                    }
                }
            }
            env = env.anterior;
        }
        return { value: null, id: "", type: type_1.Type.error, instruction: null, parameter: null };
    };
    return ENV;
}());
exports.ENV = ENV;
