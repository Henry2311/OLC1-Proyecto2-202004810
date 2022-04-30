import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";
import { TrRet } from "./TrRet";

export class cicloWhile extends Instruction{

    constructor(
        public logic: Expression,
        public instruction: Array<Instruction>|null,
        public transfer: Type|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public run(env: ENV) {
        let logica = this.logic.run(env)
        const newEnv = new ENV(env);
        let aux;
        while(logica.value){
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
                    }
                }
            logica = this.logic.run(env)
            var s = Singleton.getInstance()
            s.addSymbols(newEnv.getEnv())
            if(this.transfer != null || aux!=null){
                if(this.transfer == Type.BREAK || aux == Type.BREAK){
                    break
                }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                    continue
                }
            }
        }
    }
    
    public save(env: ENV) {}

    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Ciclo While\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \"While\"];\n" //while logic instrucciones
        arb+="nodo3"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> "+this.logic.ast(this.line+2,this.column+2)+"\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        
        if(this.instruction!=null){
            for(const inst of this.instruction){
                if(inst!=null){
                    inst.ast()
                    s.addAST(`nodo3${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
                }
            }
        }
        

        s.addAST(arb)
    }
    
}
