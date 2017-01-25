import angular from 'angular';

import '../style/app.css';

import 'angular-animate';

import 'bootstrap/dist/css/bootstrap.css';

import accordion from 'angular-ui-bootstrap/src/accordion';
import collapse from 'angular-ui-bootstrap/src/collapse';

import demo from './ui.bootstrap.demo.js';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';


angular.module(MODULE_NAME, [accordion,demo,'ngAnimate',collapse])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);


export default MODULE_NAME;