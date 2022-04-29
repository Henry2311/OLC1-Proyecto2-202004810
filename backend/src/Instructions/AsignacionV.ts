import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
import { Type } from "../Symbol/type";

export class AsignacionV extends Instruction{
    constructor(
        public nombre: string,
        public x: Expression,
        public y: Expression|null,
        public valor: Expression,
        line:number,
        column:number){
            super(line,column)
        }

    public run(env: ENV) {
        const indice1 = this.x.run(env);
        const indice2 = this.y?.run(env);
        const exp = this.valor.run(env);
        var s = Singleton.getInstance()

        if(env.search(this.nombre)){
            if(indice2 == null){
                let arr = env.getValue(this.nombre)
                if(indice1.type == Type.INT){
                    if(exp.type == env.getType(this.nombre)){
                        arr[indice1.value] = exp.value
                        env.setVar(this.nombre,arr)
                    }else{
                        s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.nombre,this.line,this.column))
                    }
                }else{
                        s.addError(new Errores("Semantico","Tipo de dato incompatible para el indice del vector",this.line,this.column))
                }
            }else{
                let arr = env.getValue(this.nombre)
                if(indice1.type == Type.INT && indice2.type == Type.INT){
                    if(exp.type == env.getType(this.nombre)){
                        arr[indice1.value][indice2.value] = exp.value
                        env.setVar(this.nombre,arr)
                    }else{
                        s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.nombre,this.line,this.column))
                    }
                }else{
                    s.addError(new Errores("Semantico","Tipo de dato incompatible para el indice del vector",this.line,this.column))
                }
            }
        }else{
            s.addError(new Errores("Semantico","El vector no ha sido creada",this.line,this.column))
        }

    }
    
    public save(env: ENV) {}
    
    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Asignacion\"];\n"
        if(this.x!=null && this.y == null){
            arb+="nodo2"+this.line+this.column+"[label = \""+this.nombre+"[]\"];\n"
        }else if(this.x!=null && this.y !=null){
            arb+="nodo2"+this.line+this.column+"[label = \""+this.nombre+"[][]\"];\n"
        }

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> "+this.valor.ast(this.line+2,this.column+2)

        s.addAST(arb)
    }
}