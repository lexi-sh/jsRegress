var stat = require('../lib/main');

exports['anova incorect vals opts'] = function(test) {
  stat.anova({type: 'oneway', vals: 4}, function(results) {
    test.ok(results.err);
    test.done();
  });
};
