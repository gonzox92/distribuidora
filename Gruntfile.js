(function () {
  'use strict';

  module.exports = function (grunt) {

    grunt.initConfig({

      wiredep: {
        app: {
          src: ['src/client/index.html'],
          ignorePath: /\.\.\//
        }
      },

    	includeSource: {
        options: {
          basePath: 'src/client/assets/lib',
          templates: {
            html: {
              js: '<script src="{filePath}"></script>',
              css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
            }
          }
        },
        myTarget: {
          files: {
            'src/client/index.html': 'src/client/index.tpl.html'
          }
        }
      },

			angularFileLoader: {
	      options: {
	        scripts: ['src/client/app/common/**/*.js', 'src/client/app/modules/**/*.js']
	      },
	      project: {
	        src: ['src/client/index.html']
	      }
	    },

	    watch: {
        client: {
          files: ['src/client/app/**/*.js'],
          tasks: ['install']
        }
      },

    });

		[
      'grunt-contrib-watch',
      'grunt-wiredep',
      'grunt-include-source',
      'grunt-angular-file-loader'
    ].forEach(function (task) {
      grunt.loadNpmTasks(task);
    });

    grunt.registerTask('install', [
      'includeSource',
      'wiredep',
      'angularFileLoader'
    ]);

    grunt.registerTask('build', [
      'install',
      'watch'
    ])
	}
})();