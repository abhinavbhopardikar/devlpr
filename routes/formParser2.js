var express = require('express');
//var app = require('../app.js');
var backendParser = require('./backendParser');
var handler = require('../parentHandler.json');
var appHandler = require('../appHandler.json');
var formParser2 = express.Router();

formParser2.get('/',function(req,res){
  const folder = './workspace/'+appHandler.projectName+'/viewhandlers/';
  const fs = require('fs');
  var writeSwitch=true,fileCount=0;

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      q = require('../workspace/'+appHandler.projectName+'/viewhandlers/'+file);
      //console.log(q.nav);
      file = file.split(".",1).toString();
      console.log(file);
      if(writeSwitch==true){
        fs.writeFile('./workspace/'+appHandler.projectName+'/routes/mainForm.js',"var express = require('express'),"+"\n"+
        "app = require('../app.js'),"+"\n"+
      "mainForm = express.Router();"+"\n"+
      "var "+file+" = require('../viewhandlers/"+file+".json');\n",function(err){

      });
      writeSwitch=false;
      fileCount++;
      }
      else if(writeSwitch==false && fileCount<=files.length){
        fs.appendFile('./workspace/'+appHandler.projectName+'/routes/mainForm.js',"var "+file+" = require('../viewhandlers/"+file+".json');\n",function(err){

        });
      }
    });
      files.forEach(file =>{
        q = require('../workspace/'+appHandler.projectName+'/viewhandlers/'+file);
        file = file.split(".",1).toString();
        console.log(file);
        if(q.main.form){
          fs.appendFile('./workspace/'+appHandler.projectName+'/routes/mainForm.js',"\nmainForm."+q.main.form.method+"('/"+q.main.form.action+"', function(req, res) {"+"\n\t"+
          "res.render("+"'"+q.main.form.action+"', {handler:"+file+"});"+"\n"+
          "});"+"\n\n",function(err){

          });
        }

      });
      fs.appendFile('./workspace/'+appHandler.projectName+'/routes/mainForm.js',"module.exports = mainForm;",function(err){
        //if(err) console.log(err);
      });
      backendParser.parser();
  });
  res.render("dashboard",{"title":"devlpr"});
});

module.exports = formParser2;
