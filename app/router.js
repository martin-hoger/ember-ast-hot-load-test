import EmberRouter from '@ember/routing/router';
import config from './config/environment';

var Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('application.anonymous', { path: '' }, function () {
  });

  this.route('application.admin', { path: 'a' }, function () {
  });

});

export default Router;
