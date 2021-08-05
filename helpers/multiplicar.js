const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( base  = 5, listar = false, hasta = 10) => {
    try {

        let salida, consola = '';
    
        for (let i = 1; i <= hasta; i++) {
             salida += `${ base } ` +'x' +` ${ i } ${'='} ${base * i}\n`;
             consola += `${ base } ` +'x'.trap +` ${ i } ${'='.green} ${base * i}\n`;

          }
        if (listar != false) {
             
        console.log('==================================');
        console.log(`  Tabla del: ${base}`.red);
        console.log('==================================');
          
            console.log(consola);       
        }else{
            console.log('necesitar enviar listar');
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
          
        return(`tabla-${base}.txt creado`);     
        
        
    } catch (error) {
         throw error;
    }
   


}

module.exports = {
    crearArchivo
}