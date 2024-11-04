// src/controllers/reservas/usuarioController.js
const Usuario = require('../models/entity/usuario'); // Importa el modelo

// Función para crear un usuario
const ingresarUsuario = async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body;

    const nuevoUsuario = await Usuario.create({
      nombre,
      email,
      contraseña,
    });

    res.status(201).json({
      mensaje: 'Usuario creado',
      usuario: nuevoUsuario,
    });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' });
  }
};

// Función para obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
};

module.exports = {
  ingresarUsuario,
  obtenerUsuarios,
};
