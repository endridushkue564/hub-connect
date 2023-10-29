/*
 * File Name: ComplexProgram.js
 *
 * Description: Complex Program
 * 
 * Author: Your Name
 * Date:   Today's Date
 */

"use strict";

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 10;

// Variables
let counter = 0;
let isRunning = true;

// Objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

// Functions
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function fibonnaci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Your complex DOM manipulation code here
});

// Main Program
console.log("Welcome to the Complex Program!");

while (isRunning) {
  counter++;

  if (counter > MAX_ATTEMPTS) {
    break;
  }

  console.log(`Attempt ${counter} out of ${MAX_ATTEMPTS}`);

  // Complex logic here...

  let randomNumber = Math.random() * 100;
  let squaredNumber = randomNumber ** 2;

  console.log(`Random Number: ${randomNumber}`);
  console.log(`Squared Number: ${squaredNumber}`);

  if (isPrime(squaredNumber)) {
    console.log("Squared number is prime!");
  }
}

console.log("Goodbye!");