import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class Increment extends Instruction {
    constructor(
      public nombre: string,  
      public type:number,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV):Return {
      var s = Singleton.getInstance()
      if(env.search(this.nombre)){
          if(env.getType(this.nombre) == Type.INT){
            if(this.type == 0){
                let value = env.getValue(this.nombre)+1
                env.setVar(this.nombre,value)
                return { value: Number(value), type: Type.INT }
            }else if(this.type == 1){
                let value = env.getValue(this.nombre)-1
                env.setVar(this.nombre,value)
                return { value: Number(value), type: Type.INT }
            }  
          }else{
            s.addError(new Errores("Semantico","Tipo de dato incompatible "+this.nombre+" debe ser INT",this.line,this.column))
          }
      }else{
        s.addError(new Errores("Semantico","La variable no ha sido declarada",this.line,this.column))
      }
      return { value: 0, type: Type.error }
    }

    public save(env: ENV) {}
  
    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Incremento\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \""+this.nombre+"\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"

        if(this.type == 0){
          arb+="nodo3"+this.line+this.column+"[label = \"++\"];\n"
          arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        }else if(this.type == 1){
          arb+="nodo3"+this.line+this.column+"[label = \"--\"];\n"
          arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        }  

        s.addAST(arb) 
        return arb 
    }

  }