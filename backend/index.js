"use strict";
exports.__esModule = true;
var Env_1 = require("./src/Symbol/Env");
var parser = require("./src/Grammar/grammar");
var fs = require("fs");
try {
    var entrada = fs.readFileSync("prueba.txt");
    var ast = parser.parse(entrada.toString());
    var env = new Env_1.ENV(null);
    //recorrer las instrucciones y ejecutarlas
    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var instruccion = ast_1[_i];
        try {
            instruccion.run(env);
        }
        catch (error) {
            console.log(error);
        }
    }
}
catch (error) {
    console.log(error);
}
