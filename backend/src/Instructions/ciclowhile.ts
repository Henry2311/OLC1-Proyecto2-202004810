import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class cicloWhile extends Instruction{

    constructor(
        public logic: Expression,
        public instruction: Array<Instruction>|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public run(env: ENV) {
        let logica = this.logic.run(env)
        const newEnv = new ENV(env);

        while(logica.value){
            if(this.instruction!=null)
                for(const inst of this.instruction){
                    inst.run(newEnv)
                }
            logica = this.logic.run(env)
        }
    }
    
}
