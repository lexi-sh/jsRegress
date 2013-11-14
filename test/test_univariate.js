var stat = require('../lib/main');

exports.testmean = function(test) {
  stat.mean([1,4,5,6,9], function(result) {
    test.equal(result, 5, "univariate mean should be 5");
    test.done();
  });
};

exports["test mean empty array"] = function(test) {
  stat.mean([], function(result) {
    test.equal(result, "DIV/0 ERROR", "Should be an error");
    test.done();
  });
};