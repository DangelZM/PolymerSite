var mongoose = require('mongoose');
var dbConfig = require('./config').get('db');

var conn = mongoose.connection;

conn.on('connected', function () {
  console.log('Mongoose connected to ' + dbConfig.url);
});

conn.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

conn.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

mongoose.connect(dbConfig.url);

process.on('SIGINT', function() {
  conn.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

exports.connection = conn;