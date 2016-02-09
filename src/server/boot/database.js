var mysql = require('mysql');
var config = require('../config');

module.exports = function (app) {
  var connection = mysql.createConnection(config.DATABASE_CONNECTION);
};