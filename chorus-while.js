/*We've been working with a pop idol on a new song, and to make sure it's 
a bonafide ear worm, the label wants us to repeat the chorus ten times at 
the end of the song. Wanting to practice some JavaScript, 
we decide to write a while loop to print out the chorus ten times.*/


const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
//We should see "Let's dance!" printed 10 times, followed by "Until the sun comes up!".




/* Like blocks following if statements, any code can go inside the block following a while. 
For example, if we're worried our song outro is too repetitive we might decide to 
change the key after five repetitions.*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");