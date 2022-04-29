import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Return } from "../Abstract/Return";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class Nativas extends Instruction {
    constructor(
      public valor: Expression,  
      public type: FunctionOptions,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV):Return {
        const exp = this.valor.run(env)
        var s = Singleton.getInstance()

        if(this.type == FunctionOptions.LOWER){
            if(exp.type == Type.STRING){
                return { value: exp.value.toLowerCase(), type: Type.STRING}
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible debe ser STRING",this.line,this.column))
            }
        }else if(this.type == FunctionOptions.UPPER){
            if(exp.type == Type.STRING){
                return { value: exp.value.toUpperCase(), type: Type.STRING}
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible debe ser STRING",this.line,this.column))
            }
        }else if(this.type == FunctionOptions.ROUND){
            if(exp.type == Type.DOUBLE){
                return { value: Math.round(exp.value), type: Type.DOUBLE}
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible debe ser DOUBLE",this.line,this.column))
            }
        }else if(this.type == FunctionOptions.LENGTH){
            let arr:any = Array.from(exp.value)
            return { value: arr.length, type: Type.INT}
        }else if(this.type == FunctionOptions.TYPEOF){
            if(exp.type == Type.INT){
                return { value: "int", type: Type.STRING}
            }else if(exp.type == Type.DOUBLE){
                return { value: "double", type: Type.STRING}
            }else if(exp.type == Type.BOOLEAN){
                return { value: "boolean", type: Type.STRING}
            }else if(exp.type == Type.CHAR){
                return { value: "char", type: Type.STRING}
            }else if(exp.type == Type.STRING){
                return { value: "string", type: Type.STRING}
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible",this.line,this.column))
            }
        }else if(this.type == FunctionOptions.TOSTRING){
            return { value: exp.value.toString(), type: Type.STRING}
        }else if(this.type == FunctionOptions.TOCHAR){
            if(exp.type == Type.STRING){
                let valor = exp.value.split('')
                return {value: valor, type: Type.CHAR}
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible debe ser STRING",this.line,this.column))
            }
        }

        return { value: null, type: Type.error }
    }
    public save(env:ENV){}

    public ast(){
        let arb:string = "nodo"+this.line+this.column+";\n"
        arb+="nodo"+this.line+this.column+"[label =\"Instruccion\"];\n"

        if(this.type == FunctionOptions.LOWER){
            arb+="nodo1"+this.line+this.column+"[label =\"toLower()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.UPPER){
            arb+="nodo1"+this.line+this.column+"[label =\"toUpper()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.ROUND){
            arb+="nodo1"+this.line+this.column+"[label =\"round()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.LENGTH){
            arb+="nodo1"+this.line+this.column+"[label =\"length()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.TYPEOF){
            arb+="nodo1"+this.line+this.column+"[label =\"typeof()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.TOSTRING){
            arb+="nodo1"+this.line+this.column+"[label =\"toString()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }else if(this.type == FunctionOptions.TOCHAR){
            arb+="nodo1"+this.line+this.column+"[label =\"toCharArray()\"];\n"
            arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)+"\n"
            return arb
        }
    }
  }

  export enum FunctionOptions{
        LOWER,
        UPPER,
        ROUND,
        LENGTH,
        TYPEOF,
        TOSTRING,
        TOCHAR
  }