import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class Declaracion extends Instruction {
    
    constructor(
      public id: string,
      public type: Type,
      public expression:Expression|null,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
        let exp = this.expression?.run(env)
        let id_list = this.id.split(',')
        var s = Singleton.getInstance()

        for(const names of id_list){
            if(exp != null){
                if(exp.type == this.type){
                    const aux = env.saveVar(names,exp.value,this.type,null,null)
                }else{
                    s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+names,this.line,this.column))
                }
            }else{
                let aux;
                if(this.type == Type.INT){
                    aux = env.saveVar(names,0,this.type,null,null)
                }else if(this.type == Type.DOUBLE){
                    aux = env.saveVar(names,0.0,this.type,null,null)
                }else if(this.type == Type.STRING){
                    aux = env.saveVar(names,"",this.type,null,null)
                }else if(this.type == Type.CHAR){
                    aux = env.saveVar(names,'',this.type,null,null)
                }else if(this.type == Type.BOOLEAN){
                    aux = env.saveVar(names,true,this.type,null,null)
                }else{
                    s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+names,this.line,this.column))
                }
            }
        }

    }
    
    public save(env: ENV) {}

    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Declaracion\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \""+this.id+"\"];\n"
        arb+="nodo3"+this.line+this.column+"[label = \""+this.getTipo(this.type)+"\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        if(this.expression!=null){
            arb+="nodo1"+this.line+this.column+" -> "+this.expression.ast(this.line+2,this.column+2)
        }
        s.addAST(arb)
    }

    public getTipo(t:Type):string{
        let op:string = ""
        if(t==Type.INT){
            op = "int"
        }else if(t==Type.DOUBLE){
            op = "double"
        }else if(t==Type.STRING){
            op = "string"
        }else if(t==Type.BOOLEAN){
            op = "boolean"
        }else if(t==Type.CHAR){
            op = "char"
        }
        return op
    }
  }