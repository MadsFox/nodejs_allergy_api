var db = require('../db.js');
var sequelize = db.sequelize;

const Product = sequelize.define('products', {
  id: { type: sequelize.INTEGER, primaryKey: true},
  name: sequelize.STRING,
  picture: sequelize.BLOB,
  ingredientsPicture: sequelize.BLOB,
  producerId: sequelize.INTEGER,
  ean: sequelize.INTEGER,
  creationDate: sequelize.DATE,
  createdByUser: sequelize.INTEGER,
  lastScan: sequelize.DATE,
  oldProductId: sequelize.INTEGER
});


exports.create = function(name, picture, ingredientsPicture, producerId, ean, createdByUser){
  Product.upsert({
    name: name,
    picture: picture,
    ingredientsPicture: ingredientsPicture,
    producerId: producerId,
    ean: ean,
    createdByUser: createdByUser
  });
}

exports.getAll = function(done){
  Product.findAll();
}

exports.getAllByUser = function(userId){
  Product.findAll({
    where: {
      createdByUser: userId
    }
  });
}

exports.getByEan = function(ean){
  Product.findAll({
    where: {
      ean: ean
    }
  });
}