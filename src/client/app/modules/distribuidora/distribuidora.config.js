(function() {
	angular
    .module('distribuidora')
		.config(distribuidoraConfig);

  distribuidoraConfig.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
  ];

  function distribuidoraConfig($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html'
      })
      .state('home.menu', {
        url: '/home',
        parent: 'home',
        templateUrl: 'app/modules/distribuidora/distribuidora.template.html'
      });

    $urlRouterProvider.otherwise('/home');
  }
})();