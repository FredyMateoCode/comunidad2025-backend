//Importamos la conexion para poder acceder a la base de datos.
const conexion = require('../configuracion/conexion.js');

/*Declaramos la funcion obtenerUsuarios con un metodo callback (argumentos->err o res),
 para obtener todos los usuarios de la base de datos */

const obtenerUsuarios = (callback) => {
    //Creamos la consulta como una constante para obtener todos los usuarios.
    const consulta = 'SELECT id_usuario, nombre_usuario FROM usuarios';
    conexion.query(consulta, (err, resultados) => {
        if (err){
            return callback(err, null);
        }
            callback(null, resultados);
        });
};

module.exports = { obtenerUsuarios };