var app = require('../app.js');
var appHandler = require('../appHandler.json');
var fs = require('fs');
var routeBuilder = require('./routeBuilder');
var backendParser = require('./backendParser.js');
var templateParser = require('./templateParser.js');

function parser(){
  var handler = require('../workspace/'+appHandler.projectName+'/viewhandlers/'+appHandler.viewSettings.createHandler+'.json');
  var view = require('../parentHandler.json');

//writes ejs file. The filename is given by appHandler
  fs.writeFile('./workspace/'+appHandler.projectName+'/views/'+handler.filename+'.ejs', "<!DOCTYPE html>"+"\n"+"<html>"+"\n"+"<head>"+"\n"+
    "<title><%=handler.title%></title>"+
    "\n"+"<link rel='stylesheet' href='/stylesheets/style.css' />"
    +"\n"+"<link href='http://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>"+"\n"+
    "<link type='text/css' rel='stylesheet' href='/stylesheets/materialize.min.css'  media='screen,projection'/>"+"\n"+
    "<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.1.min.js'></script>"+"\n"+
    "<script src='/javascripts/materialize.js'></script>"+"\n"+
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'/>"+"\n"+
    "</head>"+"\n"+
    "\n"+"<body class = '<%=handler.class%>'>"+"\n"+
    "<%include ./components/navbar.ejs%>"+"\n"+
    "<%include ./components/main.ejs%>"+"\n"+
    "<%include ./components/footer.ejs%>"+"\n"+
    "</body>"+"\n"+"</html>", function(err){
        routeBuilder.parser();
        console.log('view '+handler.filename+'.ejs is created.');
  });

}

module.exports.parser = parser;
