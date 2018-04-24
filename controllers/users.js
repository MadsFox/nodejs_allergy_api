var express = require('express');
var router = express.Router();

var Users = require('../models/users');

router.get('/', function(req, res){
  console.log("getting users");

  Users.getAll(function(err, docs){
    res.setHeader('Content-Type', 'application/json');
    res.json(docs)
  })
})

router.get('/:id', function(req, res){
  console.log("getting user");
  
  Users.getById(function(err, docs){
    res.setHeader('Content-Type', 'application/json');
    res.json(docs)
  })
})

module.exports = router;