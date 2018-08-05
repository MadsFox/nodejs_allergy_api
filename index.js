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
const host = parseInt(process.env.HOST) || 'localhost';
console.log("host: " + host + " - port: " + port);
const server = Hapi.server({
  host: host,
  port: port
});

server.route(routes);

//Starting hapi server
const init = async() => {
  await server.register(require('vision'));
  //set up template engines
  server.views({
    engines: {
      ejs: ejs
    }//,
    //relativeTo: __dirname,
    //path: './views',
    //helpersPath: './controllers'
  });
  console.log("View has been set");
  await server.start();
  console.log("Server is running at: " + server.info.uri);
};

init();

console.log("Server has been initiated");

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});