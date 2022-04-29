import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Singleton } from "../Pattern/Singleton";
import { ENV } from "../Symbol/Env";
import { Type } from "../Symbol/type";

export class cicloFor extends Instruction {
    constructor(
      public declaraccion:Instruction,
      public condicon:Expression,
      public incremento:Instruction,
      public bloque: Array<Instruction> | null,
      public transfer: Type|null,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public run(env: ENV) {
  
      const newEnv= new ENV(env)
      this.declaraccion.run(newEnv)
      let aux;

      while(this.condicon.run(newEnv).value){
        if(this.bloque!=null)
          for(const inst of this.bloque){
            let t
            if(inst!=null)t = inst.run(newEnv)
              if(t == Type.BREAK){
                aux = Type.BREAK
                break
              }else if(t == Type.CONTINUE){
                aux = Type.CONTINUE
                continue
              } 
          }
          this.incremento.run(newEnv)
          if(this.transfer != null || aux!=null){
            if(this.transfer == Type.BREAK || aux == Type.BREAK){
              break
            }else if(this.transfer == Type.CONTINUE || aux == Type.CONTINUE){
              continue
            }
          }
        }
      
    }
    
    public save(env: ENV) {}

    public ast(){
      var s = Singleton.getInstance()
      let arb = "nodo"+this.line+this.column+"[label = \"Instruccion\"];\n"
      arb+="nodo1"+this.line+this.column+"[label = \"Ciclo For\"];\n"
      arb+="nodo2"+this.line+this.column+"[label = \"For\"];\n"     //For declaracion logica incremento Lista
      arb+="nodo3"+this.line+this.column+"[label = \"Lista Instrucciones\"];\n"

      arb+="nodo"+this.line+this.column+" -> nodo1"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo2"+this.line+this.column+";\n"
      arb+="nodo1"+this.line+this.column+" -> nodo3"+this.line+this.column+";\n"

      if(this.declaraccion!=null){
        this.declaraccion.ast()
        s.addAST("nodo1"+this.line+this.column+" -> nodo"+this.declaraccion.line+this.declaraccion.column+";\n")
      }

      arb+="nodo1"+this.line+this.column+" -> "+this.condicon.ast(this.line+2,this.column+2)+"\n"
      
      if(this.incremento!=null){
        this.incremento.ast()
        s.addAST("nodo1"+this.line+this.column+" -> nodo"+this.incremento.line+this.incremento.column+";\n")
      }

      if(this.bloque!=null){
          for(const inst of this.bloque){
              if(inst!=null){
                  inst.ast()
                  s.addAST(`nodo3${this.line}${this.column} -> nodo${inst.line}${inst.column};\n`)
              }
          }
      }

      s.addAST(arb)
    }
  }