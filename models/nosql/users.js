
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: false,
    default: 'students',
    emun: ['admin', 'tutor', 'students']
  },


}, {
  timestamps: true,
  versionKey: false,
});


module.exports = model('users', UsuarioSchema);
