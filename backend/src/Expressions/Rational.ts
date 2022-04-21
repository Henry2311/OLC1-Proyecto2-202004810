import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { ENV } from "../Symbol/Env";
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
                }
            }
            return { value: Boolean(false), type: Type.BOOLEAN }
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