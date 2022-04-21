import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class cicloFor extends Instruction {
    constructor(
      public declaraccion:Instruction,
      public condicon:Expression,
      public incremento:Instruction,
      public bloque: Array<Instruction> | null,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
  
      const newEnv= new ENV(env)
      
      this.declaraccion.run(newEnv)

      while(this.condicon.run(newEnv).value){
        
        if(this.bloque!=null)
                for(const inst of this.bloque){
                    inst.run(newEnv) 
                }
            this.incremento.run(newEnv)
        }
      
    }
  }