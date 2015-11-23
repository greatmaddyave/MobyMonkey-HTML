var express = require('express');
var app = express();
var profile = express.Router();

profile.use(function(req, res, next) {
   console.log(req.url);
   next();
})

profile.get('/', function(req, res) {
  res.render('index', { 
    title: 'Ron', 
    message: 'Hello there!' 
  });
})

module.exports = profile;
