const Sequelize = require('sequelize');
const db = require('../db');
const seq = db.sequelize;

const Producer = seq.define('producer', {
  id: { type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  logo: Sequelize.BLOB,
  ean: Sequelize.INTEGER
})

exports.create = function(name, logo, ean){
  Producer.upsert({
    name: name,
    logo: logo,
    ean: ean,
  })
}

exports.getById = function(id){
  Producer.findAll({
    where: {
      id : id
    }
  });
}

exports.getByEan = function(ean){
  Producer.findAll({
    where: {
      ean : ean
    }
  });
}

exports.getAll = function(done){
  Producer.findAll()
};