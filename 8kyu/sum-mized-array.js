// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let numArr = x.map(num => Number(num));
    return numArr.reduce((accum, element) => accum + element, 0)
  }