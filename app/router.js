import EmberRouter from '@ember/routing/router';
import config from 'phone-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('phone-input');
  this.route('input-search');
  this.route('autocomplete');
  this.route('phone-validation');
  this.route('about');
  this.route('complete-phone-form');
});
