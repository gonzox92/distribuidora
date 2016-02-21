(function () {
	angular
		.module('distribuidora', [
			'common',
			'thirdPartyDependencies',
      'distribuidora.clientes',
      'distribuidora.carros'
		]);
})();