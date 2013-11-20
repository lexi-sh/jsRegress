require('../lib/main');

exports.testmean = function(test) {
  var result = [1,4,5,6,9].mean();
  test.equal(result, 5, "univariate mean should be 5");
  test.done();
};

exports["std test"] = function(test) {
  var result = [3, 5, 2, 4.3, 19, 333, 5, 10, 0].std();
  test.ok(result - 109.13127 < 0.001, "result is not within the acceptable epsilon");
  test.done();
};

exports['test div 0'] = function(test) {
  test.ok([].mean().errors);
  test.done();
};