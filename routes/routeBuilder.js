var app = require('../app.js');
var appHandler = require('../appHandler.json');
var fs = require('fs');
var backendParser = require('./backendParser.js');
//var templateParser = require('./templateParser.js');

function parser(){
  var handler = require('../workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json');
  var view = require('../parentHandler.json');

//writes js file. The filename is given by appHandler file
  switch (appHandler.routerSettings.dbOperation) {
    case 'list':
    fs.writeFile('./workspace/'+appHandler.projectName+'/routes/'+appHandler.routerSettings.filename+'.js',"var express = require('express'),"+"\n"+
    "app = require('../app.js'),"+"\n"+"handler = require('../viewhandlers/"+appHandler.viewSettings.createHandler+".json'"+"),"+"\n"+
    appHandler.routerSettings.filename+" = express.Router(),"+"\n"+
    "schema = require('../schema.js'),"+"\n"+
    "mongoose = require('mongoose'),"+"\n"+
    "collection = mongoose.model('"+appHandler.dbSettings.collection+"',schema."+appHandler.routerSettings.filename+");"+"\n\n"+
    appHandler.routerSettings.filename+".get('/', function(req, res) {"+"\n\t"+
    "collection.find({},function(err,docs){"+"\n\t\t"+
    "if(err) res.json(err);"+"\n\t\t"+
    "else {"+"\n\t\t\t"+
    "console.log(docs);"+"\n\t\t\t"+
    "res.render("+"'"+appHandler.routerSettings.view+"', {handler:handler,posts:docs});"+"\n\t\t"+
    "}"+"\n\t"+
    "});"+"\n"+
    "});"+"\n\n"+"module.exports = "+appHandler.routerSettings.filename+";",function(err){
      console.log("route "+appHandler.routerSettings.filename+".js is created.");
      backendParser.parser();
      //templateParser.parser();
    });
    break;

    case 'search':

    fs.writeFile('./workspace/'+appHandler.projectName+'/routes/'+appHandler.routerSettings.filename+'.js',"var express = require('express'),"+"\n"+
    "app = require('../app.js'),"+"\n"+"handler = require('../viewhandlers/"+appHandler.viewSettings.createHandler+".json'"+"),"+"\n"+
    appHandler.routerSettings.filename+" = express.Router(),"+"\n"+
    "schema = require('../schema.js'),"+"\n"+
    "mongoose = require('mongoose'),"+"\n"+
    "collection = mongoose.model('"+appHandler.dbSettings.collection+"',schema."+appHandler.routerSettings.filename+");"+"\n\n"+
    appHandler.routerSettings.filename+".get('/', function(req, res) {"+"\n\t"+
    "collection.find({/*enter search condition*/},function(err,docs){"+"\n\t\t"+
    "if(err) res.json(err);"+"\n\t\t"+
    "else {"+"\n\t\t\t"+
    "console.log(docs);"+"\n\t\t\t"+
    "res.render("+"'"+appHandler.routerSettings.view+"', {handler:handler,posts:docs});"+"\n\t\t"+
    "}"+"\n\t"+
    "});"+"\n"+
    "});"+"\n\n"+"module.exports = "+appHandler.routerSettings.filename+";",function(err){
      console.log("route "+appHandler.routerSettings.filename+".js is created.");
      backendParser.parser();
      //templateParser.parser();
    });

    break;

    case 'insert':

    fs.writeFile('./workspace/'+appHandler.projectName+'/routes/'+appHandler.routerSettings.filename+'.js',"var express = require('express'),"+"\n"+
    "app = require('../app.js'),"+"\n"+"handler = require('../viewhandlers/"+appHandler.viewSettings.createHandler+".json'"+"),"+"\n"+
    appHandler.routerSettings.filename+" = express.Router(),"+"\n"+
    "schema = require('../schema.js'),"+"\n"+
    "mongoose = require('mongoose'),"+"\n"+
    "collection = mongoose.model('"+appHandler.dbSettings.collection+"',schema."+appHandler.routerSettings.filename+");"+"\n\n"+
    appHandler.routerSettings.filename+".get('/', function(req, res) {"+"\n\t"+
    "collection.insert({/*enter insertion condition*/},function(err,docs){"+"\n\t\t"+
    "if(err) res.json(err);"+"\n\t\t"+
    "else {"+"\n\t\t\t"+
    "console.log(docs);"+"\n\t\t\t"+
    "res.render("+"'"+appHandler.routerSettings.view+"', {handler:handler,posts:docs});"+"\n\t\t"+
    "}"+"\n\t"+
    "});"+"\n"+
    "});"+"\n\n"+"module.exports = "+appHandler.routerSettings.filename+";",function(err){
      console.log("route "+appHandler.routerSettings.filename+".js is created.");
      backendParser.parser();
      //templateParser.parser();
    });

    break;

    case 'delete':
    fs.writeFile('./workspace/'+appHandler.projectName+'/routes/'+appHandler.routerSettings.filename+'.js',"var express = require('express'),"+"\n"+
    "app = require('../app.js'),"+"\n"+"handler = require('../viewhandlers/"+appHandler.viewSettings.createHandler+".json'"+"),"+"\n"+
    appHandler.routerSettings.filename+" = express.Router(),"+"\n"+
    "schema = require('../schema.js'),"+"\n"+
    "mongoose = require('mongoose'),"+"\n"+
    "collection = mongoose.model('"+appHandler.dbSettings.collection+"',schema."+appHandler.routerSettings.filename+");"+"\n\n"+
    appHandler.routerSettings.filename+".get('/', function(req, res) {"+"\n\t"+
    "collection.remove({/*enter deletion condition*/},function(err,docs){"+"\n\t\t"+
    "if(err) res.json(err);"+"\n\t\t"+
    "else {"+"\n\t\t\t"+
    "console.log(docs);"+"\n\t\t\t"+
    "res.render("+"'"+appHandler.routerSettings.view+"', {handler:handler,posts:docs});"+"\n\t\t"+
    "}"+"\n\t"+
    "});"+"\n"+
    "});"+"\n\n"+"module.exports = "+appHandler.routerSettings.filename+";",function(err){
      console.log("route "+appHandler.routerSettings.filename+".js is created.");
      backendParser.parser();
      //templateParser.parser();
    });

    break;

    default: fs.writeFile('./workspace/'+appHandler.projectName+'/routes/'+appHandler.routerSettings.filename+'.js',"var express = require('express'),"+"\n"+
    "app = require('../app.js'),"+"\n"+"handler = require('../viewhandlers/"+appHandler.viewSettings.createHandler+".json'"+"),"+"\n"+
    appHandler.routerSettings.filename+" = express.Router();"+"\n\n"+
    appHandler.routerSettings.filename+".get('/', function(req, res) {"+"\n\t"+
    "res.render("+"'"+appHandler.routerSettings.view+"', {handler:handler,posts:docs});"+"\n"+
    "});"+"\n\n"+"module.exports = "+appHandler.routerSettings.filename+";",function(err){
      console.log("route "+appHandler.routerSettings.filename+".js is created.");
      backendParser.parser();
      //templateParser.parser();
    });
  }
}

module.exports.parser = parser;
