import { Expression } from "../Abstract/Expression";
import { Funcion } from "../Abstract/Function";
import { ENV } from "../Symbol/Env";

export class RUN extends Funcion{
    constructor(
        public id: string,
        public params:Array<Expression>|null,
        line: number,
        column: number
      ) {
        super(line, column);
      }
    
    public run(env:ENV){
        var fun = env.getFunction(this.id)
        if(this.params != null){
            let aux = []
            for(const exp of this.params){
                aux.push(exp.run(env)) 
            }
            if(fun.parameter!=null){
                let arr = fun.parameter
                for(const der of arr){
                    der.run(env)
                }
                for(let i = 0;i<aux.length;i++){
                    env.setVar(arr[i].id,aux[i].value)
                }
            }
            if(fun.instruction!=null){
                for(const ins of fun.instruction){
                    if(ins!=null) ins.run(env)
                }
            }
        }else{
            if(fun.instruction!=null){
                for(const ins of fun.instruction){
                    if(ins!=null) ins.run(env)
                }
            }
        }

    }

    public save(env:ENV){
        return true;
    }
}