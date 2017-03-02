var fs = require('fs');
var appHandler = require('../appHandler.json');
var mainTemp = require('./mainTemp.js');

function parser(){
  fs.writeFile('./workspace/'+appHandler.projectName+'/views/components/navbar.ejs',"<%if(handler.nav.dropdown){%>"+"\n"+
  "<ul id='dropdown1' class='dropdown-content'>"+"\n"+
          "<%handler.nav.dropdown.contents.forEach(function(item){%>"+"\n"+
            "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
          "<%});%>"+"\n"+
        "</ul>"+"\n"+
  "<%}%>"+"\n"+
  "<%if(handler.nav.dropdown){%>"+"\n"+
  "<ul id='dropdown2' class='dropdown-content'>"+"\n"+
          "<%handler.nav.dropdown.contents.forEach(function(item){%>"+"\n"+
            "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
          "<%});%>"+"\n"+
        "</ul>"+"\n"+
  "<%}%>"+"\n"+
      "<nav class = '<%=handler.nav.class%>'>"+"\n"+
        "<div class='nav-wrapper'>"+"\n"+
        "<a href='#' class='brand-logo'><%=handler.nav.logo%></a>"+"\n"+
        "<a href='#' data-activates='mobile-demo' class='button-collapse'><i class='material-icons'>menu</i></a>"+"\n"+
        "<div class='row' id='nav-elements'>"+"\n"+
      "<ul id='nav-mobile' class='right hide-on-med-and-down'>"+"\n"+
      "<%handler.nav.contents.forEach(function(item){%>"+"\n"+
      "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
      "<%});%>"+"\n"+
      "<%if(handler.nav.dropdown){%>"+"\n"+
        "<li><a class='dropdown-button' href='#!' data-activates='dropdown1'><%=handler.nav.dropdown.name%><i class='material-icons right'>arrow_drop_down</i></a></li>"+"\n"+
      "<%}%>"+"\n"+
      "</ul>"+"\n"+
      "<%if(handler.nav.form){%>"+"\n"+
      "<form class='' action='<%=handler.nav.form.action%>' method = '<%=handler.nav.form.method%>'>"+"\n"+
        "<%handler.nav.form.elements.forEach(function(item){%>"+"\n"+
            "<input class='input-field right col s4 hide-on-med-and-down' id='searchBar' placeholder='search' type='<%=item.type%>' name='<%=item.name%>' value='<%=item.value%>' class='validate'>"+"\n"+
        "<%});%>"+"\n"+
      "</form>"+"\n"+
    "<%}%>"+"\n"+
    "<div class='side-nav red darken-4 col s10' id='mobile-demo'>"+"\n"+
      "<ul id='nav-mobile'>"+"\n"+
      "<%handler.nav.contents.forEach(function(item){%>"+"\n"+
      "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
      "<%});%>"+"\n"+
      "<%if(handler.nav.dropdown){%>"+"\n"+
        "<li><a class='dropdown-button' href='#!' data-activates='dropdown2'><%=handler.nav.dropdown.name%><i class='material-icons right'>arrow_drop_down</i></a></li>"+"\n"+
      "<%}%>"+"\n"+
      "<%if(handler.nav.form){%>"+"\n"+
      "<form class='' action='form/<%=handler.nav.form.action%>' method = '<%=handler.nav.form.method%>'>"+"\n"+
        "<%handler.nav.form.elements.forEach(function(item){%>"+"\n"+
            "<li><input class='input-field col s12' id='searchBar' placeholder='search' type='<%=item.type%>' name='<%=item.name%>' value='<%=item.value%>' class='validate'></li>"+"\n"+
        "<%});%>"+"\n"+
      "</form>"+"\n"+
    "<%}%>"+"\n"+
      "</ul>"+"\n"+
    "</div>"+"\n"+
      "</div>"+"\n"+

      "</nav>"+"\n",function(err){

    if(err){
      fs.mkdir('./workspace/'+appHandler.projectName+'/views/templates',function(err){
        fs.writeFile('./workspace/'+appHandler.projectName+'/views/components/navbar.ejs',"<%if(handler.nav.dropdown){%>"+"\n"+
        "<ul id='dropdown1' class='dropdown-content'>"+"\n"+
                "<%handler.nav.dropdown.contents.forEach(function(item){%>"+"\n"+
                  "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
                "<%});%>"+"\n"+
              "</ul>"+"\n"+
        "<%}%>"+"\n"+
        "<%if(handler.nav.dropdown){%>"+"\n"+
        "<ul id='dropdown2' class='dropdown-content'>"+"\n"+
                "<%handler.nav.dropdown.contents.forEach(function(item){%>"+"\n"+
                  "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
                "<%});%>"+"\n"+
              "</ul>"+"\n"+
        "<%}%>"+"\n"+
            "<nav class = '<%=handler.nav.class%>'>"+"\n"+
              "<div class='nav-wrapper'>"+"\n"+
              "<a href='#' class='brand-logo'><%=handler.nav.logo%></a>"+"\n"+
              "<a href='#' data-activates='mobile-demo' class='button-collapse'><i class='material-icons'>menu</i></a>"+"\n"+
              "<div class='row' id='nav-elements'>"+"\n"+
            "<ul id='nav-mobile' class='right hide-on-med-and-down'>"+"\n"+
            "<%handler.nav.contents.forEach(function(item){%>"+"\n"+
            "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
            "<%});%>"+"\n"+
            "<%if(handler.nav.dropdown){%>"+"\n"+
              "<li><a class='dropdown-button' href='#!' data-activates='dropdown1'><%=handler.nav.dropdown.name%><i class='material-icons right'>arrow_drop_down</i></a></li>"+"\n"+
            "<%}%>"+"\n"+
            "</ul>"+"\n"+
            "<%if(handler.nav.form){%>"+"\n"+
            "<form class='' action='form/<%=handler.nav.form.action%>' method = '<%=handler.nav.form.method%>'>"+"\n"+
              "<%handler.nav.form.elements.forEach(function(item){%>"+"\n"+
                  "<input class='input-field right col s4 hide-on-med-and-down' id='searchBar' placeholder='search' type='<%=item.type%>' name='<%=item.name%>' value='<%=item.value%>' class='validate'>"+"\n"+
              "<%});%>"+"\n"+
            "</form>"+"\n"+
          "<%}%>"+"\n"+
          "<div class='side-nav red darken-4 col s10' id='mobile-demo'>"+"\n"+
            "<ul id='nav-mobile'>"+"\n"+
            "<%handler.nav.contents.forEach(function(item){%>"+"\n"+
            "<li><a href='<%=item.link%>'><%=item.name%></a></li>"+"\n"+
            "<%});%>"+"\n"+
            "<%if(handler.nav.dropdown){%>"+"\n"+
              "<li><a class='dropdown-button' href='#!' data-activates='dropdown2'><%=handler.nav.dropdown.name%><i class='material-icons right'>arrow_drop_down</i></a></li>"+"\n"+
            "<%}%>"+"\n"+
            "<%if(handler.nav.form){%>"+"\n"+
            "<form class='' action='<%=handler.nav.form.action%>' method = '<%=handler.nav.form.method%>'>"+"\n"+
              "<%handler.nav.form.elements.forEach(function(item){%>"+"\n"+
                  "<li><input class='input-field col s12' id='searchBar' placeholder='search' type='<%=item.type%>' name='<%=item.name%>' value='<%=item.value%>' class='validate'></li>"+"\n"+
              "<%});%>"+"\n"+
            "</form>"+"\n"+
          "<%}%>"+"\n"+
            "</ul>"+"\n"+
          "</div>"+"\n"+
            "</div>"+"\n"+

            "</nav>"+"\n",function(err){

            });
      });
    }
    mainTemp.parser();
  });
}

module.exports.parser = parser;
