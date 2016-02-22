var routerRest = require('./choferes-rest');

module.exports = function (app){
  return {
    name: 'choferes',
    routes: [routerRest]
  }
};