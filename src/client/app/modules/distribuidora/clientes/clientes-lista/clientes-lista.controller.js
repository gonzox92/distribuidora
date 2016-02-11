(function () {
  angular
    .module('distribuidora.clientes')
    .controller('clientesListaController', clientesListaController);

  clientesListaController.$inject = ['clientes'];

  function clientesListaController(clientes) {
    var me = this;

    me.clientes = clientes;

    console.log(clientes);
  }
})();