exports.mean = function(value_array, callback) {
  var sum = 0, ERR;
  if (!value_array.length)
    ERR = "DIV/0 ERROR";
  value_array.forEach(function(x) {
    sum += Number(x);
  });
  if (ERR)
    callback(ERR);
  else
    callback(sum/value_array.length);
};