var path = require('path');
var express = require('express');

var submod = express();

submod.disable('x-powered-by');
submod.use(express.static(path.join(__dirname, 'public')));
submod.use('/bower_components', express.static(__bowerComponents));

submod.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = submod;


