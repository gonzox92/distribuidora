(function () {
  angular
    .module('distribuidora.carros')
    .controller('CarrosRegistro', CarrosRegistro);

  CarrosRegistro.$inject = ['carro', 'Carro', 'carros', 'ngDialog'];
  function CarrosRegistro(carro, Carro, carros, ngDialog) {
    var me = this;

    me.cerrarRegistro = function () {
      ngDialog.closeAll();
    };

    me.CarrosRest = Carro;
    me.carro = carro;

    function registrarCarro() {
      me.CarrosRest.data = me.carro;
      var restOperation = carro.ID ? '$update' : '$save';
      var params = carro.ID ? { id: carro.ID } : {};
      me.CarrosRest[restOperation](params).then(
        function(data) {
          if (!carro.ID) {
            carros.push(data);
          } else {
            var index = 0;
            carros.forEach(function (current, $index) {
              if (current.ID === me.carro.ID) {
                index = $index;
              }
            });

            carros[index].CodCarro = me.carro.CodCarro;
            carros[index].Placa = me.carro.Placa;
            carros[index].NumeroChasis = me.carro.NumeroChasis;
            carros[index].Marca = me.carro.Marca;
            carros[index].Modelo = me.carro.Modelo;
            carros[index].Color = me.carro.Color;
          }

          ngDialog.closeAll();
        },
        function(error) {
          console.log(error);
        }
      );
    }

    me.registrarCarro = registrarCarro;
  }
})();