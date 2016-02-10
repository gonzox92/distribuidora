var express     = require('express');
var router      = express.Router();
var connection  = require('../../boot/database');

module.exports = function (name) {
  router
    .route('/' + name)
    .get(function (req, res) {
      var sql = 'SELECT * FROM ' + name;
      connection.query(sql, function(err, results) {
        res.send(results);
      });
    });

  return router;
};