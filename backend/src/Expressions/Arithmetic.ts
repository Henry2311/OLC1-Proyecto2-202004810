import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class Arithmetic extends Expression{
    
    constructor(
        private left: Expression|null,
        private right: Expression,
        private type: ArithmeticOption,
        line:number,
        column:number){
            super(line,column)
        }
    
    public run(env:ENV):Return{
        
        const izq = this.left?.run(env)
        const der = this.right.run(env)

        if(izq != null){
            if(this.type == ArithmeticOption.MAS){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: der.value+izq.value, type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: der.value+izq.value, type: Type.DOUBLE }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    return { value: der.value+tmp, type: Type.INT }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    return { value: izq.value+tmp, type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: der.value+tmp, type: Type.INT }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value+tmp, type: Type.INT }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: der.value+izq.value, type: Type.DOUBLE }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    return { value: der.value+tmp, type: Type.INT }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    return { value: izq.value+tmp, type: Type.DOUBLE }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: der.value+tmp, type: Type.DOUBLE }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value+tmp, type: Type.DOUBLE }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    return { value: izq.value+der.value, type: Type.STRING }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    return { value: izq.value+der.value, type: Type.STRING }
                }else if((der.type == Type.INT && izq.type == Type.STRING) || (der.type == Type.STRING && izq.type == Type.INT)){
                    return { value: izq.value+""+der.value, type: Type.STRING }
                }else if((der.type == Type.DOUBLE && izq.type == Type.STRING) || (der.type == Type.STRING && izq.type == Type.DOUBLE)){
                    return { value: izq.value+""+der.value, type: Type.STRING }
                }else if((der.type == Type.BOOLEAN && izq.type == Type.STRING) || (der.type == Type.STRING && izq.type == Type.BOOLEAN)){
                    return { value: izq.value+""+der.value, type: Type.STRING }
                }else if((der.type == Type.CHAR && izq.type == Type.STRING) || (der.type == Type.STRING && izq.type == Type.CHAR)){
                    return { value: izq.value+""+der.value, type: Type.STRING }
                }
            }else if(this.type == ArithmeticOption.MENOS){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: izq.value-der.value, type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: izq.value-der.value, type: Type.DOUBLE }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    return { value: tmp-der.value, type: Type.INT }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    return { value: izq.value-tmp, type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: tmp-der.value, type: Type.INT }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value-tmp, type: Type.INT }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: izq.value-der.value, type: Type.DOUBLE }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    return { value: tmp-der.value, type: Type.INT }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    return { value: izq.value-tmp, type: Type.DOUBLE }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: tmp-der.value, type: Type.DOUBLE }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value-tmp, type: Type.DOUBLE }
                }
            }else if(this.type == ArithmeticOption.POR){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: izq.value*der.value, type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: izq.value*der.value, type: Type.DOUBLE }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: der.value*tmp, type: Type.INT }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value*tmp, type: Type.INT }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: izq.value*der.value, type: Type.DOUBLE }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    return { value: tmp*der.value, type: Type.DOUBLE }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    return { value: izq.value*tmp, type: Type.DOUBLE }
                }
            }else if(this.type == ArithmeticOption.DIV){
                if(der.value == 0){
                    console.log("Math error")
                }else{
                    if(der.type == Type.INT && izq.type == Type.INT){
                        return { value: izq.value/der.value, type: Type.DOUBLE }
                    }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                        return { value: izq.value/der.value, type: Type.DOUBLE }
                    }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                        let tmp:number=(izq.value).charCodeAt(0);
                        return { value: der.value/tmp, type: Type.DOUBLE }
                    }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                        let tmp:number=(der.value).charCodeAt(0);
                        return { value: izq.value/tmp, type: Type.DOUBLE }
                    }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                        return { value: izq.value/der.value, type: Type.DOUBLE }
                    }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                        let tmp:number=(izq.value).charCodeAt(0);
                        return { value: tmp/der.value, type: Type.DOUBLE }
                    }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                        let tmp:number=(der.value).charCodeAt(0);
                        return { value: izq.value/tmp, type: Type.DOUBLE }
                    }
                }
            }else if(this.type == ArithmeticOption.POW){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: Math.pow(izq.value,der.value), type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: Math.pow(izq.value,der.value), type: Type.DOUBLE }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: Math.pow(izq.value,der.value), type: Type.DOUBLE }
                }
            }else if(this.type == ArithmeticOption.MOD){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }
            }
        }else{
            if(this.type == ArithmeticOption.NEGACION){
                if(der.type == Type.INT){
                    return { value: -der.value, type: Type.INT }
                }else if(der.type == Type.DOUBLE){
                    return { value: -der.value, type: Type.DOUBLE }
                }
            }
        }
        
        return { value: null, type: Type.error }
    }

    public save(env: ENV) {
    }
}

export enum ArithmeticOption {
    MAS,
    MENOS,
    POR,
    DIV,
    MOD,
    POW,
    NEGACION
}