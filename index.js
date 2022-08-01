const testResults1 = [10, 10, 11, 9, 12, 8];
const testResults2 = [5];
function getSpeedStatistic(testResults) {
  const min = Math.min(...testResults);
  const max = Math.max(...testResults);
  // const sum = testResults.reduce((prev, num) => {
  //   return prev + num;
  // }, 0);

  let sum = 0;
  for (let i = 0; i < testResults.length; i += 1) {
    sum += testResults[i];
  }
  // for (const result of testResults) {
  //   sum += result;
  // }

  const mid = Math.floor(sum / testResults.length);
  return [min, max, mid];
}

console.log(getSpeedStatistic(testResults1));
console.log(getSpeedStatistic(testResults2));
