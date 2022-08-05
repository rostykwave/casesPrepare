function flatten(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);

      for (let j = 0; j < flat.length; j++) {
        newArray.push(flat[j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(flatten([1, [1], [2, 3], [[[4, 5]]]]));
