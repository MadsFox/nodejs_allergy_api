var db = require('../db.js');

const User = sequelize.define('user', {
  id: sequelize.INTEGER,
  username: sequelize.STRING,
  firstname: sequelize.STRING,
  lastname: sequelize.STRING,
  picture: sequelize.BLOB
})

//exports.create = function(done){};
//
//exports.getById = function(id, done){
//  db.get().query('SELECT * FROM users WHERE id = ?', id, function(err, rows){
//    if (err) return done(err)
//    done(null, rows)
//  })
//};
//
//exports.getAll = function(done){
//  db.get().query('SELECT * FROM users', function(err, rows){
//    if (err) return done(err)
//    done(null, rows)
//  })
//};
//
//