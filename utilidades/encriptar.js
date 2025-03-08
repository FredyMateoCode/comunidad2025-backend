/*Este componente no influye en la funcionalidad del proyecto, solamente para generar claves encriptadas*/
const bcrypt = require('bcryptjs');

const encriptarClave = async () => {
    const passwordPlano = '1234';
    const saltRounds = 10; // Número de rondas de encriptación
    const hash = await bcrypt.hash(passwordPlano, saltRounds);
    
    console.log('Contraseña encriptada:', hash);
};

encriptarClave();
