import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class cicloDo extends Instruction{

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
        const newEnv= new ENV(env)
        let aux;
        do{
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
            if(this.transfer != null || aux!=null){
                if(this.transfer == Type.BREAK || aux == Type.BREAK){
                    break
                }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
                    continue
                }
            }
        }while(logica.value)
    }

    public save(env: ENV) {}
    
    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Ciclo Do\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \"Do\"];\n" //DO instrucciones while validacion
        arb+="nodo3"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"
        arb+="nodo4"+this.line+this.column+"[label = \"while\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        
        if(this.instruction!=null){
            for(const inst of this.instruction){
                if(inst!=null){
                    inst.ast()
                    s.addAST(`nodo3${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
                }
            }
        }

        arb+="nodo1"+this.line+this.column+" -> nodo4"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> "+this.logic.ast(this.line+2,this.column+2)+"\n"

        s.addAST(arb)
    }
}