import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class cicloFor extends Instruction {
    constructor(
      public declaraccion:Instruction,
      public condicon:Expression,
      public incremento:Instruction,
      public bloque: Array<Instruction> | null,
      public transfer: Type|null,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
  
      const newEnv= new ENV(env)
      this.declaraccion.run(newEnv)
      let aux;

      while(this.condicon.run(newEnv).value){
        if(this.bloque!=null)
          for(const inst of this.bloque){
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
          this.incremento.run(newEnv)
          if(this.transfer != null || aux!=null){
            if(this.transfer == Type.BREAK || aux == Type.BREAK){
              break
            }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
              continue
            }
          }
        }
      
    }
    public save(env: ENV) {
    }
  }