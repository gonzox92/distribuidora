(function () {
  angular
    .module('distribuidora.carros')
    .controller('carrosListaController', carrosListaController);

  carrosListaController.$inject = ['carros', 'ngDialog', 'carrosRest'];

  function carrosListaController(carros, ngDialog, carrosRest) {
    var me = this;
    me.carros = carros;

    CarroRest.$inject = ['carrosRest'];
    function CarroRest(carrosRest) {
      return new carrosRest();
    }

    function showRegistro($index) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/carros/carros-registro/carros-registro.template.html',
        controller: 'CarrosRegistro',
        controllerAs: 'registro',
        resolve: {
          Carro: CarroRest,
          carro: function () {
            if (typeof($index) !== 'undefined') {
              return {
                ID: me.carros[$index].ID,
                CodCarro: me.carros[$index].CodCarro,
                Placa: me.carros[$index].Placa,
                NumeroChasis: me.carros[$index].NumeroChasis,
                Marca: me.carros[$index].Marca,
                Modelo: me.carros[$index].Modelo,
                Color: me.carros[$index].Color
              }
            }

            return {
              CodCarro: '',
              Placa: '',
              NumeroChasis: '',
              Marca: '',
              Modelo: '',
              Color: ''
            }
          },
          carros: function () {
            return me.carros;
          }
        }
      });
    }

    function showEliminar($index, currentCarro) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/carros/carros-mensajes/carros-eliminar.template.html',
        controller: 'CarrosMensajes',
        controllerAs: 'mensaje',
        resolve: {
          carro: function () {
            return {
              index: $index,
              lista: me.carros,
              current: currentCarro
            };
          },
          rest: CarroRest
        }
      });
    }

    me.showRegistro = showRegistro;
    me.showEliminar = showEliminar;
  }
})();