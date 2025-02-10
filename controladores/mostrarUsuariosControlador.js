const {obtenerUsuarios} = require('../modelos/mostrarUsuariosModelo.js');
const mostrarUsuarios = (req, res) => {
    obtenerUsuarios((err, resultados)=>{
        if(err){
            return res.status(500).json({error: 'Error al obtener los usuarios'});
        }
        res.json(resultados);
        console.log('Datos Obtenidos', resultados);
    });
};

module.exports = { mostrarUsuarios };