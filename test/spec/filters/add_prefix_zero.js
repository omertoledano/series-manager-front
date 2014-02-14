'use strict';

describe('Filter: addPrefixZero', function () {

  // load the filter's module
  beforeEach(module('seriesManagerApp'));

  // initialize a new instance of the filter before each test
  var addPrefixZero;
  beforeEach(inject(function ($filter) {
    addPrefixZero = $filter('addPrefixZero');
  }));

  it('should return the input prefixed with "addPrefixZero filter:"', function () {
    var text = 'angularjs';
    expect(addPrefixZero(text)).toBe('addPrefixZero filter: ' + text);
  });

});
