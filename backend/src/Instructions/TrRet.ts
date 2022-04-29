import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";

export class TrRet extends Instruction{
    constructor(
        public expresion : Expression,
        line:number,
        column:number){
            super(line,column)
        }

    public run(env: ENV):Return {
        const exp = this.expresion.run(env)
        return {value: exp.value, type:exp.type}
    }

    public save(env: ENV) {

    }

    public ast(){
        
    }
}