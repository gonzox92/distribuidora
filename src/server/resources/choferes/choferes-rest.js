var restResource = require('../../common/rest/rest-resource');
var resourceName = 'choferes';

module.exports = (function () {
  var router = restResource(resourceName);

  return router;
})();