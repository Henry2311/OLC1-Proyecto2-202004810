import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Errores } from "../Symbol/error";
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
        var s = Singleton.getInstance()

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
                }else{
                    s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                }
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible, para los indices del vector",this.line,this.column))
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
                }else{
                    s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                }
                const aux = env.saveVar(this.id,valueA,this.type,null,null)
            }else{
                s.addError(new Errores("Semantico","Tipo de dato incompatible, para los indices del vector",this.line,this.column))
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

                    if(!aux){
                        s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                        break
                    }
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type,null,null)
                }
            }else if(this.sw == 1){
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

                        if(!aux){
                            s.addError(new Errores("Semantico","Tipo de dato incompatible, no se puede asignar el valor a "+this.id,this.line,this.column))
                            break
                        }
                    }
                }
                if(aux){
                    const aux = env.saveVar(this.id,this.list,this.type,null,null)
                }
            }
        }else if(exp1 == null && exp2 == null && this.list == null &&  this.fun!=null){
            let arr = this.fun?.run(env)  
            if(arr!=null){
                let valor = []
                for(const i of arr.value){
                    valor.push(i)
                }
                const aux = env.saveVar(this.id,valor,Type.CHAR,null,null)
            }
        }
    }
    
    public save(env: ENV) {}

    public ast(){
        var s = Singleton.getInstance()
        let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
        arb+="nodo1"+this.line+this.column+"[label = \"Declaracion vector\"];\n"
        arb+="nodo2"+this.line+this.column+"[label = \""+this.id+"\"];\n"
        arb+="nodo3"+this.line+this.column+"[label = \""+this.getTipo(this.type)+"\"];\n"

        arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
        arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"


        if(this.expression1 != null && this.expression2 == null && this.list == null){
            arb+="nodo1"+this.line+this.column+" -> "+this.expression1.ast(this.line+2,this.column+2)+"\n"
        }else if(this.expression1 != null && this.expression2 !=null && this.list == null){
            arb+="nodo1"+this.line+this.column+" -> "+this.expression1.ast(this.line+2,this.column+2)+"\n"
            arb+="nodo1"+this.line+this.column+" -> "+this.expression2.ast(this.line+3,this.column+3)+"\n"   
        }else if(this.expression1  == null && this.expression2 == null && this.list != null){
            if(this.sw == 0){
                for(let i = 0; i<this.list.length;i++){
                    this.list[i]=this.list[i].value
                }
            }else if(this.sw == 1){
                for(let i = 0; i<this.list.length;i++){
                    for(let j = 0; j<this.list[i].length;j++){
                        this.list[i][j]=this.list[i][j].value
                    }
                }
            }
            arb+="nodoLista"+this.line+this.column+"[label = \""+this.list+"\"];\n"
            arb+="nodo1"+this.line+this.column+" -> nodoLista"+this.line+this.column+";\n"
        }else if(this.expression1  == null && this.expression2 == null && this.list == null &&  this.fun!=null){
            arb+="nodo1"+this.line+this.column+" -> "+this.fun.ast(this.line+2,this.column+2)+"\n"
        }


        s.addAST(arb)
    }

    public getTipo(t:Type):string{
        let op:string = ""
        if(t==Type.INT){
            op = "int"
        }else if(t==Type.DOUBLE){
            op = "double"
        }else if(t==Type.STRING){
            op = "string"
        }else if(t==Type.BOOLEAN){
            op = "boolean"
        }else if(t==Type.CHAR){
            op = "char"
        }
        return op
    }
}
