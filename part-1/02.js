// "use strict"

// var name = 'Abhishek'
// console.log(name);
// name='Ramesh'
// console.log(name);  //var can be reinitialize.
// var name = 'mohan'
// console.log(name); //var can be redeclear.
//While "use strict" enforces stricter rules in JavaScript, it doesn't prevent redeclaring variables with var. This is a common misconception.
//The key limitation of var is its function scope. This means you can redeclare a var variable within the same function, but not within the same block.

// var greet='welcome'
// console.log(greet)
// greet='hello'
// console.log(greet)
// var greet = 'hello'
// console.log(greet)


let number = 22
console.log(number);
number=23;
console.log(number);
// let number = 24; i cannot redeclear in let 