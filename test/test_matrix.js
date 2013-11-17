var matrix = require('../lib/matrix').matrix;

exports['test transpose - square'] = function(test) {
  var m = new matrix([[1,2,3],[4,5,6],[7,8,9]]);
  m.transpose();
  var SHOULDBE = [[1,4,7],[2,5,8],[3,6,9]];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      test.equal(m.rows[i][j], SHOULDBE[i][j]);
    }
  }
  test.done();
};