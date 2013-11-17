/*

data = [[y1,a1,b1,c1,d1],
[y2,a2,b2,c2,d2],
...etc
]

*/

var numeric = require('numeric');

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
  this.data = data;
  this.betas = getBetas(data);
  this.residuals = getResids(this.betas, this.data);
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

function getResids(betas, data) {
  var resids = [];
  data.forEach(function(equation) {
    var guess = betas[0];
    for (var i=1 ; i<equation.length; i++) {
      guess += betas[i]*equation[i];
    }
    resids.push(equation[0] - guess);
  });
  return resids;
}