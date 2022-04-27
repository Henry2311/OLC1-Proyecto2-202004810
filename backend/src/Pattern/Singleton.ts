import { Errores } from "../Symbol/error";
import { Symbol } from "../Symbol/Symbol";

export class Singleton{

    private static instance: Singleton

    private consola: string = ""
    private symbols:Map<string, Symbol> = new Map() 
    private errores:Array<Errores> = new Array()

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public addConsola(data:string){
        this.consola+= data
    }
    public getConsola():string{
        return this.consola
    }

    public addSymbols(data:Map<string,Symbol>){
        this.symbols = data
    }
    public getSymbols(){
        return this.symbols
    }

    public addError(data:Errores){
        this.errores.push(data)
    }

    public getError():string{
        let content = ""
        if(this.errores.length>0){
            for(let i=0;i<this.errores.length;i++){
                content+="Error: "+this.errores[i].type+" Descripcion: "+this.errores[i].descripcion+"\n"
            }
        }else{
            content = "No hay errores"
        }
        
        return content
    }

}