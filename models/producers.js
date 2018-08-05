const db = require('../db.js');
const sequelize = db.sequelize;
/*
const Producer = sequelize.define('producers', {
  id: { 
    type: sequelize.INTEGER, 
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: sequelize.STRING,
  logo: sequelize.BLOB,
  ean: sequelize.INTEGER
});

exports.create = function(name, logo, ean){
  Producer.upsert({
    name: name,
    logo: logo,
    ean: ean,
  });
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
  Producer.findAll();
}*/