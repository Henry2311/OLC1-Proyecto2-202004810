import { ENV } from "../Symbol/Env";

export abstract class Funcion {
    constructor(public line: number, public column: number) {
      this.line = line;
      this.column = column;
    }
  
    public abstract run(env: ENV): any;

    public abstract save(env:ENV):any;
  }