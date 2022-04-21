import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
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
        if(izq != null){
            if(this.type == LogicOption.AND){
                if(izq.value == true && der.value == true){
                    return { value: Boolean(true), type: Type.BOOLEAN }
                }else{return { value: Boolean(false), type: Type.BOOLEAN }}
            }else if(this.type == LogicOption.OR){
                if(izq.value == true || der.value == true){
                    return { value: Boolean(true), type: Type.BOOLEAN }
                }else{return { value: Boolean(false), type: Type.BOOLEAN }}
            }
        }else if(izq == null){
            if(this.type == LogicOption.NOT){
                console.log("NOT"+der.value)
                if(der.value == true){
                    return { value: Boolean(false), type: Type.BOOLEAN }
                }else{return { value: Boolean(true), type: Type.BOOLEAN }}
            }
        }
        
        return { value: Boolean(false), type: Type.BOOLEAN }
    }
}

export enum LogicOption{
    NOT,
    AND,
    OR
}