var mysql = require('mysql');
var config = require('../config');
var connection = mysql.createConnection(config.DATABASE_CONNECTION);

module.exports = connection;