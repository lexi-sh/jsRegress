//Usage:

//var _matrix = new matrix();

var matrix = function(_rows) {
  this.rows = _rows;
};

matrix.prototype.mulitply = function(_matrix) {
  
};

matrix.prototype.transpose = function() {
  this.rows = this.rows.transpose();
};

Array.prototype.transpose = function() {
  // Calculate the width and height of the Array
  var a = this,
    w = a.length ? a.length : 0,
    h = a[0] instanceof Array ? a[0].length : 0;
  if(h === 0 || w === 0) { return []; }
  var i, j, t = [];
  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {
    // Insert a new row (array)
    t[i] = [];
    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {
      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }
  return t;
};

exports.matrix = matrix;