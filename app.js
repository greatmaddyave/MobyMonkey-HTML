var express = require('express');
var app = express();
var profile = require('./profile.js')

app.set('views', './public/views');
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  console.log(req.url);
  next();
})

app.use(express.static('public'));

app.use('/profile', profile);

app.listen(1337, function() {
  console.log('Service Started on 1337.')
});
