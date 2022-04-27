import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
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

        if(env.search(this.nombre)){
            if(indice2 == null){
                let arr = env.getValue(this.nombre)
                if(indice1.type == Type.INT){
                    if(exp.type == env.getType(this.nombre)){
                        arr[indice1.value] = exp.value
                        env.setVar(this.nombre,arr)
                        console.log("vector ["+this.nombre+"] actualizado con exito...");
                    }
                }
            }else{
                let arr = env.getValue(this.nombre)
                if(indice1.type == Type.INT && indice2.type == Type.INT){
                    if(exp.type == env.getType(this.nombre)){
                        arr[indice1.value][indice2.value] = exp.value
                        env.setVar(this.nombre,arr)
                        console.log("Matriz ["+this.nombre+"] actualizado con exito...");
                    }
                }
            }
        }

    }
    public save(env: ENV) {
    }
}