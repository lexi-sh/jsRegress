var stat = require('../lib/main');

exports['test regression accuracy'] = function(test) {
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     test.ok(-281.42698 - regressedObj.betas[0] < 0.0001);
     test.ok(-7.6110296 - regressedObj.betas[1] < 0.0001);
     test.ok(19.0102910 - regressedObj.betas[2] < 0.0001);
     test.done();
  });
};
