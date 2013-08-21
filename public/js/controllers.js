'use strict';

/* Controllers */

function IndexCtrl($scope, angularFire) {

    angularFire("https://eventario.firebaseio.com/events", $scope, "events");
//  $http.get('/api/events').
//    success(function(data, status, headers, config) {
//          $scope.events = data.events;
//    });

}

function TestComponentsCtrl($scope) {
  $scope.button = {"active": false};
}

function AddEventCtrl($scope, $location, angularFire) {
    var promise = angularFire("https://eventario.firebaseio.com/events", $scope, "events");
    promise.then(function(){
        $scope.submitEvent = function() {
            $scope.events.push($scope.form);
//            $scope.form = {};
            $location.path('/');
        };
    });

}

function ReadEventCtrl($scope, $http, $routeParams, angularFire) {
    console.log($routeParams.id);
  angularFire("https://eventario.firebaseio.com/events", $scope, "events");
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
