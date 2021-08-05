const argv = require('yargs')
                      .option({
                        b: {
                        alias:'base',
                        type: 'number',
                        demandOption:true,
                        describe: 'Es la base de la tabla a multiplicar'
                      },
                        l: {
                        alias:     'listar',
                        default:   false,
                        type:      'boolean',
                        describe: 'Muestra la tabla a multiplicar'
                    },
                      h: {
                        alias:'hasta',
                        type: 'number',
                        describe: 'Es el numero hasta donde quieres la tabla'
                      }
                      })
                      .check( (argv,options) => {
                        if( isNaN( argv.b) ){
                          throw 'La base tiene que ser un numero';
                        }
                        return true;
                      } )
                      .argv;

module.exports = argv;