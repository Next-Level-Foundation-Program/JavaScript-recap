let user = {
    name: "Rana",
    age: 25,
    address: {
        division: "Rajshahi",
        country: "Bangladesh",
        zipcode: 6230
    }
} 

// console.log(user["address"]["zipcode"]);

let entries = Object.entries(user); // to convert object into array of arrays

// how to read properties from array of arrays [ [], [], []]
console.log(entries[2][1]["country"]);

//  array of objects
let students = [
    {
        name: "Sagor",
        id: 101,
        age: 20
    },
    {
        name: "Shamim",
        id: 201,
        age: 23,
        address: {
            Home: "Shylet",
            University: "Shah Jalal Science and Technology University",
        },
        transport_opt: ["Bus", "Bike", "train"]
    },
    {
        name: "Shakib",
        id: 131,
        age: 25
    }
]
// students[1].transport_opt[2] = "Gorur Gari";
//  delete students[1].transport_opt[2] // to delete a data
// console.log(students[1].address.University);
console.log(students[1].transport_opt[2]);