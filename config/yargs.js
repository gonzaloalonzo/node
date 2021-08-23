const yargs = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    default: false,
    type: "boolean",
    describe: "Muestra Tabla en consola",
  })
  .option("m", {
    alias: "Multiplicador",
    type: "number",
    default: 10,
    describe: "Multiplicador de la base",
  }).argv;

module.exports = argv;
