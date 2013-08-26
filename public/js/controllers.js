'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
  $http.get('/api/events').
    success(function(data, status, headers, config) {
      $scope.events = data.events;
    });
}

function AddEventCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitEvent = function () {
    $http.post('/api/event', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ReadEventCtrl($scope, $http, $routeParams) {
  $http.get('/api/event/' + $routeParams.id).
    success(function(data) {
      $scope.event = data.event;
    });
}

function EditEventCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/event/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.event;
    });

  $scope.editEvent = function () {
    $http.put('/api/event/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readEvent/' + $routeParams.id);
      });
  };
}

function DeleteEventCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/event/' + $routeParams.id).
    success(function(data) {
      $scope.event = data.event;
    });

  $scope.deleteEvent = function () {
    $http.delete('/api/event/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };


  $scope.home = function () {
    $location.url('/');
  };
}
