(function () {
  angular
    .module('distribuidora.clientes')
    .controller('ClientesRegistro', ClientesRegistro);

  ClientesRegistro.$inject = ['Cliente', 'clientes', 'ngDialog'];
  function ClientesRegistro(Cliente, clientes, ngDialog) {
    var me = this;

    me.cerrarRegistro = function () {
      ngDialog.closeAll();
    }

    me.Cliente = Cliente;
    me.cliente = {
      Nombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      Direccion: '',
      Telefono: '',
      Celular: '',
      CI: ''
    };

    function registrarCliente() {
      me.Cliente.data = me.cliente;
      me.Cliente.$save().then(
        function(data) {
          clientes.push(data);
          ngDialog.closeAll();
        },
        function(error) {
          console.log(error);
        }
      );
    }

    me.registrarCliente = registrarCliente;
  }
})();