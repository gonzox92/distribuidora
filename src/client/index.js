module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  var express = require('express');
  app.use(express.static(__dirname));
  app.get('/', function (req, res) {
    res.render('index');
  });
};