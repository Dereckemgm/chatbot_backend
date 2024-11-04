const express = require('express');
const router = express.Router();
const { crearMensaje, obtenerMensajes } = require('../controllers/chatController');

router.get('/mensajes', obtenerMensajes);
// Ruta para crear un nuevo mensaje
router.post('/mensajes', crearMensaje);

module.exports = router;
