/**
 * Created by glenn.mason on 27/05/2016.
 */
function mapSummer(arr, mapper_fn, reducer_fn) {
  var newArr = arr.map(mapper_fn);
  var v = newArr.reduce(reducer_fn);
  return v
}

var mapper = function (a) {
  return 2 * a;
};

var reducer = function (a, b) {
  return a + b;
}

a = [1, 2, 3, 4, 5];
console.log(mapSummer(a, mapper, reducer));