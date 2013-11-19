Array.prototype.mean = function() {
  var sum = this.reduce(function(a, b) { return a + b });
  return sum / this.length;
};

Array.prototype.std = function() {
  var valMean = this.mean();
  var sum = 0;
  this.forEach(function(x) {
    sum = sum + Math.pow((x - valMean),2);
  });
  return (Math.sqrt(sum/this.length));
};