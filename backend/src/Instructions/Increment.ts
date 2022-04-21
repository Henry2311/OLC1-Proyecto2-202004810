import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class Increment extends Instruction {
    constructor(
      public nombre: string,  
      public type:number,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV):Return {
      if(env.search(this.nombre)){
          if(env.getType(this.nombre) == Type.INT){
            if(this.type == 0){
                let value = env.getValue(this.nombre)+1
                env.setVar(this.nombre,value)
                return { value: Number(value), type: Type.INT }
            }else if(this.type == 1){
                let value = env.getValue(this.nombre)-1
                env.setVar(this.nombre,value)
                return { value: Number(value), type: Type.INT }
            }  
          }
      }else{
        console.log("la variable ["+this.nombre+"] no fue encontrada..."); 
      }
      return { value: 0, type: Type.error }
    }
  }