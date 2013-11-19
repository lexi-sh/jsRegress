var stat = require('../lib/main');

exports['mann whitney U'] = function(test) {
  var x1 = [1,4,9,6,4,3,5,6,4];
  var x2 = [1,5,3,2,5,4,1,5];
  var opts = {
    type: "mann-whitney U",
    x1: x1,
    x2: x2
  };
  stat.nonparam(opts, function(retObj) {
    test.ok(retObj.U - 48.5 < 0.00001);
    test.done();
  });
};

exports['mann whitney U wrong input'] = function(test) {
  var opts = {
    type: "mann-whitney U",
    x1: 5,
    x2: '3'
  };
  stat.nonparam(opts, function(err) {
    test.equal('ERROR: options.x1 or options.x2 not array', err);
    test.done();
  });
};