const express = require('express');
const router = express.Router();
const { crearMensaje } = require('../controllers/chatController');

// Ruta para crear un nuevo mensaje
router.post('/mensajes', crearMensaje);

module.exports = router;
