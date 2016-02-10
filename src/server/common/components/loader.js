(function () {
  var fs = require('fs');

  var loadDirectory = function (path, app, afterLoading) {
    var files = fs.readdirSync(path);

    files.forEach(function (file) {
      var moduleName = path + '/' + file;
      console.log("Loading: " + file);
      try {
        var appModule = require(moduleName);
        if (typeof appModule === 'function') {
          var mod = appModule(app);
        }

        // Executing extra logic after loading the module
        if (afterLoading) {
          //console.log('Before calling the extra logic');
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
        console.log("Registering a resource:" + resource.name);
        // A module exposes the following API
        /*
         {
         name : String,
         routes :[ Router ]
         }
         */

        try {
          // Registering the routers
          resource.routes.forEach(function (router) {
            app.use('/api', router);
          });
        } catch (e) {
          console.log('Error while registering routers for resource:' +
          resource.name || 'Unnamed Resource');
          console.log(e);
        }
      };

      resourcesDirectory = __dirname + '/../../resources';
      loadDirectory(resourcesDirectory, app, registeringResources);
    }
  };
})();
