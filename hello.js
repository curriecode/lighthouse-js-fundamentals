//Example 1 functions

const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();



/*Example 2 functions
We should now see the output of the code in hello.js, 
namely Hello, world in the Terminal. 
But how does it work? Well, we've declared a function named sayHello 
that outputs a string to the console – that's what the console.log function does—and 
then we called, or invoked, it using the parentheses notation sayHello().

We can call sayHello() as many times as we want to, 
and while we don't have to write the whole console.log expression every time, 
it's still not a very useful function. So let's see if we can improve it.*/

const sayHello  = function (name) {
  console.log("Hello, " + name);
}
/*Now we've got a function taking a value as its input, which we've referred to as name 
and which we concatenate to the string "Hello, " before we output the whole result. 
The input to the function is called a parameter, in our case we've called it name. 
We can think of a function's parameters as variables that are accessible and can be used 
only within the function, and whose values vary and are set when we call the function.*/

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

/*sayHello is one of two main varieties of functions:

One that produces a side effect, as in it does something.
One that produces a result, as in it calculates and returns a value we can use in further code.*/




