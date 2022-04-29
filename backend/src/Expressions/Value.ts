import { Expression } from "../Abstract/Expression"
import { Return } from "../Abstract/Return"
import { ENV } from "../Symbol/Env"
import { Type } from "../Symbol/type"

export class Value extends Expression {

    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) {
        super(line, column)
    }

    public run(): Return {
        
        if (this.type == Type.INT){
            return { value: Number(this.value), type: Type.INT }
        }else if(this.type == Type.DOUBLE){
            return { value: Number(this.value), type: Type.DOUBLE }
        }else if (this.type == Type.STRING){
            this.value = (this.value).replaceAll("\"","")
            return { value: this.value, type: Type.STRING }
        }else if(this.type == Type.CHAR){
            this.value = (this.value).replaceAll("\'","")
            return { value: this.value, type: Type.CHAR }
        }else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") return { value: Boolean(true), type: Type.BOOLEAN }
            else return { value: Boolean(false), type: Type.BOOLEAN }
        }
        else return { value: this.value, type: Type.error }

    }
    public save(env: ENV) {}
    
    public ast(n1:number,n2:number): string {
        let arb:string =  "nodo"+this.line+n1+this.column+n2+";\n"
        arb+="nodo"+this.line+n1+this.column+n2+"[label =\""+this.value+"\"];\n"
        return arb
    }
}