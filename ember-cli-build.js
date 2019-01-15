/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-babel': {
        includePolyfill: true
    },
    fingerprint: {
      extensions: ['js', 'css', 'map']
      // enabled: false
    },
    // https://github.com/ember-cli/ember-cli/issues/7800
    minifyCSS: {
      enabled: false
    },
    // Disable ember-ast-hot-load
    // 'ember-ast-hot-load': {
      // enabled: false,
    // }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // MH:
  // Semantic UI would not add icons in the destination folder.
  // https://github.com/Semantic-Org/Semantic-UI-CSS/issues/49
  'eot,svg,ttf,woff,woff2'.split(',').forEach(type => {
    ['brand', 'outline'].forEach(asset => {
      app.import(`node_modules/semantic-ui-css/themes/default/assets/fonts/${asset}-icons.${type}`, {
        destDir: 'assets/themes/default/assets/fonts'
      });
    });
  });

  return app.toTree();
};


process.setMaxListeners(1000);
