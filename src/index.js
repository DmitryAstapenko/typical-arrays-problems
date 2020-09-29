
exports.min = function min (array) {
  return array.reduce( (minValue, currentValue) => 
    minValue > currentValue ? currentValue : minValue, 0);
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
