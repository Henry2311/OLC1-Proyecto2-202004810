import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class DeclaracionV extends Instruction {
    
    constructor(
      public id: string,
      public type: Type,
      public expression1:Expression|null,
      public expression2:Expression|null,
      public list:any [] | null,
      public sw:number,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
        let exp1 = this.expression1?.run(env)
        let exp2 = this.expression2?.run(env)

        if(exp1 != null && exp2 == null && this.list == null){
            if(exp1.type == Type.INT){
                let valueA: any[] = [];
                for(let i=0;i<exp1.value;i++){
                    valueA.push('*')
                }
                console.log(valueA)
                const aux = env.saveVar(this.id,valueA,this.type)
                if (aux){
                    console.log("vector ["+this.id+"] ingresada...");
                }else{
                    console.log("vector ["+this.id+"] no ingresada...");
                }
            }else{
                console.log("No es el tipo de dato correcto")
            }
        }else if(exp1 != null && exp2 !=null && this.list == null){
            if(exp1.type == Type.INT && exp2.type == Type.INT){
                let valueA: any[] = [];
                let valueB: any [] = [];
                for(let i=0;i<exp1.value;i++){
                    for(let j=0;j<exp2.value;j++){
                        valueB.push('*')
                    }
                    valueA.push(valueB)
                    valueB = []
                }
                console.log(valueA)
                const aux = env.saveVar(this.id,valueA,this.type)
                if (aux){
                    console.log("vector 2D ["+this.id+"] ingresada...");
                }else{
                    console.log("vector 2D ["+this.id+"] no ingresada...");
                }
            }else{
                console.log("No es el tipo de dato correcto")
            }
        }else if(exp1 == null && exp2 == null && this.list != null){
            if(this.sw == 0){
                //vector
                for(let i = 0; i<this.list.length;i++){
                    this.list[i]=this.list[i].run()
                }
                let aux:boolean = false;
                for(let i = 0; i<this.list.length;i++){
                    (this.list[i].type == this.type)?aux=true:aux = false;
                    if(!aux) break
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type)
                    if (aux){
                        console.log("vector ["+this.id+"] ingresada... ");
                    }else{
                        console.log("vector ["+this.id+"] no ingresada...");
                    }
                }
            }else{
                //matriz
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        this.list[i][j]=this.list[i][j].run()
                    }
                }
                let aux:boolean = false;
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        (this.list[i][j].type == this.type)?aux=true:aux = false;
                        if(!aux) break
                    }
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type)
                    if (aux){
                        console.log("vector 2D ["+this.id+"] ingresada... ");
                    }else{
                        console.log("vector 2D ["+this.id+"] no ingresada...");
                    }
                }
            }
        }
    }
  }