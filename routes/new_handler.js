var express = require('express');
var new_handler = express.Router();
var appHandler = require('../appHandler.json');
var handler = require('../parentHandler.json');
var data = JSON.stringify(handler,null,2);
var fs = require('fs');

new_handler.get('/',function(req,res){
  fs.writeFile('./workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json',data,function(err){
    if(err){
      fs.mkdir('./workspace/'+appHandler.projectName+'/viewhandlers',function(err){
        console.log('directory created!!');
        fs.writeFile('./workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json',data,function(err){
          console.log('view handler '+appHandler.viewSettings.createHandler+'.json is created!');
        });
      });
    }
  });
  res.render('dashboard',{"title":"devlpr"});
});


module.exports = new_handler;
