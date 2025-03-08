// En rutas/mostrarClientesRuta.js
const express = require('express');
const { mostrarComuneros } = require('../controladores/mostrarComunerosControlador');

const router = express.Router();
router.get('/comuneros', mostrarComuneros);

module.exports = router;