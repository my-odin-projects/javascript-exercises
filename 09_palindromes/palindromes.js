const palindromes = function (inputStr) {
  let inputStrChar = [...inputStr];
  let onlyCharArr = inputStrChar.filter((ch) => /[a-zA-Z]/.test(ch));
  let onlyAlphaStr = onlyCharArr.join("");
  let revStr = onlyCharArr.reverse().join("");

  return revStr.toLowerCase() == onlyAlphaStr.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
