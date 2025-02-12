// configuracion/conexion.js
require ('dotenv').config();
const mysql = require('mysql2');//Importamos la libreria 

//Creamos una insancia para la conexión:
const conexion = mysql.createConnection({
    host: process.env.MYSQLHOST,// Direción de Servidor local.
    user: process.env.MYSQLUSER, // Usuario de mysql para acceder a la base de datos.
    password: process.env.MYSQLPASSWORD, // Contraseña de usuario para acceder a mysql.
    database: process.env.MYSQLDATABASE,// Nobre de la base de datos desde la variable de entorno.
    port: process.env.MYSQLPORT // Nombre de la base de datos al que nos vamos a conectar.
});

//Utilizamos la conexión:
conexion.connect((error) => {
    if (error) {
        console.error('❌ Error de conexión a MySQL:', error);//Muestra el error si ubiese durante la conexion.
    } else {
        console.log('✅ Conexión exitosa a la Base de Datos Comunidad');// Mensaje de confirmación de de la conexión.
    }
});

module.exports = conexion;//Exportamos la conexión de la base datos para poder utilizarlo en otras partes del proyecto.