// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "harshit";

console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
age = age + "";
console.log(typeof(age)); //"22"


// // convert string to number. 

let myStr = +"34";
console.log(typeof myStr);

let age1 = "18";
age = Number(age);
console.log(typeof age);

let string1 = '17'
let string2='10'
let newString = +string1 + +string2;
console.log(newString);
console.log(typeof newString)