// function squareDigits(num) {
//   return +num
//     .toString()
//     .split('')
//     .map(i => i * i)
//     .join('');
// }

function squareDigitsNewNEW(num) {
  return (
    num
      .toString()
      .split('')
      .map(n => n * n)
      .join('') * 1
  );
}

console.log(squareDigitsNewNEW(3212)); //9414
