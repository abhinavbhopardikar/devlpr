var express = require('express');
//var app = require('../app.js');
var handler = require('../parentHandler.json');
var fileName = './parentHandler.json';
//var appHandler = require('../appHandler.json');
var fs = require('fs');
var formBuilder = express.Router();

formBuilder.post('/',function(req,res){
  var navCount = drpCount = formEleCount = ftrCount = 0;
  //console.log("first link name is: "+req.body.link_name[0]);
  //console.log("second link name is: "+req.body.link_name[1]);
  // navbar handling

  handler.nav.form.action = req.body.nav_form_action;
  handler.nav.form.method = req.body.nav_form_method;
  handler.nav.form.elements[0].name = req.body.nav_form_name;
  console.log(req.body.nav_form_action+"\n"+req.body.nav_form_method+"\n"+req.body.nav_form_name);
  //main section handling
  console.log("******************************* MAIN SECTION *****************************");


  handler.main.form.action = req.body.form_action;
  handler.main.form.method = req.body.form_method;
  var form_ele_count = req.body.eleCount;

  while(form_ele_count!="" && formEleCount<form_ele_count){
    handler.main.form.elements[formEleCount].name = req.body.ele_name[formEleCount];
    handler.main.form.elements[formEleCount].type = req.body.ele_type[formEleCount];
    handler.main.form.elements[formEleCount].placeholder = req.body.ele_plcHldr[formEleCount];
    handler.main.form.elements[formEleCount].value = req.body.ele_val[formEleCount];
    console.log(req.body.ele_name[formEleCount]);
    formEleCount++;
  }


  fs.writeFile(fileName, JSON.stringify(handler, null, 2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(handler));
  console.log('writing to ' + fileName);
});
  res.render('projInit',{'title':'Start project'});
});

formBuilder.get('/',function(req,res){
  res.render('formhandler',{title:'Form handler'});
});

module.exports = formBuilder;
