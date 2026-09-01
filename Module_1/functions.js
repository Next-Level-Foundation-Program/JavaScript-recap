//  Functions are reusable blocks of code that can be called with different arguments to perform a specific task. They help in organizing code, reducing repetition, and improving readability.
// function total (price, quantity=12) {
//     const grandTotal = price * quantity;
//     return grandTotal;
// }

// const spend = total(10);

// console.log(spend);

// Void functions are functions that do not return any value. They perform a task but do not provide any output. 
function logMessage(message) {
    console.log(`Message: ${message}`);
}

logMessage("Hello, World!");

// arrow functions are a concise way to write functions in JavaScript. They have a shorter syntax and do not have their own 'this' context.
const total = (price, quantity=12) => {
    const grandTotal = price * quantity;
    return grandTotal;
}
const spend = total(10);
console.log(spend);

const add = (a, b) => a + b;
const sum = add(5, 10);
console.log(sum);