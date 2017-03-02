var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appHandler = require('./appHandler.json');
var routes = require('./routes/index');
var formParser = require('./routes/formParser');
var formParser2 = require('./routes/formParser2');
var compBuilder = require('./routes/compBuilder');
var formBuilder = require('./routes/formBuilder');
var skipSrchbar = require('./routes/skipSrchbar');
var skipMainForm = require('./routes/skipMainForm');
var parse = require('./routes/parse');
var new_handler = require('./routes/new_handler');
var new_route = require('./routes/new_route');
var projectInitiator = require('./routes/projectInitiator');
var mongoose = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/project_start', projectInitiator);
app.use('/parse',parse);
app.use('/new_handler',new_handler);
app.use('/new_route',new_route);
app.use('/skipSrchbar',skipSrchbar);
app.use('/skipMainForm',skipMainForm);
app.use('/result', routes);
app.use('/formparser',formParser);
app.use('/formparser2',formParser2);
app.use('/compBuilder',compBuilder);
app.use('/formBuilder',formBuilder);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
