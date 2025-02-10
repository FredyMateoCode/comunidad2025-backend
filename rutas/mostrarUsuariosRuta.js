const express = require('express');

const { mostrarUsuarios } = require('../controladores/mostrarUsuariosControlador');

const ruta = express.Router();

ruta.get('/usuarios2025', mostrarUsuarios);

module.exports = ruta;

