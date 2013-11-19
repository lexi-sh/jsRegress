var univariate = require('./univariate.js');
var anova = require('./anova.js');
var nonparam = require('./nonparam.js');
var reg = require('./regression.js');

exports.mean = univariate.mean;
exports.std = univariate.std;
exports.anova = anova.anova;
exports.regression = reg.regression;
exports.nonparam = nonparam.nonparam;