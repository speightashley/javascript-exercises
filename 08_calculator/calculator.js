const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (item of arr) {
    total += item;
  }
  return total;
};

const multiply = function (arr) {
  let total = 1;
  for (item of arr) {
    total *= item;
  }
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n == 0) {
    return 1;
  }
  while (n > 0) {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
