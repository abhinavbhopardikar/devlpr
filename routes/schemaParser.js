var express = require('express');
var appHandler = require('../appHandler.json');
var schemaParser = express.Router();

function parser(){
  const folder = './workspace/'+appHandler.projectName+'/routes/';
  const fs = require('fs');
  var writeSwitch=true,fileCount=0;

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      file = file.split(".",1).toString();
      console.log(file);
      if(writeSwitch==true){
        fs.writeFile('./workspace/'+appHandler.projectName+'/schema.js',"var mongoose = require('mongoose');"+"\n"+
        "var "+file+" = new mongoose.Schema({"+"\n\t"+
        "//enter schema of the collection \n //ex: 'key':String,"+"\n"+
        "});"+"\n\n",function(err){

        });
        writeSwitch=false;
        fileCount++;
      }
      else if(writeSwitch==false && fileCount<=files.length){
        fs.appendFile('./workspace/'+appHandler.projectName+'/schema.js',"var "+file+" = new mongoose.Schema({"+"\n\t"+
        "//enter schema of the collection \n //ex: 'key':String,"+"\n"+
        "});"+"\n\n",function(err){

        });
      }
    });

      files.forEach(file =>{
        file = file.split(".",1).toString();
        fs.appendFile('./workspace/'+appHandler.projectName+'/schema.js',"module.exports."+file+" = "+file+";\n",function(err){

        });
      });
      fs.appendFile('./workspace/'+appHandler.projectName+'/schema.js',"//module.exports = schema;",function(err){

      });
    });
}


module.exports.parser = parser;
