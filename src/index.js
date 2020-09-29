
exports.min = function min (array) {  
  return (!array || !array.length) 
    ? 0 
    : array.reduce( (result, curr) => result > curr ? curr : result);
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
