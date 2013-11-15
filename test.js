var stat = require('./lib/main');
var util = require('util');
stat.anova({type: 'oneway', vals: [[3,3,5,1],[1,2,3]]}, function(obj) {
  console.log(util.inspect(obj));
});