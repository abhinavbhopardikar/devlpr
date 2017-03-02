var fs = require('fs');
var appHandler = require('../appHandler.json');
var cssParser = require('./cssParser.js');
var schemaParser = require('./schemaParser.js');

function parser(){
  fs.writeFile('./workspace/'+appHandler.projectName+'/views/templates/footer.ejs',"<footer class='page-footer <%=handler.footer.class%>'>"+"\n"+
    "<div class='container'>"+"\n"+
      "<div class='row'>"+"\n"+
        "<%handler.footer.contents.forEach(function(item){%>"+"\n"+
          "<div class='col l4 s12'>"+"\n"+
          "<h5 class='white-text'><%=item.title%></h5>"+"\n"+
          "<p class='grey-text text-lighten-4'><%=item.text%></p>"+"\n"+
          "</div>"+"\n"+
        "<%})%>"+"\n"+
        "</div>"+"\n"+
        "</div>"+"\n"+
        "<div class='footer-copyright'>"+"\n"+
          "<div class='container'>"+"\n"+
            "<%=handler.footer.copyright%>"+"\n"+
          "</div>"+"\n"+
        "</div>"+"\n"+
        "</footer>"+"\n",function(err){
          cssParser.parser();
          schemaParser.parser();
  });
}

module.exports.parser = parser;
