(function () {
  angular
    .module('distribuidora.clientes')
    .config(clientesConfig);

  function clientes(clientesRest) {
    return clientesRest.query().$promise;
  }
  clientes.$inject = ['clientesRest'];

  clientesConfig.$inject = ['$stateProvider'];
  function clientesConfig($stateProvider) {
    $stateProvider
      .state('clientes', {
        url: 'clientes',
        parent: 'home',
        templateUrl: 'app/modules/distribuidora/clientes/clientes-lista/clientes-lista.template.html',
        controller: 'clientesListaController',
        controllerAs: 'listaClientes',
        resolve: {
          clientes: clientes
        }
      })
  }
})();