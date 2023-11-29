const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username: String,
  password: String,
  favoriteCities: [{ type: String }], 
  token: String,
});

module.export=mongoose.model('User',userSchema);