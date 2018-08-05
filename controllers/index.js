var producers = require('./producers');
var products = require('./products');
var users = require('./users');

var index = {
  method: 'GET',
  path: '/',
  //handler: {
  //  view: 'index'
  //}
  handler: function(request, h) {
    console.log('Returning index view');
    return h.view('./views/index.ejs')
  }
};

module.exports = [].concat(index, producers, products, users);