'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'firebase', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/testComponents', {
        templateUrl: 'partials/testComponents',
        controller: TestComponentsCtrl
      }).
      when('/addEvent', {
        templateUrl: 'partials/addEvent',
        controller: AddEventCtrl
      }).
      when('/readEvent/:id', {
        templateUrl: 'partials/readEvent',
        controller: ReadEventCtrl
      }).
      when('/editEvent/:id', {
        templateUrl: 'partials/editEvent',
        controller: EditEventCtrl
      }).
      when('/deleteEvent/:id', {
        templateUrl: 'partials/deleteEvent',
        controller: DeleteEventCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);