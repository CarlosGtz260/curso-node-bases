const argv = require('yargs')
    .options({
        'b':{
            alias: "base",
            type: 'number',
            demandOption: true,
            describe: "base de multiplicar"  
        },
        'h':{
            alias: "hasta",
            type: 'number',
            demandOption: true,
            describe: "hasta que número"  
        },
        'l':{
            alias: "list",
            type: 'boolean',
            default: false,
            demandOption: false,
            describe: "lista en consola"  

        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        if(isNaN(argv.h)){
            throw 'hasta tiene que ser un número'
        }
        return true;
    })
    .argv;


    module.exports = {
        argv
   }