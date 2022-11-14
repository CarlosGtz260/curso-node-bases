const fs = require('fs');
const crearArchivo = async ( base  = 1, h = 10, l = false) =>{
    try{
        let path = `./salida/tabla-${base}-hasta${h}.txt` ;
        let salida = "";
        for(let i = 1 ; i <= h; i++ ){   
                salida +=  `${ base } x ${ i } = ${ base * i } \n`;
        }
        if(l)
            console.log(salida);            
        fs.writeFileSync(path, salida);
        return path;
    }catch(err){
        throw err;
    }
}

module.exports = {
     crearArchivo
}