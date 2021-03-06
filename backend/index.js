"use strict";
exports.__esModule = true;
var Env_1 = require("./src/Symbol/Env");
var parser = require("./src/Grammar/grammar");
var singleton = require("./src/Pattern/Singleton")
var fs = require("fs");
var exec = require("child_process")

try {
    var entrada = fs.readFileSync("prueba.txt");
    var ast = parser.parse(entrada.toString());
    var env = new Env_1.ENV(null);
    var s = singleton.Singleton.getInstance()
    s.addConsola("-----CONSOLA-----\n")
    s.addAST("nodoPrincipal[label = \"Lista Instrucciones\"];\n")
    var eject = false;
    var index = 0;

    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var instruccion = ast_1[_i];
        try {
            let aux;
            if(instruccion!=null){
                aux = instruccion.save(env);
                instruccion.ast();
                s.addAST(`nodoPrincipal->nodo${instruccion.line}${instruccion.column};\n`)
            }
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
        for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
            var instruccion = ast_1[_i];
            try {
                if(instruccion!=null) instruccion.run(env);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    console.log(s.getConsola())
    s.addSymbols(env.getEnv())
    createFile("error.html", s.getError())
    createFile("simbolos.html", s.getSymbols())
    createFile("AST.dot", "digraph G {\nnode[shape=circle];\n" + s.getAST() + "\n}")
    exec.exec('dot -Tpng AST.dot -o AST.png')
}
catch (error) {
    console.log(error);
}

function createFile(nombre, contenido) {
    fs.writeFile(nombre, contenido, () => {
        console.log('Archivo Creado');
    })
}
