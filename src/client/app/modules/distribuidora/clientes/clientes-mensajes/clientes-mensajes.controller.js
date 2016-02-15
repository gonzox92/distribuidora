(function() {
	angular
		.module('distribuidora.clientes')
		.controller('ClientesMensajes', ClientesMensajes);

	ClientesMensajes.$inject = ['cliente', 'ngDialog', 'rest'];
	function ClientesMensajes(cliente, ngDialog, rest) {
		var me = this;
		me.rest = rest;

		function cancelar() {
			ngDialog.closeAll();
		}

		function eliminarCliente() {
			me.rest.$delete({id: me.cliente.current.ID}).then(
				function (data) {
					me.cliente.lista.splice(me.cliente.index, 1);
				},
				function (error) {
					console.log(error);
				}
			);

			ngDialog.closeAll();
		}

		me.cliente = cliente;
		me.cancelar = cancelar;
		me.eliminarCliente = eliminarCliente;
	}

})();