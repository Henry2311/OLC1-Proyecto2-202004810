import { Errores } from "../Symbol/error";
import { Symbol } from "../Symbol/Symbol";
import { Type } from "../Symbol/type";

export class Singleton{

    private static instance: Singleton

    private consola: string = ""
    private symbols:Map<string, Symbol> = new Map() 
    private errores:Array<Errores> = new Array()
    private ast:string = "nodoPrincipal[label = \"Lista Instrucciones\"];\n"

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

    public getSymbols():string{
        let content = "<!DOCTYPE html>\n"
        content += "<html lang=\"en\">\n"
        content += "<head>\n"
        content += "<meta charset=\"UTF-8\">\n"
        content += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n"
        content += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
        content += "<link rel=\"stylesheet\" href=\"style.css\">\n"
        content += "<title>Reporte</title>\n"
        content += "</head>\n"
        content += "<body>\n"
        content += "<div class=\"container-table\">\n"
        content += "<div class=\"table__title1\">\n"
        content += "Tabla de Simbolos\n"
        content += "</div></div>\n"

        content += "<div id=\"main-container\">\n"
        content += "<table>\n"
        content += "<thead>\n"
        content += "<tr>\n"
        content += "<th style=\"border-top-left-radius: 20px;\">Identificador</th><th>Tipo</th><th>Tipo</th><th style=\"border-top-right-radius: 20px;\">Valor</th>\n"
        content += "</tr>\n"
        content += "</thead>\n"

        
        this.symbols.forEach(s=>{
            content+="<tr>\n"
            content+="<td style=\"color: red; font-size: 1.2rem;>"+s.id+"</td>\n"
            if(s.instruction==null && s.parameter==null){
                content+="<td style=\"color: white; font-size: 1.2rem;>Variable</td>\n"
                content+="<td style=\"color: white; font-size: 1.2rem;>"+this.getTipo(s.type)+"</td>\n"
                content+="<td style=\"color: white; font-size: 1.2rem;>"+s.value+"</td>\n"
            }else{
                content+="<td style=\"color: white; font-size: 1.2rem;>Funcion/Metodo</td>\n"
                content+="<td style=\"color: white; font-size: 1.2rem;>"+this.getTipo(s.type)+"</td>\n"
                content+="<td style=\"color: white; font-size: 1.2rem;>None</td>\n"
            }
            
            content+="</tr>\n"
        })
        
        
        content+="</table>\n"
        content+="</div>\n"
        content+="</body>\n</html>"

        return content
    }

    public addError(data:Errores){
        this.errores.push(data)
    }

    public getError():string{
        let content = "<!DOCTYPE html>\n"
        content += "<html lang=\"en\">\n"
        content += "<head>\n"
        content += "<meta charset=\"UTF-8\">\n"
        content += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n"
        content += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
        content += "<link rel=\"stylesheet\" href=\"style.css\">\n"
        content += "<title>Reporte</title>\n"
        content += "</head>\n"
        content += "<body>\n"
        content += "<div class=\"container-table\">\n"
        content += "<div class=\"table__title1\">\n"
        content += "Reporte de Errores\n"
        content += "</div></div>\n"

        content += "<div id=\"main-container\">\n"
        content += "<table>\n"
        content += "<thead>\n"
        content += "<tr>\n"
        content += "<th style=\"border-top-left-radius: 20px;\">Caracter</th><th>Tipo de Error</th><th>Fila</th><th style=\"border-top-right-radius: 20px;\">Columna</th>\n"
        content += "</tr>\n"
        content += "</thead>\n"

        if(this.errores.length>0){
            for(let i=0;i<this.errores.length;i++){
                content+="<tr>\n"
                content+="<td  style=\"color: red; font-size: 1.2rem;\">"+this.errores[i].descripcion+"</td>\n"
                content+="<td  style=\"color: red; font-size: 1.2rem;\">"+this.errores[i].type+"</td>\n"
                content+="<td  style=\"color: red; font-size: 1.2rem;\">"+this.errores[i].line+"</td>\n"
                content+="<td  style=\"color: red; font-size: 1.2rem;\">"+this.errores[i].column+"</td>\n"
                content+="</tr>\n"
            }
        }else{
            content+="<tr>\n"
            content+="<td>No hay errores</td>\n"
            content+="</tr>\n"
        }
        
        content+="</table>\n"
        content+="</div>\n"
        content+="</body>\n</html>"

        return content
    }

    public addAST(data:string){
        this.ast += data
    }
    public getAST(){
        return this.ast
    }

    public reset(){
        this.consola= ""
        this.symbols= new Map() 
        this.errores= new Array()
        this.ast= "nodoPrincipal[label = \"Lista Instrucciones\"];\n"
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
        }else if(t==Type.VOID){
            op = "void"
        }
        return op
    }

}