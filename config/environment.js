/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'coffeisseur-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: ['http://localhost:8080']
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.host = 'http://localhost:8080';

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:8080 ws://localhost:35729 ws://0.0.0.0:35729 http://0.0.0.0:4200/csp-report",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint : ENV.APP.host + '/users/sign_in'
  }

  return ENV;
};
