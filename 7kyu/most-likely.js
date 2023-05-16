// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1, prob2) {
  let value1 = prob1.split(":").map(Number);
  let value2 = prob2.split(":").map(Number);

  value1 = value1[0] / value1[1];
  value2 = value2[0] / value2[1];
  console.log(value1, value2);
  return value1 > value2 ? true : false;
}
