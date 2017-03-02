var fs = require('fs');
var appHandler = require('../appHandler.json');
var footerTemp = require('./footerTemp.js');

function parser(){
  fs.writeFile('./workspace/'+appHandler.projectName+'/views/templates/main.ejs',"<%if(handler.main.form){%>"+"\n"+
  "<div class='row'>"+"\n"+
    "<div class='container'>"+"\n"+
    "<form class='col s12' action='<%=handler.main.form.action%>' method='<%=handler.main.form.method%>'>"+"\n"+
      "<div class='row'>"+"\n"+
        "<%handler.main.form.elements.forEach(function(item){%>"+"\n"+
          "<div class='input-field col s12 m6'>"+"\n"+
            "<input name='<%=item.name%>' type='<%=item.type%>' placeholder='<%=item.placeholder%>' min='<%=item.min%>' max='<%=item.max%>' class='validate'>"+"\n"+
          "</div>"+"\n"+
        "<%});%>"+"\n"+
        "<input type='submit' class='waves-effect waves-light btn' value='submit'>"+"\n"+
        "</div>"+"\n"+
        "</form>"+"\n"+
        "</div>"+"\n"+
        "</div>"+"\n"+
  "<%}%>"+"\n"+
  "<%if(handler.main.posts.data=='collection'){%>"+"\n"+
  "<div class='container'>"+"\n"+
  "<div class='row'>"+"\n"+
    "<%posts.forEach(function(i){%>"+"\n"+
    "<div class='col s12 m12'>"+"\n"+
      "<div class='card'>"+"\n"+
        "<!-- Display contents of a document of a collection. The 'posts' variable holds the document -->"+"\n"+
          "</div>"+"\n"+
          "</div>"+"\n"+
          "<%});%>"+"\n"+
          "</div>"+"\n"+
          "</div>"+"\n"+
  "<%}%>"+"\n",function(err){
          if(err){
            console.log("error!!!");
          }
          footerTemp.parser();
        });
}

module.exports.parser = parser;
