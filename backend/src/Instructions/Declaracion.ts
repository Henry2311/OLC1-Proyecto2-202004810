import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class Declaracion extends Instruction {
    
    constructor(
      public id: string,
      public type: Type,
      public expression:Expression|null,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
        let exp = this.expression?.run(env)
        let id_list = this.id.split(',')
        console.log(id_list)
        console.log(exp)
        for(const names of id_list){
            if(exp != null){
                if(exp.type == this.type){
                    const aux = env.saveVar(names,exp.value,this.type)
                    if (aux){
                        console.log("variable ["+names+"] ingresada...");
                    }else{
                        console.log("variable ["+names+"] no ingresada...");
                    }
                }else{
                    console.log("No es el tipo de dato correcto")
                }
            }else{
                let aux;
                if(this.type == Type.INT){
                    aux = env.saveVar(names,0,this.type)
                }else if(this.type == Type.DOUBLE){
                    aux = env.saveVar(names,0.0,this.type)
                }else if(this.type == Type.STRING){
                    aux = env.saveVar(names,"",this.type)
                }else if(this.type == Type.CHAR){
                    aux = env.saveVar(names,'',this.type)
                }else if(this.type == Type.BOOLEAN){
                    aux = env.saveVar(names,true,this.type)
                }
                if (aux){
                    console.log("variable ["+names+"] ingresada...");
                }else{
                    console.log("variable ["+names+"] no ingresada...");
                }
            }
        }

    }
  }