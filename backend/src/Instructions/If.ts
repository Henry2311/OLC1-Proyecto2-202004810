import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class Ifsentencia extends Instruction{

    constructor(
        public logic: Expression|null,
        public instruction: Array<Instruction>|null,
        public next: Instruction|null,
        public transfer: Type|null,
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
                    if(inst!=null)inst.run(newEnv)
                }
                
                if(this.transfer != null){
                    if(this.transfer == Type.BREAK){
                        return Type.BREAK
                    }else if(this.transfer == Type.CONTINUE){
                        return Type.CONTINUE
                    }else{
                        return null
                    }
                }
            }
        }if(logica != null && this.next != null){
            const newEnv= new ENV(env)
            if(logica.value){
                if(this.instruction!=null)
                for(const inst of this.instruction){
                    if(inst!=null) inst.run(newEnv)
                }
                if(this.transfer != null){
                    if(this.transfer == Type.BREAK){
                        return Type.BREAK
                    }else if(this.transfer == Type.CONTINUE){
                        return Type.CONTINUE
                    }else{
                        return null
                    }
                }
            }else{
                const t = this.next.run(env)
                if(t == Type.BREAK){
                    return Type.BREAK
                }else if(t == Type.CONTINUE){
                    return Type.CONTINUE
                }else{
                    return null
                } 
            }
        }if(logica == null && this.next == null){
            const newEnv= new ENV(env)
            if(this.instruction!=null)
            for(const inst of this.instruction){
                if(inst!=null) inst.run(newEnv)
            }
            if(this.transfer != null){
                if(this.transfer == Type.BREAK){
                    return Type.BREAK
                }else if(this.transfer == Type.CONTINUE){
                    return Type.CONTINUE
                }else{
                    return null
                }
            }
        }
    }
    public save(env: ENV) {
    }
    
}
