import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class cicloDo extends Instruction{

    constructor(
        public logic: Expression,
        public instruction: Array<Instruction>|null,
        public transfer: Type|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public run(env: ENV) {
        let logica = this.logic.run(env)
        const newEnv= new ENV(env)
        let aux;
        do{
            if(this.instruction!=null)
                for(const inst of this.instruction){
                    let t
                    if(inst!=null)t = inst.run(newEnv)
                    if(t == Type.BREAK){
                        aux = Type.BREAK
                        break
                    }else if(t == Type.CONTINUE){
                        aux = Type.CONTINUE
                        continue
                    }
                }
            logica = this.logic.run(env)
            if(this.transfer != null || aux!=null){
                if(this.transfer == Type.BREAK || aux == Type.BREAK){
                    break
                }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                    continue
                }
            }
        }while(logica.value)
    }
    public save(env: ENV) {
    }
    
}