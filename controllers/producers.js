//var express = require('express');
//var router = express.Router();
var server = require('hapi');

var Producers = require('../models/producers');

module.exports= [
{
  method: 'POST',
  path: '/producers/',
  handler: function(req, res){
    console.log("POST: producer req.body: " + JSON.stringify(req.body));
    Producers.create(req.body.name, req.body.logo, req.body.ean, function(err, docs){
      if (err) res.send(err)
      res.json(docs);
    })
  }
},{
  method: 'PUT',
  path: '/producers/',
  handler: function(req, res){
    console.log("PUT: producer req.body: " + JSON.stringify(req.body));
    Producers.create(req.body.name, req.body.logo, req.body.ean, function(err, docs){
      if (err) res.send(err)
      res.json(docs);
    })
  }
},{
  method: 'GET',
  path: '/producers/',
  handler: function(req, res){
    console.log("getting all producers");
    Producers.getAll(function(err, docs){
      res.json(docs)
    })
  }
},{
  method: 'GET',
  path: '/producers/{id}',
  handler: function(req, res){
    console.log("getting producer: " + req.params.id);
      Producers.getById(req.params.id, function(err, docs){
        if(docs[0]==null){
          res.status(404);
          res.send('No producer with id: ' + req.params.id);
        }
        res.json(docs)
      })
    }
},{
  method: 'GET',
  path: '/producers{ean}',
  handler: function(req, res){
    console.log("getting producer: " + req.params.ean);
    Producers.getByEan(req.params.ean, function(err, docs){
      if(docs[0]==null){
        res.status(404);
        res.send('No producer with ean: ' + req.params.ean);
      }
      res.json(docs)
    })
  }
}];