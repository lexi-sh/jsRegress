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

exports["std test"] = function(test) {
  stat.std([3, 5, 2, 4.3, 19, 333, 5, 10, 0], function(result) {
    test.ok(result - 109.13127 < 0.001, "result is not within the acceptable epsilon");
    test.done();
  });
};