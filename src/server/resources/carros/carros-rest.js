var restResource = require('../../common/rest/rest-resource');
var resourceName = 'carros';

module.exports = (function () {
  var router = restResource(resourceName);

  return router;
})();