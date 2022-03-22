const caesar = function (strInput, shift) {
  let encryptedArr = [];
  for (let i = 0; i < strInput.length; i++) {
    let charac = strInput.charAt(i);
    let charCode = strInput.charCodeAt(i);
    let encrytpedVal = "";
    if (/[a-z]/.test(charac)) {
      encrytpedVal = encryptedValFun(charCode, shift, "a", "z");
    } else if (/[A-Z]/.test(charac)) {
      encrytpedVal = encryptedValFun(charCode, shift, "A", "Z");
    } else {
      encrytpedVal = charCode;
    }
    encryptedArr[i] = String.fromCharCode(encrytpedVal);
  }

  return encryptedArr.join("");
};

let encryptedValFun = (charCode, shift, beginCharCode, endCharCode) => {
  let actualShift = shift % 26;
  let encryptedVal = charCode + actualShift;
  if (encryptedVal < beginCharCode.charCodeAt(0)) {
    encryptedVal =
      endCharCode.charCodeAt(0) -
      (beginCharCode.charCodeAt(0) - encryptedVal) +
      1;
  } else if (encryptedVal > endCharCode.charCodeAt(0)) {
    encryptedVal =
      beginCharCode.charCodeAt(0) +
      (encryptedVal - endCharCode.charCodeAt(0)) -
      1;
  }
  return encryptedVal;
};

// Do not edit below this line
module.exports = caesar;
