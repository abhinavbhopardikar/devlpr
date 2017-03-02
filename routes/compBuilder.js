var express = require('express');
var handler = require('../parentHandler.json');
var fileName = './parentHandler.json';
var fs = require('fs');
var compBuilder = express.Router();

compBuilder.post('/',function(req,res){
  var navCount = drpCount = formEleCount = ftrCount = 0;
  handler.filename = req.body.view_file;
  console.log(req.body.view_file);
  handler.bgColor = req.body.bodyBg;
  handler.title = req.body.title;
  handler.header = req.body.header;
  handler.class = req.body.body_class;
  handler.nav.class = req.body.nav_class;
  handler.nav.bgColor = req.body.navBg;
  handler.nav.logo = req.body.logo;
  navLinkCount = req.body.no_of_links;
  while(navLinkCount!="" && navCount<navLinkCount){
    handler.nav.contents[navCount].name = req.body.link_name[navCount];
    handler.nav.contents[navCount].link = req.body.link_path[navCount];
    navCount++;
  }

  handler.nav.dropdown.name = req.body.dropdown;
  console.log(req.body.dropdown);
  var drpLinkCount = req.body.lcount;
  while (drpLinkCount!="" && drpCount<drpLinkCount) {
    handler.nav.dropdown.contents[drpCount].name = req.body.drp_link_name[drpCount];
    handler.nav.dropdown.contents[drpCount].link =  req.body.drp_link_path[drpCount];
    console.log(req.body.drp_link_name[drpCount]);
    drpCount++;
  }

  //main section handling
  console.log("******************************* MAIN SECTION *****************************");

  handler.main.class = req.body.main_class;
  handler.main.bgColor = req.body.mainBg;

  console.log("********************************** footer part *******************************");

  handler.footer.bgColor = req.body.footerBg;
  handler.footer.class = req.body.footer_class;
  handler.footer.copyright = req.body.copyright;
  var footer_count = req.body.postCount;

  while(footer_count!="" && ftrCount<footer_count){
    handler.footer.contents[ftrCount].title = req.body.footer_title[ftrCount];
    handler.footer.contents[ftrCount].text = req.body.footer_text[ftrCount];
    console.log(req.body.footer_text[ftrCount]);
    ftrCount++;
  }

  fs.writeFile(fileName, JSON.stringify(handler, null, 2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(handler));
  console.log('writing to ' + fileName);
});
  res.render('formhandler',{title:'Form handler'});
});

module.exports = compBuilder;
