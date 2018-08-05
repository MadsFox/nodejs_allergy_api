var Ingredients = require('../models/ingredients');

module.exports= [
  {
    method: 'POST',
    path: '/ingredients/',
    handler: function(req, res){
      console.log("POST: ingredients req.body: " + JSON.stringify(req.body));
      Ingredients.create(req.body.name, req.body.userId, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'PUT',
    path: '/ingredients/',
    handler: function(req, res){
      console.log("PUT: ingredients req.body: " + JSON.stringify(req.body));
      Ingredients.create(req.body.name, req.body.userId, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'GET',
    path: '/ingredients/',
    handler: function(req, res){
      console.log("getting all users");
      Ingredients.getAll(function(err, docs){
        if (err) res.send(err)
        res.json(docs)
      })
    }
  },{
    method: 'GET',
    path: '/ingredients/{id}',
    handler: function(req, res){
      console.log("getting ingredient: " + req.params.id);
      Ingredients.getById(req.params.id, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No ingredient with id: ' + req.params.id);
        }
        res.json(docs)
        })
      }
  },{
    method: 'GET',
    path: '/ingredients{userid}',
    handler: function(req, res){
      console.log("getting ingredient: " + req.params.ean);
      Ingredients.getByEan(req.params.username, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No ingredient with ean: ' + req.params.ean);
        }
        res.json(docs)
      })
    }
  }];