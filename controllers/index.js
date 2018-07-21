var producers = require('./producers');

var index = [{
  method: 'GET',
  path: '/',
  //handler: {
  //  view: 'index'
  //}
  handler: function(request, h) {
    console.log('Returning index view');
    return h.view('./index')
  }
}];

module.exports = [].concat(index, producers);