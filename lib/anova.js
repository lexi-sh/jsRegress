var oneway = require('./anova/oneway');

exports.anova = function(opts, callback) {
  switch (opts.type) {
    case "oneway":
      oneway.anova(opts, callback);
      break;
  }
};
