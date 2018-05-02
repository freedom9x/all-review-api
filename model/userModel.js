const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  pwd: String,
  age: Number,
  isMale: Boolean,
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
