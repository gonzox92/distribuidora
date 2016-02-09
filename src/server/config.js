var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '3000';

module.exports = {
  DATABASE_CONNECTION:
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'distribuidora'
  },
  HOST_PORT: host + ':' + port
};
