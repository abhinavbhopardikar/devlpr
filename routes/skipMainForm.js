var express = require('express');
var skipMainForm = express.Router();

skipMainForm.get('/',function(req,res){
  res.send(':)');
});

module.exports = skipMainForm;
