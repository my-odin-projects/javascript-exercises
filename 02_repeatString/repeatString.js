const repeatString = function (inputStr, num) {
  if (num < 0) {
    return "ERROR";
  }
  let outputStr = "";
  for (let i = 0; i < num; i++) {
    outputStr += inputStr;
  }
  return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
