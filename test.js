var stat = require('./lib/main');

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

var obj = [{
  val: 1
},{
  val: 2
},{
  val: 3
},{
  val: 4
},{
  val: 4
},{
  val: 4
},{
  val: 4
},{
  val: 8
},{
  val: 9
},{
  val: 10
},{
  val: 12
},{
  val: 14
},{
  val: 54
},];

var arr = rankItems(obj);
console.log(arr);