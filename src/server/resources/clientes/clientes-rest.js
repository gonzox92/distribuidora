var restResource = require('../../common/rest/rest-resource');
var resourceName = 'clientes';

module.exports = (function () {
  var router = restResource(resourceName);

  return router;
})();