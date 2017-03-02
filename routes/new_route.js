var express = require('express');
var new_route = express.Router();
var appHandler = require('../appHandler.json');
var routeBuilder = require('./routeBuilder');
var fs = require('fs');

new_route.get('/',function(req,res){
  routeBuilder.parser();
  res.render('dashboard',{"title":"devlpr"});
});


module.exports = new_route;
