// configuracion/conexion.js
require ('dotenv').config();
const mysql = require('mysql2');//Importamos la libreria 

//Creamos una insancia para la conexión:
const conexion = mysql.createConnection({
    host: process.env.MYSQLHOST,//Direción de Servidor local
    user: process.env.MYSQLUSER, // Usuario de mysql para acceder a la base de datos
    password: process.env.MYSQLPASSWORD, // Contraseña de usuario para acceder a mysql
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT   // Nombre de la base de datos al que nos vamos a conectar
});

//Utilizamos la conexión:
conexion.connect((error) => {
    if (error) {
        console.error('❌ Error de conexión a MySQL:', error);//Muestra el error si ubiese durante la conexion.
    } else {
        console.log('✅ Conexión exitosa a la Base de Datos Comunidad');
    }
});

module.exports = conexion;//Exportamos la configuración de la base datos.