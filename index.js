//const bodyParser = require('body-parser');
//const express = require('express');
const db = require('./db.js');
const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const ejs = require('ejs');
const Sequelize = require('sequelize'); 
const routes = require('./controllers/index');

//Setting up server with Hapi
const port = process.env.PORT || 3000;
const server = Hapi.server({
  port: port,
  host: 'localhost'
});

server.route(routes);

//Starting hapi server
const init = async() => {
  await server.register(require('vision'));
  console.log("Server is running at: " + server.info.uri);
  //set up template engines
  server.views({
    engines: {
      html: ejs
    },
    relativeTo: __dirname,
    path: './views',
    //helpersPath: './controllers'
  });
  console.log("View has been set");
};

init();

console.log("Server has been initiated");

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
//server.connection({ port: port});

//handels get requests on root
//server.route.get("/", function(req, res){
//  res.render('index');
//}) 

//controllers
//server.use('/users', require('./controllers/users'));
//exports.use('/producers', require('./controllers/producers'));
//server.use('/products', require('./controllers/products'));
//server.use('/ingredients', require('./controllers/ingredients'));
//server.use('/allergies', require('./controllers/allergies'));

//var PRODUCTION_DB = 'allergyscandb'; //add real database name
//var TEST_DB = 'test_allergyscandb'; // add real test database name


//const sequelize = new Sequelize(PRODUCTION_DB, 'madssk', 'password', {
//  host:'localhost',
//  dialect:'mysql',
//  operationAliases:'false',
//
//  pool:{
//    max: 5,
//    min: 0,
//    acuipre: 30000,
//    idle: 10000
//  }
//});


//Connect to MySQL on start
//db.connect(password, db.MODE_PRODUCTION, function(err){
//  if (err){
//    console.log('unable to connect to MySQL.');
//    process.exit(1);
//  }else{
//    app.listen(port, function(){
//      console.log('Ready on port ' + port)
//    });
//  }
//});