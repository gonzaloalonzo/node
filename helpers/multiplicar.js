const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, m = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= m; i++) {
      salida += `${base}  X  ${i} = ${base * i}\n`;
      consola += `${base} ${"X".yellow} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("===============".rainbow);
      console.log(`  tabla del ${base}`.blue.underline);
      console.log("===============".rainbow);
      console.log(`${consola}`);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo

};
