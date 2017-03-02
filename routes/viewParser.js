var appHandler = require('../appHandler.json');
var handler = require('../parentHandler.json');
var data = JSON.stringify(handler,null,2);
var viewBuilder = require('./viewBuilder.js');
var fs = require('fs');

function parser(){
  fs.writeFile('./workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json',data,function(err){
    if(err){
      fs.mkdir('./workspace/'+appHandler.projectName+'/viewhandlers',function(err){
        console.log('directory created!!');
        fs.writeFile('./workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json',data,function(err){
          console.log('view handler '+appHandler.viewSettings.createHandler+'.json is created!');
          viewBuilder.parser();
        });
      });
    }
    else{
      viewBuilder.parser();
    }

  });
}

//creates a new handler with the name mentioned in appHandler file

module.exports.parser = parser;
