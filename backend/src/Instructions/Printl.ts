import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";

export class Println extends Instruction {
    constructor(
      public expresion:Expression,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
      
      let exp= this.expresion.run(env)
      console.log(">>",exp.value);
      //pueden usar patron singleton para capturar todas las saliddas de consola
      
    }
  }