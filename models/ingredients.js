var db = require('../db.js');
var sequelize = require('sequelize');

const ingredients = sequelize.define('ingredients', {
  id: { type: sequelize.INTEGER, primaryKey: true},
  name: sequelize.STRING,
  creationdate: sequelize.DATE,
  userid: sequelize.INTEGER
});

exports.create = function(name, userid){
  User.upsert({
    name: name,
    userid: userid
  });
}

exports.getAll = function(done){
  User.findAll();
}

exports.getAllById = function(id){
  User.findAll({
    where: {
      id: id
    }
  });
}