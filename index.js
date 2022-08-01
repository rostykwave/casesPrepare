// const rps = (p1, p2) => {
//   const game = p1 + ' ' + p2;
//   let winner = '';
//   let message = '';

//   if (
//     game === 'rock rock' ||
//     game === 'scissors scissors' ||
//     game === 'paper paper'
//   ) {
//     winner = 'draw';
//   } else if (
//     game === 'rock scissors' ||
//     game === 'scissors paper' ||
//     game === 'paper rock'
//   ) {
//     winner = '1';
//   } else {
//     winner = '2';
//   }

//   switch (winner) {
//     case '1':
//       message = `Player ${winner} won!`;
//       break;
//     case '2':
//       message = `Player ${winner} won!`;
//       break;

//     default:
//       message = 'Draw!';
//       break;
//   }

//   return message;
// };

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'rock'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('paper', 'paper'));
