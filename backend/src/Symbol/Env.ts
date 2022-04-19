import { Symbol } from "./Symbol";
import { Type } from "./type";

export class ENV{
    private tablaSimbolos: Map<string, Symbol>; //unicamente para variables, tienes q guardar funciones en otro map 
    
    constructor(public anterior: ENV | null) {
        this.tablaSimbolos = new Map();
    }

    public getEnv(){
        return this.tablaSimbolos
    }
    
    public saveVar(nombre: string, valor: any, type: Type): boolean {
    
        if(!this.search(nombre)){
          this.tablaSimbolos.set(nombre, new Symbol(valor, nombre, type));
          return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
      }
    
    public search(nombre: string): boolean {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false
    }
    
    public getType(nombre: string): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].type;
        }
        return Type.error
    }
      
    public setVar(nombre: string, valor: any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value = valor;
          }
        }
    }

    public getValue(nombre:string){
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                return entry[1].value
            }
        }
    }
}