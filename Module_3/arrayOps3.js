let products = [
    {name: "Laptop", price: 1000, quantity: 5},
    {name: "Phone", price: 500, quantity: 10},
    {name: "Tablet", price: 300, quantity: 0},
    {name: "Monitor", price: 200, quantity: 20}
];

// reduce--> method executes a reducer function on each element of the array, resulting in a single output value.
// accumulator is the accumulated value that is returned after each iteration, and current is the current element being processed in the array.
let totalPrice = products.reduce((accumulator, current) => {
    // console.log(accumulator);
    return (accumulator + current.price * current.quantity)
}, 0);
// here we use 0 as the initial value of the accumulator because it is a addition operation, and we want to start with a total of 0. If we were doing a multiplication operation, we would use 1 as the initial value.
console.log(totalPrice);

// sort method sorts the elements of an array in place and returns the sorted array. acceding to the default sort order, which is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. 

// let sorted = products.sort();
let sorted = [10, 40, 30, 20, 87].sort((a, b )=> a - b) // ascending order
let sorted2 = [10, 40, 30, 20, 87].sort((a, b) => b - a) // descending order

// console.log(sorted);
// console.log(sorted2);

let sortedProducts = products.sort((a, b) => a.price - b.price); // ascending order by price
console.log(sortedProducts);

//
let estimatedTotal = products.filter((product) => product.quantity !== 0).reduce((accumulator, current) =>{
    return (accumulator += current.price * current.quantity)
}, 0);

console.log(estimatedTotal);