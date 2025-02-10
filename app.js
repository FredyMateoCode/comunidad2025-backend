//Importamos las librerias necesarias:
require('dotenv').config();//Para utilizar las variables de entorno.
const express = require('express'); // Para crear el servidor de backend.
const app = express(); //Instancia para crear el servidor y manejara las rutas
const PORT = process.env.PORT || 5000;

const mostrarUsuariosRuta = require ('./rutas/mostrarUsuariosRuta');

app.use(express.json());

app.use('/mostrarUsuarios', mostrarUsuariosRuta);

//Iniciamos el servidor con un puerto especifico.
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

app.listen(PORT, () => {
    console.log('Servidor <<Comunidad>> ejecutandose en el puerto ${PORT}');
});