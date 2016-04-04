var chai = require('chai');
var isValidWalk = require('../tasks/task1');
var should = require('chai').should();


describe('City of Cartesia [TASK1]', function() {
  before(function () {
        chai.config.includeStack = false;
    });
  it('Must be TRUE', function () {
    isValidWalk(['n','s','n','s','n','s','n','s','n','s']).should.equal(true);
  });
  it('Must be FALSE', function () {
    isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']).should.equal(false);
    isValidWalk(['w']).should.equal(false);
    isValidWalk(['n','n','n','s','n','s','n','s','n','s']).should.equal(false);
  });

});
