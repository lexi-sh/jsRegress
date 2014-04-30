err = require('./error')

Array.prototype.mean = ->
  if not this.length
    return new err.error('Array length = 0')
  sum = this.reduce (x, y) -> x + y
  sum / this.length

Array.prototype.std = ->
  if not this.length
    return new err.error('Array length = 0')
  valMean = this.mean();
  sum = this.reduce (x, y) -> x + y
  return Math.sqrt (sum/this.length)

Array.prototype.quant = ->
  if not this.length
    return new err.error('Array length = 0')
  n = this.length;
  retArray = [];
  (retArray[i] = this[Math.round(((i+1)/4)*n)]) for i in [0..3]