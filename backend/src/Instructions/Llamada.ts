import { Expression } from "../Abstract/Expression";
import { Funcion } from "../Abstract/Function";
import { ENV } from "../Symbol/Env";
import { Return } from "../Abstract/Return";
import { Errores } from "../Symbol/error";
import { Singleton } from "../Pattern/Singleton";
import { Type } from "../Symbol/type";

export class Call extends Funcion{
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
        let retn;
        var s = Singleton.getInstance()
        const newEnv= new ENV(env)
        if(fun.type == Type.error){
            s.addError(new Errores("Semantico","La funcion "+this.id+" no ha sido declarada",this.line,this.column))
        }else{
            if(this.params != null){
                let aux = []
                for(const exp of this.params){
                    aux.push(exp.run(env)) 
                }
                if(fun.parameter!=null){
                    let arr = fun.parameter
                    for(const der of arr){
                        der.run(newEnv)
                    }
                    for(let i = 0;i<aux.length;i++){
                        newEnv.setVar(arr[i].id,aux[i].value)
                    }
                }
                if(fun.instruction!=null){
                    for(const ins of fun.instruction){
                        if(ins!=null)retn = ins.run(newEnv)
                        if(retn != undefined){
                            let auxR:Return = retn
                            if(fun.type == auxR.type){
                                s.addSymbols(newEnv.getEnv())
                                return auxR
                            }else{
                                s.addError(new Errores("Semantico","Tipo de dato incompatible para return de "+fun.id,this.line,this.column))
                            }
                            
                        }
                    }
                    s.addSymbols(newEnv.getEnv())
                }
            }else{
                if(fun.instruction!=null){
                    for(const ins of fun.instruction){
                        if(ins!=null)retn = ins.run(newEnv)
                        if(retn != undefined){
                            let auxR:Return = retn
                            if(fun.type == auxR.type){
                                s.addSymbols(newEnv.getEnv())
                                return auxR
                            }else{
                                s.addError(new Errores("Semantico","Tipo de dato incompatible para return de "+fun.id,this.line,this.column))
                            }
                        }
                    }
                    s.addSymbols(newEnv.getEnv())
                }
            }
        }
    }

    public save(env:ENV){}

    public ast(){
        var s = Singleton.getInstance()
        let arb:string = "nodo"+this.line+this.column+";\n"     //switch expresion cases def
        arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Call\"];\n"
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
        return arb
    }
}