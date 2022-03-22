const ftoc = function (f) {
  // c = (f-32) * 5/9;
  let c = (f - 32) * (5 / 9);
  return Number.isInteger(c) ? c : parseFloat(c.toFixed(1));
};

const ctof = function (c) {
  // f = c*9/5+32;
  let f = c * (9 / 5) + 32;
  return Number.isInteger(f) ? f : parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
