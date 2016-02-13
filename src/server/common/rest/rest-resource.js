var express     = require('express');
var router      = express.Router();
var connection  = require('../../boot/database');

module.exports = function (name) {

  function performQuery(res) {
    return function (err, results) {
      if (err) {
        res.send(err);
      }
      res.send(results);
    }
  }

  function performUniqueSelect(res) {
    return function (err, results) {
      if (err) {
        res.send(err);
      }
      res.send(results[0]);
    }
  }

  function performInsert(res) {
    return function (err, results) {
      if (err) {
        res.send(err);
      }
      
      var insertId = results.insertId;
      var sql = 'SELECT * FROM ' + name + ' WHERE id = ' + insertId;
      connection.query(sql, performUniqueSelect(res));
    }
  }

  router
    .route('/' + name)
    .get(function (req, res) {
      var sql = 'SELECT * FROM ' + name;
      connection.query(sql, performQuery(res));
    })
    .post(function (req, res) {
      var data = req.body.data || req.body;
      var sql = 'INSERT INTO ' + name + ' SET ?';
      connection.query(sql, data, performInsert(res));
    });

  router
    .route('/' + name + '/:id')
    .get(function (req, res) {
      var sql = 'SELECT * FROM ' + name + ' WHERE id = ' + req.params.id;
      connection.query(sql, performQuery(res));
    })
    .put(function (req, res) {
      var sql = 'UPDATE ' + name + ' SET ? WHERE id = ' + req.params.id;
      connection.query(sql, req.body, performQuery(res));
    })
    .delete(function (req, res) {
      var sql = 'DELETE FROM ' + name + ' WHERE id = ' + req.params.id;
      connection.query(sql, performQuery(res));
    });

  return router;
};