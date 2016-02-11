(function () {
  angular
    .module('distribuidora.clientes')
    .config(clientesConfig);

  function clientes() {
    return [];
  }
  clientes.$inject = ['SERVICE'];

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