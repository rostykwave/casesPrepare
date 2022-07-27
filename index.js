const makeCounter = function () {
  let currCount = 0;

  const increaseCount = () => {
    currCount += 1;
  };

  const getCurrCount = () => {
    return currCount;
  };

  return { increaseCount, getCurrCount };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1.increaseCount();
counter1.increaseCount();
console.log(counter1.getCurrCount());
console.log(counter2.getCurrCount());
