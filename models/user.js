const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },  
  current_city: {
    type: String,
  },
  user_photo: {
    type: String,
  }
});

module.exports = User = mongoose.model('user', UserSchema);
