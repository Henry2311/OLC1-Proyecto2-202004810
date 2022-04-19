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
                if(izq.type == Type.INT && der.type == Type.INT){
                    if(izq.value == der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }
            }else if(this.type == RationalOption.MAYORQ){
                if(izq.type == Type.INT && der.type == Type.INT){
                    if(izq.value > der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }
            }else if(this.type == RationalOption.MENORQ){
                if(izq.type == Type.INT && der.type == Type.INT){
                    if(izq.value < der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }
            }else if(this.type == RationalOption.MAYORIGQ){
                if(izq.type == Type.INT && der.type == Type.INT){
                    if(izq.value >= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }
            }else if(this.type == RationalOption.MENORIGQ){
                if(izq.type == Type.INT && der.type == Type.INT){
                    if(izq.value <= der.value){
                        return { value: Boolean(true), type: Type.BOOLEAN }
                    }else return { value: Boolean(false), type: Type.BOOLEAN }
                }
            }else if(this.type == RationalOption.NOIGUAL){
                if(izq.type == Type.INT && der.type == Type.INT){
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