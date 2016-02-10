var routerRest = require('./carros-rest');

module.exports = function (app){
  return {
    name: 'carros',
    routes: [routerRest]
  }
};