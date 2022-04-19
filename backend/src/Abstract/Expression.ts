import { ENV } from "../Symbol/Env"
import { Return } from "./Return"

export abstract class Expression {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract run(env: ENV): Return
    
}