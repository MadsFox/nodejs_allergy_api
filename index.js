var express = require('express');
var db = require('./db');

var app = express();

var port = 3000;

var password = process.argv[2];

//set up template engines
app.set('view engine', 'ejs');

//handels get requests on root
app.get("/", function(req, res){
  res.render('index');
})

//controllers
app.use('/users', require('./controllers/users'));
app.use('/producers', require('./controllers/producers'));
app.use('/products', require('./controllers/products'));
app.use('/ingredients', require('./controllers/ingredients'));
app.use('/allergies', require('./controllers/allergies'));



//Connect to MySQL on start
db.connect(password, db.MODE_PRODUCTION, function(err){
  if (err){
    console.log('unable to connect to MySQL.');
    process.exit(1);
  }else{
    app.listen(port, function(){
      console.log('Ready on port ' + port)
    });
  }
});