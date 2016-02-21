(function () {
  angular
    .module('distribuidora.carros')
    .factory('carrosRest', carrosRest);

  carrosRest.$inject = [
    '$q',
    '$resource',
    'API_URL_BASE'
  ];

  function carrosRest($q, $resource, API_URL_BASE) {
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
      API_URL_BASE + 'api/carros/:id',
      parameters,
      actions
    );

    return EventRest;
  }
})();