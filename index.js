var number = function (array) {
  //your awesome code here
  return array.map((item, index) => {
    return index + 1 + ': ' + item;
  });
};
// var number = function (array) {
//   //your awesome code here
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(i + 1 + ': ' + array[i]);
//   }
//   return newArray;
// };

console.log(number(['a', 'b', 'c']));
