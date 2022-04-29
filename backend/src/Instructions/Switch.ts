import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { SwitchCase } from "./SwitchCase";

export class Switch extends Instruction{
    constructor(
        public expresion: Expression,
        public cases: Array<SwitchCase>,
        public def: Array<Instruction>,
        line:number,
        column:number){
            super(line,column)
        }
        
    public run(env: ENV) {
        const exp = this.expresion.run(env)
        let brk;
        if(this.cases!=null){
            const newEnv = new ENV(env)
            newEnv.saveVar("__compare__",exp.value,exp.type,null,null)
            for(const csc of this.cases){
                if(csc!=null)brk = csc.run(newEnv)
                if(brk==1)break
            }
        }
        if(this.def != null && brk == 0){
            const newEnv = new ENV(env)
            for(const ins of this.def){
                if(ins!=null)ins.run(newEnv)
            }
        }
    }
    public save(env:ENV){}

    public ast(){
        var s = Singleton.getInstance()
        let arb:string = "nodo"+this.line+this.column+";\n"     //switch expresion cases def
        arb+= "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Switch\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \"Lista Cases\"];\n"
        arb+="nodo3"+this.line+this.column+"[label = \"Parametro\"];\n"
        arb+="nodo4"+this.line+this.column+"[label = \"Default\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo4"+this.line+this.column+";\n"

        arb+="nodo3"+this.line+this.column+" -> "+this.expresion.ast(this.line+2,this.column+2)+"\n"

        for(const csc of this.cases){
            if(csc!=null){
                csc.ast()
                s.addAST(`nodo2${this.line}${this.column} -> nodo${csc.line}${csc.column};\n`)
            }
        }

        for(const ins of this.def){
            if(ins!=null){
                ins.ast()
                s.addAST(`nodo4${this.line}${this.column} -> nodo${ins.line}${ins.column};\n`)
            }
            
        }

        s.addAST(arb)
    }
}