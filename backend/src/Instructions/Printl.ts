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
      s.addConsola(exp.value+"\n")

    }
    public save(env:ENV){}

    public ast(){
      var s = Singleton.getInstance()
      let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
      arb+="nodo1"+this.line+this.column+"[label = \"Println\"];\n"

      arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> "+this.expresion.ast(this.line+2,this.column+2)

      s.addAST(arb)
    }
  }