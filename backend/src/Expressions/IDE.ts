import { Expression } from "../Abstract/Expression"
import { Return } from "../Abstract/Return"
import { ENV } from "../Symbol/Env"
import { Type } from "../Symbol/type"

export class IDE extends Expression {

    constructor(
        private id: string,
        public sw:number,
        public expression1:Expression|null,
        public expression2:Expression|null,
        line: number,
        column: number
    ) {
        super(line, column)
    }

    public run(env:ENV): Return {
        if(this.sw == 0){
            if (env.getType(this.id) == Type.INT){
                return { value: Number(env.getValue(this.id)), type: Type.INT }
            }else if(env.getType(this.id) == Type.DOUBLE){
                return { value: Number(env.getValue(this.id)), type: Type.DOUBLE }
            }else if (env.getType(this.id) == Type.STRING){
                let value:string = env.getValue(this.id).replaceAll("\"","")
                return { value: value, type: Type.STRING }
            }else if(env.getType(this.id) == Type.CHAR){
                let value:string = env.getValue(this.id).replaceAll("\"","")
                return { value: value, type: Type.CHAR }
            }else if (env.getType(this.id) == Type.BOOLEAN) {
                if (env.getValue(this.id) == "true") return { value: Boolean(true), type: Type.BOOLEAN }
                else return { value: Boolean(false), type: Type.BOOLEAN }
            }
            else return { value: env.getValue(this.id), type: Type.error }
        }else{
            let exp1 = this.expression1?.run(env)
            let exp2 = this.expression2?.run(env)

            if(exp1!=null && exp2==null){
                if(exp1.type == Type.INT){
                    let tmp = env.getValue(this.id)
                    let value = tmp[exp1.value].value
                    console.log("VALOR DEL VECTOR: "+Number(value))
                    if (env.getType(this.id) == Type.INT){
                        return { value: Number(value), type: Type.INT }
                    }else if(env.getType(this.id) == Type.DOUBLE){
                        return { value: Number(value), type: Type.DOUBLE }
                    }else if (env.getType(this.id) == Type.STRING){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.STRING }
                    }else if(env.getType(this.id) == Type.CHAR){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.CHAR }
                    }else if (env.getType(this.id) == Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true") return { value: Boolean(true), type: Type.BOOLEAN }
                        else return { value: Boolean(false), type: Type.BOOLEAN }
                    }
                    else return { value: env.getValue(this.id), type: Type.error }

                }else{
                    console.log("No es el tipo de dato correcto")
                }
            }else if(exp1!=null && exp2!=null){
                if(exp1.type == Type.INT && exp2.type == Type.INT){
                    let tmp = env.getValue(this.id)
                    let value = tmp[exp1.value][exp2.value].value
                    console.log("VALOR DEL VECTOR: "+Number(value))
                    if (env.getType(this.id) == Type.INT){
                        return { value: Number(value), type: Type.INT }
                    }else if(env.getType(this.id) == Type.DOUBLE){
                        return { value: Number(value), type: Type.DOUBLE }
                    }else if (env.getType(this.id) == Type.STRING){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.STRING }
                    }else if(env.getType(this.id) == Type.CHAR){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.CHAR }
                    }else if (env.getType(this.id) == Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true") return { value: Boolean(true), type: Type.BOOLEAN }
                        else return { value: Boolean(false), type: Type.BOOLEAN }
                    }
                    else return { value: env.getValue(this.id), type: Type.error }
                }else{
                    console.log("No es el tipo de dato correcto")
                }
            }
        }
        return { value: env.getValue(this.id), type: Type.error }
    }
}