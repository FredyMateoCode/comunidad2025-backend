// En modelos/mostrarProveedoresModelo.js
const conexion = require('../configuracion/conexion.js');

const obtenerComuneros = (callback) => {
    //const consulta = 'SELECT id_prov, nombre_prov, ruc_prov, celular_prov, direccion_prov FROM proveedores';
    const consulta = 'SELECT id_com, dni_com, apellidos_com, nombres_com, majada_com, carne_com, condicion_com, caserio_com FROM comuneros';
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, resultados);
    });
};

module.exports = { obtenerComuneros };


majada_com, carne_com, condicion_com, caserio_com