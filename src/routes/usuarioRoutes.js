// src/routes/userRoutes.js
const express = require('express');
const {ingresarUsuario,obtenerUsuarios} = require('../controllers/usuarioController');  // Importa el controlador
const router = express.Router();

// Ruta para crear un usuario
router.post('/crearusuario', ingresarUsuario);
router.get('/obtenerusuarios', obtenerUsuarios);

module.exports = router;
