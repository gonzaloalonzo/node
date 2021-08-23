const { crearArchivo } = require("./helpers/multiplicar");
const  argv  = require("./config/yargs");

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.m)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// /console.log( base );

// const base = 5;
