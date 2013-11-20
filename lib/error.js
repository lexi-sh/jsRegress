var error = function(obj) {
  this.errors = [];
  this.errors.push(obj);
};

error.prototype.addError = function(obj) {
  this.errors.push(obj);
};

exports.error = error;