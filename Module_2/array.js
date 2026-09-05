//  array
let name = ["Sagor", "Shamim", "Shakib", "Momin", "Musta", "Sabbir"];
let age = [10, 20, 30, 40, 50, 60];

// console.log(name[0], age[0]);
// push --> add element at the end of the array
name.push("Musab", "Sadik");
// pop --> remove element from the end of the array
name.pop();

// unshift --> add element at the beginning (index 0) of the array
name.unshift("Rana", "Aziz");
name.shift(); // remove element from the beginning of the array

// slice --> return a portion of an array
let newName = name.slice(1, 4);

//splice --> add or remove elements from an array
name.splice(3, 0, "Aziz"); // splice(index, how many elements to remove, new element to add)

console.log(name);
console.log(newName);