var express = require('express');
var appHandler = require('../appHandler.json');
var viewParser = require('./viewParser.js')
var projectInitiator = express.Router();
var fs = require('fs');

projectInitiator.get('/',function(req,res){
  fs.mkdir('./workspace/'+appHandler.projectName,function(err){
    console.log(appHandler.projectName+ "created!");

    exec = require('child_process').exec;
    exec('express -e',{cwd:'./workspace/'+appHandler.projectName}, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });

    exec('npm install mongoose --save',{cwd:'./workspace/'+appHandler.projectName}, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

    });

  });

  res.render("mainParser",{"title":"mainParser"});
});

module.exports = projectInitiator;
