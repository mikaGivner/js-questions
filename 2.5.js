// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const Summation = (num) => {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    sum += i;
    i++;
  }
  return sum;
};

console.log(Summation(8));
