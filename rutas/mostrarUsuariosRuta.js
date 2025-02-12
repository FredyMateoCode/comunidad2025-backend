/*Creamos la rutas para mostrar los usuarios obtenidos mediante la consulta del modelo,
de forma modularizado*/
//Importa Express para usar y gestionar el sistema de rutas:
const express = require('express');

//Importamos la funcion del controlador dentro de una constante.
const { mostrarUsuarios } = require('../controladores/mostrarUsuariosControlador');

//Creamos el objeto que gestionará las rutas (ENRUTADOR) con una finalidad específica.
const ruta = express.Router();

/*Definimos una ruta según la funcionalidad, en este caso ruta de tipo GET (Obtine datos de la DB)
-URL para acceder a la ruta '/usuarios2025' y mostrarUsuarios_es la función que se ejecutará al acceder a la ruta:*/
ruta.get('/usuarios2025', mostrarUsuarios);

//Exportamos la función para ser accesible desde otros archivos por ejemplo app.js
module.exports = ruta;

