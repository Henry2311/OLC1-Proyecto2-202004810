import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";

export class Ternary extends Instruction {
    constructor(
      public logic: Expression,
      public caseT: Expression,
      public caseF: Expression,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV):Return {
        
        const expLogic = this.logic.run(env)
        const expTrue = this.caseT.run(env)
        const expFalse = this.caseF.run(env)

        if(expLogic.value){
            return { value: expTrue.value, type: expTrue.type}
        }else{
            return { value: expFalse.value, type: expFalse.type}
        }
    }
  }