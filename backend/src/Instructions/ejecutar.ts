import { Expression } from "../Abstract/Expression";
import { Funcion } from "../Abstract/Function";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";

export class RUN extends Funcion{
    constructor(
        public id: string,
        public params:Array<Expression>|null,
        line: number,
        column: number
      ) {
        super(line, column);
      }
    
    public run(env:ENV){
        var fun = env.getFunction(this.id)
        if(this.params != null){
            let aux = []
            for(const exp of this.params){
                aux.push(exp.run(env)) 
            }
            if(fun.parameter!=null){
                let arr = fun.parameter
                for(const der of arr){
                    der.run(env)
                }
                for(let i = 0;i<aux.length;i++){
                    env.setVar(arr[i].id,aux[i].value)
                }
            }
            if(fun.instruction!=null){
                for(const ins of fun.instruction){
                    if(ins!=null) ins.run(env)
                }
            }
        }else{
            if(fun.instruction!=null){
                for(const ins of fun.instruction){
                    if(ins!=null) ins.run(env)
                }
            }
        }

    }

    public save(env:ENV){
        return true;
    }

    public ast(){
        var s = Singleton.getInstance()
        let arb:string = "nodo"+this.line+this.column+";\n"     //switch expresion cases def
        arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"RUN\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \""+this.id+"\"];\n"
        

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        

        if(this.params!=null){
            arb+="nodo3"+this.line+this.column+"[label = \"Parametros\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
            let f = 2;
            for(const p of this.params){
                if(p!=null){
                    arb+="nodo3"+this.line+this.column+" -> "+p.ast(this.line+f,this.column+f)+"\n"
                    f+=2
                }
            }
        }

        s.addAST(arb)
    }
}