var express = require('express');
var skipSrchbar = express.Router();

skipSrchbar.get('/',function(req,res){
  res.render("mainForm.ejs",{"title":"build main section form"});
});

module.exports = skipSrchbar;
