var stat = require('../lib/main');

exports['test regression accuracy'] = function(test) {
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     test.ok(-281.42698 - regressedObj.betas[0] < 0.0001);
     test.ok(-7.6110296 - regressedObj.betas[1] < 0.0001);
     test.ok(19.0102910 - regressedObj.betas[2] < 0.0001);
     test.done();
  });
};

exports['test estimation error'] = function(test) {
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     var result = regressedObj.estimate([3]);
     test.ok(result.errors);
     test.done();
  });
};

exports['test estimation correct'] = function(test) {
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     var result = regressedObj.estimate([1,1]);
     test.ok(result - (-281.42698 - 7.6110296 + 19.0102910) < 0.001);
     test.done();
  });
};

exports['test residuals'] = function(test) {
  var results = [ -45.74484099915344,
  -165.3352884813279,
  135.5132504936754,
  42.56549347053351,
  33.00138551618056 ];
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     regressedObj.residuals.forEach(function(res, idx) {
       test.ok(res - results[idx] < 0.0001);
     });
     test.done();
  });
};

exports['test DW'] = function(test) {
  stat.regression([ [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101] ], function(regressedObj) {
     var dw = regressedObj.durbinWatson();
     test.ok(dw - 2.24 < 0.001);
     test.done();
  });
}