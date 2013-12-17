var err = require('./error');

Array.prototype.mean = function() {
  if (!this.length) {
    return new err.error('Array length = 0');
  }
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};

Array.prototype.std = function() {
  if (!this.length) {
    return new err.error('Array length = 0');
  }
  var valMean = this.mean();
  var sum = 0;
  this.forEach(function(x) {
    sum = sum + Math.pow((x - valMean),2);
  });
  return (Math.sqrt(sum/this.length));
};

Array.prototype.quant = function() {
  if (!this.length) {
    return new err.error('Array length = 0');
  }
  var n = this.length;
  var retArray = [];
  for (i = 0; i < 3; i++) {
    var nthValue = Math.round(((i+1)/4)*n);
    retArray[i] = this[nthValue];
  }
  return retArray;  
};