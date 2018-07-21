const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var PRODUCTION_DB = 'allergyscandb'; //add real database name
var TEST_DB = 'test_allergyscandb'; // add real test database name

var password = process.argv[2];

const sequelize = new Sequelize(PRODUCTION_DB, 'madssk', password, {
  host:'localhost',
  port: 3306,
  dialect:'mysql',
  operatorsAliases: false,

  pool:{
    max: 5,
    min: 0,
    acuipre: 30000,
    idle: 10000
  }
});


module.exports.sequelize = sequelize;
//exports.MODE_TEST = 'mode_test';
//exports.MODE_PRODUCTION = 'mode_production';
//
//var state = {
//  pool: null,
//  mode: null,
//};
//
//exports.connect = function(password, mode, done){
//  state.pool = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    password: password,
//    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB,
//  })
//
//  state.mode = mode;
//  done();
//};
//
//exports.get = function(){
//  return state.pool;
//};
//
//exports.fixtures = function(data){
//  var pool = state.pool;
//  if(!pool) return done(new Error('Missing database connection.'));
//
//  var names = Object.keys(data.tables)
//  async.each(names, function(name, cb){
//    async.each(data.tables[names], function(row, db){
//      var keys = Object.keys(row)
//      var values = keys.map(function(keys){
//        return "'" + row[key] + "'";
//      })
//      pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
//    }, cb)
//  }, done)
//};
//
//exports.drop = function(tables, done){
//  var pool = state.pool;
//  if (!pool) return done(new Error('Missing database connection.'));
//
//  async.each(tables, function(name, cb){
//    pool.query('DELETE * FROM ' + name, cb)
//  }, cb)
//};