/**
 * PROBLEM SOLVING STEPS
 * 1. Inputs
 * 2. Outputs
 * 3. Processing
 */

/**
 * Sum two numbers
 *
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * @return {number} The sum of the two numbers
 */
const sumTwoNums = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return;
  }
  return num1 + num2;
};

console.log('sumTwoNums(1, 2) =', sumTwoNums(1, 2)); // Expecting: 3
console.log('sumTwoNums("hello", 2) =', sumTwoNums('hello', 2)); // Expecting: undefined
console.log('sumTwoNums(1, "test") =', sumTwoNums(1, 'test')); // Expecting: undefined
