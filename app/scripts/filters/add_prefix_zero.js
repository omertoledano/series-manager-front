'use strict';

angular.module('seriesManagerApp')
  .filter('addPrefixZero', function () {
    return function (input) {
      if(input < 10) {
          return '0' + input;
      } else {
          return '' + input;
      }
    };
  });
