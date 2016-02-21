(function() {
	angular
		.module('distribuidora.carros')
		.controller('CarrosMensajes', CarrosMensajes);

  CarrosMensajes.$inject = ['carro', 'ngDialog', 'rest'];
	function CarrosMensajes(carro, ngDialog, rest) {
		var me = this;
		me.rest = rest;

		function cancelar() {
			ngDialog.closeAll();
		}

		function eliminarCarro() {
			me.rest.$delete({id: me.carro.current.ID}).then(
				function (data) {
					me.carro.lista.splice(me.carro.index, 1);
				},
				function (error) {
					console.log(error);
				}
			);

			ngDialog.closeAll();
		}

		me.carro = carro;
		me.cancelar = cancelar;
		me.eliminarCarro = eliminarCarro;
	}

})();