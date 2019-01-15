/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    podModulePrefix: 'frontend',
    environment: environment,
    rootURL: '/e/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    contentSecurityPolicy: { 'connect-src': "'self'" },

    APP: {
      API_HOST      : '',
      API_NAMESPACE : '',
    },

    //Ember toggle actions themes.
    'ember-cli-toggle' : { includedThemes: ['light', 'default', 'flip'] },

  };

//takto chodí dotazy na bydlení, ale nechodí super-rental:
 if (environment === 'development') {
   // Allow to pass backend API by ENV parameters.
   ENV['ember-cli-mirage'] = { enabled: false };
   // ENV.APP.LOG_RESOLVER = true;
   // ENV.APP.LOG_ACTIVE_GENERATION = true;
   // ENV.APP.LOG_TRANSITIONS = true;
   // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
   // ENV.APP.LOG_VIEW_LOOKUPS = true;
 }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
