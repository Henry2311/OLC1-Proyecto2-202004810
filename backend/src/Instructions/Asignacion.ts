import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";

export class Asignacion extends Instruction {
    constructor(
      public nombre: string,
      public expresion:Expression,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
      
      let exp= this.expresion.run(env)
      var s = Singleton.getInstance()
      if(env.search(this.nombre)){
        if (env.getType(this.nombre) == exp.type){
          env.setVar(this.nombre, exp.value)
        }else{
          s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.nombre,this.line,this.column))
        }
      }else{
        s.addError(new Errores("Semantico","La variable no ha sido creada",this.line,this.column))
      }
      
    }

    public save(env: ENV) {}

    public ast(){
      var s = Singleton.getInstance()
      let arb:string = "nodo"+this.line+this.column+";\n"
      arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
      arb+="nodo1"+this.line+this.column+"[label = \"Asignacion\"];\n"
      arb+="nodo2"+this.line+this.column+"[label = \""+this.nombre+"\"];\n"

      arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> "+this.expresion.ast(this.line+2,this.column+2)

      s.addAST(arb)

    }
  }