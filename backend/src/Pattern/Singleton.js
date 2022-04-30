"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var type_1 = require("../Symbol/type");
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.consola = "";
        this.symbols = new Map();
        this.errores = new Array();
        this.ast = "nodoPrincipal[label = \"Lista Instrucciones\"];\n";
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
        var _this = this;
        var sym = 0;
        data.forEach(function (d) {
            _this.symbols.set("Symbol" + sym, d);
            sym += 1;
        });
    };
    Singleton.prototype.getSymbols = function () {
        var _this = this;
        var content = "<!DOCTYPE html>\n";
        content += "<html lang=\"en\">\n";
        content += "<head>\n";
        content += "<meta charset=\"UTF-8\">\n";
        content += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n";
        content += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
        content += "<link rel=\"stylesheet\" href=\"style.css\">\n";
        content += "<title>Reporte</title>\n";
        content += "</head>\n";
        content += "<body>\n";
        content += "<div class=\"container-table\">\n";
        content += "<div class=\"table__title1\">\n";
        content += "Tabla de Simbolos\n";
        content += "</div></div>\n";
        content += "<div id=\"main-container\">\n";
        content += "<table>\n";
        content += "<thead>\n";
        content += "<tr>\n";
        content += "<th style=\"border-top-left-radius: 20px;\">Identificador</th><th>Tipo</th><th>Tipo</th><th style=\"border-top-right-radius: 20px;\">Valor</th>\n";
        content += "</tr>\n";
        content += "</thead>\n";
        this.symbols.forEach(function (s) {
            content += "<tr>\n";
            content += "<td style=\"color: white; font-size: 1.2rem;\">" + s.id + "</td>\n";
            if (s.instruction == null && s.parameter == null) {
                content += "<td style=\"color: white; font-size: 1.2rem;\">Variable</td>\n";
                content += "<td style=\"color: white; font-size: 1.2rem;\">" + _this.getTipo(s.type) + "</td>\n";
                content += "<td style=\"color: white; font-size: 1.2rem;\">" + s.value + "</td>\n";
            }
            else {
                content += "<td style=\"color: white; font-size: 1.2rem;\">Funcion/Metodo</td>\n";
                content += "<td style=\"color: white; font-size: 1.2rem;\">" + _this.getTipo(s.type) + "</td>\n";
                content += "<td style=\"color: white; font-size: 1.2rem;\">None</td>\n";
            }
            content += "</tr>\n";
        });
        content += "</table>\n";
        content += "</div>\n";
        content += "</body>\n</html>";
        return content;
    };
    Singleton.prototype.addError = function (data) {
        this.errores.push(data);
    };
    Singleton.prototype.getError = function () {
        var content = "<!DOCTYPE html>\n";
        content += "<html lang=\"en\">\n";
        content += "<head>\n";
        content += "<meta charset=\"UTF-8\">\n";
        content += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n";
        content += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
        content += "<link rel=\"stylesheet\" href=\"style.css\">\n";
        content += "<title>Reporte</title>\n";
        content += "</head>\n";
        content += "<body>\n";
        content += "<div class=\"container-table\">\n";
        content += "<div class=\"table__title1\">\n";
        content += "Reporte de Errores\n";
        content += "</div></div>\n";
        content += "<div id=\"main-container\">\n";
        content += "<table>\n";
        content += "<thead>\n";
        content += "<tr>\n";
        content += "<th style=\"border-top-left-radius: 20px;\">Caracter</th><th>Tipo de Error</th><th>Fila</th><th style=\"border-top-right-radius: 20px;\">Columna</th>\n";
        content += "</tr>\n";
        content += "</thead>\n";
        if (this.errores.length > 0) {
            for (var i = 0; i < this.errores.length; i++) {
                content += "<tr>\n";
                content += "<td  style=\"color: red; font-size: 1.2rem;\">" + this.errores[i].descripcion + "</td>\n";
                content += "<td  style=\"color: red; font-size: 1.2rem;\">" + this.errores[i].type + "</td>\n";
                content += "<td  style=\"color: red; font-size: 1.2rem;\">" + this.errores[i].line + "</td>\n";
                content += "<td  style=\"color: red; font-size: 1.2rem;\">" + this.errores[i].column + "</td>\n";
                content += "</tr>\n";
            }
        }
        else {
            content += "<tr>\n";
            content += "<td style=\"color: white; font-size: 1.2rem;\" colspan=\"4\">No hay errores</td>\n";
            content += "</tr>\n";
        }
        content += "</table>\n";
        content += "</div>\n";
        content += "</body>\n</html>";
        return content;
    };
    Singleton.prototype.addAST = function (data) {
        this.ast += data;
    };
    Singleton.prototype.getAST = function () {
        return this.ast;
    };
    Singleton.prototype.reset = function () {
        this.consola = "";
        this.symbols = new Map();
        this.errores = new Array();
        this.ast = "nodoPrincipal[label = \"Lista Instrucciones\"];\n";
    };
    Singleton.prototype.getTipo = function (t) {
        var op = "";
        if (t == type_1.Type.INT) {
            op = "int";
        }
        else if (t == type_1.Type.DOUBLE) {
            op = "double";
        }
        else if (t == type_1.Type.STRING) {
            op = "string";
        }
        else if (t == type_1.Type.BOOLEAN) {
            op = "boolean";
        }
        else if (t == type_1.Type.CHAR) {
            op = "char";
        }
        else if (t == type_1.Type.VOID) {
            op = "void";
        }
        return op;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
