(function () {
  angular
    .module('distribuidora.clientes')
    .controller('ClientesRegistro', ClientesRegistro);

  ClientesRegistro.$inject = ['Cliente'];
  function ClientesRegistro(Cliente) {
    var me = this;

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
        function() {
          console.log('Success');
        },
        function(error) {
          console.error(error);
        }
      );
    }

    me.registrarCliente = registrarCliente;
  }
})();