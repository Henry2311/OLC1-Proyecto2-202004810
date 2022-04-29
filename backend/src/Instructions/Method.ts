import { Funcion } from "../Abstract/Function";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";
import { Declaracion } from "./Declaracion";

export class Metodo extends Funcion{
    constructor(
        public id: string,
        public type: Type,
        public instructions:Array<Instruction>|null,
        public params:Array<Declaracion>|null,
        line: number,
        column: number
      ) {
        super(line, column);
      }
    
    public run(env:ENV){
        if(this.params!=null){
            for(const der of this.params){
                der.run(env)
            }
        }
        if(this.instructions!=null){
            for(const ins of this.instructions){
                ins.run(env)
            }
        }
    }

    public save(env:ENV){
        if(this.type == Type.VOID){
            env.saveVar(this.id,null,this.type,this.instructions,this.params)
        }
    }

    public ast(){
        var s = Singleton.getInstance()
        let arb:string = "nodo"+this.line+this.column+";\n"     //switch expresion cases def
        arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Metodo\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \""+this.id+"\"];\n"
        arb+="nodo3"+this.line+this.column+"[label = \"Parametros\"];\n"
        arb+="nodo4"+this.line+this.column+"[label = \"Instrucciones\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo4"+this.line+this.column+";\n"

        if(this.params!=null){
            for(const p of this.params){
                if(p!=null){
                    p.ast()
                    s.addAST(`nodo3${this.line}${this.column} -> nodo${p.line}${p.column};\n`)
                }
            }
        }

        if(this.instructions!=null){
            for(const ins of this.instructions){
                if(ins!=null){
                    ins.ast()
                    s.addAST(`nodo4${this.line}${this.column} -> nodo${ins.line}${ins.column};\n`)
                } 
            }
        }
        s.addAST(arb)
    }
    
}