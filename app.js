//Importamos las librerias necesarias:
const express = require('express'); // Para crear el servidor de backend.
const app = express(); //Instancia para crear el servidor y manejara las rutas
const mostrarUsuariosRuta = require ('./rutas/mostrarUsuariosRuta');


app.use(express.json());


app.use('/mostrarUsuarios', mostrarUsuariosRuta);


//Iniciamos el servidor con un puerto especifico.
app.listen(4000, '0.0.0.0', ()=> {
    console.log('Servidor <<Comunidad>> ejecutandose en el puerto 4000');
});