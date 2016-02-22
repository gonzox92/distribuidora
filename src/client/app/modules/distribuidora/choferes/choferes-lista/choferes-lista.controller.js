(function () {
  angular
    .module('distribuidora.choferes')
    .controller('choferesListaController', choferesListaController);

  choferesListaController.$inject = ['choferes', 'ngDialog', 'choferesRest'];

  function choferesListaController(choferes, ngDialog, choferesRest) {
    var me = this;
    me.choferes = choferes;

    ChoferRest.$inject = ['choferesRest'];
    function ChoferRest(choferesRest) {
      return new choferesRest();
    }

    function showRegistro($index) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/choferes/choferes-registro/choferes-registro.template.html',
        controller: 'ChoferesRegistro',
        controllerAs: 'registro',
        resolve: {
          Chofer: ChoferRest,
          chofer: function () {
            if (typeof($index) !== 'undefined') {
              return {
                ID: me.choferes[$index].ID,
                Nombre: me.choferes[$index].Nombre,
                ApellidoPaterno: me.choferes[$index].ApellidoPaterno,
                ApellidoMaterno: me.choferes[$index].ApellidoMaterno,
                Celular: me.choferes[$index].Celular,
                CI: me.choferes[$index].CI,
                Licencia: me.choferes[$index].Licencia,
                CodChofer: me.choferes[$index].CodChofer
              }
            }

            return {
              Nombre: '',
              ApellidoPaterno: '',
              ApellidoMaterno: '',
              Celular: '',
              CI: '',
              CodChofer: '',
              Licencia: ''
            }
          },
          choferes: function () {
            return me.choferes;
          }
        }
      });
    }

    function showEliminar($index, currentChofer) {
      var dialog = ngDialog.open({
        templateUrl: 'app/modules/distribuidora/choferes/choferes-mensajes/choferes-eliminar.template.html',
        controller: 'ChoferesMensajes',
        controllerAs: 'mensaje',
        resolve: {
          chofer: function () {
            return {
              index: $index,
              lista: me.choferes,
              current: currentChofer
            };
          },
          rest: ChoferRest
        }
      });
    }

    me.showRegistro = showRegistro;
    me.showEliminar = showEliminar;
  }
})();