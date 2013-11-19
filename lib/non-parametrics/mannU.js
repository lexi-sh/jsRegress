
exports.test = function(opts, callback) {
  checkMannU(opts, function(err) {
    if (err) {
      callback(err);
      return;
    }
    var mann_array = convert(opts);
    
    mann_array.sort(function(a,b) {
      return a.val - b.val;
    });
    var U, N1, N2;
    N1 = opts.x1.length;
    N2 = opts.x2.length;
    
    mann_array = rankItems(mann_array);
    
    U = countVals(mann_array,'x1') - (N1*N1+N1)/2;
    callback({
      U: U
    });
  });
};

function checkMannU(opts, callback) { 
  if (!Array.isArray(opts.x1) || !Array.isArray(opts.x2)) {
    callback('ERROR: options.x1 or options.x2 not array');
  }
  else {
    callback();
  }
}

function convert(opts) {
  var retObj = [];
  opts.x1.forEach(function(x) {
    retObj.push({
      val: x,
      sample: 'x1'
    });
  });
  opts.x2.forEach(function(x) {
    retObj.push({
      val: x,
      sample: 'x2'
    });
  });
  
  return retObj;
}

function countVals(arr, sample) {
  var sampleTotal = 0;
  arr.forEach(function(observation) {
    if (observation.sample === sample)
      sampleTotal += observation.rank;
  });
  return sampleTotal;
}

function rankItems(arr) {
  var index = 0;
  while (index < arr.length) {
    var curItem = arr[index].val,
        rankingArray = [],
        newIndex = index,
        rank;
    while (arr[newIndex] && arr[newIndex].val === curItem) {
      rankingArray.push(newIndex+1);
      newIndex++;
    }
    rank = rankingArray.mean();
    while (index < newIndex) {
      arr[index].rank = rank;
      index++;
    }
  }
  return arr;
}



