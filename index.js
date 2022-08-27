// function SeriesSum(n) {
//   // Happy Coding ^_^
//   let result = 0;
//   let denominator = 1;

//   for (let i = 1; i <= n; i += 1) {
//     result += 1 / denominator;
//     denominator += 3;
//   }
//   return result.toFixed(2);
// }
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5));
