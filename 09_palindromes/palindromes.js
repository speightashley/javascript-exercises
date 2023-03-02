const palindromes = function (x) {
  const processed = x.toLowerCase().replace(/[^a-z]/g, "");
  return processed.split("").reverse().join("") == processed;
};

// Do not edit below this line
module.exports = palindromes;
