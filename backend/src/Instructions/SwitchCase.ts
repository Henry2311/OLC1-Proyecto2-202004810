import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class SwitchCase extends Instruction{
    constructor(
        public expression: Expression,
        public instructions: Array<Instruction>,
        public brk:number,
        line:number,
        column:number){
        super(line,column)
    }

    public run(env:ENV){
        const exp = this.expression.run(env)
        if(exp!=null){
            if(this.brk==1){
                if(exp.value == env.getValue("__compare__")){
                    if(this.instructions!=null){
                        const newEnv = new ENV(env)
                        for(const ins of this.instructions){
                            if(ins!=null) ins.run(newEnv)
                        }
                        return 1
                    }
                }
            }else{
                if(exp.value == env.getValue("__compare__")){
                    if(this.instructions!=null){
                        const newEnv = new ENV(env)
                        for(const ins of this.instructions){
                            if(ins!=null) ins.run(newEnv)
                        }
                        return 0
                    }
                }
            }
        }
        return 0
    }
    public save(env:ENV){}
}