var express = require('express');
var router = express.Router();

module.exports = function(name){
  var resourcePath = '/' + name;

  router
    .route(resourcePath)
    .get(function (req, res) {
      res.send('Hello world');
    });

  return router;
};