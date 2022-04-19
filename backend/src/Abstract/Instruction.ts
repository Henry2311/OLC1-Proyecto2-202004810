import { ENV } from "../Symbol/Env";

export abstract class Instruction {
    constructor(public line: number, public column: number) {
      this.line = line;
      this.column = column;
    }
  
    public abstract run(env: ENV): any;
  }