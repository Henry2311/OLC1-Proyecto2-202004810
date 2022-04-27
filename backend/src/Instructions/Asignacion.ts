import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class Asignacion extends Instruction {
    constructor(
      public nombre: string,
      public expresion:Expression,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
      
      let exp= this.expresion.run(env)
      if(env.search(this.nombre)){
        //ahora toca ver que sean del mismo tipo
        if (env.getType(this.nombre) == exp.type){
          env.setVar(this.nombre, exp.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
        }else{
          console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
        }
        
      }else{
        console.log("la variable ["+this.nombre+"] no fue encontrada...");
        
      }
      
    }
    public save(env: ENV) {
    }
  }