/* arithmetic operators = operands (values, variables, etc..)
                          operators(BODMAS) (+, -, *, /, %, **)
                          ex: 11 = x + 5; 
*/


/* Addition Example */
let students = 30;
students = students + 1;
console.log(`Addition Example : You have ${students} students left`);

/* Subtraction Example */
let students2 = 30;
students2 = students2 - 1;
console.log(`Substraction Example : You have ${students2} students left`);

/* Multiply Example */
let students3 = 30;
students3 = students3 * 2;
console.log(`Multiply Example : You have ${students3} students left`);

/* Exponentiation Example */
let students4 = 30; 
students4 = students4 ** 2;
console.log(`Exponentiation Example : You have ${students4} students left`);

/* Division Example */
let students5 = 30; 
students5 = students5 / 2;
console.log(`Division Example : You have ${students5} students left`);

/* Modulus Example */
let students6 = 31;     
students6 = students6 % 3;
console.log(`Modulus Example : You have ${students6} students left`);

/* Augmented Assignment Example */
/* Addition Assignment */
let students7 = 30;
students7 += 1; // Equivalent to students7 = students7 + 1
console.log(`Augmented Assignment Addition Example : You have ${students7} students left`);

/* Subtraction Assignment */
let students8 = 30;
students8 -= 1; // Equivalent to students8 = students8 - 1
console.log(`Augmented Assignment Substraction Example : You have ${students8} students left`);

/* Multiplication Assignment */
let students9 = 30;
students9 *= 2; // Equivalent to students9 = students9 * 2
console.log(`Augmented Assignment Multiply Example : You have ${students9} students left`);

/* Division Assignment */
let students10 = 30;
students10 /= 2; // Equivalent to students10 = students10 / 2
console.log(`Augmented Assignment Division Example : You have ${students10} students left`);

/* power Assignment */
let students11 = 30;  
students11 **= 2; // Equivalent to students11 = students11 ** 2
console.log(`Augmented Assignment Exponentiation Example : You have ${students11} students left`);

/* Modulus Assignment */
let students12 = 31;
students12 %= 3; // Equivalent to students12 = students12 % 3 
console.log(`Augmented Assignment Modulus Example : You have ${students12} students left`);

/* Increment Example */
let students13 = 30;
students13++; // Equivalent to students13 = students13 + 1
console.log(`Increment Example : You have ${students13} students left`);

/* Decrement Example */
let students14 = 30;
students14--; // Equivalent to students14 = students14 - 1
console.log(`Decrement Example : You have ${students14} students left`);

/*Operator Precedence
    1. Parentheses
    2. Exponents
    3. Multiplication and Division & modulo
    4. Addition and Subtraction
    5. Left to Right
*/

/* Operator Precedence Example */
let result = 1 + 2 * 3 + 4 ** 2;

console.log(`Operator Precedence Example : The result is ${result}`);