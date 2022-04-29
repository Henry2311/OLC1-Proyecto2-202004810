import { Instruction } from "../Abstract/Instruction";
import { Declaracion } from "../Instructions/Declaracion";
import { Symbol } from "./Symbol";
import { Type } from "./type";

export class ENV{
    private tablaSimbolos: Map<string, Symbol>; 

    constructor(public anterior: ENV | null) {
        this.tablaSimbolos = new Map();
    }

    public getEnv(){
        return this.tablaSimbolos
    }
    
    public saveVar(nombre: string, valor: any, type: Type,ins:Array<Instruction>|null,param:Array<Declaracion>|null): boolean {
        if(!this.search(nombre)){
          this.tablaSimbolos.set(nombre, new Symbol(valor, nombre, type,ins,param));
          return true
        }
        return false
    }
    
    public search(nombre: string): boolean {
        let env: ENV | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    return true
                }
            }
            env = env.anterior
        }
        return false
    }
    
    public getType(nombre: string): Type{
        let env: ENV | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    return entry[1].type
                }
            }
            env = env.anterior
        }
        return Type.error
        
    }
      
    public setVar(nombre: string, valor: any) {
        let env: ENV | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    entry[1].value = valor
                }
            }
            env = env.anterior
        }
    }

    public getValue(nombre: string): any {
        let env: ENV | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    return entry[1].value
                }
            }
            env = env.anterior
        }
        return null
    }

    public getFunction(nombre:string):Symbol{
        let env: ENV | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    if( entry[1].value == null){
                        return entry[1]
                    }
                }
            }
            env = env.anterior
        }
        return { value: null, id: "", type: Type.error, instruction: null, parameter: null}
    }
}