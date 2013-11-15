exports.anova = function(opts, callback) {
  switch (opts.type) {
    case "balanced":
      balancedAnova(opts, callback);
      break;
  }
};

function balancedAnova(opts, callback) {
  checkBalancedAnova(opts, function(err) {
    if (err) {
      callback({err: err});
      return;
    }
    
  });
}

function checkBalancedAnova(opts, callback) {
  var err = "";
  if (!Array.isArray(opts.vals) || !Array.isArray(opts.vals[0])) {
    err += "Vals needs to be an array of arrays";
  }
  callback(err);
}