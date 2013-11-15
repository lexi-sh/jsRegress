/*
  SUMM = {
    means: [
      {
        vals: [3,3,5,1],
        mean: 3
      },
      {
        vals: [1,2,3],
        mean: 2
      }
    ]
    totalMean = 2.5
  
  
  }
*/


var SUMM = {},
  async = require('async'),
  univ = require('../univariate');
  
function onewayAnova(opts, callback) {
  checkOnewayAnova(opts, function(err) {
    if (err) {
      callback({err: err});
      return;
    }
    calculateMeans(opts, function() {
      console.log(SUMM);
    });
  });
}

function checkOnewayAnova(opts, callback) {
  var err = "";
  if (!Array.isArray(opts.vals) || !Array.isArray(opts.vals[0])) {
    err += "Vals needs to be an array of arrays";
  }
  callback(err);
}

function calculateMeans(SUMM, opts, callback) {
  console.log(opts);
  var values = [],
    allValuesForTotalMean = [];
  async.each(opts.vals, function(item, cb) {
    item.forEach(function(x) {
      allValuesForTotalMean.push(x);
    });
    univ.mean(item, function(_mean) {
      values.push({
        vals: item,
        mean: _mean
      });
      cb();
    });
  }, function(err) {
    SUMM.means = values;
    univ.mean(allValuesForTotalMean, function(fullMean) {
      SUMM.totalMean = fullMean;
      callback();
    });
  });
}

exports.anova = onewayAnova;