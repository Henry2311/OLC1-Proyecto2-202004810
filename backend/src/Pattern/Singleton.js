"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.consola = "";
        this.symbols = new Map();
        this.errores = new Array();
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.addConsola = function (data) {
        this.consola += data;
    };
    Singleton.prototype.getConsola = function () {
        return this.consola;
    };
    Singleton.prototype.addSymbols = function (data) {
        this.symbols = data;
    };
    Singleton.prototype.getSymbols = function () {
        return this.symbols;
    };
    Singleton.prototype.addError = function (data) {
        this.errores.push(data);
    };
    Singleton.prototype.getError = function () {
        var content = "";
        if (this.errores.length > 0) {
            for (var i = 0; i < this.errores.length; i++) {
                content += "Error: " + this.errores[i].type + " Descripcion: " + this.errores[i].descripcion + "\n";
            }
        }
        else {
            content = "No hay errores";
        }
        return content;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
