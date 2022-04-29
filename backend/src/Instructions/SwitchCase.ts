import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";

export class SwitchCase extends Instruction{
    constructor(
        public expression: Expression,
        public instructions: Array<Instruction>,
        public brk:number,
        line:number,
        column:number){
        super(line,column)
    }

    public run(env:ENV){
        const exp = this.expression.run(env)
        if(exp!=null){
            if(this.brk==1){
                if(exp.value == env.getValue("__compare__")){
                    if(this.instructions!=null){
                        const newEnv = new ENV(env)
                        for(const ins of this.instructions){
                            if(ins!=null) ins.run(newEnv)
                        }
                        return 1
                    }
                }
            }else{
                if(exp.value == env.getValue("__compare__")){
                    if(this.instructions!=null){
                        const newEnv = new ENV(env)
                        for(const ins of this.instructions){
                            if(ins!=null) ins.run(newEnv)
                        }
                        return 0
                    }
                }
            }
        }
        return 0
    }
    public save(env:ENV){}

    public ast(){
        var s = Singleton.getInstance()
        let arb:string = "nodo"+this.line+this.column+";\n"     //switch expresion cases def
        arb+= "nodo"+this.line+this.column+"[label = \"Case\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \"Parametro\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"

        arb+="nodo2"+this.line+this.column+" -> "+this.expression.ast(this.line+2,this.column+2)+"\n"

        for(const ins of this.instructions){
            if(ins!=null){
                ins.ast()
                s.addAST(`nodo1${this.line}${this.column} -> nodo${ins.line}${ins.column};\n`)
            }
        }
        s.addAST(arb)
    }
}