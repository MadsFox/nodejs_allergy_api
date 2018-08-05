var Products = require('../models/products');

module.exports= [
  {
    method: 'POST',
    path: '/products/',
    handler: function(req, res){
      console.log("POST: product req.body: " + JSON.stringify(req.body));
      Products.create(req.body.name, req.body.logo, req.body.ean, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'PUT',
    path: '/products/',
    handler: function(req, res){
      console.log("PUT: producer req.body: " + JSON.stringify(req.body));
      Products.create(req.body.name, req.body.logo, req.body.ean, function(err, docs){
        if (err) res.send(err)
        res.json(docs);
      })
    }
  },{
    method: 'GET',
    path: '/products/',
    handler: function(req, res){
      console.log("getting all products");
      Products.getAll(function(err, docs){
        if (err) res.send(err)
        res.json(docs)
      })
    }
  },{
    method: 'GET',
    path: '/products/{id}',
    handler: function(req, res){
      console.log("getting product: " + req.params.id);
      Products.getById(req.params.id, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No product with id: ' + req.params.id);
        }
        res.json(docs)
        })
      }
  },{
    method: 'GET',
    path: '/products{ean}',
    handler: function(req, res){
      console.log("getting product: " + req.params.ean);
      Products.getByEan(req.params.ean, function(err, docs){
        if (err) res.send(err)
        if(docs[0]==null){
          res.status(404);
          res.send('No product with ean: ' + req.params.ean);
        }
        res.json(docs)
      })
    }
  }];