(function () {
  angular
    .module('distribuidora.clientes')
    .factory('clientesRest', ClientesRestService);

  ClientesRestService.$inject = [
    '$q',
    '$resource',
    'API_URL_BASE'
  ];

  function ClientesRestService($q, $resource, API_URL_BASE) {
    var parameters = {
      id: '@id'
    };

    var actions = {
      query: {
        isArray: true,
        method: 'GET'
      },
      get: {
        method: 'GET',
        params: parameters
      },
      save: {
        method: 'POST',
        params: parameters
      },
      update: {
        method: 'PUT',
        params: parameters
      },
      delete: {
        method: 'DELETE',
        params: parameters
      }
    };

    var EventRest = $resource(
      API_URL_BASE + 'api/clientes/:id',
      parameters,
      actions
    );

    return EventRest;
  }
})();