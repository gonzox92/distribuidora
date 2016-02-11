(function() {
	angular
    .module('distribuidora')
		.config(distribuidoraConfig);

  distribuidoraConfig.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
  ];

  function distribuidoraConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/distribuidora/distribuidora.template.html'
      });
  }
})();