// Create a new file in your lighthouse-js-fundamentals directory in Vagrant called odd.js.
// Inside the file, define a function called isOdd.
// This function should take a number as a parameter and return true if it is odd and false otherwise.


function isOdd(num) {
  if (num % 2 === 0) {
    return false
  } else {
    return true
  };
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
