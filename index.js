// function squareDigits(num) {
//   return +num
//     .toString()
//     .split('')
//     .map(i => i * i)
//     .join('');
// }

function squareDigitsNew(num) {
  return (
    num
      .toString()
      .split('')
      .map(n => n * n)
      .join('') * 1
  );
}

console.log(squareDigitsNew(3212)); //9414
