const findTheOldest = function (arr) {
  let myArr = [];
  for (ele in arr) {
    // console.log(arr[ele]);
    myArr.push(
      `{${arr[ele].name}: ${arr[ele].yearOfDeath} - ${arr[ele].yearOfBirth}}}`
    );
    // myArr.push();
    console.log(myArr);
  }
};

// Do not edit below this line
module.exports = findTheOldest;
