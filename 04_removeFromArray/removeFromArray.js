const removeFromArray = function (arr, ...args) {
  for (arg of args) {
    if (arr.includes(arg)) {
      let index = arr.indexOf(arg);
      arr.splice(index, 1);
    } else {
      continue;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
