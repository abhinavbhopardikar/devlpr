var express = require('express');
var app = require('../app.js');
var fs = require('fs');
var appHandler = require('../appHandler.json');
var fileName = './appHandler.json';
var router = express.Router();

router.get('/', function(req, res) {
  res.render('dashboard', {title:'devlpr'});
});

router.get('/start_proj', function(req, res) {
  res.render('index', {title:'devlpr'});
});

router.post('/viewhandler',function(req,res){
  var proj_name = req.body.proj_name,
  view_handler_name = req.body.view_handler_name,
  router_name = req.body.router_name,
  db_opern = req.body.db_opern,
  trgt_view = req.body.trgt_view,
  db_name = req.body.db_name,
  collection_name = req.body.collection_name;

  appHandler.projectName = proj_name;
  appHandler.viewSettings.createHandler = view_handler_name;
  appHandler.routerSettings.filename = router_name;
  appHandler.routerSettings.dbOperation = db_opern;
  appHandler.routerSettings.view = trgt_view;
  appHandler.dbSettings.dbName = db_name;
  appHandler.dbSettings.collection = collection_name;

  fs.writeFile(fileName, JSON.stringify(appHandler, null, 2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(appHandler));
  console.log('writing to ' + fileName);
});
  res.render('viewhandler',{title: 'Application settings (frontend)','view':trgt_view});
});

module.exports = router;
