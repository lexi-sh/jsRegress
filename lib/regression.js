/*

data = [[y1,a1,b1,c1,d1],
[y2,a2,b2,c2,d2],
...etc
]

*/

var numeric = require('numeric');
var err = require('./error');

exports.regression = function(data, callback) {
  callback(new regressed(data));
};

function convertData(matrix) {
  var Ym = [];
  matrix.forEach(function(equations) {
    Ym.push(equations[0]);
    equations[0] = 1;
  });
  var obj = {
    X: matrix,
    Y: Ym
  };
  return obj;
}

function regressed(data) {
  this.yVals = getYVals(data);
  this.data = data;
  this.betas = getBetas(data);
  this.residuals = getResids(this.betas, this.data, this.yVals);
}

function getYVals(data) {
  var y = [];
  data.forEach(function(equation) {
    y.push(equation[0]);
  });
  return y;
}

function getBetas(data) {
  var obj = convertData(data);
  var X = obj.X;
  var Y = obj.Y;
  var X_T = numeric.transpose(X);
  var multipliedXMatrix = numeric.dot(X_T,X);
  var LeftSide = numeric.inv(multipliedXMatrix);
  var RightSide = numeric.dot(X_T,Y);
  return numeric.dot(LeftSide,RightSide);
}

function getResids(betas, data, Y) {
  var resids = [];
  data.forEach(function(equation, idx) {
    var guess = betas[0];
    for (var i=1 ; i<equation.length; i++) {
      guess += betas[i]*equation[i];
    }
    resids.push(guess - Y[idx]);
  });
  return resids;
}

regressed.prototype.estimate = function(beta_array) {
  if (beta_array.length != this.betas.length - 1) {
    return new err.error('Estimate array not equal to betas array - 1');
  }
  var betas = this.betas;
  var y_hat = betas[0];
  beta_array.forEach(function(est, idx) {
    y_hat += est*betas[idx+1];
  });
  return y_hat;
};

regressed.prototype.durbinWatson = function() {
  var numerator = 0, denominator = this.residuals[0]*this.residuals[0];
  for (var i = 1; i < this.residuals.length; i++) {
    numerator += (this.residuals[i] - this.residuals[i-1])*(this.residuals[i] - this.residuals[i-1]);
    denominator += (this.residuals[i]*this.residuals[i]);
  }
  return numerator/denominator;
};











