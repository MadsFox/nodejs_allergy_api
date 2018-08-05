var db = require('../db.js');
var sequelize = require('sequelize');

const User = sequelize.define('users', {
  id: { type: sequelize.INTEGER, primaryKey: true},
  username: sequelize.STRING,
  firstname: sequelize.STRING,
  lastname: sequelize.STRING,
  picture: sequelize.BLOB
})

exports.create = function(username, firstname, lastname, picture){
  User.upsert({
    username: username,
    firstname: firstname,
    lastname: lastname,
    picture: picture
  });
}

exports.getAll = function(done){
  User.findAll();
}

exports.getAllUsername = function(username){
  User.findAll({
    where: {
      username: username
    }
  });
}