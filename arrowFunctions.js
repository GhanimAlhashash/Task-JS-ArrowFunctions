/**
 * Rewrite the following `greet` function as an arrow function
 */
const greet = (name) => `Hello ${name}`;

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
const sum = (a, b) => a + b;

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
const square = (n) => n * n;

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
const squares = (numbers) => {
  sqr = [];
  for (x = 0; x < numbers.length; x++) {
    sqr.push(numbers[x] * numbers[x]);
  }
  return sqr;
};

module.exports = {
  greet,
  sum,
  square,
  squares,
};
