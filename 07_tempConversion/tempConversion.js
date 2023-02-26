const convertToCelsius = function (temp) {
  let answer = ((temp - 32) * 5) / 9;
  return +answer.toFixed(1);
};

const convertToFahrenheit = function (temp) {
  let answer = temp * 1.8 + 32;
  return +answer.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
