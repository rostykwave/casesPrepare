const reverseSeq = n => {
  let a = [];
  for (let i = n; i > 0; i -= 1) {
    a.push(i);
  }

  return a;
};

// const reverseSeq = n => {
//   let a = [];
//   for (let i = 1; i <= n; i += 1) {
//     a.unshift(i);
//   }

//   return a;
// };

console.log(reverseSeq(6));
// console.log(reverseSeq(2));
