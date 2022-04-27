"use strict";
exports.__esModule = true;
exports.Errores = void 0;
var Errores = /** @class */ (function () {
    function Errores(type, descripcion, line, column) {
        this.type = type;
        this.descripcion = descripcion;
        this.line = line;
        this.column = column;
    }
    return Errores;
}());
exports.Errores = Errores;
