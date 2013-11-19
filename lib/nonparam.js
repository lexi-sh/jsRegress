var mannU = require('./non-parametrics/mannU');

exports.nonparam = function(opts, callback) {
  switch (opts.type) {
    case "mann-whitney U":
      mannU.test(opts, callback);
      break;
  }
};
