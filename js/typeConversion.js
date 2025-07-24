/* Type Conversion = change the data type of a value to another type
    (strings, numbers, booleans, etc..)
*/

// let age = window.prompt("Enter your age: ");

// Convert string to number
// age = Number(age); 

// age += 1;

// console.log(`Your age is now: ${age}`, `and the type is: ${typeof age}`);

let x = "0";
let y = "0";
let z = "0";

x = Number(x); // Convert string to number
y = String(y); // Convert number to string 
z = Boolean(z); // Convert string to boolean

console.log(`x is now: ${x} and the type is: ${typeof x}`);
console.log(`y is now: ${y} and the type is: ${typeof y}`);
console.log(`z is now: ${z} and the type is: ${typeof z}`);