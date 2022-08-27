// function solution(str) {
//   return str
//     .split('')
//     .reduce((reverseArray, letter) => {
//       reverseArray.unshift(letter);
//       return reverseArray;
//     }, [])
//     .join('');
// }
function solution(str) {
  return str.split('').reverse().join('');
}

// function solution(str) {
//   var o = '';
//   for (var i = str.length - 1; i >= 0; i--) o += str[i];
//   return o;
// }
console.log("solution('world')", solution('world'));
