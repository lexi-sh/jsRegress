Array.prototype.mean = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
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