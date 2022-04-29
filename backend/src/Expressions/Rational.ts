import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class Rational extends Expression{

    constructor(
        private left: Expression,
        private right: Expression,
        private type: RationalOption,
        line:number,
        column:number){
            super(line,column)
        }
    
        public run(env: ENV): Return {
            
            const izq = this.left.run(env)
            const der = this.right.run(env)
            var s = Singleton.getInstance()

            if(this.type == RationalOption.IGUALQ){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value == tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value == tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value == tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value == tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
                }
            }else if(this.type == RationalOption.MAYORQ){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value > tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value > tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value > tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value > tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
                }
            }else if(this.type == RationalOption.MENORQ){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value < tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value < tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value < tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value < tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
                }
            }else if(this.type == RationalOption.MAYORIGQ){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value >= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value >= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value >= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value >= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
                }
            }else if(this.type == RationalOption.MENORIGQ){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value <= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value <= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value <= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value <= tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
                }
            }else if(this.type == RationalOption.NOIGUAL){
                if(der.type == Type.INT && izq.type == Type.INT){
                    if(izq.value != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.DOUBLE) || (der.type == Type.DOUBLE && izq.type == Type.INT)){
                    if(izq.value != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value != tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.INT && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.INT && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value != tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(der.type == Type.DOUBLE && izq.type == Type.DOUBLE){
                    if(izq.value != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.BOOLEAN)){
                    let tmp:number=(izq.value)?1:0
                    if(tmp != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.BOOLEAN)){
                    let tmp:number=(der.value)?1:0
                    if(izq.value != tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((der.type == Type.DOUBLE && izq.type == Type.CHAR)){
                    let tmp:number=(izq.value).charCodeAt(0);
                    if(tmp != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if((izq.type == Type.DOUBLE && der.type == Type.CHAR)){
                    let tmp:number=(der.value).charCodeAt(0);
                    if(izq.value != tmp){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.CHAR && der.type == Type.CHAR){
                    if(izq.value != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else if(izq.type == Type.STRING && der.type == Type.STRING){
                    if(izq.value != der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }else{
                    s.addError(new Errores("Semantico","Tipo de Dato incompatible",this.line,this.column))
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

        public getOp(t:RationalOption):String{
            let op:string = ""
            if(t==RationalOption.IGUALQ){
                op = "=="
            }else if(t==RationalOption.MAYORQ){
                op = ">"
            }else if(t==RationalOption.MENORQ){
                op = "<"
            }else if(t==RationalOption.MAYORIGQ){
                op = ">="
            }else if(t==RationalOption.MENORIGQ){
                op = "<="
            }else if(t==RationalOption.NOIGUAL){
                op = "!="
            }
            return op
        }

}

export enum RationalOption{
    IGUALQ,
    MAYORQ,
    MENORQ,
    MAYORIGQ,
    MENORIGQ,
    NOIGUAL
}