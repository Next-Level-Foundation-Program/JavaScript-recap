// Spread Operator ---> three dots (...) is used to spread the elements of an array or object into another array or object.

// let newArray = [...oldArray, newElement1, newElement2];

let cart = ["fruits", "rice", "meat"];
// cart.push("eggs");

let newCart = [...cart, "eggs", "vegetables"];

console.log(newCart);

// object spreading
const userInfo = {
    name: "Sabbir",
    age: 27
};

const updatedUserInfo = {
    Mobile: "01700000000",
    email: "john@example.com"
};

const fullUserInfo = {...userInfo, ...updatedUserInfo, address: "Bangladesh"};

console.log(fullUserInfo);