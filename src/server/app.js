var express     = require('express');
var bodyParser  = require('body-parser');
var loader      = require('./common/components/loader');

module.exports = function () {
  // Creating express application
  var app = express();
  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

  app.use(function (req, res, next) {
    req.accepts('json, text');
    req.accepts('application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  //require('../client/app')(app);

  return {
    app             : app,
    bootApplication : function () {
      // Configuring Express Application using the boot folder
      loader.loadBootDirectory(app);
      loader.loadResourcesDirectory(app);
      return app;
    }
  };
};