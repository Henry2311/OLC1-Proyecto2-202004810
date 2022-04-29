import { Expression } from "../Abstract/Expression"
import { Return } from "../Abstract/Return"
import { Singleton } from "../Pattern/Singleton"
import { ENV } from "../Symbol/Env"
import { Errores } from "../Symbol/error"
import { Type } from "../Symbol/type"
var valor: any;

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
        var s = Singleton.getInstance()
        if(this.sw == 0){
            valor = env.getValue(this.id)
            if (env.getType(this.id) == Type.INT){
                return { value: env.getValue(this.id), type: Type.INT }
            }else if(env.getType(this.id) == Type.DOUBLE){
                return { value: env.getValue(this.id), type: Type.DOUBLE }
            }else if (env.getType(this.id) == Type.STRING){
                let value:string = env.getValue(this.id)
                return { value: value, type: Type.STRING }
            }else if(env.getType(this.id) == Type.CHAR){
                let value:string = env.getValue(this.id)
                return { value: value, type: Type.CHAR }
            }else if (env.getType(this.id) == Type.BOOLEAN) {
                if (env.getValue(this.id) == "true" || env.getValue(this.id)) return { value: env.getValue(this.id), type: Type.BOOLEAN }
                else return { value: env.getValue(this.id), type: Type.BOOLEAN }
            }else{
                s.addError(new Errores("Semantico","Tipo de dato inexistente",this.line,this.column))
                return { value: env.getValue(this.id), type: Type.error }
            } 
        }else{
            let exp1 = this.expression1?.run(env)
            let exp2 = this.expression2?.run(env)

            if(exp1!=null && exp2==null){
                if(exp1.type == Type.INT){
                    let tmp:any = Array.from(env.getValue(this.id))
                    let value = tmp[exp1.value]
                    valor = value
                    if (env.getType(this.id) == Type.INT){
                        return { value: value, type: Type.INT }
                    }else if(env.getType(this.id) == Type.DOUBLE){
                        return { value: value, type: Type.DOUBLE }
                    }else if (env.getType(this.id) == Type.STRING){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.STRING }
                    }else if(env.getType(this.id) == Type.CHAR){
                        value = value.replaceAll("\'","")
                        return { value: value, type: Type.CHAR }
                    }else if (env.getType(this.id) == Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true" || env.getValue(this.id)) return { value: true, type: Type.BOOLEAN }
                        else return { value: false, type: Type.BOOLEAN }
                    }else{
                        s.addError(new Errores("Semantico","Tipo de dato inexistente",this.line,this.column))
                        return { value: env.getValue(this.id), type: Type.error }
                    } 
                }else{
                    s.addError(new Errores("Semantico","Tipo de Datos indice de vector no compatible",this.line,this.column))
                }
            }else if(exp1!=null && exp2!=null){
                if(exp1.type == Type.INT && exp2.type == Type.INT){
                    let tmp:any = Array.from(env.getValue(this.id))
                    let value = tmp[exp1.value][exp2.value]
                    valor = value
                    if (env.getType(this.id) == Type.INT){
                        return { value: value, type: Type.INT }
                    }else if(env.getType(this.id) == Type.DOUBLE){
                        return { value: value, type: Type.DOUBLE }
                    }else if (env.getType(this.id) == Type.STRING){
                        value = value.replaceAll("\"","")
                        return { value: value, type: Type.STRING }
                    }else if(env.getType(this.id) == Type.CHAR){
                        value = value.replaceAll("\'","")
                        return { value: value, type: Type.CHAR }
                    }else if (env.getType(this.id) == Type.BOOLEAN) {
                        if (env.getValue(this.id) == "true" || env.getValue(this.id)) return { value: true, type: Type.BOOLEAN }
                        else return { value: false, type: Type.BOOLEAN }
                    }else{
                        s.addError(new Errores("Semantico","Tipo de dato inexistente",this.line,this.column))
                        return { value: env.getValue(this.id), type: Type.error }
                    } 
                }else{
                    s.addError(new Errores("Semantico","Tipo de Datos indice de vector no compatible",this.line,this.column))
                }
            }
        }
        return { value: env.getValue(this.id), type: Type.error }
    }
    
    public save(env: ENV) {}

    public ast(): string {
        let arb:string =  "nodo"+this.line+this.column+";\n"
        if(this.sw==0){
            arb+="nodo"+this.line+this.column+"[label =\""+this.id+"\"];\n"
        }else{
            if(this.expression1!=null && this.expression2==null){
                arb+="nodo"+this.line+this.column+"[label =\""+this.id+"[]\"];\n"
            }else if(this.expression1!=null && this.expression2==null){
                arb+="nodo"+this.line+this.column+"[label =\""+this.id+"[][]\"];\n"
            }
        }
        
        return arb
    }
}