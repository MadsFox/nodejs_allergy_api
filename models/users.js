var db = require('../db.js');

exports.create = function(done){};

exports.getById = function(id, done){
  db.get().query('SELECT * FROM users WHERE id = ?', id, function(err, rows){
    if (err) return done(err)
    done(null, rows)
  })
};

exports.getAll = function(done){
  db.get().query('SELECT * FROM users', function(err, rows){
    if (err) return done(err)
    done(null, rows)
  })
};

exports.getAllByUser = function(){};