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

exports['test quantiles'] = function(test) {
  var stats = [1,2,3,4,5,6,7],
    qArr = stats.quant();
  test.ok(2 - qArr[0] < 0.001, "1st quartile should be 2 but is actually " + qArr[0]);
  test.ok(4 - qArr[1] < 0.001, "2nd quartile should be 4 but is actually " + qArr[1]);
  test.ok(5 - qArr[2] < 0.001, "3rd quartile should be 5 but is actually " + qArr[2]);
  test.done();
}