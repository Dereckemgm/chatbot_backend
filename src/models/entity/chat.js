const { DataTypes } = require('sequelize');
const sequelize = require('../../config/data/db'); // Ajusta la ruta según tu estructura

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mensaje_usuario: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  respuesta_chatbot: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'mensajes', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva la creación de createdAt y updatedAt automáticamente
});

module.exports = Chat;
