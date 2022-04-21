import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { SwitchCase } from "./SwitchCase";

export class Switch extends Instruction{
    constructor(
        public expresion: Expression,
        public cases: Array<SwitchCase>,
        public def: Array<Instruction>,
        line:number,
        column:number){
            super(line,column)
        }

    public run(env: ENV) {
        const exp = this.expresion.run(env)
        let brk;
        if(this.cases!=null){
            const newEnv = new ENV(env)
            newEnv.saveVar("__compare__",exp.value,exp.type)
            for(const csc of this.cases){
                brk = csc.run(newEnv)
                if(brk==1)break
            }
        }
        if(this.def != null && brk == 0){
            const newEnv = new ENV(env)
            for(const ins of this.def){
                ins.run(newEnv)
            }
        }
    }
}