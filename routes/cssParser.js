var fs = require('fs');
var appHandler = require('../appHandler.json');
var handler = require('../parentHandler.json');
var frontjs = require('./frontjs.js');

function parser(){
  fs.writeFile('./workspace/'+appHandler.projectName+'/public/stylesheets/style.css',"body {"+"\n\t"+
    "font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;"+"\n"+
  "}"+"\n\n"+

  "a {"+"\n\t"+
    "color: #00B7FF;"+"\n"+
  "}"+"\n\n"+

  ".brand-logo{"+"\n\t"+
    "margin-left: 10%;"+"\n"+
  "}"+"\n\n"+

  "#nav-elements{"+"\n\t"+
    "margin-right: 10%;"+"\n"+
  "}"+"\n\n"+

  "nav{"+"\n\t"+
    "background : "+handler.nav.bgColor+";\n"+
  "}"+"\n\n"+

  "footer{"+"\n\t"+
    "background : "+handler.footer.bgColor+";\n"+
  "}"+"\n\n"+

  "#main{"+"\n\t"+
    "background : "+handler.main.bgColor+";\n"+
  "}"+"\n\n"+

  "body{"+"\n\t"+
    "background : "+handler.bgColor+";\n"+
  "}"+"\n",function(err){
    if(err) console.log("error");
    frontjs.parser();
  });
}


module.exports.parser = parser;
