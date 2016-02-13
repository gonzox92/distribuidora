(function () {
  angular
    .module('distribuidora.clientes')
    .controller('clientesListaController', clientesListaController);

  clientesListaController.$inject = ['clientes', 'ngDialog', 'clientesRest'];

  function clientesListaController(clientes, ngDialog, clientesRest) {
    var me = this;
    me.clientes = clientes;

    ClienteRest.$inject = ['clientesRest']
    function ClienteRest(clientesRest) {
      return new clientesRest();
    }

    function showRegistro() {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/clientes/clientes-registro/clientes-registro.template.html',
        controller: 'ClientesRegistro',
        controllerAs: 'registro',
        resolve: {
          Cliente: ClienteRest,
          clientes: function () {
            return me.clientes;
          }
        }
      });
    }

    me.showRegistro = showRegistro;
  }
})();