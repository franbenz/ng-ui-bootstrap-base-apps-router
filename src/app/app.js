import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-dynamic-routing/dynamicRouting';
import routeconfig from './config-routes.js';

import '../style/app.css';

import 'bootstrap/dist/css/bootstrap.css';

import accordion from 'angular-ui-bootstrap/src/accordion';
import collapse from 'angular-ui-bootstrap/src/collapse';

import demo from './ui.bootstrap.demo.js';

const app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

const AppConfig = ($urlProvider, $locationProvider, $BaseAppsStateProvider, $httpProvider) => {
  $urlProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $BaseAppsStateProvider.registerDynamicRoutes(routeconfig);
};

AppConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$BaseAppsStateProvider', '$httpProvider'];

angular.module(MODULE_NAME, [
  'dynamicRouting',
  'ui.router',
  accordion,
  demo,
  'ngAnimate',
  collapse
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(AppConfig);

export default MODULE_NAME;
