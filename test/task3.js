var chai = require('chai');
var longestPalindrome = require('../tasks/task3');
var should = require('chai').should();

describe('Longest Palindrome [TASK3]', function() {
  before(function () {
        chai.config.includeStack = false;
    });
  it('Palindrome', function () {
    longestPalindrome('a').should.equal(1);
    longestPalindrome('aab').should.equal(2);
    longestPalindrome('abcde').should.equal(1);
    longestPalindrome('zzbaabcd').should.equal(4);
    longestPalindrome('').should.equal(0);
  });
});
