const removeFromArray = function (inputArr, ...elementsToExclude) {
  let elementsToExcludeArr = Array.from(elementsToExclude);
  let outputArr = inputArr.filter(
    (element) => !elementsToExcludeArr.includes(element)
  );
  return outputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
