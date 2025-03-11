//Sección para importar las dependecias: Siempre lo referenciamos o almacenamos en una constante.
require('dotenv').config();//Para utilizar las variables de entorno.
const express = require('express'); // Para crear el servidor de backend.
const app = express(); //Instancia para crear el servidor y manejara las rutas
const PORT = process.env.PORT || 5000; //Utilizará el puerto de render de lo contrario utiizará el 5000
const cors = require("cors");//Permite las peticiones de cualquier lugar

/*Rutas para servir*/
const mostrarUsuariosRuta = require ('./rutas/mostrarUsuariosRuta');//Importamos las rutas dentro de una constante.
const autenticarUsuarioRuta = require('./rutas/autenticarUsuarioRuta');

/*Utilización de dependencias*/
app.use(cors());// Habilitar CORS para permitir peticiones desde el frontend

//Permite que el backend reciba datos en FORMATO JSON
app.use(express.json());

/*--------------------SECCIÓN DE PRUEBA - IMPORTACIONES ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const mostrarComunerosRuta = require ('./rutas/mostrarComunerosRuta');//Importamos las rutas dentro de una constante.
/*--------------------SECCIÓN DE PRUEBA - IMPORTACIONES <<<<<<<<<<<<<<<<<<<<<-----------------*/


//Servimos las rutas
app.use('/mostrarUsuarios', mostrarUsuariosRuta);
app.use('/autenticarUsuarios', autenticarUsuarioRuta);



/*--------------------SECCIÓN DE PRUEBA - USO DE RUTAS Y OTROS--------------->>>>>>>>>>>>>>>>>>>>>>>>>>>*/
app.use('/mostrarComuneros', mostrarComunerosRuta);



require('dotenv').config();//Relacionado con el login
/*--------------------SECCIÓN DE PRUEBA - USO DE RUTAS Y OTROS<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------*/





//Iniciamos el servidor con un puerto especifico.
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor <<Comunidad>> ejecutándose en el puerto ${PORT}`);
});