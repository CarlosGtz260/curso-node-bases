
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);







/*const [,,arg3] = process.argv;
const [,base = 5] = arg3. split('=');
console.log(base);*/

crearArchivo(argv.b, argv.h, argv.l)
    .then( fileName => console.log(fileName, 'creado'))
    .catch( err => console.log(err) );

