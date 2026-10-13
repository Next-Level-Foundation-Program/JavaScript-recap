let students = [
    {name: "Rana", age: 20, grade: 90},
    {name: "Ali", age: 22, grade: 75},
    {name: "Sara", age: 19, grade: 95},
];

let fruits = ["apple", "banana", "orange", "kiwi", "grape"];

// find operation give a single element from the array based on the condition provided in the callback function. It returns the first element that satisfies the condition.
let customFruits = fruits.filter(fruit => fruit.length > 5); // Output: ["banana", "orange"]

let customFruit = fruits.find((fruit) => fruit.length > 5);
console.log(customFruit); // Output: banana

// includes method checks if an array includes a certain value among its entries, returning true or false as appropriate.
let includesResult = fruits.includes("banana");
console.log(includesResult); // Output: true


// some --> method returns boolean value. If at least 1 element passes the condition it returns true, otherwise false.
let someResult = students.some(student => student.grade > 90);
console.log(someResult);

// every --> method returns boolean value. If all elements pass the condition it returns true, otherwise false.
let everyResult = students.every(student => student.grade > 80);
console.log(everyResult);