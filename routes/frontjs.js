var appHandler = require('../appHandler.json');
var fs = require('fs');

function parser(){
  fs.createReadStream('./public/javascripts/materialize.js').pipe(fs.createWriteStream('./workspace/'+appHandler.projectName+'/public/javascripts/materialize.js'));
  fs.createReadStream('./public/stylesheets/materialize.min.css').pipe(fs.createWriteStream('./workspace/'+appHandler.projectName+'/public/stylesheets/materialize.min.css'));
}

module.exports.parser = parser;
