let user = {
    name: "Rana",
    age: 25,
    address: "bangladesh"
}

// console.log(user.address.country);
console.log(user["name"]); //user[`${key}`] --> we use bracket notation when we want to access the property dynamically.

delete user.address;// delete property from object

 // update property value
 user.address = {
        division: "Rajshahi",
        country: "Bangladesh"
 }
// console.log(user.key); // undefined
// console.log(user.entries); // undefined

console.log(Object.entries(user)); // convert object to array of arrays

console.log("values:" ,Object.values(user));