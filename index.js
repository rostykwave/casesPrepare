function squareSum(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num * num;
  }, 0);
}

console.log(squareSum([1, 2])); //5
console.log(squareSum([])); //0
