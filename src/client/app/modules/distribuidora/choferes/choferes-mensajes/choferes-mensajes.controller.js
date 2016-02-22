(function() {
  angular
    .module('distribuidora.choferes')
    .controller('ChoferesMensajes', ChoferesMensajes);

  ChoferesMensajes.$inject = ['chofer', 'ngDialog', 'rest'];
  function ChoferesMensajes(chofer, ngDialog, rest) {
    var me = this;
    me.rest = rest;

    function cancelar() {
      ngDialog.closeAll();
    }

    function eliminar() {
      me.rest.$delete({id: me.chofer.current.ID}).then(
        function (data) {
          me.chofer.lista.splice(me.chofer.index, 1);
        },
        function (error) {
          console.log(error);
        }
      );

      ngDialog.closeAll();
    }

    me.chofer = chofer;
    me.cancelar = cancelar;
    me.eliminar = eliminar;
  }

})();