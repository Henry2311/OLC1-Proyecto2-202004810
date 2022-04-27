import { Funcion } from "../Abstract/Function";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";
import { Declaracion } from "./Declaracion";

export class Metodo extends Funcion{
    constructor(
        public id: string,
        public type: Type,
        public instructions:Array<Instruction>|null,
        public params:Array<Declaracion>|null,
        line: number,
        column: number
      ) {
        super(line, column);
      }
    
    public run(env:ENV){
        if(this.params!=null){
            for(const der of this.params){
                der.run(env)
            }
        }
        if(this.instructions!=null){
            for(const ins of this.instructions){
                ins.run(env)
            }
        }
    }

    public save(env:ENV){
        if(this.type == Type.VOID){
            env.saveVar(this.id,null,this.type,this.instructions,this.params)
        }
    }
    
}