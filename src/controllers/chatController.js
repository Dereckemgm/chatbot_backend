const Chat = require('../models/entity/chat'); // Asegúrate de que la ruta sea correcta

// Función para obtener todos los mensajes
const obtenerMensajes = async (req, res) => {
  try {
    // Obtener todos los mensajes en la base de datos
    const mensajes = await Chat.findAll(); // Usa `findAll` si estás usando Sequelize; para Mongoose, sería `Chat.find()`

    // Respuesta exitosa con los mensajes
    return res.status(200).json({
      success: true,
      message: 'Mensajes obtenidos exitosamente.',
      data: mensajes,
    });
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los mensajes.',
    });
  }
};

// Función para crear un nuevo mensaje
const crearMensaje = async (req, res) => {
  const { mensaje_usuario, respuesta_chatbot } = req.body; // Desestructuración del cuerpo de la solicitud

  if (!mensaje_usuario || !respuesta_chatbot) {
    return res.status(400).json({
      success: false,
      message: 'Faltan datos requeridos: mensaje_usuario y respuesta_chatbot.',
    });
  }

  try {
    // Inserta un nuevo mensaje en la base de datos
    const nuevoMensaje = await Chat.create({
      mensaje_usuario,
      respuesta_chatbot,
    });

    // Respuesta exitosa
    return res.status(201).json({
      success: true,
      message: 'Mensaje guardado exitosamente.',
      data: nuevoMensaje, // Puedes incluir el nuevo mensaje creado
    });
  } catch (error) {
    console.error('Error al crear el mensaje:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al guardar el mensaje.',
    });
  }
};

module.exports = { obtenerMensajes, crearMensaje };
