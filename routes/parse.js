var express = require('express');
var parse = express.Router();
var viewParser = require('./viewParser');

parse.get('/',function(req,res){
  viewParser.parser();
  res.render('build_form',{"title":"build form"});
});


module.exports = parse;
