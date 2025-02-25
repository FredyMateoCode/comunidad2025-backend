//Importamos la conexion para poder acceder a la base de datos.
const conexion = require('../configuracion/conexion.js');

/*Declaramos la funcion obtenerUsuarios con un metodo callback (argumentos->err o res),
 para obtener todos los usuarios de la base de datos y mostrar error de ser el caso*/
const obtenerUsuarios = (callback) => {
    //Creamos la consulta como una CONSTANTE para obtener todos los usuarios de la base de datos.
    const consulta = 'SELECT * FROM usuarios';
    //Ejecutamos la consulta y Hacemos un callback:
    //El callback tiene dos parámetros, uno para manejar los errores y otro para los resultados.
    //conexion.query es un método del mysql para realizar consultas en una base de datos:
    //Consulta es un parámetro del método que en este caso contiene todo la consulta.
    conexion.query(consulta, (err, resultados) => {
        if (err){
            //Si hay un error lo devuelve en el primer argumento y el segundo lo devuelve como nulo.
            return callback(err, null);
        }
            //Si no hay un error, devuelve el primer argumento como nulo y el segundo muestra los resultados.
            callback(null, resultados);
        });
};

//Exportamos la función para que pueda ser utilizada en otras partes del proyecto:
module.exports = { obtenerUsuarios };