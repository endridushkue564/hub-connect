/* filename: sophisticated_code.js */

// This code calculates the sum of odd numbers within a given range
// It generates a random array and finds the sums of the odd numbers in that array

// Function to generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random array
function generateRandomArray(length, minValue, maxValue) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomNumber(minValue, maxValue));
  }
  return array;
}

// Function to calculate the sum of odd numbers in an array
function calculateSumOfOddNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

// Generate a random array of length 100 with values between -100 and 100
const randomArray = generateRandomArray(100, -100, 100);

// Calculate the sum of odd numbers in the random array
const sumOfOddNumbers = calculateSumOfOddNumbers(randomArray);

console.log("Random Array:", randomArray);
console.log("Sum of Odd Numbers:", sumOfOddNumbers);