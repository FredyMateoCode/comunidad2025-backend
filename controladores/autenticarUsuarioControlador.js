const bcrypt = require('bcrypt'); // Para encriptar contraseña
const autenticarUsuario = require('../modelos/autenticarUsuarioModelo'); // Importamos el modelo
const generarJWT = require('../Utilidades/generarJWT'); // Importamos la función para generar tokens

// Función para autenticar al usuario
const autenticarUsuarioControlador = async (req, res) => {
    const { usuario: usuarioRecibido, password } = req.body; // Recibimos los datos enviados desde el frontend
    console.log("Datos recibidos del Frontend:", req.body);

    try {
        // Llamamos al modelo para obtener los datos del usuario por username
        const usuarioConsultado = await autenticarUsuario(usuarioRecibido);
        console.log("Usuario consultado:", usuarioConsultado);

        // Si no encontramos un usuario, respondemos con error
        if (!usuarioConsultado) {
            return res.status(401).json({ mensaje: 'ACCESO DENEGADO. Usuario o contraseña incorrectos' });
        }

        // Verificar la contraseña con bcrypt
        console.log("Datos recibidos del Frontend:", req.body);
        console.log("Usuario consultado:", usuarioConsultado);
        console.log("Contraseña ingresada:", password);
        console.log("Contraseña en BD:", usuarioConsultado?.password_usuario);
        console.log("Contraseña en BD:", usuarioConsultado?.password_usuario);
        const passwordMatch = await bcrypt.compare(password, usuarioConsultado.password_usuario);

        if (!passwordMatch) {
            return res.status(401).json({ mensaje: 'ACCESO DENEGADO. Usuario o contraseña incorrectos' });
        }

        // Generar un token JWT usando el ID y el rol del usuario
        const token = generarJWT(usuarioConsultado.id_usuario, usuarioConsultado.rol, usuarioConsultado.usuario_usuario);

        // Responder con el token y los datos del usuario
        return res.json({
            mensaje: 'Acceso concedido',
            token, // Incluimos el token en la respuesta
            usuario: {
                id_usuario: usuarioConsultado.id_usuario,
                nombre_usuario: usuarioConsultado.usuario_usuario,
                rol: usuarioConsultado.rol
            }
        });

    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = autenticarUsuarioControlador; // Exportamos el controlador
