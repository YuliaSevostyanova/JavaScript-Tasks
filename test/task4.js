var chai = require('chai');
var tickets = require('../tasks/task4');
var should = require('chai').should();

describe('The new "Avengers" movie [TASK4]', function() {
  it('Mast be YES', function () {
    tickets([25, 25, 50]).should.equal('YES');
  });
  it('Must be NO', function () {
    tickets([25, 100]).should.equal('NO');
  });
});
