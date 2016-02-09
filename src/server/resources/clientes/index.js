var routerRest = require('./clientes-rest');

module.exports = function (app){
  return {
    name: 'clientes',
    router: routerRest
  }
};