require('coffee-script');

var univariate = require('./univariate.coffee');
var anova = require('./anova.js');
var nonparam = require('./nonparam.js');
var reg = require('./regression.js');

exports.anova = anova.anova;
exports.regression = reg.regression;
exports.nonparam = nonparam.nonparam;