var express = require('express');
//var app = require('../app.js');
var backendParser = require('./backendParser');
var handler = require('../parentHandler.json');
var appHandler = require('../appHandler.json');
var formParser2 = require('./formParser2');
var formParser = express.Router();

formParser.get('/',function(req,res){
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
        fs.writeFile('./workspace/'+appHandler.projectName+'/routes/form.js',"var express = require('express'),"+"\n"+
        "app = require('../app.js'),"+"\n"+
      "form = express.Router();"+"\n"+
      "var "+file+" = require('../viewhandlers/"+file+".json');\n",function(err){

      });
      writeSwitch=false;
      fileCount++;
      }
      else if(writeSwitch==false && fileCount<=files.length){
        fs.appendFile('./workspace/'+appHandler.projectName+'/routes/form.js',"var "+file+" = require('../viewhandlers/"+file+".json');\n",function(err){

        });
      }
    });
      files.forEach(file =>{
        q = require('../workspace/'+appHandler.projectName+'/viewhandlers/'+file);
        file = file.split(".",1).toString();
        console.log(file);
        if(q.nav.form){
          fs.appendFile('./workspace/'+appHandler.projectName+'/routes/form.js',"\nform."+q.nav.form.method+"('/"+q.nav.form.action+"', function(req, res) {"+"\n\t"+
          "res.render("+"'"+q.nav.form.action+"', {handler:"+file+"});"+"\n"+
          "});"+"\n\n",function(err){

          });
        }

      });
      fs.appendFile('./workspace/'+appHandler.projectName+'/routes/form.js',"module.exports = form;",function(err){

      });
      //formParser2.parser();
      backendParser.parser();
  });
  //res.render("dashboard",{"title":"dashboard"});
  res.render("mainForm.ejs",{"title":"build main section form"});
});

module.exports = formParser;
