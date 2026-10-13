// Optional chaining --> ?.

user1 = {
    name: "John",
    age: 30,
    address: {
        city: "Rajshahi",
        state: "Bangladesh"
    }
}

user2 = {
    name: "Raja",
    age: 25,
}

console.log(user2?.address?.city)

// Nullish coalescing(??) --> if the value is null or undefined, it will return the right side value, otherwise it will return the left side value.
console.log(user2?.address?.city ?? "City not found");