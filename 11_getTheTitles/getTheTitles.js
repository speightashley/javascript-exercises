const getTheTitles = function (books) {
  myArr = [];
  for (num in books) {
    myArr.push(books[num].title);
  }
  return myArr;
};

// Do not edit below this line
module.exports = getTheTitles;
