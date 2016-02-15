(function () {
  angular
    .module('distribuidora.clientes')
    .controller('ClientesRegistro', ClientesRegistro);

  ClientesRegistro.$inject = ['cliente', 'Cliente', 'clientes', 'ngDialog'];
  function ClientesRegistro(cliente, Cliente, clientes, ngDialog) {
    var me = this;

    me.cerrarRegistro = function () {
      ngDialog.closeAll();
    }

    me.ClienteRest = Cliente;
    me.cliente = cliente;

    function registrarCliente() {
      me.ClienteRest.data = me.cliente;
      var restOperation = cliente.ID ? '$update' : '$save';
      var params = cliente.ID ? { id: cliente.ID } : {};
      me.ClienteRest[restOperation](params).then(
        function(data) {
          if (!cliente.ID) {
            clientes.push(data);
          } else {
            var index = 0;
            clientes.forEach(function (current, $index) {
              if (current.ID === me.cliente.ID) {
                index = $index;
              }
            });      

            console.log(index);

            clientes[index].Nombre = me.cliente.Nombre;
            clientes[index].ApellidoPaterno = me.cliente.ApellidoPaterno;
            clientes[index].ApellidoMaterno = me.cliente.ApellidoMaterno;
            clientes[index].Direccion = me.cliente.Direccion;
            clientes[index].Telefono = me.cliente.Telefono;
            clientes[index].Celular = me.cliente.Celular;
            clientes[index].CI = me.cliente.CI;
          }

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