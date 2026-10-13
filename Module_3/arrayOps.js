// foreach, map

// forEach method executes a provided function once for each array element
let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach((fruit, index) => {
//     console.log(`${index + 1}: ${fruit}`);
// });
let newFruits = fruits.forEach((fruit, index) => {
   console.log(`${index+1}: ${fruit}`);
//    return fruit; // forEach does not return anything, it returns undefined
})
// console.log(newFruits); // undefined

// map method creates a new array populated with the results of calling a provided function on every element in the calling array

// let listFruits = fruits.map((fruit, index) => {
//    console.log(`${index+1}: ${fruit}`);
//    return fruit;
// });
// console.log(listFruits);

let newFruits2 = fruits.map(fruit => fruit.toUpperCase());
console.log(newFruits2, "\n", fruits);


// filter gives a new array with all elements that pass the condition provided in the callback function.
let customFruits = fruits.filter(fruit => fruit.length > 5);
console.log(customFruits); // Output: ["banana", "orange"]

// find gives only the first element that pass the condition
let customFruit = fruits.find((fruit) => fruit.length > 5);
console.log(customFruit); // Output: banana