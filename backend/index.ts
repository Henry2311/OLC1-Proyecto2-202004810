import { ENV } from "./src/Symbol/Env";
const parser = require("./src/Grammar/grammar");
const fs = require("fs");

try {
  const entrada = fs.readFileSync("prueba.txt");
  const ast = parser.parse(entrada.toString());
  const env = new ENV(null);

  //recorrer las instrucciones y ejecutarlas
  for (const instruccion of ast) {
    try {
      instruccion.execute(env);
    } catch (error) {
      console.log(error);
    }
  }
} catch (error) {
  console.log(error);
}