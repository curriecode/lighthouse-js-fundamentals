
//example 1
const temperature = 16;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//example 2

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//example 3

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// Here our if statement is true when temperature is either below -40 or above 40 degrees.


// example 4

if (!raining) {
  console.log("Leave your umbrella at home!");
}

/*We read the expression in the above example usually as "if not raining", 
but it's not always intuitive what "not true" or "not false" mean unless you 
remember that the ! operator reverses the value of raining. That is, if raining is true, 
!raining is false. If raining is false, !raining is true.*/


