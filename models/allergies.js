var db = require('../db.js');
var sequelize = require('sequelize');

const ingredients = sequelize.define('allergies', {
  id: { type: sequelize.INTEGER, primaryKey: true},
  name: sequelize.STRING,
  description: sequelize.STRING,
});

exports.create = function(name, description){
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

exports.getAllByName = function(name){
  User.findAll({
    where: {
      name: {
        [Op.iLike]: '%' + name + '%'
      }
    }
  });
}