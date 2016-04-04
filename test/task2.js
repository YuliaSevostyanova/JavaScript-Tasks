var chai = require('chai');
var uniqueInOrder = require('../tasks/task2');
var should = require('chai').should();


describe('Unique In Order [TASK2]', function() {
  it('Words', function () {
    uniqueInOrder('AAAABBBCCDAABBB').should.to.eql(['A', 'B', 'C', 'D', 'A', 'B']);
    uniqueInOrder('ABBCcAD').should.to.eql(['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('Numbers', function () {
    uniqueInOrder([1,2,2,3,3]).should.to.eql([1,2,3]);
  });

});
