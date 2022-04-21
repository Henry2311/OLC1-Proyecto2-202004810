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
exports.cicloFor = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Env_1 = require("../Symbol/Env");
var cicloFor = /** @class */ (function (_super) {
    __extends(cicloFor, _super);
    function cicloFor(declaraccion, condicon, incremento, bloque, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.declaraccion = declaraccion;
        _this.condicon = condicon;
        _this.incremento = incremento;
        _this.bloque = bloque;
        return _this;
    }
    cicloFor.prototype.run = function (env) {
        //creamos un nuevo env
        var newEnv = new Env_1.ENV(env);
        //ejecutamos la primera instuccion que puede ser una declaracion
        this.declaraccion.run(newEnv);
        //tipo boolean
        //por cada iteracion necesitamos 
        while (this.condicon.run(newEnv).value) {
            if (this.bloque != null)
                for (var _i = 0, _a = this.bloque; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    inst.run(newEnv); //bloque
                }
            this.incremento.run(newEnv);
        }
        //puden usar una funcion while, la condicion para repetir el ciclo lo sacamos desde la condicion con un execute() y ejecutamos el incremento(en este momento no lo cree), despues se vuelve hacer la conidicon para que el while sepa si se hace otra vez
        // while(this.condicon.execute(newEnv).value){
        //   this.bloque.execute()
        //   this.incremento.execute()
        // }
    };
    return cicloFor;
}(Instruction_1.Instruction));
exports.cicloFor = cicloFor;
