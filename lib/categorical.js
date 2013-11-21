var fishersExact = require('./categorical/fishers_exact.js');

exports.categorical = function(opts, callback) {
  switch (opts.type) {
    case "fishers":
      fishersExact.test(opts, callback);
      break;
  }
};
