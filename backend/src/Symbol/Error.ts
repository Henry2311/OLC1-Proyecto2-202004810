export class Errores{
    constructor(
        public type:string,
        public descripcion:string,
        public line:number,
        public column:number
    ){}

}