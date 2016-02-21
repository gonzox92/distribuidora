(function () {
  angular
    .module('distribuidora.carros')
    .config(clientesConfig);

  function carros(carrosRest) {
    return carrosRest.query().$promise;
  }
  carros.$inject = ['carrosRest'];

  clientesConfig.$inject = ['$stateProvider'];
  function clientesConfig($stateProvider) {
    $stateProvider
      .state('carros', {
        url: 'carros',
        parent: 'home',
        templateUrl: 'app/modules/distribuidora/carros/carros-lista/carros-lista.template.html',
        controller: 'carrosListaController',
        controllerAs: 'listaCarros',
        resolve: {
          carros: carros
        }
      })
  }
})();