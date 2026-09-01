// 1. Arithmetic Operators: +, -, *, /, %(modulus=ভাগশেষ), ++, --, ()
// 2. Assignment Operators: =, +=, -=, *=, /=, %=
// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators: &&, ||, !

const a = 10;
const b = 3;

// 1. division and modulus
const division = a / b;
const modulus = a % b;
console.log(division, modulus, typeof(division));
console.log(division.toFixed(3), typeof(division.toFixed(3)));

// 2.  sum = sum + 10; or sum += 10;

// 3. comparison operators
const comp = a > b;
console.log(comp, typeof(comp));

// 4. logical operators
const comp2 = !(a > b) && (a - b);
const logical = a > b || a < b; 
console.log(comp2);
console.log(logical);