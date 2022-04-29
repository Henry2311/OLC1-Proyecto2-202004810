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
    public save(env:ENV){}

    public ast(){
      let arb:String = "nodo"+this.line+this.column+";\n"
      arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"  //Logica ? true : false
      arb+="nodo1"+this.line+this.column+"[label = \"Op Ternario\"];\n"
      arb+="nodo2"+this.line+this.column+"[label = \"Validacion\"];\n"
      arb+="nodo3"+this.line+this.column+"[label = \"?\"];\n"
      arb+="nodo4"+this.line+this.column+"[label = \"true\"];\n"
      arb+="nodo5"+this.line+this.column+"[label = \"false\"];\n"

      arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo4"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo5"+this.line+this.column+";\n"

      arb+="nodo2"+this.line+this.column+" -> "+this.logic.ast(this.line+2,this.column+2)+"\n"
      arb+="nodo4"+this.line+this.column+" -> "+this.caseT.ast(this.line+2,this.column+2)+"\n"
      arb+="nodo5"+this.line+this.column+" -> "+this.caseF.ast(this.line+2,this.column+2)+"\n"

      return arb
    }
  }