/*
  SUMM = {
    data: {
      samples: [
        {
          vals: [3,3,5,1],
          mean: 3
          meanDiff: 0.428...
        },
        {
          vals: [1,2,3],
          mean: 2
          meanDiff: -0.571...
        }
      ],
      totalMean: 2.571...
    },
    anova: {
      treatment: {
        df: 0,
        SS: 0,
        MS: 0,
        F: 0
      },
      residuals: {
        df: 0,
        SS: 0,
        MS: 0
      },
      total: {
        df: 0,
        SS: 0
      }
    }
  }
*/


var SUMM = {data: {}, anova: {treatment: {}, residuals: {}, total: {}}},
  async = require('async'),
  univ = require('../univariate');
  
function onewayAnova(opts, callback) {
  checkOnewayAnova(opts, function(err) {
    if (err) {
      callback({err: err});
      return;
    }
    calculateMeans(opts, function() {
      calculateDfs();
      calculateSSs();
      calculateMSs();
      calculateF();
      callback(SUMM.anova);
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

function calculateMeans(opts, callback) {
  var values = [],
    allValuesForTotalMean = [];
  async.each(opts.vals, function(item, cb) {
    item.forEach(function(x) {
      allValuesForTotalMean.push(x);
    });
    values.push({
      vals: item,
      mean: item.mean()
    });
    cb();
  }, function(err) {
    SUMM.data.samples = values;
    var fullMean = allValuesForTotalMean.mean();
    SUMM.data.totalMean = fullMean;
    SUMM.data.samples.forEach(function(x) {
      x.meanDiff = x.mean - fullMean;
    });
    callback();
  });
}

function calculateDfs() {
  var numObs = 0;
  SUMM.data.samples.forEach(function(x) {
    numObs += x.vals.length;
  });
  SUMM.anova.total.df = numObs - 1;
  SUMM.anova.treatment.df = SUMM.data.samples.length - 1;
  SUMM.anova.residuals.df = SUMM.anova.total.df - SUMM.anova.treatment.df;
}

function calculateSSs() {
  var SST = 0, SSE = 0, CurRowSS = 0;
  SUMM.data.samples.forEach(function(sample) {
    SST += (sample.meanDiff*sample.meanDiff*sample.vals.length);
    sample.vals.forEach(function(obs) {
      CurRowSS += (obs-sample.mean)*(obs-sample.mean);
    });
    SSE += CurRowSS;
    CurRowSS = 0;
  });
  SUMM.anova.treatment.SS = SST;
  SUMM.anova.residuals.SS = SSE;
  SUMM.anova.total.SS = SST + SSE;
}

function calculateMSs() {
  SUMM.anova.treatment.MS = SUMM.anova.treatment.SS / SUMM.anova.treatment.df;
  SUMM.anova.residuals.MS = SUMM.anova.residuals.SS / SUMM.anova.residuals.df;
}

function calculateF() {
  SUMM.anova.treatment.F = SUMM.anova.treatment.MS / SUMM.anova.residuals.MS;
}

exports.anova = onewayAnova;
