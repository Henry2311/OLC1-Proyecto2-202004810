import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class Casteo extends Expression{

    constructor(
        private type: Type,
        private expression: Expression,
        line:number,
        column:number){
            super(line,column)
        }
    
        public run(env:ENV):Return{
            const exp = this.expression.run(env)
            let value;
            if(this.type == Type.DOUBLE && exp.type==Type.INT){
                value = Number.parseFloat(exp.value).toFixed(1);
                return{ value: value, type: Type.DOUBLE }
            }else if(this.type == Type.INT && exp.type==Type.DOUBLE){
                value = Math.trunc(exp.value)
                return { value: value, type: Type.INT }
            }else if(this.type == Type.STRING && exp.type == Type.INT){
                value = String(exp.value)
                return { value: value, type: Type.STRING }
            }else if(this.type == Type.CHAR && exp.type == Type.INT){
                value = String.fromCharCode(exp.value)
                return { value: value, type: Type.CHAR}
            }else if(this.type == Type.STRING && exp.type == Type.DOUBLE){
                value = String(exp.value)
                return { value: value, type: Type.STRING }
            }else if(this.type == Type.INT && exp.type == Type.CHAR){
                value = exp.value.charCodeAt(0);
                return { value: value, type: Type.INT }
            }else if(this.type == Type.DOUBLE && exp.type == Type.CHAR){
                value = exp.value.charCodeAt(0);
                return { value: value, type: Type.BOOLEAN }
            }else{
                console.log("Incompatibilidad de Tipo de Dato")
            }

            return{ value: null, type: Type.error}
        }
}