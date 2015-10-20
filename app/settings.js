var path = require('path');

global.__appDir = path.join(__dirname, '/');
global.__bowerComponents = path.join(__dirname, '../bower_components/');
global.__modelsDir = path.join(__dirname, 'models/');

module.exports = function(app){
  if(app){
    app.locals.sitename = "Polymer Site";
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
  }
};
