var stat = require('../lib/main');

exports['anova incorect vals opts'] = function(test) {
  stat.anova({type: 'oneway', vals: 4}, function(results) {
    test.ok(results.err);
    test.done();
  });
};

exports['one way anova test #1'] = function(test) {
  stat.anova({type: 'oneway', vals: [[3,3,5,1],[1,2,3]]}, function(obj) {
    test.ok(obj.treatment.F - 0.8571 < 0.001);
    test.done();
  });
};
exports['one way anova test #2'] = function(test) {
  stat.anova({type: 'oneway', vals: [[3,3,5,1],[15,22,3]]}, function(obj) {
    test.ok(obj.treatment.F - 4.7504 < 0.001);
    test.done();
  });
};
exports['one way anova test #3'] = function(test) {
  stat.anova({type: 'oneway', vals: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]}, function(obj) {
    test.ok(obj.treatment.F - 50 < 0.001);
    test.done();
  });
};
exports['one way anova test #4'] = function(test) {
  stat.anova({type: 'oneway', vals: [
    [13, 2, 53, 213, 12],
    [123, 554, 646, 455, 543],
    [12, 13, 312, 223, 111],
    [53, 34, 54, 334, 4]
    ]}, function(obj) {
    test.ok(obj.treatment.F - 8.2540 < 0.001);
    test.done();
  });
};