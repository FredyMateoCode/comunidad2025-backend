const bcrypt = require('bcrypt');

const encriptarClave = async () => {
    const passwordPlano = '1234';
    const saltRounds = 10; // Número de rondas de encriptación
    const hash = await bcrypt.hash(passwordPlano, saltRounds);
    
    console.log('Contraseña encriptada:', hash);
};

encriptarClave();
