'use strict';

angular.module('seriesManagerApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.root = new Firebase('https://amber-fire-678.firebaseio.com/');
    $scope.series = $firebase($scope.root);
    $scope.AddOne = function(show){
        show.episode += 1;
        $scope.set_episode_server(show.id, show.episode);
    };
    $scope.ReduceOne = function(show){
        show.episode -= 1;
        $scope.set_episode_server(show.id, show.episode);
    };

    $scope.set_episode_server = function(id, episode){
        $scope.root.child(id).child('episode').set(episode);
    };
  });
