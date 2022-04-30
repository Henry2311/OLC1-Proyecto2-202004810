import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";
import { TrRet } from "./TrRet";

export class Ifsentencia extends Instruction{

    constructor(
        public logic: Expression|null,
        public instruction: Array<Instruction>|null,
        public next: Instruction|null,
        public transfer: Type|Expression|null,
        public returnF: Expression|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public run(env: ENV) {
        const logica = this.logic?.run(env)
        var s = Singleton.getInstance()
        let aux
        if(this.returnF!=null){
            this.instruction?.push(new TrRet(this.returnF,this.line,this.column))
        }
        if(logica !=null && this.next == null){
            const newEnv= new ENV(env)
            if(logica.value){
                if(this.instruction!=null)
                for(const inst of this.instruction){
                    let t
                    if(inst!=null)t = inst.run(newEnv)
                    if(t == Type.BREAK){
                        aux = Type.BREAK
                        break
                    }else if(t == Type.CONTINUE){
                        aux = Type.CONTINUE
                        continue
                    }else if(t!=undefined){
                        let auxR:Return = t
                        s.addSymbols(newEnv.getEnv())
                        return auxR
                    }
                }   
                s.addSymbols(newEnv.getEnv())
                if(this.transfer != null || aux!=null){
                    if(this.transfer == Type.BREAK || aux == Type.BREAK){
                        return Type.BREAK
                    }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                        return Type.CONTINUE
                    }
                }
            }
        }if(logica != null && this.next != null){
            const newEnv= new ENV(env)
            if(logica.value){
                if(this.instruction!=null)
                for(const inst of this.instruction){
                    let t
                    if(inst!=null)t = inst.run(newEnv)
                    if(t == Type.BREAK){
                        aux = Type.BREAK
                        break
                    }else if(t == Type.CONTINUE){
                        aux = Type.CONTINUE
                        continue
                    }else if(t!=undefined){
                        let auxR:Return = t
                        s.addSymbols(newEnv.getEnv())
                        return auxR
                    }
                }
                s.addSymbols(newEnv.getEnv())
                if(this.transfer != null || aux!=null){
                    if(this.transfer == Type.BREAK || aux == Type.BREAK){
                        return Type.BREAK
                    }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                        return Type.CONTINUE
                    }
                }
            }else{
                const t = this.next.run(env)
                if(t == Type.BREAK){
                    return Type.BREAK
                }else if(t == Type.CONTINUE){
                    return Type.CONTINUE
                }else if(t!=undefined){
                    let auxR:Return = t
                    return auxR
                }
            }
        }if(logica == null && this.next == null){
            const newEnv= new ENV(env)
            if(this.instruction!=null)
            for(const inst of this.instruction){
                let t
                if(inst!=null)t = inst.run(newEnv)
                if(t == Type.BREAK){
                    aux = Type.BREAK
                    break
                }else if(t == Type.CONTINUE){
                    aux = Type.CONTINUE
                    continue
                }else if(t!=undefined){
                    let auxR:Return = t
                    s.addSymbols(newEnv.getEnv())
                    return auxR
                }
            }
            s.addSymbols(newEnv.getEnv())
            if(this.transfer != null || aux!=null){
                if(this.transfer == Type.BREAK || aux == Type.BREAK){
                    return Type.BREAK
                }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                    return Type.CONTINUE
                }
            }
        }
    }
    public save(env: ENV) {}
    
    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Sentencia IF\"];\n"
        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
    
        if(this.logic !=null && this.next == null){
            arb+="nodo2"+this.line+this.column+"[label = \"IF\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.logic.ast(this.line+2,this.column+2)+"\n"

            arb+="nodo33"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo33"+this.line+this.column+";\n"

            if(this.instruction!=null){
                for(const inst of this.instruction){
                    if(inst!=null){
                        inst.ast()
                        s.addAST(`nodo33${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
                    }
                }
            }

        }if(this.logic != null && this.next != null){
            arb+="nodo2"+this.line+this.column+"[label = \"IF\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.logic.ast(this.line+2,this.column+2)+"\n"

            arb+="nodo33"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo33"+this.line+this.column+";\n"

            if(this.instruction!=null){
                for(const inst of this.instruction){
                    if(inst!=null){
                        inst.ast()
                        s.addAST(`nodo33${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
                    }
                }
            }
            arb+="nodo3"+this.line+this.column+"[label = \"ELSE\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"

            this.next.ast()
            s.addAST(`nodo3${this.line}${this.column} -> nodo${this.next.line}${this.next.column};\n`)
        }if(this.logic == null && this.next == null){
            arb+="nodo33"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo33"+this.line+this.column+";\n"

            if(this.instruction!=null){
                for(const inst of this.instruction){
                    if(inst!=null){
                        inst.ast()
                        s.addAST(`nodo33${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
                    }
                }
            }
        }
        if(this.returnF!=null){
            arb+="nodo4"+this.line+this.column+"[label = \"return\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodo4"+this.line+this.column+";\n"
            arb+="nodo4"+this.line+this.column+" -> "+this.returnF.ast(this.line+2,this.column+2)+"\n"
        }
        s.addAST(arb)
    }
    
}
