(function () {
  angular
    .module('distribuidora.choferes')
    .factory('choferesRest', ChoferesRest);

  ChoferesRest.$inject = [
    '$q',
    '$resource',
    'API_URL_BASE'
  ];

  function ChoferesRest($q, $resource, API_URL_BASE) {
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
      API_URL_BASE + 'api/choferes/:id',
      parameters,
      actions
    );

    return EventRest;
  }
})();