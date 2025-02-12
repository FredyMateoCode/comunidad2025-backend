//Importamos la función creada en el modelo
const {obtenerUsuarios} = require('../modelos/mostrarUsuariosModelo.js');

/* Definimos el controlador de express: En controladores/mostrarUsuariosControlador.js
Para obtener los datos de la base de datos y enviarlos al frontend en formato Json.
->Los controladores manejan las solicitudes GET, POST y otros:
req = requerimiento HTTP del frontend.
res = respuesta HTTP que el servidor enviará al frontend.
err = maneja los errores.
return = se utiliza para evitar que el código siga ejecutandose.*/
const mostrarUsuarios = (req, res) => {
    obtenerUsuarios((err, resultados)=>{
        if(err){
            return res.status(500).json({error: 'Error al obtener los usuarios'});
        }
        //Si en caso no hay error, renderizamos los resultados en formato json, para mostrar en el frontend.
        res.json(resultados);
        /*Mostramos los resultados en consola ya no es necesario coniderarlo en PRODUCCION
        porque podría exponer datos sencibles*/
        console.log('Datos Obtenidos', resultados);
    });
};

// Exportamos la función mostrarUsuarios para que pueda ser accesible desde otros lados.
module.exports = { mostrarUsuarios };