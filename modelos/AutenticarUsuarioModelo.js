const conexion = require('../configuracion/conexion'); // Importamos la conexión correctamente

const autenticarUsuario = async (username) => {
    console.log("Valor recibido en el backend:", username);

    const consulta = `
        SELECT u.id_usuario, u.usuario_usuario, u.nombres_usuario, u.apellidos_usuario, 
        u.password_usuario, r.nombre_rol AS roles
        FROM usuarios u
        JOIN roles r ON u.id_rol = r.id_rol
        WHERE u.usuario_usuario = ?`;

    return new Promise((resolve, reject) => {
        conexion.query(consulta, [username], (err, results) => {
            if (err) {
                console.error("Error en la consulta SQL:", err);
                return reject(err); // Rechazamos el error
            }

            // Verificar si `results` está definido antes de acceder a `length`
            if (!results || results.length === 0) {
                console.log("Usuario no encontrado.");
                return resolve(null);
            }

            resolve(results[0]); // Retornar el primer resultado
        });
    });
};

module.exports = autenticarUsuario;
