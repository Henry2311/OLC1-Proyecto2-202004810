import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
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
      var s = Singleton.getInstance()
      let exp= this.expresion.run(env)
      console.log(">>",exp.value);
      s.addConsola(exp.value+"\n")

    }
    public save(env:ENV){}
  }