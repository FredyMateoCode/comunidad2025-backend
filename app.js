//Sección para importar las dependecias: Siempre lo referenciamos o almacenamos en una constante.
require('dotenv').config();//Para utilizar las variables de entorno.
const express = require('express'); // Para crear el servidor de backend.
const app = express(); //Instancia para crear el servidor y manejara las rutas
const PORT = process.env.PORT || 5000;




const cors = require("cors");

// Habilitar CORS para permitir peticiones desde el frontend
app.use(cors());





//Importamos las rutas dentro de una constante.
const mostrarUsuariosRuta = require ('./rutas/mostrarUsuariosRuta');

//Permite que el backend reciba datos en FORMATO JSON
app.use(express.json());

//Servimos las rutas
app.use('/mostrarUsuarios', mostrarUsuariosRuta);

//Iniciamos el servidor con un puerto especifico.
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

//
app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor <<Comunidad>> ejecutandose en el puerto ${PORT}');
});