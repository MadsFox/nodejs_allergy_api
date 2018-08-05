var Users = require('../models/users');

module.exports= [
  {
    method: 'POST',
    path: '/users/',
    handler: function(req, res){
      console.log("POST: user req.body: " + JSON.stringify(req.body));
      Users.create(req.body.username, req.body.firstname, req.body.lastname, req.body.picture, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'PUT',
    path: '/users/',
    handler: function(req, res){
      console.log("PUT: user req.body: " + JSON.stringify(req.body));
      Users.create(req.body.username, req.body.firstname, req.body.lastname, req.body.picture, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'GET',
    path: '/users/',
    handler: function(req, res){
      console.log("getting all users");
      Users.getAll(function(err, docs){
        if (err) res.send(err)
        res.json(docs)
      })
    }
  },{
    method: 'GET',
    path: '/users/{id}',
    handler: function(req, res){
      console.log("getting user: " + req.params.id);
      Users.getById(req.params.id, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No user with id: ' + req.params.id);
        }
        res.json(docs)
        })
      }
  },{
    method: 'GET',
    path: '/users{username}',
    handler: function(req, res){
      console.log("getting user: " + req.params.ean);
      Users.getByEan(req.params.username, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No user with ean: ' + req.params.ean);
        }
        res.json(docs)
      })
    }
  }];