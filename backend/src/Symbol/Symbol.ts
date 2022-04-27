import { Instruction } from "../Abstract/Instruction";
import { Declaracion } from "../Instructions/Declaracion";
import { Type } from "./type";

export class Symbol {
    constructor(public value: any, 
                public id: string, 
                public type: Type,
                public instruction: Array<Instruction>| null,
                public parameter: Array<Declaracion> | null){}
}