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
      public fun: Expression | null,
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
                if(this.type == Type.INT){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(0)
                    }
                }else if(this.type == Type.DOUBLE){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(0.0)
                    }
                }else if(this.type == Type.BOOLEAN){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push(true)
                    }
                }else if(this.type == Type.CHAR){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push('0')
                    }
                }else if(this.type == Type.STRING){
                    for(let i=0;i<exp1.value;i++){
                        valueA.push("")
                    }
                }
                
                console.log(valueA)
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
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
                if(this.type == Type.INT){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(0)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.DOUBLE){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(0.0)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.BOOLEAN){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push(true)
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.CHAR){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push('0')
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }else if(this.type == Type.STRING){
                    for(let i=0;i<exp1.value;i++){
                        for(let j=0;j<exp2.value;j++){
                            valueB.push("")
                        }
                        valueA.push(valueB)
                        valueB = []
                    }
                }
                
                console.log(valueA)
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
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
                    if(this.list[i].type == this.type){
                        aux = true
                        this.list[i] = this.list[i].value
                    }else aux = false;

                    if(!aux) break
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type,null,null)
                    if (aux){
                        console.log("vector ["+this.id+"] ingresada... ");
                    }else{
                        console.log("vector ["+this.id+"] no ingresada...");
                    }
                }
            }else if(this.sw == 1){
                //matriz
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        this.list[i][j]=this.list[i][j].run()
                    }
                }
                let aux:boolean = false;
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        if(this.list[i][j].type == this.type){
                            aux = true
                            this.list[i][j] = this.list[i][j].value
                        }else aux = false;

                        if(!aux) break
                    }
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type,null,null)
                    if (aux){
                        console.log("vector 2D ["+this.id+"] ingresada... ");
                    }else{
                        console.log("vector 2D ["+this.id+"] no ingresada...");
                    }
                }
            }
        }else if(exp1 == null && exp2 == null && this.list == null &&  this.fun!=null){
            let arr = this.fun?.run(env)  
            if(arr!=null){
                let valor = []
                for(const i of arr.value){
                    valor.push(i)
                }
                console.log(arr.value)
                const aux = env.saveVar(this.id,valor,Type.CHAR,null,null)
                if (aux){
                    console.log("vector 2D ["+this.id+"] ingresada... ");
                }else{
                    console.log("vector 2D ["+this.id+"] no ingresada...");
                }
            }
        }
    }
    public save(env: ENV) {
    }
  }