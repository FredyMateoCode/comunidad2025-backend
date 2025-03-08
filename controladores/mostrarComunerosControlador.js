// En controladores/mostrarProveedoresControlador.js
const { obtenerComuneros } = require('../modelos/mostrarComunerosModelo.js');

const mostrarComuneros = (req, res) => {
    obtenerComuneros((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los Comuneros' });
        }
        //Renderizamos los resultados en formato json, para mostrar en el frontend.
        res.json(resultados);
        console.log('Datos de Comuneros Obtenidos', resultados);
    });
};

module.exports = { mostrarComuneros };
