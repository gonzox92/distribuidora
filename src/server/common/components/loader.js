(function () {
  var fs = require('fs');

  var loadDirectory = function (path, app, afterLoading) {
    var files = fs.readdirSync(path);

    files.forEach(function (file) {
      var moduleName = path + '/' + file;
      //console.log("Loading: " + file);
      try {
        var appModule = require(moduleName);
        var mod = appModule(app);

        // Executing extra logic after loading the module
        if (afterLoading) {
          afterLoading(mod);
        }
      } catch (e) {
        console.log("Error while loading module: " + e);
      }
    });
  };

  module.exports = {
    // Loads a directory to configure the Express App
    // @param[app] The Express App to be configured
    loadBootDirectory: function (app) {
      bootDirectory = __dirname + '/../../boot';
      loadDirectory(bootDirectory, app);
    },

    // Loads a directory to configure resources
    // @param[app] The Epxress App to register the routers
    loadResourcesDirectory: function (app) {
      var registeringResources = function (resource) {
        console.log('Recurso: ' + resource.name + ' \t[OK]');

        try {
          // Registering the routers
          app.use('/api', resource.router);
        } catch (e) {
          console.error('Recurso: ' + resource.name || 'Desconocido' + ' [FAIL]');
          console.error(e);
        }
      };

      resourcesDirectory = __dirname + '/../../resources';
      loadDirectory(resourcesDirectory, app, registeringResources);
    }
  };
})();
