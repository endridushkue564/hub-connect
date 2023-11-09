// File name: complexCode.js
// Description: A complex JavaScript code example showcasing various features and functionalities

// Object constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype method
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}

// Class definition using IIFE (Immediately Invoked Function Expression)
var Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.makeSound = function() {
    console.log("The " + this.name + " makes a sound.");
  }

  return Animal;
})();

// Inheritance using ES6 classes
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("The " + this.breed + " dog named " + this.name + " barks loudly.");
  }
}

// Global variable
const PI = 3.14;

// Arrow function
const multiply = (a, b) => a * b;

// Recursive function
function fibonacci(n) {
  if (n <= 1)
    return n;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      if (data.length > 0)
        resolve(data);
      else
        reject("No data found.");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Event handling
document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("Button clicked!");
});

// Generator function
function* generateNumbers(num) {
  for (let i = 0; i <= num; i++) {
    yield i;
  }
}

const numGenerator = generateNumbers(5);
console.log(numGenerator.next().value); // 0
console.log(numGenerator.next().value); // 1
console.log(numGenerator.next().value); // 2

// AJAX (Asynchronous JavaScript and XML)
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("Response received:", xhttp.responseText);
  }
};
xhttp.open("GET", "https://api.example.com/data", true);
xhttp.send();

// Complex logic
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2].map(x => x * 2).filter(x => x > 5);

console.log("New Array:", newArray);

// Chainable function calls
const calculator = {
  currentValue: 0,

  add(num) {
    this.currentValue += num;
    return this;
  },

  subtract(num) {
    this.currentValue -= num;
    return this;
  },

  multiply(num) {
    this.currentValue *= num;
    return this;
  },

  divide(num) {
    if (num !== 0)
      this.currentValue /= num;
    return this;
  },

  getResult() {
    return this.currentValue;
  }
};

console.log("Calculation Result:", calculator.add(5).subtract(2).multiply(3).divide(2).getResult());

// Complex regular expression
const pattern = /(zero|one|two|three|four|five|six|seven|eight|nine)/g;
const sentence = "I have two apples and three bananas.";
const replacedSentence = sentence.replace(pattern, match => {
  switch (match) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return match;
  }
});

console.log(replacedSentence);

// Async/await
async function fetchUserDetails(username) {
  try {
    const response = await fetch("https://api.example.com/users/" + username);
    if (response.ok) {
      const userDetails = await response.json();
      console.log("User Details:", userDetails);
    } else {
      console.error("Error fetching user details:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
}

fetchUserDetails("john_doe");