var numeric = require('numeric');

function go(data) {
  var obj = convertData(data);
  var X = obj.X;
  var Y = obj.Y;
  var X_T = numeric.transpose(X);
  var multipliedXMatrix = numeric.dot(X_T,X);
  var LeftSide = numeric.inv(multipliedXMatrix);
  var RightSide = numeric.dot(X_T,Y);
  var Betas = numeric.dot(LeftSide,RightSide);
  console.log(Betas);
}

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

go(
  [
    [745,36,66],[895,37,68],[442,47,64],[440,32,53],[1598,1,101]
  ]
  
  );