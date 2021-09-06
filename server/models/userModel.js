const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  createdOn: { type: Date },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
