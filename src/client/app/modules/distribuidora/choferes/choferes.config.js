(function () {
  angular
    .module('distribuidora.choferes')
    .config(choferesConfig);

  function choferes(choferesRest) {
    return choferesRest.query().$promise;
  }
  choferes.$inject = ['choferesRest'];

  choferesConfig.$inject = ['$stateProvider'];
  function choferesConfig($stateProvider) {
    $stateProvider
      .state('choferes', {
        url: 'choferes',
        parent: 'home',
        templateUrl: 'app/modules/distribuidora/choferes/choferes-lista/choferes-lista.template.html',
        controller: 'choferesListaController',
        controllerAs: 'listaChoferes',
        resolve: {
          choferes: choferes
        }
      })
  }
})();