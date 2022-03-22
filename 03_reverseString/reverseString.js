const reverseString = function (inputStr) {
  let revStr = [];
  for (let i = inputStr.length - 1, j = 0; i >= 0; i--, j++) {
    revStr[j] = inputStr[i];
  }
  let output = revStr.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
