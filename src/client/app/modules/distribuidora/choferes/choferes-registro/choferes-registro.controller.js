(function () {
  angular
    .module('distribuidora.choferes')
    .controller('ChoferesRegistro', ChoferesRegistro);

  ChoferesRegistro.$inject = ['chofer', 'Chofer', 'choferes', 'ngDialog'];
  function ChoferesRegistro(chofer, Chofer, choferes, ngDialog) {
    var me = this;

    me.cerrarRegistro = function () {
      ngDialog.closeAll();
    };

    me.ChoferRest = Chofer;
    me.chofer = chofer;

    function registrarChofer() {
      me.ChoferRest.data = me.chofer;
      var restOperation = chofer.ID ? '$update' : '$save';
      var params = chofer.ID ? { id: chofer.ID } : {};
      me.ChoferRest[restOperation](params).then(
        function(data) {
          if (!chofer.ID) {
            choferes.push(data);
          } else {
            var index = 0;
            choferes.forEach(function (current, $index) {
              if (current.ID === me.chofer.ID) {
                index = $index;
              }
            });

            choferes[index].Nombre = me.chofer.Nombre;
            choferes[index].ApellidoPaterno = me.chofer.ApellidoPaterno;
            choferes[index].ApellidoMaterno = me.chofer.ApellidoMaterno;
            choferes[index].Celular = me.chofer.Celular;
            choferes[index].CI = me.chofer.CI;
            choferes[index].CodChofer = me.chofer.CodChofer;
            choferes[index].Licencia = me.chofer.Licencia;
          }

          ngDialog.closeAll();
        },
        function(error) {
          console.log(error);
        }
      );
    }

    me.registrar = registrarChofer;
  }
})();