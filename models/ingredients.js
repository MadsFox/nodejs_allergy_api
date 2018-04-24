var db = require('../db.js');

exports.create = function(){};

exports.getAll = function(done){
  db.get().query('SELECT * FROM ingredients', function(err, rows){
    if (err) return done(err)
    done(null, rows)
  })
};

exports.getAllByUser = function(){};