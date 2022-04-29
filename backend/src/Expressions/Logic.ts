import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class Logic extends Expression{

    constructor(
        private left: Expression|null,
        private right: Expression,
        private type: LogicOption,
        line:number,
        column:number){
            super(line,column)
        }
    
    public run(env:ENV): Return{
        const izq = this.left?.run(env)
        const der = this.right.run(env)
        var s = Singleton.getInstance()
        if(izq != null){
            if(this.type == LogicOption.AND){
                if(izq.value == true && der.value == true){
                    return { value: Boolean(true), type: Type.BOOLEAN }
                }else{return { value: Boolean(false), type: Type.BOOLEAN }}
            }else if(this.type == LogicOption.OR){
                if(izq.value == true || der.value == true){
                    return { value: Boolean(true), type: Type.BOOLEAN }
                }else{return { value: Boolean(false), type: Type.BOOLEAN }}
            }else{
                s.addError(new Errores("Semantico","No es un dato boolean",this.line,this.column))
            }
        }else if(izq == null){
            if(this.type == LogicOption.NOT){
                if(der.value == true){
                    return { value: Boolean(false), type: Type.BOOLEAN }
                }else{return { value: Boolean(true), type: Type.BOOLEAN }}
            }else{
                s.addError(new Errores("Semantico","No es un dato boolean",this.line,this.column))
            }
        }
        
        return { value: Boolean(false), type: Type.BOOLEAN }
    }
    
    public save(env: ENV) {}
    
    public ast(n1:number,n2:number): string {
        let arb:string = "nodo"+(this.line+n1)+"_"+(this.column+n2)+";\n"
        arb+="nodo"+(this.line+n1)+"_"+(this.column+n2)+"[label =\""+this.getOp(this.type)+"\"];\n"
        if(this.left!=null){
            arb += "nodo"+(this.line+n1)+"_"+(this.column+n2)+" -> "+this.left.ast(this.line+3,this.column+3)+"\n"
            arb += "nodo"+(this.line+n1)+"_"+(this.column+n2)+" -> "+this.right.ast(this.line+4,this.column+4)+"\n"
        }else{
            arb += "nodo"+(this.line+n1)+"_"+(this.column+n2)+" -> "+this.right.ast(this.line+4,this.column+4)+"\n"
        }

        return arb
    }

    public getOp(t:LogicOption):String{
        let op:string = ""
        if(t==LogicOption.AND){
            op = "&&"
        }else if(t==LogicOption.NOT){
            op = "!"
        }else if(t==LogicOption.OR){
            op = "||"
        }
        return op
    }
}

export enum LogicOption{
    NOT,
    AND,
    OR
}