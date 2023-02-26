const reverseString = function (str) {
  let final = [];
  for (char of str) {
    final.unshift(char);
  }
  return final.join("");
};

// Do not edit below this line
module.exports = reverseString;
