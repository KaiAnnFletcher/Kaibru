const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: []
});

const User = mongoose.model("users", userSchema);

module.exports = User;

// 'use strict';

// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         firstname: {type:DataTypes.STRING},
//         lastname: {type:DataTypes.STRING},
//         email:    {type:DataTypes.STRING},
//         password: {type:DataTypes.STRING},
//         favourites: {type:DataTypes.JSON}
//     }); 
//     return User;
// };