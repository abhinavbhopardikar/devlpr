var express = require('express');
var backendParser = express.Router();
var appHandler = require('../appHandler.json');
var tempParser = require('./templateParser');


function parser(){
  const folder = './workspace/'+appHandler.projectName+'/routes/';
  const fs = require('fs');
  var writeSwitch=true,fileCount=0;
  //var file;
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      file = file.split(".",1).toString();
      console.log(file);
      if(writeSwitch==true && file!="index"){
        fs.writeFile('./workspace/'+appHandler.projectName+'/app.js',"var express = require('express');"+"\n"+
        "var path = require('path');"+"\n"+
        "var favicon = require('static-favicon');"+"\n"+
        "var logger = require('morgan');"+"\n"+
        "var cookieParser = require('cookie-parser');"+"\n"+
        "var bodyParser = require('body-parser');"+"\n"+
        "var routes = require('./routes/index.js');"+"\n"+
        "var "+file+" = require('./routes/"+file+".js');\n",function(err){

        });
        writeSwitch=false;
        fileCount++;
      }
      else if(writeSwitch==false && fileCount<=files.length && file!="index"){
        fs.appendFile('./workspace/'+appHandler.projectName+'/app.js',"var "+file+" = require('./routes/"+file+".js');\n",function(err){

        });
      }
    });
    fs.appendFile('./workspace/'+appHandler.projectName+'/app.js',"var mongoose = require('mongoose');"+"\n"+
    "var app = express();"+"\n\n"+
    "app.set('views', path.join(__dirname, 'views'));"+"\n"+
    "app.set('view engine', 'ejs');"+"\n\n"+

    "app.use(favicon());"+"\n"+
    "app.use(logger('dev'));"+"\n"+
    "app.use(bodyParser.json());"+"\n"+
    "app.use(bodyParser.urlencoded());"+"\n"+
    "app.use(cookieParser());"+"\n"+
    "app.use(express.static(path.join(__dirname, 'public')));"+"\n\n"+
    "app.use('/', routes);"+"\n",function(err){
      files.forEach(file =>{
        file = file.split(".",1).toString();
        if(file!="index"){
          fs.appendFile('./workspace/'+appHandler.projectName+'/app.js',"app.use('/"+file+"',"+file+");"+"\n",function(err){

          });
        }
      });
      fs.appendFile('./workspace/'+appHandler.projectName+'/app.js',"\nmongoose.connect('mongodb://localhost/"+appHandler.dbSettings.dbName+"');"+"\n"+

      "//var schema = require('./schema.js');"+"\n"+

      "//collection = mongoose.model('"+appHandler.dbSettings.collection+"', schema.schema);"+"\n\n"+

      "/// catch 404 and forwarding to error handler"+"\n"+
      "app.use(function(req, res, next) {"+"\n\t"+
          "var err = new Error('Not Found');"+"\n\t"+
          "err.status = 404;"+"\n\t"+
          "next(err);"+"\n"+
      "});"+"\n\n"+

      "/// error handlers"+"\n\n"+

      "// development error handler"+"\n"+
      "// will print stacktrace"+"\n"+
      "if (app.get('env') === 'development') {"+"\n\t"+
          "app.use(function(err, req, res, next) {"+"\n\t\t"+
              "res.status(err.status || 500);"+"\n\t\t"+
              "res.render('error', {"+"\n\t\t\t"+
                  "message: err.message,"+"\n\t\t\t"+
                  "error: err"+"\n\t\t"+
              "});"+"\n\t"+
          "});"+"\n"+
      "}"+"\n\n"+

      "// production error handler"+"\n"+
      "// no stacktraces leaked to user"+"\n"+
      "app.use(function(err, req, res, next) {"+"\n\t"+
          "res.status(err.status || 500);"+"\n\t"+
          "res.render('error', {"+"\n\t\t"+
              "message: err.message,"+"\n\t\t"+
              "error: {}"+"\n\t"+
          "});"+"\n"+
      "});"+"\n\n"+

      "//module.exports.collection = collection;"+"\n"+
      "module.exports = app;",function(err){

      });
      });
      //console.log("%s (%s)",file,path.extname(file));
      tempParser.parser();
    });
}

//creates a new handler with the name mentioned in appHandler file


module.exports.parser = parser;
