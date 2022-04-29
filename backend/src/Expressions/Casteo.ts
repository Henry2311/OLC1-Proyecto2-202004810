import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
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
            var s = Singleton.getInstance()
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
                s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
            }

            return{ value: null, type: Type.error}
        }

        public save(env: ENV) {
        }

        public ast(): string {
            let arb:string = "nodo"+this.line+this.column+";\n"
            arb+="nodo"+this.line+this.column+"[label =\"("+this.getTipo(this.type)+")\"];\n"
            arb += "nodo"+this.line+this.column+" -> "+this.expression.ast(this.line+4,this.column+4)+"\n"
            return arb
        }

        public getTipo(t:Type):string{
            let op:string = ""
            if(t==Type.INT){
                op = "int"
            }else if(t==Type.DOUBLE){
                op = "double"
            }else if(t==Type.STRING){
                op = "string"
            }else if(t==Type.BOOLEAN){
                op = "boolean"
            }else if(t==Type.CHAR){
                op = "char"
            }
            return op
            }
}