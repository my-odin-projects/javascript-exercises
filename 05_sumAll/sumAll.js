const sumAll = function (start, end) {
  //   NUmber.isInteger is the function that checks for negativity and if its a string literal "10" returns false..
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }
  let output = 0;

  let begin = start <= end ? start : end;
  let finish = start <= end ? end : start;

  while (begin <= finish) {
    output += begin;
    begin++;
  }
  return output;
};
// Do not edit below this line
module.exports = sumAll;
