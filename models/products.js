var db = require('../db.js');

const Product = sequelize.define('product', {
  id: sequelize.INTEGER,
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


//exports.create = function(){};
//
//exports.getAll = function(done){
//  db.get().query('SELECT * FROM products', function(err, rows){
//    if (err) return done(err)
//    done(null, rows)
//  })
//};
//
//exports.getAllByUser = function(){};