// Challenge
// Define a function howManyHundreds

// When this function is given a number, it should return how many hundreds fit into that number.

// For example:

// code	output
// howManyHundreds(1000);	10
// howManyHundreds(894);	8
// howManyHundreds(520);	5
// howManyHundreds(99);	0
// howManyHundreds(0);	0

function howManyHundreds(num) {
  let extraCans = num % 100
  let fullContainers = (num - extraCans) / 100
  return fullContainers
}
console.log(howManyHundreds(997));