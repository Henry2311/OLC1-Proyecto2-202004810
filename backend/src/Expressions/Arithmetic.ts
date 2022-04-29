import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";
import { Singleton } from "../Pattern/Singleton";
import { Errores } from "../Symbol/error";

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
        var s = Singleton.getInstance()

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
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
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
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
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
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
                }
            }else if(this.type == ArithmeticOption.DIV){
                if(der.value == 0){
                    s.addError(new Errores("Semantico","Error matematico division por 0",this.line,this.column))
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
                    }else{
                        s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
                    }
                }
            }else if(this.type == ArithmeticOption.POW){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: Math.pow(izq.value,der.value), type: Type.INT }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: Math.pow(izq.value,der.value), type: Type.DOUBLE }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: Math.pow(izq.value,der.value), type: Type.DOUBLE }
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
                }
            }else if(this.type == ArithmeticOption.MOD){
                if(der.type == Type.INT && izq.type == Type.INT){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    return { value: izq.value%der.value, type: Type.DOUBLE }
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
                }
            }
        }else{
            if(this.type == ArithmeticOption.NEGACION){
                if(der.type == Type.INT){
                    return { value: -der.value, type: Type.INT }
                }else if(der.type == Type.DOUBLE){
                    return { value: -der.value, type: Type.DOUBLE }
                }else{
                    s.addError(new Errores("Semantico","Tipos de datos incompatibles",this.line,this.column))
                }
            }
        }
        
        return { value: null, type: Type.error }
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

    public getOp(t:ArithmeticOption):String{
        let op:string = ""
        if(t==ArithmeticOption.MAS){
            op = "+"
        }else if(t==ArithmeticOption.MENOS){
            op = "-"
        }else if(t==ArithmeticOption.POR){
            op = "*"
        }else if(t==ArithmeticOption.DIV){
            op = "/"
        }else if(t==ArithmeticOption.MOD){
            op = "%"
        }else if(t==ArithmeticOption.POW){
            op = "^"
        }else if(t==ArithmeticOption.NEGACION){
            op = "-"
        }
        return op
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