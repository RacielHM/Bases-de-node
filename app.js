
//Split trae el ultimo caracter que le indiques en este caso Raciel indico e traera l

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l,argv.h)
  .then( nombreArchivo => console.log(nombreArchivo.rainbow))
  .catch( err => console.log(err));
