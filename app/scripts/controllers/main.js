'use strict';

angular.module('seriesManagerApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var promise = new Firebase('https://amber-fire-678.firebaseio.com/');
    $scope.series = $firebase(promise);
    $scope.AddOne = function(show){
        show.episode += 1;
    };
    $scope.ReduceOne = function(show){
        show.episode -= 1;
    };
  });
