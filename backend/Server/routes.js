const express = require('express')
const routes = express.Router()
const ENV = require('../src/Symbol/Env')
const Parser = require('../src/Grammar/grammar')
const Singleton = require('../src/Pattern/Singleton')
const fs = require('fs')
const exec = require('child_process')

var entrada = "";

var s = Singleton.Singleton.getInstance()
var env = new ENV.ENV(null)
var eject = false
var index = 0

routes.get('/', (req, res)=>{
    res.json({mensaje:"Hola"})
})

routes.get('/entrada', (req, res)=>{
    res.json({mensaje:s.getConsola()})
})

routes.post('/entrada', (req, res)=>{
    entrada = ""
    entrada = req.body.mensaje;
    s.reset()
    let ast = Parser.parse(entrada)
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
    s.addSymbols(env.getEnv())
    
    createFile(".\\Server\\public\\error.html", s.getError())
    createFile(".\\Server\\public\\simbolos.html", s.getSymbols())

    createFile(".\\Server\\public\\AST.dot", "digraph G {\nnode[shape=circle];\n" + s.getAST() + "\n}")
    exec.exec('dot -Tpng .\\Server\\public\\AST.dot -o .\\Server\\public\\AST.png')
    
    res.send("Archivo cargado")
})


function createFile(nombre, contenido) {
    fs.writeFile(nombre, contenido, () => {
        console.log('Archivo Creado');
    })
}

module.exports=routes
