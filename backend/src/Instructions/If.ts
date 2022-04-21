import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class Ifsentencia extends Instruction{

    constructor(
        public logic: Expression|null,
        public instruction: Array<Instruction>|null,
        public next: Instruction|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public run(env: ENV) {
        const logica = this.logic?.run(env)

        if(logica !=null && this.next == null){
            const newEnv= new ENV(env)
            if(logica.value){
                if(this.instruction!=null)
                for(const inst of this.instruction){
                    inst.run(newEnv)
                }
            }
        }if(logica != null && this.next != null){
            const newEnv= new ENV(env)
            if(logica.value){
                if(this.instruction!=null)
                for(const inst of this.instruction){
                    inst.run(newEnv)
                }
            }else{
                this.next.run(env)
            }
        }if(logica == null && this.next == null){
            const newEnv= new ENV(env)
            if(this.instruction!=null)
            for(const inst of this.instruction){
                inst.run(newEnv)
            }
        }
    }
    
}
