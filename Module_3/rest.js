// Rest operator ---> three dots (...) is used to collect multiple elements into an array.
function sum(...numbers) {
    // console.log(numbers);
    let total = 0;
    for( const n of numbers) {
        total += n;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 37,93));

// Object
const person = {
    name: "Rana",
    age: 25,
    address: "Dhaka",
    occupation: "Engineer"
}
const {name, ...rest} = person;
console.log(name);
console.log(rest);

// array
const arr = [1, 2, 3, 4, 5, 6, 7];
const [, , , ...restArr] = arr;
console.log(restArr);

// function
function myFunc(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
console.log(myFunc("Hello", "World", 6, 7, 8, 9));