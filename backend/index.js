"use strict";
exports.__esModule = true;
var Env_1 = require("./src/Symbol/Env");
var parser = require("./src/Grammar/grammar");
var singleton = require("./src/Pattern/Singleton")
var fs = require("fs");
try {
    var entrada = fs.readFileSync("prueba.txt");
    var ast = parser.parse(entrada.toString());
    var env = new Env_1.ENV(null);
    var s = singleton.Singleton.getInstance()
    s.addConsola("-----CONSOLA-----\n")
    //recorrer las instrucciones y ejecutarlas
    var eject = false;
    var index = 0;
    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var instruccion = ast_1[_i];
        try {
            console.log("entre")
            let aux;
            aux = instruccion.save(env);
            if(aux){
                eject=true
                index = _i
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    if(eject){
        var instruccion = ast_1[index];
        try {
            instruccion.run(env);
        }
        catch (error) {
            console.log(error);
        }
    }else{
        let trans 
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
    console.log(s.getError())
    console.log(s.getConsola())

}
catch (error) {
    console.log(error);
}
