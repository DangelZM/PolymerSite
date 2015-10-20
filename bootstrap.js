var express = require('express');
var app = express();
var config = require('./app/config');

require('./app/settings')(app);
require('./app/middlewares')(app, express);
app.disable('x-powered-by');

//mount app modules
var appModules = config.get('modules');

Object.keys(appModules).forEach(function(key) {
  app.use(appModules[key].mountpath, require('./app/modules/' + key));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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