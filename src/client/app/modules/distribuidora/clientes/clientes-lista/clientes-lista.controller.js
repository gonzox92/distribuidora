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

    function showRegistro($index) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/clientes/clientes-registro/clientes-registro.template.html',
        controller: 'ClientesRegistro',
        controllerAs: 'registro',
        resolve: {
          Cliente: ClienteRest,
          cliente: function () {
            if (typeof($index) !== 'undefined') {
              return {
                ID: me.clientes[$index].ID,
                Nombre: me.clientes[$index].Nombre,
                ApellidoPaterno: me.clientes[$index].ApellidoPaterno,
                ApellidoMaterno: me.clientes[$index].ApellidoMaterno,
                Direccion: me.clientes[$index].Direccion,
                Telefono: me.clientes[$index].Telefono,
                Celular: me.clientes[$index].Celular,
                CI: me.clientes[$index].CI
              }
            }

            return {
              Nombre: '',
              ApellidoPaterno: '',
              ApellidoMaterno: '',
              Direccion: '',
              Telefono: '',
              Celular: '',
              CI: ''
            }
          },
          clientes: function () {
            return me.clientes;
          }
        }
      });
    }

    function showEliminar($index, currentCliente) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/clientes/clientes-mensajes/clientes-eliminar.template.html',
        controller: 'ClientesMensajes',
        controllerAs: 'mensaje',
        resolve: {
          cliente: function () {
            return {
              index: $index,
              lista: me.clientes,
              current: currentCliente
            };
          },
          rest: ClienteRest
        }
      });
    }

    me.showRegistro = showRegistro;
    me.showEliminar = showEliminar;
  }
})();